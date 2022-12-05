import { dawnJS, dataBind } from 'dawn-js-core'
import template from './template.html.js'
import styles from './styles.css.js'

const inputFactory = (_) => {
  _.view(() => ({
    template,
    styles
  }))

  _.hooks(() => ({
    beforeOnInit,
    afterOnInit
  }))

  _.events(() => ({
    onKeyUp
    // onBlur
  }))

  _.methods(() => ({
    autofocus,
    setFocus,
    setState,
    validate,
    watchClearEvent,
    debounce
  }))
}



/** HOOKS */

const beforeOnInit = ({ state, queryOnce, props, methods }) => {
  props.set({ label: 'Defina um label'})
}

const afterOnInit = ({ queryOnce, state, props, methods }) => {
  methods.autofocus(queryOnce)
  methods.validate(queryOnce('input'), props, state)
  methods.watchClearEvent(props, state, queryOnce)
}

/** LISTENERS */

const onKeyUp = ({ on, queryOnce, state, props, methods }) => {
  const inputElement = queryOnce('input')
  const [setInputValue, watchValueChange] = dataBind(inputElement, {value: ''})

  const setState = (payload) => {
    const { events } = props.get()
    events && events.logger && events.logger(payload)
    methods.validate(inputElement, props, state)
  }

  watchValueChange(setState)

  on('keyup', 'input', methods.debounce(({ target }) => {
    setInputValue({ value: target.value })
  }))

  methods.setFocus(queryOnce('input'), state)
}

/** METHODS */

const setFocus = (target, state) => {
  target.focus()
  const valueLength = target.value.length
  target.setSelectionRange(valueLength, valueLength)
}

const autofocus = (queryOnce) => {
  const input = queryOnce('input')
  const autofocus = input.getAttribute('autofocus')

  setTimeout(() => {
    if (autofocus === null) return
    queryOnce('input').focus()
  }, 500)
}

const validate = (target, props, state) => {
  const dataPrpos = props.get()
  if (!dataPrpos.validate || !dataPrpos.validators) return
  const validators = dataPrpos.validators || []
  for (const validator of validators) {
    const { isValid, error } = validator(target)
    state.set({
      ...state.get(),
      hasError: !isValid,
      error: { isValid, isInvalid: !isValid, ...error }
    })
    if (!isValid) break
  }
}

const watchClearEvent = (props, state, queryOnce) => {
  const { events } = props.get()
  const inputElement = queryOnce('input')

  if (!events || inputElement.disabled) return
  if (!events.eventDrive) return
  const { eventDrive, eventName, action } = events

  const handler = {
    [action]: (payload) => {
      clearInput(props, state, payload)
    }
  }

  eventDrive.on(eventName, handler[action])
}

const clearInput = (props, state, payload) => {
  const { error } = state.get()
  if (!error) {
    const payload = { value: '', hasError: false }
    setState(state, payload)
    return
  }
  error.isValid = false
  error.isInvalid = !error.isValid
  const input = { value: '', hasError: true, error }
  setState(state, { ...input, error })
}

// const setError = (state, error) => {
//   setState(state, { error })
// }

// const setProps = (props, payload) => {
//   props.set({ ...props.get(), ...payload })
// }

const setState = (state, payload) => {
  state.set({ ...state.get(), ...payload })
}

const debounce = (callback, delay) => {
  let timer
   return (event) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
          callback(event)
      }, delay || 500)
    }
}


export const input = () => dawnJS.create(inputFactory)

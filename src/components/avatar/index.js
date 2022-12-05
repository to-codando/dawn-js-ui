import { dawnJS } from 'dawn-js-core'


import template from './template'
import styles from './styles'

import '../../assets/styles/icons.css'

const avatarFactory = (_) => {
  _.view(() => ({
    template,
    styles
  }))

  _.hooks(() => ({
    beforeOnInit
  }))

  _.methods(() => ({
    execute,
    sizeValidator,
    styleValidator,
    noteStatusValidator,
    notePositionValidator,
    imageSrcValidator,
    imageAltValidator,
    imageValidator,
    noteValidator
  }))
}

const beforeOnInit = ({ props, methods, appElement }) => {
  props.on( data => {
    methods.execute(methods.sizeValidator, appElement, data)
    methods.execute(methods.styleValidator, appElement, data)

    methods.execute(methods.imageValidator, appElement, data)
    methods.execute(methods.imageSrcValidator, appElement, data)
    methods.execute(methods.imageAltValidator, appElement, data)

    methods.execute(methods.noteValidator, appElement, data)
    methods.execute(methods.noteStatusValidator, appElement, data)
    methods.execute(methods.notePositionValidator, appElement, data)
  })
}

const imageValidator = ({ element, props }) => {
  if(!props || !props.img) return
  const type = 'object'
  const value = props.img
  const typeValue = getTypeof(value)
  if(!typeValidator(type, value)) {
    const selector = element.dataset.component
    const component = `[data-component="${selector}"]`
    const message = `The value in ${selector} component property "props.img" must be a "${type}" but is "type: ${typeValue}".`
    throwError(component, message)
  }
}

const imageSrcValidator = ({ element, props }) => {
  if(!props || !props.img || !props.img.src) return
  const type = 'string'
  const value = props.img.src
  const typeValue = getTypeof(value)
  if(!typeValidator(type, value)) {
    const selector = element.dataset.component
    const component = `[data-component="${selector}"]`
    const message = `The value type in ${selector} component property "props.img.src" must be a "${type}" but is "type: ${typeValue}".`
    throwError(component, message)
  }
}

const imageAltValidator = ({ element, props }) => {
  if(!props || !props.img || !props.img.alt) return
  const type = 'string'
  const value = props.img.alt
  const typeValue = getTypeof(value)
  if(!typeValidator(type, value)) {
    const selector = element.dataset.component
    const component = `[data-component="${selector}"]`
    const message = `The value in ${selector} component property "props.img.alt" must be a "${type}" but is "type: ${typeValue}".`
    throwError(component, message)
  }
}

const noteValidator = ({ element, props }) => {
  if(!props || !props.note) return
  const type = 'object'
  const value = props.note
  const typeValue = getTypeof(value)
  if(!typeValidator(type, value)) {
    const selector = element.dataset.component
    const component = `[data-component="${selector}"]`
    const message = `The value in ${selector} component property "props.note" must be a "${type}" but is "type: ${typeValue}".`
    throwError(component, message)
  }
}

const notePositionValidator = ({ element, props }) => {
  if(!props || !props.note || !props.note.position) return
  const range = ['top-left', 'top-right', 'bottom-left', 'bottom-right']
  const value = props.note.position
  if(rangeValidator(range, value)) {
    const selector = element.dataset.component
    const component = `[data-component="${selector}"]`
    const message = `The value in ${selector} component property "props.note.position" must be any of values list [${range}] but is ${value}".`
    throwError(component, message)
  }
}

const noteStatusValidator = ({ element, props }) => {
  if(!props || !props.note || !props.note.status) return
  const selector = element.dataset.component
  const range = ['off', 'success', 'warning', 'danger']
  const value = props.note.status
  if(rangeValidator(range, value)) {
    const component = `[data-component="${selector}"]`
    const message = `The value in ${selector} component property "props.note.status" must be any of values list [${range}] but is ${value}".`
    throwError(component, message)
  }
}

const styleValidator = ({ element, props }) => {
  if(!props || !props.style) return
  const selector = element.dataset.component
  const range = ['square', 'circle']
  const value =  props.style
  if(rangeValidator(range, value)) {
    const component = `[data-component="${selector}"]`
    const message = `The value in ${selector} component property "props.style" must be any of values list [${range}] but is ${value}".`
    throwError(component, message)
  }
}

const sizeValidator = ({ element, props }) => {
  if(!props || !props.size) return
  const selector = element.dataset.component
  const range = [1, 2, 3, 4, 5, 6]
  const value = parseInt(props.size)
  if(rangeValidator(range, value)) {
    const component = `[data-component="${selector}"]`
    const message = `The value in ${selector} component property "props.size" must be any of values list [${range}] but is ${value}".`
    throwError(component, message)
  }
}

const rangeValidator = (range, value) => {
  return range.every( rangeValue => rangeValue !== value)
}

const typeValidator = (type, value) => {
  return !Array.isArray(value) && typeof value === type
}

const execute = (validator = () => {}, element = null, data = null) => {
  validator({ element, props: data })
}

const throwError = (name, message) => {
  const error = new Error(message)
  error.name = name
  throw error
}

const getTypeof = (value) => {
  if(typeof value === 'string') return 'String'
  if(typeof value === 'number') return 'Number'
  if(typeof value === 'undefined') return 'Undefined'
  if(typeof value === null) return 'Null'
  if(typeof value === 'object' && !Array.isArray(value)) return 'Object'
  if(typeof value === 'object' && Array.isArray(value)) return 'Array'
  return 'NaN'
}


export const avatar = () => dawnJS.create(avatarFactory)

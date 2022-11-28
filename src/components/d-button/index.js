import { dawnJS } from 'dawn-js-core'

import template from './template.js'
import styles from './styles.js'

const button = (_) => {
  _.view(() => ({
    template,
    styles
  }))

  _.hooks(() => ({
    beforeOnInit
  }))

  _.events(() => ({
    onClick
  }))

  _.methods(() => ({}))
}

/** HOOKS */

const beforeOnInit = ({ props }) => {}

/** LISTENERS */
const onClick = ({ on, props }) => {
  on('click', 'button', () => {
    const {
      dispatch: { emitter, eventName, payload }
    } = props.get()

    emitter.emit(eventName, payload)
  })
}
/** METHODS */

export const appButton = dawnJS.create(button)

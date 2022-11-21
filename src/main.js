import {
  dawnJS,
  pubsubFactory,
  required,
  isEmail,
  isPhone,
  isUF,
  isCEP
} from 'dawn-js-core'

import { input } from './components/protoypes/d-input'
import { button } from './components/protoypes/d-button'

const form = {
  inputName: { isValid: true },
  inputLastName: { isValid: true },
  inputEmail: { isValid: true },
  inputPhone: { isValid: true },
  inputUF: { isValid: true },
  inputCity: { isValid: true },
  inputCode: { isValid: true },
  inputAddress: { isValid: true },
  inputAddressNumber: { isValid: true }
}

export const setFormError = (data, inputName) => {
  form[inputName].isValid = data.error?.isValid

  const formStatus = Object.keys(form).map((input) => form[input].isValid)
  const formHasError = formStatus.includes(false)

  ddsButtonSave.props.set({ disabled: formHasError })
}

const eventDrive = pubsubFactory()

const ddsButtonSave = dawnJS.component.create(button)
ddsButtonSave.register(document.querySelector('dds-button-save'))
ddsButtonSave.props.set({ label: 'Salvar' })
ddsButtonSave.init()

const ddsButtonClear = dawnJS.component.create(button)
ddsButtonClear.register(document.querySelector('dds-button-clear'))
ddsButtonClear.props.set({
  label: 'Limpar',
  dispatch: {
    emitter: eventDrive,
    eventName: 'CLEAR_INPUT',
    payload: { isValid: false }
  }
})
ddsButtonClear.init()

const ddsEmail = dawnJS.component.create(input)
ddsEmail.state.on((data) => setFormError(data, 'inputEmail'))
ddsEmail.register(document.querySelector('dds-input-email'))
ddsEmail.props.set({
  label: 'E-mail:',
  validate: true,
  validators: [required, isEmail],
  events: { eventDrive, eventName: 'CLEAR_INPUT', action: 'clearInputEmail' }
})
ddsEmail.state.set({ value: 'rodrigo@email.com' })
ddsEmail.init()

const ddsButtonBack = dawnJS.component.create(button)
ddsButtonBack.register(document.querySelector('dds-button-back'))
ddsButtonBack.props.set({
  label: 'Voltar',
  events: { eventName: 'CLEAR_INPUT', eventDrive }
})
ddsButtonBack.init()

const ddsName = dawnJS.component.create(input)
ddsName.state.on((data) => setFormError(data, 'inputName'))
ddsName.state.set({ value: 'Rodrigo' })
ddsName.props.set({
  label: 'Nome:',
  focus: true,
  validate: true,
  validators: [required],
  events: { eventDrive, eventName: 'CLEAR_INPUT', action: 'clearInputName' }
})

const focusInputName = () => {
  ddsName.state.set({ ...ddsName.state.get() })
}
eventDrive.on('CLEAR_INPUT', () => {
  setTimeout(focusInputName, 10)
})
ddsName.register(document.querySelector('dds-input-name'))
ddsName.init()

const ddsLastName = dawnJS.component.create(input)
ddsLastName.state.on((data) => setFormError(data, 'inputLastName'))
ddsLastName.state.set({ value: 'Rocha' })
ddsLastName.props.set({
  label: 'Sobrenome:',
  validate: true,
  validators: [required],
  events: { eventDrive, eventName: 'CLEAR_INPUT', action: 'clearInputLastName' }
})
ddsLastName.register(document.querySelector('dds-input-last-name'))
ddsLastName.init()

const ddsPhone = dawnJS.component.create(input)
ddsPhone.state.on((data) => setFormError(data, 'inputPhone'))
ddsPhone.register(document.querySelector('dds-input-phone'))
ddsPhone.props.set({
  label: 'Phone:',
  validate: true,
  validators: [required, isPhone],
  events: { eventDrive, eventName: 'CLEAR_INPUT', action: 'clearInputPhone' }
})
ddsPhone.state.set({ value: '11962609993' })
ddsPhone.init()

const ddsUf = dawnJS.component.create(input)
ddsUf.state.on((data) => setFormError(data, 'inputUF'))
ddsUf.register(document.querySelector('dds-input-uf'))
ddsUf.props.set({
  label: 'UF:',
  validate: true,
  validators: [required, isUF],
  events: { eventDrive, eventName: 'CLEAR_INPUT', action: 'clearInputUF' }
})
ddsUf.state.set({ value: 'PR' })
ddsUf.init()

const ddsCity = dawnJS.component.create(input)
ddsCity.state.on((data) => setFormError(data, 'inputCity'))
ddsCity.register(document.querySelector('dds-input-city'))
ddsCity.props.set({
  label: 'Cidade:',
  validate: true,
  validators: [required],
  events: { eventDrive, eventName: 'CLEAR_INPUT', action: 'clearInputCity' }
})
ddsCity.state.set({ value: 'Curitiba' })
ddsCity.init()

const ddsZipCode = dawnJS.component.create(input)
ddsZipCode.state.on((data) => setFormError(data, 'inputCode'))
ddsZipCode.register(document.querySelector('dds-input-zip-code'))
ddsZipCode.props.set({
  label: 'CEP:',
  validate: true,
  validators: [required, isCEP],
  events: { eventDrive, eventName: 'CLEAR_INPUT', action: 'clearInputZipCode' }
})
ddsZipCode.state.set({ value: '83420000' })
ddsZipCode.init()

const ddsAddress = dawnJS.component.create(input)
ddsAddress.state.on((data) => setFormError(data, 'inputAddress'))
ddsAddress.register(document.querySelector('dds-input-address'))
ddsAddress.props.set({
  label: 'Logradouro:',
  validate: true,
  validators: [required],
  events: { eventDrive, eventName: 'CLEAR_INPUT', action: 'clearInputAddress' }
})
ddsAddress.state.set({ value: 'Rua Virginia Sbrissia' })
ddsAddress.init()

const ddsAddressNumber = dawnJS.component.create(input)
ddsAddressNumber.state.on((data) => setFormError(data, 'inputAddressNumber'))
ddsAddressNumber.register(document.querySelector('dds-input-address-number'))
ddsAddressNumber.props.set({
  label: 'Número:',
  validate: true,
  validators: [required],
  events: {
    eventDrive,
    eventName: 'CLEAR_INPUT',
    action: 'clearInputAddressNumber'
  }
})
ddsAddressNumber.state.set({ value: '426 B' })
ddsAddressNumber.init()

const ddsAddressReference = dawnJS.component.create(input)
ddsAddressReference.register(
  document.querySelector('dds-input-address-reference')
)
ddsAddressReference.props.set({
  label: 'Referência:',
  validate: false,
  events: {
    eventDrive,
    eventName: 'CLEAR_INPUT',
    action: 'clearInputAddressReference'
  }
})
ddsAddressReference.state.set({ value: 'Próximo ao mercado Bom Sucesso' })
ddsAddressReference.init()

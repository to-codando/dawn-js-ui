type DawnJSPayload = { [key: string]: any }
type DawnJSParams = { [key: string]: any }
type DawnJSCalback = (params: DawnJSParams) => void
type DawnJSHandler = () => {}

export interface DawnJSProps {
  on: (callback: DawnJSCalback) => DawnJSCalback
  off: (handler: DawnJSHandler) => void
  set: (params: DawnJSParams) => void
  get: () => DawnJSPayload
}
export interface DawnJSState {
  on: (callback: DawnJSCalback) => DawnJSCalback
  off: (handler: DawnJSHandler) => void
  set: (params: DawnJSParams) => void
  get: () => DawnJSPayload
}

export interface DawnJSComponent {
  register: (element: HTMLElement) => void
  children: (components: DawnJSParams) => void
  init: () => void
  props: DawnJSProps
  state: DawnJSState
}

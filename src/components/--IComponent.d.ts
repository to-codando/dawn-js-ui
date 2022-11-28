export declare type DawnJSPayload = { [key: string]: any }
export declare type DawnJSParams = { [key: string]: any }
export declare type DawnJSCalback = (params: DawnJSParams) => void
export declare type DawnJSHandler = () => {}

export declare interface DawnJSProps {
  on: (callback: DawnJSCalback) => DawnJSCalback
  off: (handler: DawnJSHandler) => void
  set: (params: DawnJSParams) => void
  get: () => DawnJSPayload
}
export declare interface DawnJSState {
  on: (callback: DawnJSCalback) => DawnJSCalback
  off: (handler: DawnJSHandler) => void
  set: (params: DawnJSParams) => void
  get: () => DawnJSPayload
}

export declare interface DawnJSComponent {
  register: (element: HTMLElement) => void
  children: (components: DawnJSParams) => void
  init: () => void
  props: DawnJSProps
  state: DawnJSState
}

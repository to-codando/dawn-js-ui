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

export function button(params: DawnJSInput.IDecorators): void

declare namespace DawnJSInput {
  interface IDecorators {
    view?: (viewParams: ViewDecorator) => void
    hooks?: (hooksParams: HooksDecorator) => void
    events?: (eventsParams: EventsDecorator) => void
    methods?: (methodsParams: MethodsDecorator) => void
  }

  type ViewDecorator = () => viewDecoratorReturn
  type HooksDecorator = () => HooksDecoratorReturn
  type EventsDecorator = () => EventsDecoratorReturn
  type MethodsDecorator = () => MethodsDecoratorReturn

  interface viewDecoratorReturn {
    template: () => {}
    styles: () => {}
  }

  interface HooksDecoratorReturn {
    beforeOnInit?: () => void
    afterOnInit?: () => void
    beforeOnRender?: () => void
    afterOnRender?: () => void
    afterOnPropsChange?: () => void
    onBindState?: () => void
    onBindPros?: () => void
  }

  export interface EventsDecoratorReturn {
    [key: string]: any
  }

  export interface MethodsDecoratorReturn {
    [key: string]: any
  }
}

export function input(params: DawnJSButton.IDecorators): void

declare namespace DawnJSButton {
  interface IDecorators {
    view?: (viewParams: ViewDecorator) => void
    hooks?: (hooksParams: HooksDecorator) => void
    events?: (eventsParams: EventsDecorator) => void
    methods?: (methodsParams: MethodsDecorator) => void
  }

  type ViewDecorator = () => viewDecoratorReturn
  type HooksDecorator = () => HooksDecoratorReturn
  type EventsDecorator = () => EventsDecoratorReturn
  type MethodsDecorator = () => MethodsDecoratorReturn

  interface viewDecoratorReturn {
    template: () => {}
    styles: () => {}
  }

  interface HooksDecoratorReturn {
    beforeOnInit?: () => void
    afterOnInit?: () => void
    beforeOnRender?: () => void
    afterOnRender?: () => void
    afterOnPropsChange?: () => void
    onBindState?: () => void
    onBindPros?: () => void
  }

  export interface EventsDecoratorReturn {
    [key: string]: any
  }

  export interface MethodsDecoratorReturn {
    [key: string]: any
  }
}

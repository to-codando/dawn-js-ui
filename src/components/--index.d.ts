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

export const appButton: {
  children: (selector: any, children: any) => any;
  register: (element: any) => void;
  init: () => void;
  props: {
      set: (payload: any) => void;
      get: () => any;
      on: (eventName: any, callback: any) => any;
      off: (handler: any) => void;
      view: () => void;
  };
  state: {
      set: (payload: any) => void;
      get: () => any;
      on: (callback: any) => any;
      off: (handler: any) => void;
      view: () => void;
  };
  eventDrive: {
      emit: () => void;
      off: (handler: any) => void;
      on: (eventName: any, callback: any) => {
          eventName: any;
          handler: any;
      };
      view: (eventName: any, payload: any) => void;
  };
};

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
export const appInput: {
  children: (selector: any, children: any) => any;
  register: (element: any) => void;
  init: () => void;
  props: {
      set: (payload: any) => void;
      get: () => any;
      on: (eventName: any, callback: any) => any;
      off: (handler: any) => void;
      view: () => void;
  };
  state: {
      set: (payload: any) => void;
      get: () => any;
      on: (callback: any) => any;
      off: (handler: any) => void;
      view: () => void;
  };
  eventDrive: {
      emit: () => void;
      off: (handler: any) => void;
      on: (eventName: any, callback: any) => {
          eventName: any;
          handler: any;
      };
      view: (eventName: any, payload: any) => void;
  };
};


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

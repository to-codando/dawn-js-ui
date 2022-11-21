export function button(params: DawnJSButton.IDecorators): void

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

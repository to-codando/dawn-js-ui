export function input(): {
    children: (selector: any, children: any) => any;
    register: (selector: string, context: HTMLElement) => void;
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

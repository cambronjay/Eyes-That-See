class UtilsController {

    constructor() { }

    async fetch(url: string, options: any) {
        const response = options != null ? await fetch(url, options) : await fetch(url);
        return response;
    }

    async wait(time) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, time);
        });
    }

}

export const Utils = new UtilsController();
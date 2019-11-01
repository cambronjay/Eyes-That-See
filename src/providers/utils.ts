import * as moment from 'moment';

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

    public formatDate(date: string) {
        return moment.default(new Date(date).toISOString()).format('l');
    }

    public formatTweets(tweet: string) {
        let value = tweet;
        let newString = value.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
        let newStringTwo = newString.replace(/RT/g, '');
        return newStringTwo;
    }

}

export const Utils = new UtilsController();
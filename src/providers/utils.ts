import { format } from 'date-fns'
import { isPlatform } from '@ionic/core';

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
        try {
            return format(new Date(date), 'MM/dd/yyyy');
        } catch(error) {
            return '';
        }
        
    }

    public isSmallScreen(): boolean {
        return (!isPlatform(window, "ipad") && !isPlatform(window, "tablet") && !isPlatform(window, "desktop")) ? true : false;
    }

    public isLargeScreen(): boolean {
        return (isPlatform(window, "ipad") || isPlatform(window, "tablet") || isPlatform(window, "desktop")) ? true : false;
    }

    public isDevice(): boolean {
        return (isPlatform(window, "ios") || isPlatform(window, "android") || isPlatform(window, "capacitor") || isPlatform(window, "cordova")) ? true : false;
    }

    formatDescription(description: string) {
        let value = description;
        let a = value.replace(/<a.*?<\/a>/g, '');
        let i = a.replace(/<img.*?<\/img>/g, '');
        let ic = i.replace(/<img .*?>/g, '');
        return ic;
    }

    public formatTweets(tweet: string) {
        let value = tweet;
        let newString = value.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
        let newStringTwo = newString.replace(/RT/g, '');
        return newStringTwo;
    }

}

export const Utils = new UtilsController();
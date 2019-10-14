class WordPressDataController {
    constructor() { }

    async getStoriesData() {
        const url = "http://www.eyesthatsee.org/wp-json/wp/v2/posts";
        let aboutData = this.fetchData(url);
        console.log(JSON.stringify(aboutData));
    }

    async getProjectData() {
        const url = "http://www.eyesthatsee.org/wp-json/wp/v2/posts";
        let aboutData = this.fetchData(url);
        console.log(JSON.stringify(aboutData));
    }

    async getAboutData() {
        const url = "http://www.eyesthatsee.org/wp-json/wp/v2/posts";
        let aboutData = this.fetchData(url);
        console.log(JSON.stringify(aboutData));
    }

    async fetchData(url: string) {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }
}

export const WordPressData = new WordPressDataController();
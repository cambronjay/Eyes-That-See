import { BehaviorSubject } from "rxjs";
import { Storage } from "./storage";
import { Utils } from "./utils";

class WordPressDataController {
    public storiesSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
    private stories: any = [];
    public projectsSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
    private projects: any = [];
    public eventsSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
    private events: any = [];

    constructor() { }

    async loadStories(): Promise<any> {
        if (this.stories.length == 0) {
            const storedData = await Storage.get("ScreenStories");
            if (storedData != null) {
                this.stories = storedData;
                this.storiesSubject.next(storedData);
            } else {
                this.getStories({ count: '15', offset: '0' }, false);
            }
        } else {
            this.storiesSubject.next(this.stories);
        }
    }

    async loadProjects(): Promise<any> {
        if (this.projects.length == 0) {
            const storedData = await Storage.get("ScreenProjects");
            if (storedData != null) {
                this.projects = storedData;
                this.projectsSubject.next(storedData);
            } else {
                this.getProjects();
            }
        } else {
            this.projectsSubject.next(this.projects);
        }
    }

    async loadEvents(): Promise<any> {
        if (this.events.length == 0) {
            const storedData = await Storage.get("ScreenEvents");
            if (storedData != null) {
                this.events = storedData;
                this.eventsSubject.next(storedData);
            } else {
                this.getEvents();
            }
        } else {
            this.storiesSubject.next(this.events);
        }
    }

    async getStories(query: any, isInfinite: boolean): Promise<any> {
        const url = `https://us-central1-api-project-324114021707.cloudfunctions.net/getStories?count=${query.count}&offset=${query.offset}`;
        try {
            const response = await Utils.fetch(url, {
                method: 'GET'
            });
            if (!response.ok) {
                throw new Error(response.statusText);
            } else {
                let json = await response.json();
                if (isInfinite) {
                    this.stories = this.stories.concat(json.posts);
                } else {
                    this.stories = json.posts;
                }
                this.storiesSubject.next(this.stories);
                await Storage.set("ScreenStories", this.stories);
            }
        }
        catch (error) {
            const storedData = await Storage.get("ScreenStories");
            if (storedData != null) {
                this.stories = storedData;
                this.storiesSubject.next(storedData);
            } else {
                this.stories = [];
                this.storiesSubject.next(null);
            }
        }
    }

    async getStory(id: number): Promise<any> {
        if(this.stories.length === 0) {
            const data = await this.loadStories();
        }
        for (const story of this.stories) {
            if (story.id === id) {
                return [story];
            }
        }
        return null;
    }

    async getProjects(): Promise<any> {
        const url = `https://us-central1-api-project-324114021707.cloudfunctions.net/getProjects`;
        try {
            const response = await Utils.fetch(url, {
                method: 'GET'
            });
            if (!response.ok) {
                throw new Error(response.statusText);
            } else {
                let json = await response.json();
                this.projects = json;
                this.projectsSubject.next(this.projects);
                await Storage.set("ScreenProjects", this.projects);
            }
        }
        catch (error) {
            const storedData = await Storage.get("ScreenProjects");
            if (storedData != null) {
                this.projects = storedData;
                this.projectsSubject.next(storedData);
            } else {
                this.projects = [];
                this.projectsSubject.next(null);
            }
        }
    }

    async getEvents(): Promise<any> {
        const url = `https://us-central1-api-project-324114021707.cloudfunctions.net/getEvents`;
        try {
            const response = await Utils.fetch(url, {
                method: 'GET'
            });
            if (!response.ok) {
                throw new Error(response.statusText);
            } else {
                let json = await response.json();
                this.events = json;
                this.eventsSubject.next(this.events);
                await Storage.set("ScreenEvents", this.events);
            }
        }
        catch (error) {
            const storedData = await Storage.get("ScreenEvents");
            if (storedData != null) {
                this.events = storedData;
                this.eventsSubject.next(storedData);
            } else {
                this.events = [];
                this.eventsSubject.next(null);
            }
        }
    }

}

export const WordPressData = new WordPressDataController();
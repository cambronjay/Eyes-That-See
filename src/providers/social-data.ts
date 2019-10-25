import { BehaviorSubject } from "rxjs";
import { set, get } from "./storage";
import { Utils } from "./utils";

class SocialDataController {
  public twitterTimeline: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor() {
    this.getTwitterTimeline();
  }

  async getTwitterTimeline(): Promise<any> {
    const url = "https://us-central1-api-project-324114021707.cloudfunctions.net/getTimeline";
    try {
      let response = await Utils.fetch(url, {
        method: 'GET'
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      } else {
        let json = await response.json();
        console.log(json);
        this.twitterTimeline.next(json);
        await set("ScreenNews", json);
      }
    }
    catch (err) {
      let storedData = await get("ScreenNews");
      if (storedData != null) {
        this.twitterTimeline.next(storedData);
      } else {
        this.twitterTimeline.next(null);
      }
    }
  }

  async getTweet(id: string): Promise<any> {
    const url = "https://us-central1-api-project-324114021707.cloudfunctions.net/getTweet?id=" + id;
    try {
      let response = await Utils.fetch(url, {
        method: 'GET'
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      } else {
        let json = await response.json();
        console.log(json);
        return json;
        //this.twitterTimeline.next(json);
        //await set("ScreenNews", json);
      }
    }
    catch (err) {
      console.log(err)
      // return fetch('/some-data.json')
      // .then(response => response.json())
      // .then(data => {
      //   this.content = data;
      // });
      //let storedData = await get("ScreenNews");
      // if (storedData != null) {
      //   this.twitterTimeline.next(storedData);
      // } else {
      //  this.twitterTimeline.next(null);
      //}
    }
  }

}

export const SocialData = new SocialDataController();
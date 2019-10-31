import { BehaviorSubject } from "rxjs";
import { Storage } from "./storage";
import { Utils } from "./utils";

class SocialDataController {
  public twitterTimeline: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor() {
    this.getTwitterTimeline('count=15', false, false);
  }

  async getTwitterTimeline(query: string, isRefresh: boolean, isInfinite: boolean): Promise<any> {
    const url = "https://us-central1-api-project-324114021707.cloudfunctions.net/getTimeline?queryCommands=" + query;
    try {
      const response = await Utils.fetch(url, {
        method: 'GET'
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      } else {
        const json = await response.json();
        if (isInfinite) {
          json.shift();
          const storedData = await Storage.get("ScreenNews");
          this.twitterTimeline.next(storedData.push(json));
        } else if(isRefresh){
          const storedData = await Storage.get("ScreenNews");
          this.twitterTimeline.next(storedData.push(json));
        }
        let tweetData = {
          isRefresh: isRefresh,
          isInfinite: isInfinite,
          tweets: json
        }
        this.twitterTimeline.next(tweetData);
        await Storage.set("ScreenNews", json);
      }
    }
    catch (err) {
      const storedData = await Storage.get("ScreenNews");
      if (storedData != null) {
        this.twitterTimeline.next(storedData);
      } else {
        this.twitterTimeline.next(null);
      }
    }
  }

  async getMoreTweets(id: string): Promise<any> {
    return await this.getTwitterTimeline(`max_id=${id}`, false, true);
  }

  async refreshTimeline(id: string): Promise<any> {
    return await this.getTwitterTimeline(`since_id=${id}`, true, false);
  }

}

export const SocialData = new SocialDataController();
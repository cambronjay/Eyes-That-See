import { BehaviorSubject } from "rxjs";
import { Storage } from "./storage";
import { Utils } from "./utils";

class SocialDataController {
  public twitterTimelineSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private twitterTimeline: any = [];

  constructor() {
  }

  async loadTimeline(): Promise<any> {
    if (this.twitterTimeline.length == 0) {
      const storedData = await Storage.get("ScreenNews");
      if (storedData != null) {
        this.twitterTimeline = storedData;
        this.twitterTimelineSubject.next(storedData);
      } else {
        this.getTwitterTimeline({ count: '15', query: '' }, false, false);
      }
    } else {
      this.twitterTimelineSubject.next(this.twitterTimeline);
    }
  }

  async getTwitterTimeline(query: any, isRefresh: boolean, isInfinite: boolean): Promise<any> {
    const url = `https://us-central1-api-project-324114021707.cloudfunctions.net/getTimeline?count=${query.count}&query=${query.query}`;
    try {
      const response = await Utils.fetch(url, {
        method: 'GET'
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      } else {
        let json = await response.json();
        if (isInfinite) {
          json = json.filter((tweet, index) => index != 0);
          this.twitterTimeline = this.twitterTimeline.concat(json);
        } else if (isRefresh) {
          this.twitterTimeline = json.concat(this.twitterTimeline);
        } else {
          this.twitterTimeline = json;
        }
        this.twitterTimelineSubject.next(this.twitterTimeline);
        await Storage.set("ScreenNews", this.twitterTimeline);
      }
    }
    catch (error) {
      const storedData = await Storage.get("ScreenNews");
      if (storedData != null) {
        this.twitterTimeline = storedData;
        this.twitterTimelineSubject.next(storedData);
      } else {
        this.twitterTimeline = [];
        this.twitterTimelineSubject.next(null);
      }
    }
  }

}

export const SocialData = new SocialDataController();
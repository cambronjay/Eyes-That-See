import { BehaviorSubject } from "rxjs";
import { set, get } from "./storage";
import { Utils } from "./utils";

class SocialDataController {
  public socialData: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor() {
    this.getSocialData();
  }

  async getSocialData(): Promise<any> {
    const url = "https://us-central1-api-project-324114021707.cloudfunctions.net/readTimeline";
    try {
      let response = await Utils.fetch(url, {
        method: 'GET'
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      } else {
        let json = await response.json();
        console.log(json);
        this.socialData.next(json);
        await set("ScreenNews", json);
      }
    }
    catch (err) {
      let storedData = await get("ScreenNews");
      console.log(storedData);
      if (storedData != null) {
        this.socialData.next(storedData);
      } else {
        this.socialData.next(null);
      }
    }
  }

}

export const SocialData = new SocialDataController();
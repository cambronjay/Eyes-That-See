import { BehaviorSubject } from "rxjs";
import { set, get } from "./storage";
import { Utils } from "./utils";

class SocialDataController {
  public socialData: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor() {
    this.getSocialData();
  }

  async getSocialData(): Promise<any> {
    //const url = " https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=eyes_that_see&count=7";
    const url = "http://localhost:8000";
    const header = 'Bearer ' + 'AAAAAAAAAAAAAAAAAAAAAOsMigAAAAAAs2WY%2Fp5vMYYTmWGBMzfinSuZJ%2F0%3D228BJNTz6msiNfJzk75ZmiaeepUpudoarYWpL3B0E5iQeHpYyA';
    try {
      let response = await Utils.fetch(url, {
        method: 'GET',
        credentials: 'include',
        mode: 'no-cors',
        headers: {
          'Authorization': header,
        }
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      } else {
        let json = await response.json();
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
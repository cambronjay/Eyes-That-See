import { BehaviorSubject } from "rxjs";
import { set } from "./storage";

class SocialDataController {
  public socialData: BehaviorSubject<[]> = new BehaviorSubject<[]>([]);
  private tweets: [] = [];

  constructor() { }

  async getSocialData() {
    const url = "http://www.eyesthatsee.org/wp-json/wp/v2/posts";
    let aboutData = await this.fetchData(url);
    console.log(JSON.stringify(aboutData));
    this.socialData.next(aboutData);
    await set("ScreenNews", aboutData);
  }

  async fetchData(url: string) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  }
  
}

export const SocialData = new SocialDataController();
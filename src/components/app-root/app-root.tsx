import '@ionic/core';
import { Component, State, h } from '@stencil/core';
import { Plugins, HapticsImpactStyle } from '@capacitor/core';
import { Utils } from '../../providers/utils';
import { Storage } from "../../providers/storage";
const { SplashScreen, Haptics } = Plugins;

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {
  @State() isLargeScreen = false;
  private router: any;
  private startScreen: any;
  appPages = [
    {
      title: 'News',
      url: '/news',
      icon: 'today',
      id: 'news'
    },
    {
      title: 'Stories',
      url: '/stories',
      icon: 'book',
      id: 'stories'
    },
    {
      title: 'Projects',
      url: '/projects',
      icon: 'list-box',
      id: 'projects'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'people',
      id: 'about'
    }
  ];

  async componentWillLoad() {
    this.isLargeScreen = Utils.isLargeScreen();
    this.startScreen = await Storage.get("CurrentScreen");
    if (this.startScreen == null) {
      this.startScreen = "/news";
    } else {
      this.startScreen = "/" + this.startScreen;
    }
  }

  async componentDidLoad() {
    this.router = document.querySelector("#ionicRouter");
    this.router.addEventListener("ionRouteWillChange", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (Utils.isDevice()) {
        Haptics.impact({
          style: HapticsImpactStyle.Heavy
        });
      }
      let currentScreen;
      if (event.detail.to.includes("story-details")) {
        currentScreen = "/stories";
      } else {
        currentScreen = event.detail.to;
      }
      if (this.isLargeScreen) {
        let toNavIcon;
        let toNavText;
        let fromNavIcon;
        let fromNavText;
        if (event.detail.to.includes("story-details")) {
          toNavIcon = "/stories";
          toNavText = "/stories";
        } else {
          toNavIcon = event.detail.to;
          toNavText = event.detail.to;
        }
        if (event.detail.from.includes("story-details")) {
          fromNavIcon = "/stories";
          fromNavText = "/stories";
        } else {
          fromNavIcon = event.detail.from;
          fromNavText = event.detail.from;
        }
        toNavIcon = toNavIcon.replace("/", "");
        toNavText = toNavText.replace("/", "");
        toNavIcon = document.querySelector(`#${toNavIcon}-icon`);
        toNavText = document.querySelector(`#${toNavText}-text`);
        toNavIcon.setAttribute("color", "primary");
        toNavText.setAttribute("color", "primary");
        fromNavIcon = fromNavIcon.replace("/", "");
        fromNavText = fromNavText.replace("/", "");
        fromNavIcon = document.querySelector(`#${fromNavIcon}-icon`);
        fromNavText = document.querySelector(`#${fromNavText}-text`);
        fromNavIcon.setAttribute("color", "medium");
        fromNavText.setAttribute("color", "medium");
      }
      currentScreen = currentScreen.replace("/", "");
      console.log(currentScreen)
      await Storage.set("CurrentScreen", currentScreen);
    });
    try {
      await SplashScreen.hide();
    } catch {
      return;
    }
  }

  renderStoryRoute() {
    if (!this.isLargeScreen) {
      return (
        <ion-route url="/stories" component="tab-stories">
          <ion-route component="screen-stories"></ion-route>
          <ion-route url="/story-details/:storyId" component="screen-story-details" componentProps={{ goback: '/stories' }}></ion-route>
        </ion-route>
      )
    } else {
      return (
        <ion-route url="/stories" component="ion-nav">
          <ion-route component="screen-stories"></ion-route>
          <ion-route url="/story-details/:storyId" component="screen-story-details" componentProps={{ goback: '/stories' }}></ion-route>
        </ion-route>
      )
    }
  }

  renderRouter() {
    return (
      <ion-router useHash={false} id="ionicRouter">
        <ion-route-redirect from="/" to={this.startScreen}></ion-route-redirect>
        <ion-route component={!this.isLargeScreen ? "menu-tabs" : "menu-nav"}>
          <ion-route url="/news" component={!this.isLargeScreen ? "tab-news" : "screen-news"}></ion-route>
          {/* <ion-route url="/stories" component={!this.isLargeScreen ? "tab-stories" : "screen-stories"}></ion-route> */}
          {this.renderStoryRoute()}
          <ion-route url="/projects" component={!this.isLargeScreen ? "tab-projects" : "screen-projects"}></ion-route>
          <ion-route url="/about" component={!this.isLargeScreen ? "tab-about" : "screen-about"}></ion-route>
        </ion-route>
      </ion-router>
    )
  }

  render() {
    return (
      <ion-app>
        {this.renderRouter()}
        <ion-split-pane content-id="menu-content" when="md">
          <ion-menu content-id="menu-content">
            <ion-header>
              <ion-toolbar>
                <ion-title>Navigate</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content forceOverscroll={false}>
              <ion-list id="menuNav">
                {this.appPages.map((p) => (
                  <ion-menu-toggle autoHide={false}>
                    <ion-item href={p.url} detail={false}>
                      <ion-icon slot="start" name={p.icon} id={p.id + '-icon'} color="medium"></ion-icon>
                      <ion-label id={p.id + '-text'} color="medium">{p.title}</ion-label>
                    </ion-item>
                  </ion-menu-toggle>
                ))}
              </ion-list>
            </ion-content>
          </ion-menu>
          <ion-router-outlet animated={false} id="menu-content"></ion-router-outlet>
        </ion-split-pane>
      </ion-app>
    );
  }
}
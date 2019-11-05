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
  private router: HTMLIonRouterElement;
  private startScreen: any;
  private tabBar: HTMLIonTabBarElement;
  private navItem: HTMLIonItemElement;
  private nav: HTMLIonNavElement;
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
    if (Utils.isSmallScreen()) {
      this.tabBar = document.querySelector("#menuTab");
      this.tabBar.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (Utils.isDevice()) {
          try {
            Haptics.impact({
              style: HapticsImpactStyle.Medium
            });
          } catch(error){

          }
        }
      });
    } else {
      this.navItem = document.querySelector("#menuItem");
      this.navItem.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (Utils.isDevice()) {
          try {
            Haptics.impact({
              style: HapticsImpactStyle.Medium
            });
          } catch(error){

          }
        }
      });
    }
    this.router = document.querySelector("#ionicRouter");
    this.router.addEventListener("ionRouteWillChange", async (event: any) => {
      event.preventDefault();
      event.stopPropagation();
      let currentScreen;
      if (event.detail.to.includes("story-details")) {
        currentScreen = "/stories";
      } else {
        currentScreen = event.detail.to;
      }
      if (this.isLargeScreen) {
        let toNavIcon = event.detail.to;
        let toNavText = event.detail.to;
        let fromNavIcon = event.detail.from;
        let fromNavText = event.detail.from;
        let isStoryDetails = false;
        if (event.detail.to.includes("story-details") || event.detail.from.includes("story-details")) {
          toNavIcon = "/stories";
          toNavText = "/stories";
          fromNavIcon = "/stories";
          fromNavText = "/stories";
          isStoryDetails = true;
        }
        toNavIcon = toNavIcon.replace("/", "");
        toNavText = toNavText.replace("/", "");
        toNavIcon = document.querySelector(`#${toNavIcon}-icon`);
        toNavText = document.querySelector(`#${toNavText}-text`);
        fromNavIcon = fromNavIcon.replace("/", "");
        fromNavText = fromNavText.replace("/", "");
        fromNavIcon = document.querySelector(`#${fromNavIcon}-icon`);
        fromNavText = document.querySelector(`#${fromNavText}-text`);
        if (isStoryDetails) {
          toNavIcon.setAttribute("color", "primary");
          toNavText.setAttribute("color", "primary");
          fromNavIcon.setAttribute("color", "primary");
          fromNavText.setAttribute("color", "primary");
        } else {
          toNavIcon.setAttribute("color", "primary");
          toNavText.setAttribute("color", "primary");
          fromNavIcon.setAttribute("color", "medium");
          fromNavText.setAttribute("color", "medium");
        }
      }
      currentScreen = currentScreen.replace("/", "");
      await Storage.set("CurrentScreen", currentScreen);
    });
    if(this.isLargeScreen){
      let start = this.startScreen.replace("/", "");
      this.nav = document.querySelector("#sideMenuNav");
      this.nav.setRoot("screen-" + start);
    }
    if (Utils.isDevice()) {
      try {
        await SplashScreen.hide();
      } catch (error) {
        return;
      }
    }
  }

  renderRouter() {
    return (
      <ion-router useHash={false} id="ionicRouter">
        <ion-route-redirect from="/" to={this.startScreen}></ion-route-redirect>
        <ion-route component={!this.isLargeScreen ? "menu-tabs" : "menu-nav"}>
          <ion-route url="/news" component={!this.isLargeScreen ? "tab-news" : "screen-news"}></ion-route>
          <ion-route url="/stories" component={!this.isLargeScreen ? "tab-stories" : "ion-nav"}>
            <ion-route component="screen-stories"></ion-route>
            <ion-route url="/story-details/:storyId" component="screen-story-details" componentProps={{ goback: '/stories' }}></ion-route>
          </ion-route>
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
                  <ion-menu-toggle autoHide={false} id="menuItem">
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
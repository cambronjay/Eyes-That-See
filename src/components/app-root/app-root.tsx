import '@ionic/core';
import { Component, Element, State, h } from '@stencil/core';
import { Plugins } from '@capacitor/core';
import { isPlatform } from '@ionic/core';
const { SplashScreen } = Plugins;

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {
  @State() loggedIn = true;
  hasSeenTutorial = true;
  @State() isLargeScreen = false;
  @Element() el: HTMLElement;

  appPages = [
    {
      title: 'News',
      url: '/news',
      icon: 'today'
    },
    {
      title: 'Stories',
      url: '/stories',
      icon: 'book'
    },
    {
      title: 'Projects',
      url: '/projects',
      icon: 'list-box'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'people'
    }
  ];

  async componentWillLoad() {
    this.isLargeScreen = isPlatform(window, "ipad") || isPlatform(window, "tablet") || isPlatform(window, "desktop") ? true : false;
  }

  async componentDidLoad() {
    this.checkLoginStatus();
    try {
      await SplashScreen.hide();
    } catch {
      return;
    }
  }

  async checkLoginStatus() {
    return true;
    // const loggedIn = this.loggedIn = await UserData.isLoggedIn();
    // return loggedIn;
  }

  renderRouter() {
    if (!this.isLargeScreen) {
      return (
        <ion-router useHash={false}>
          <ion-route-redirect from="/" to='/news' />
          <ion-route component="menu-tabs">
            <ion-route url="/news" component="tab-news"></ion-route>
            <ion-route url="/stories" component="tab-stories"></ion-route>
            <ion-route url="/projects" component="tab-projects"></ion-route>
            <ion-route url="/about" component="tab-about"></ion-route>
          </ion-route>
        </ion-router>
      )
    } else {
      return (
        <ion-router useHash={false}>
          <ion-route-redirect from="/" to='/news' />
          <ion-route url="/news" component="screen-news"></ion-route>
          <ion-route url="/stories" component="screen-stories"></ion-route>
          <ion-route url="/projects" component="screen-projects"></ion-route>
          <ion-route url="/about" component="screen-about"></ion-route>
        </ion-router>
      )
    }
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
              <ion-list>
                {this.appPages.map((p) => (
                  <ion-menu-toggle autoHide={false}>
                    <ion-item href={p.url}>
                      <ion-icon slot="start" name={p.icon}></ion-icon>
                      <ion-label>{p.title}</ion-label>
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
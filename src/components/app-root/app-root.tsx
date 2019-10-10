import '@ionic/core';

import { Component, Element, Listen, Prop, State, h } from '@stencil/core';
//import { UserData } from '../../providers/user-data';
import { Plugins } from '@capacitor/core';

const { SplashScreen } = Plugins;

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {
  @State() loggedIn = true;
  hasSeenTutorial = true;

  @Element() el: HTMLElement;

  @Prop({ context: 'isServer' }) isServer: boolean;

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
    this.hasSeenTutorial = this.isServer
      ? true
      : true;
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

  async logout() {
    // await UserData.logout();
    this.loggedIn = false;
  }

  @Listen('userDidLogIn')
  @Listen('userDidLogOut')
  updateLoggedInStatus(loggedEvent) {
    this.loggedIn = loggedEvent.detail.loginStatus;
  }

  renderRouter() {
    return (
      <ion-router useHash={false}>
        <ion-route-redirect from="/" to={this.hasSeenTutorial ? '/about' : '/tutorial'} />

        <ion-route component="menu-tabs">
          <ion-route url="/news" component="tab-news"></ion-route>
          <ion-route url="/stories" component="tab-stories"></ion-route>
          <ion-route url="/projects" component="tab-projects"></ion-route>
          <ion-route url="/about" component="tab-about"></ion-route>
        </ion-route>

      </ion-router>
    );
  }

  // TODO ion-menu should be split out
  render() {
    return (
      <ion-app>
        {this.renderRouter()}
        <ion-split-pane content-id="menu-content">
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
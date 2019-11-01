import '@ionic/core';
import { Component, Element, State, h } from '@stencil/core';
import { Plugins } from '@capacitor/core';
import { isPlatform } from '@ionic/core';
import { Storage } from '../../providers/storage';
const { SplashScreen } = Plugins;

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {
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
    try {
      await SplashScreen.hide();
    } catch {
      return;
    }
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
          <ion-route component="menu-nav">
            <ion-route url="/news" component="screen-news"></ion-route>
            <ion-route url="/stories" component="screen-stories"></ion-route>
            <ion-route url="/projects" component="screen-projects"></ion-route>
            <ion-route url="/about" component="screen-about"></ion-route>
          </ion-route>
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
              <ion-list id="menuNav">
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
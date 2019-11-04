import { Component, h } from '@stencil/core';

@Component({
    tag: 'menu-tabs',
    styleUrl: 'menu-tabs.css',
})
export class MenuTabs {

    render() {
        return [
            <ion-tabs>
                <ion-tab tab="tab-news" component="screen-news"></ion-tab>
                <ion-tab tab="tab-stories">
                    <ion-nav></ion-nav>
                </ion-tab>
                <ion-tab tab="tab-projects" component="screen-projects"></ion-tab>
                <ion-tab tab="tab-about" component="screen-about"></ion-tab>
                <ion-tab-bar slot="bottom" id="menuTab">
                    <ion-tab-button tab="tab-news">
                        <ion-icon name="today"></ion-icon>
                        <ion-label>News</ion-label>
                    </ion-tab-button>
                    <ion-tab-button tab="tab-stories">
                        <ion-icon name="book"></ion-icon>
                        <ion-label>Stories</ion-label>
                    </ion-tab-button>
                    <ion-tab-button tab="tab-projects">
                        <ion-icon name="list-box"></ion-icon>
                        <ion-label>Projects</ion-label>
                    </ion-tab-button>
                    <ion-tab-button tab="tab-about">
                        <ion-icon name="people"></ion-icon>
                        <ion-label>Who we are</ion-label>
                    </ion-tab-button>
                </ion-tab-bar>
            </ion-tabs>
        ];
    }
}
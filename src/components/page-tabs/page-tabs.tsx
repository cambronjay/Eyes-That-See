import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'page-tabs',
    styleUrl: 'page-tabs.css',
})
export class PageTabs {

    @Prop({ connect: 'ion-menu-controller' }) menuCtrl: HTMLIonMenuControllerElement;
    //news is instagram/twitter
    async componentDidLoad() {
        const menuCtlr: HTMLIonMenuControllerElement = await (this.menuCtrl as any).componentOnReady();
        menuCtlr.enable(true);
    }
    render() {
        return [
            <ion-tabs>
                <ion-tab tab="tab-news">
                    <ion-nav></ion-nav>
                </ion-tab>
                <ion-tab tab="tab-stories">
                    <ion-nav></ion-nav>
                </ion-tab>
                <ion-tab tab="tab-projects" component="page-projects">
                    <ion-nav></ion-nav>
                </ion-tab>
                <ion-tab tab="tab-about" component="page-about">
                    <ion-nav></ion-nav>
                </ion-tab>

                <ion-tab-bar slot="bottom">
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
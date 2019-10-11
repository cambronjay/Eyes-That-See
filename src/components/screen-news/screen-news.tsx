import { Component, h, State } from '@stencil/core';
import { isPlatform } from '@ionic/core';

@Component({
    tag: 'screen-news',
    styleUrl: 'screen-news.css',
})
export class ScreenNews {
    @State() isLargeScreen = false;
    //@Prop({ connect: 'ion-popover-controller' }) popoverCtrl: HTMLIonPopoverControllerElement;

    // async presentPopover(event: any) {
    //   const popover = await this.popoverCtrl.create({
    //     component: 'page-about-popover',
    //     event
    //   });
    //   popover.present();
    // }

    async componentWillLoad() {
        this.isLargeScreen = isPlatform(window, "ipad") || isPlatform(window, "tablet") ? true : false;
    }

    render() {
        return [
            <ion-header>
                <ion-toolbar>
                    <ion-title>
                        <ion-icon class="logo" src="/assets/logo/logo.svg"></ion-icon>
                    </ion-title>
                </ion-toolbar>
            </ion-header>,

            <ion-content>
                <ion-grid>
                    <ion-row justify-content-center align-items-center class="center-row">
                        <ion-col sizeMd="11" sizeLg="10" sizeXl="8">
                            <div id="skeleton">
                                <ion-list>
                                    <ion-card>
                                        <ion-item lines="none">
                                            <ion-avatar slot="start">
                                                <ion-skeleton-text animated></ion-skeleton-text>
                                            </ion-avatar>
                                            <ion-label>
                                                <h3>
                                                    <ion-skeleton-text animated class="skeleton-80"></ion-skeleton-text>
                                                </h3>
                                            </ion-label>
                                        </ion-item>
                                        <ion-card-content>
                                            <ion-thumbnail class="skeleton-card-image" slot="start">
                                                <ion-skeleton-text animated></ion-skeleton-text>
                                            </ion-thumbnail>
                                            <ion-item lines="none" text-left>
                                                <ion-label>
                                                    <ion-skeleton-text animated class="skeleton-100"></ion-skeleton-text>
                                                    <ion-skeleton-text animated class="skeleton-70"></ion-skeleton-text>
                                                    <ion-skeleton-text animated class="skeleton-80"></ion-skeleton-text>
                                                </ion-label>
                                            </ion-item>
                                        </ion-card-content>
                                    </ion-card>
                                    <ion-card>
                                        <ion-item lines="none">
                                            <ion-avatar slot="start">
                                                <ion-skeleton-text animated></ion-skeleton-text>
                                            </ion-avatar>
                                            <ion-label>
                                                <h3>
                                                    <ion-skeleton-text animated class="skeleton-80"></ion-skeleton-text>
                                                </h3>
                                            </ion-label>
                                        </ion-item>
                                        <ion-card-content>
                                            <ion-thumbnail class="skeleton-card-image" slot="start">
                                                <ion-skeleton-text animated></ion-skeleton-text>
                                            </ion-thumbnail>
                                            <ion-item lines="none">
                                                <ion-label>
                                                    <ion-skeleton-text animated class="skeleton-100"></ion-skeleton-text>
                                                    <ion-skeleton-text animated class="skeleton-70"></ion-skeleton-text>
                                                    <ion-skeleton-text animated class="skeleton-80"></ion-skeleton-text>
                                                </ion-label>
                                            </ion-item>
                                        </ion-card-content>
                                    </ion-card>
                                    <ion-card>
                                        <ion-item lines="none">
                                            <ion-avatar slot="start">
                                                <ion-skeleton-text animated></ion-skeleton-text>
                                            </ion-avatar>
                                            <ion-label>
                                                <h3>
                                                    <ion-skeleton-text animated class="skeleton-80"></ion-skeleton-text>
                                                </h3>
                                            </ion-label>
                                        </ion-item>
                                        <ion-card-content>
                                            <ion-thumbnail class="skeleton-card-image" slot="start">
                                                <ion-skeleton-text animated></ion-skeleton-text>
                                            </ion-thumbnail>
                                            <ion-item lines="none">
                                                <ion-label>
                                                    <ion-skeleton-text animated class="skeleton-100"></ion-skeleton-text>
                                                    <ion-skeleton-text animated class="skeleton-70"></ion-skeleton-text>
                                                    <ion-skeleton-text animated class="skeleton-80"></ion-skeleton-text>
                                                </ion-label>
                                            </ion-item>
                                        </ion-card-content>
                                    </ion-card>
                                </ion-list>
                            </div>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-content>
        ];
    }
}
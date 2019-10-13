import { Component, h } from '@stencil/core';

@Component({
    tag: 'screen-stories',
    styleUrl: 'screen-stories.css',
})
export class ScreenStories {
    skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    render() {
        return [
            <ion-header>
                <ion-toolbar>
                    <ion-title>
                        <img class="logo" src="/assets/logo/logo.svg"></img>
                    </ion-title>
                </ion-toolbar>
            </ion-header>,

            <ion-content>
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <div id="skeleton">
                                <ion-list>
                                    {this.skeleton.map(() => (
                                        <ion-item>
                                            <ion-thumbnail slot="start">
                                                <ion-skeleton-text></ion-skeleton-text>
                                            </ion-thumbnail>
                                            <ion-label>
                                                <h3>
                                                    <ion-skeleton-text animated class="skeleton-80"></ion-skeleton-text>
                                                </h3>
                                                <p>
                                                    <ion-skeleton-text animated class="skeleton-60"></ion-skeleton-text>
                                                </p>
                                                <p>
                                                    <ion-skeleton-text animated class="skeleton-30"></ion-skeleton-text>
                                                </p>
                                            </ion-label>
                                        </ion-item>
                                    ))}
                                </ion-list>
                            </div>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-content>
        ];
    }
}
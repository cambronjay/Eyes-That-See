import { Component, h, State } from '@stencil/core';
import { SocialData } from "../../providers/social-data";
import { Observable, Subscription } from "rxjs";

@Component({
    tag: 'screen-news',
    styleUrl: 'screen-news.css',
})
export class ScreenNews {
    @State() tweets: any;
    public skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    private socialDataObservable: Observable<any>;
    private socialDataSubscription: Subscription;

    constructor() {
        this.socialDataObservable = SocialData.socialData;
    }

    componentDidLoad() {
        //   SocialData.getSocialData();
        this.socialDataSubscription = this.socialDataObservable.subscribe(data => {
            this.tweets = data;
            // console.log(data)
        });
    }

    componentDidUnload() {
        this.socialDataSubscription.unsubscribe();
    }
    componentWillRender() {
        //  SocialData.getSocialData();
    }
    renderData() {
        if (this.tweets != null) {
            if (this.tweets.length > 0) {
                return (
                    <ion-list>
                        {this.tweets.map((tweet) => (
                            <ion-card>
                                <ion-item lines="none">
                                    <ion-avatar slot="start">
                                        {tweet.retweeted_status
                                            ? <img src={tweet.retweeted_status.user.profile_image_url_https}></img>
                                            : <img src={tweet.user.profile_image_url_https}></img>
                                        }
                                    </ion-avatar>
                                    <ion-label>
                                        {tweet.retweeted_status
                                            ? <h2 innerHTML={tweet.retweeted_status.user.name}></h2>
                                            : <h2 innerHTML={tweet.user.name}></h2>
                                        }
                                        {tweet.retweeted_status
                                            ? <p innerHTML={'@' + tweet.retweeted_status.user.screen_name}></p>
                                            : <p innerHTML={'@' + tweet.user.screen_name}></p>
                                        }
                                    </ion-label>
                                </ion-item>
                                <ion-card-content>
                                    <ion-thumbnail class="skeleton-card-image" slot="start">
                                        <ion-skeleton-text animated></ion-skeleton-text>
                                    </ion-thumbnail>
                                    <ion-item lines="none" text-left>
                                        <ion-label>
                                            test
                                    </ion-label>
                                    </ion-item>
                                </ion-card-content>
                            </ion-card>
                        ))}
                    </ion-list>
                )
            } else {
                return (
                    <ion-list>
                        {this.skeleton.map(() => (
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
                        ))}
                    </ion-list>
                )
            }
        } else {
            return (
                <ion-item lines="none" text-left>
                    <ion-label>
                        <h3>
                            There seems to be a problem with your connection. Pull down to refresh!
                        </h3>
                    </ion-label>
                </ion-item>
            )
        }
    }

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
                <ion-refresher slot="fixed" id="refresher">
                    <ion-refresher-content></ion-refresher-content>
                </ion-refresher>
                <ion-grid>
                    <ion-row justify-content-center align-items-center class="center-row">
                        <ion-col sizeMd="11" sizeLg="10" sizeXl="8">
                            {this.renderData()}
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-content>
        ];
    }
}
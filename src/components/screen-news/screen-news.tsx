import { Component, h, State } from '@stencil/core';
import { SocialData } from "../../providers/social-data";
import { Observable, Subscription } from "rxjs";
import Plyr from 'plyr';


@Component({
    tag: 'screen-news',
    styleUrl: 'screen-news.css',
})
export class ScreenNews {
    @State() tweets: any;
    public skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    private twitterTimelineObservable: Observable<any>;
    private twitterTimelineSubscription: Subscription;
    public player = new Plyr('video', { captions: { active: false } });
    constructor() {
        this.twitterTimelineObservable = SocialData.twitterTimeline;
    }

    componentDidLoad() {
        //   SocialData.getSocialData();
        this.twitterTimelineSubscription = this.twitterTimelineObservable.subscribe(data => {
            this.tweets = data;
            // console.log(data)
        });
    }

    componentDidUnload() {
        this.twitterTimelineSubscription.unsubscribe();
    }
    componentWillRender() {
        //  SocialData.getSocialData();
    }

    // private getImageURL(imagePath) {
    //     return 'url(' + imagePath + ')';
    // }

    // async renderQuotedTweet(tweet) {
    //     if(tweet.is_quote_status){
    //             let tweetData = await SocialData.getTweet(tweet.quoted_status.id_str);
    //             return (
    //                 <ion-item lines="none">
    //                     {{tweetData.}}
    //                 </ion-item>
    //             )
    //<ion-img src={media.media_url_https}></ion-img>
    //https://blog.bitsrc.io/5-open-source-html5-video-players-for-2018-38fa85932afb
    //https://github.com/CookieCookson/stencil-video-player
    /* <div style={{
                                                'max-height': '200px', 
                                                'height':'100%',
                                                'background-image': media.media_url_https
                                                }}>
                                                
                                              </div> */
    //  https://github.com/unicodeveloper/cloudinary-stencil/blob/master/src/components/cloudinary-video/cloudinary-video.tsx
    //https://ionicframework.com/blog/make-a-video-web-component-the-stencil-way/
    //     }
    // }

    // private buildImageContainer(media) {
    //     if (media.length == 1) {
    //         return <ion-img src={media[0].media_url_https}></ion-img>
    //     } else {
    //         let imageArray = media.map(image => {
    //             if (image.type != "video") {
    //                 return <div class="img-container" style={{
    //                     'background-image': `url(${media.media_url_https})`,
    //                     'background-repeat': 'no-repeat',
    //                     'bacground-size': 'contain',
    //                     'background-position': 'center center'
    //                 }}></div>
    //             }
    //         });
    //         return imageArray;
    //     }
    // }

    // <div class="img-container" style={{
    //     'background-image': `url(${media.media_url_https})`,
    //     'background-repeat': 'no-repeat',
    //     'bacground-size': 'cover',
    //     'background-position': 'left top'
    // }}></div>

    // {
    //     media.type === "video"
    //         ? <ion-col size="12" class="ion-no-padding"><video id="player" width="100%" height="100%" controls>
    //             <source src={media.video_info.variants[0].url} type="video/mp4"></source>
    //         </video>
    //         </ion-col>
    //         : tweet.extended_entities.media.length == 1 ?
    //             <ion-col size="12" class="ion-no-padding">
    //                 <ion-img src={media.media_url_https}></ion-img>
    //             </ion-col>
    //             : <ion-col size="6" class="ion-no-padding ion-col-height">
    //                 <ion-img src={media.media_url_https}></ion-img>
    //             </ion-col>
    // }

    renderMediaColumns(tweet, media) {
        if (media.type == "video") {
            return <ion-col size="12" class="ion-no-padding">
                <video id="player" controls>
                    <source src={media.video_info.variants[0].url} type="video/mp4"></source>
                </video>
            </ion-col>;
        } else {
            if (tweet.length == 1) {
                return <ion-col size="12" class="ion-no-padding">
                    <ion-img src={media.media_url_https}></ion-img>
                </ion-col>
            } else {
                return <ion-col size="6" class="ion-no-padding">
                    <div class="img-container" style={{
                        'background-image': `url(${media.media_url_https})`,
                        'background-repeat': 'no-repeat',
                        'bacground-size': 'cover',
                        'background-position': 'left top'
                    }}></div>
                </ion-col>
            }
        }
    }

    renderMedia(tweet) {
        if (tweet.entities.media) {
            if (tweet.extended_entities.media.length > 0) {
                return (
                    <ion-grid class="ion-no-padding fix-grid">
                        <ion-row class="ion-no-padding">
                            {tweet.extended_entities.media.map((media) => (
                                this.renderMediaColumns(tweet.extended_entities.media, media)
                            ))}
                        </ion-row>
                    </ion-grid>
                )
            }
        }
    }

    renderData() {
        if (this.tweets != null) {
            if (this.tweets.length > 0) {
                return (
                    <ion-list>
                        {this.tweets.map((tweet) => (
                            <ion-card>
                                {this.renderMedia(tweet)}
                                <ion-item lines="none">
                                    <ion-avatar slot="start">
                                        {tweet.retweeted_status
                                            ? <ion-img src={tweet.retweeted_status.user.profile_image_url_https}></ion-img>
                                            : <ion-img src={tweet.user.profile_image_url_https}></ion-img>
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
                                    {tweet.full_text}
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
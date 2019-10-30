import { Component, h, State } from '@stencil/core';
import { SocialData } from "../../providers/social-data";
import { Utils } from "../../providers/utils";
import { Observable, Subscription } from "rxjs";
import { Plugins } from '@capacitor/core';
import { isPlatform } from '@ionic/core';
import Plyr from "plyr";
const { CapacitorVideoPlayer } = Plugins;

@Component({
    tag: 'screen-news',
    styleUrl: 'screen-news.css',
})
export class ScreenNews {
    @State() tweets: any = [];
    public skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    private twitterTimelineObservable: Observable<any>;
    private twitterTimelineSubscription: Subscription;
    public players: any;
    public player: any;
    private refresher: any;
    private infiniteScroll: any;
    private list: any;
    private newsContent: any;
    private tabs: any;
    private menuTab: any;
    private menuNav: any;
    private nav: any;
    constructor() {
        this.twitterTimelineObservable = SocialData.twitterTimeline;
    }

    componentWillLoad() {

    }

    async componentDidLoad() {
        //   SocialData.getSocialData();
        this.twitterTimelineSubscription = this.twitterTimelineObservable.subscribe(data => {
            this.tweets = this.tweets.concat(data);
        });
        this.refresher = document.getElementById("news-refresher");
        this.newsContent = document.getElementById("newsContent");
        this.list = document.getElementById("newsList");
        this.refresher.addEventListener("ionRefresh", async () => {
            await Utils.wait(500);
            SocialData.refreshTimeline()
                .then(() => {
                    this.refresher.complete();
                })
                .catch(() => {
                    this.refresher.complete();
                });
        });
        this.infiniteScroll = document.getElementById('news-infinite-scroll');
        this.infiniteScroll.addEventListener('ionInfinite', async () => {
            await Utils.wait(500);
            //console.log(this.tweets[this.tweets.length - 6].id)
            //  console.log(this.tweets[this.tweets.length - 1].id)
            let id = this.tweets[this.tweets.length - 1].id;
            await SocialData.getTwitterTimelineWithCommands(`&since_id=${id}&max_id=${id}`)
                .then(() => {
                    this.infiniteScroll.complete();
                })
                .catch(() => {
                    this.infiniteScroll.complete();
                });
        });
        if (!isPlatform(window, "ipad") && !isPlatform(window, "tablet") && !isPlatform(window, "desktop")) {
            this.tabs = document.querySelector("ion-tabs");
            this.menuTab = document.querySelector("#menuTab");
            this.menuTab.addEventListener("click", (event) => {
                event.preventDefault();
                event.stopPropagation();
                this.tabs.getSelected().then((data) => {
                    if (data == "tab-news") {
                        this.newsContent.scrollToTop(500);
                    }
                });
            });
        } else {
            this.nav = document.querySelector("ion-nav");
            this.menuNav = document.querySelector("#menuNav");
            this.menuNav.addEventListener("click", (event) => {
                event.preventDefault();
                event.stopPropagation();
                this.nav.getActive().then((data) => {
                    if (data.component == "screen-news") {
                        this.newsContent.scrollToTop(500);
                    }
                });
            });
        }
    }


    componentWillRender() {
        //  SocialData.getSocialData();
        // set html on load and add class <html class="md">
    }

    componentDidRender() {
        this.players = Plyr.setup('.js-player', { captions: { active: false } });
    }

    componentDidUnload() {
        this.twitterTimelineSubscription.unsubscribe();
    }

    private fixTweets(string) {
        var value = string;
        var newString = value.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
        var newStringTwo = newString.replace(/RT/g, '');
        return newStringTwo;
    }

    async playVideo(e, url: string) {
        e.preventDefault();
        let videoPlayer: any;
        videoPlayer = CapacitorVideoPlayer;
        this.player = await videoPlayer.play({ url: url });
    }

    renderVideo(media: any) {
        if (isPlatform(window, "ios") || isPlatform(window, "android")) {
            return (
                <div style={{ 'position': 'relative' }} onClick={(e) => this.playVideo(e, media.video_info.variants[2].url)}>
                    <div class="play-button"><ion-icon name="play-circle" color="primary" class="play-button-icon"></ion-icon></div>
                    <ion-img class="img-container" src={media.media_url_https}></ion-img>
                </div>
            )
        } else {
            return (<video class='js-player video-player' controls playsinline poster={media.media_url_https}>
                <source src={media.video_info.variants[2].url} type="video/mp4"></source>
            </video>)
        }
    }

    renderMediaColumns(tweet, media) {
        if (media.type == "video") {
            return <ion-col size="12" class="ion-no-padding">
                {this.renderVideo(media)}
            </ion-col>;
        } else {
            if (tweet.length == 1) {
                return <ion-col size="12" class="ion-no-padding">
                    <ion-img src={media.media_url_https}></ion-img>
                </ion-col>;
            } else {
                return <ion-col size="6">
                    <ion-img style={{
                        'border-radius': '8px'
                    }} class="img-container" src={media.media_url_https}></ion-img>
                </ion-col>;
            }
        }
    }

    renderMedia(tweet) {
        let tweetType = tweet;
        if (tweet.retweeted_status) {
            tweetType = tweet.retweeted_status;
        }
        if (tweetType.entities.media) {
            if (tweetType.extended_entities.media.length > 0) {
                return (
                    <ion-grid class="ion-no-padding">
                        <ion-row class="ion-no-padding">
                            {tweetType.extended_entities.media.map((media) => (
                                this.renderMediaColumns(tweetType.extended_entities.media, media)
                            ))}
                        </ion-row>
                    </ion-grid>
                )
            }
        }
    }

    renderQuotedTweet(tweet) {
        if (tweet.quoted_status) {
            return (<ion-card style={{
                'margin-top': '0px'
            }}>
                {this.renderReTweet(tweet.quoted_status)}
                <ion-item lines="none">
                    <ion-avatar slot="start">
                        {tweet.quoted_status.retweeted_status
                            ? <ion-img src={tweet.quoted_status.retweeted_status.user.profile_image_url_https}></ion-img>
                            : <ion-img src={tweet.quoted_status.user.profile_image_url_https}></ion-img>
                        }
                    </ion-avatar>
                    <ion-label>
                        {tweet.quoted_status.retweeted_status
                            ? <h2 innerHTML={tweet.quoted_status.retweeted_status.user.name}></h2>
                            : <h2 innerHTML={tweet.quoted_status.user.name}></h2>
                        }
                        {tweet.quoted_status.retweeted_status
                            ? <p innerHTML={'@' + tweet.quoted_status.retweeted_status.user.screen_name}></p>
                            : <p innerHTML={'@' + tweet.quoted_status.user.screen_name}></p>
                        }
                    </ion-label>
                </ion-item>
                <ion-card-content>
                    {this.fixTweets(tweet.quoted_status.full_text)}
                </ion-card-content>
                {this.renderMedia(tweet.quoted_status)}
            </ion-card>)
        }
    }

    renderReTweet(tweet) {
        if (tweet.retweeted_status) {
            return (<ion-item lines="none">
                <ion-icon name="sync" size="small"></ion-icon>
                <ion-label class="ion-no-padding ion-no-margin">
                    <p innerHTML={tweet.user.name + ' Retweeted'} style={{ 'padding-left': '10px' }}></p>
                </ion-label>
            </ion-item>)
        }
    }

    renderData() {
        if (this.tweets != null) {
            if (this.tweets.length > 0) {
                return (
                    <ion-list id="newsList">
                        {this.tweets.map((tweet) => (
                            <ion-card>
                                {this.renderReTweet(tweet)}
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
                                    {tweet.retweeted_status
                                        ? this.fixTweets(tweet.retweeted_status.full_text)
                                        : this.fixTweets(tweet.full_text)
                                    }
                                </ion-card-content>
                                {this.renderMedia(tweet)}
                                {this.renderQuotedTweet(tweet)}
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
                                        <h3>
                                            <ion-skeleton-text animated class="skeleton-50"></ion-skeleton-text>
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

            <ion-content id="newsContent">
                <ion-refresher slot="fixed" id="news-refresher">
                    <ion-refresher-content pulling-icon="arrow-down" refreshing-spinner="crescent">
                    </ion-refresher-content>
                </ion-refresher>
                <ion-grid>
                    <ion-row justify-content-center align-items-center class="center-row">
                        <ion-col sizeMd="11" sizeLg="10" sizeXl="8">
                            {this.renderData()}
                        </ion-col>
                    </ion-row>
                </ion-grid>
                <ion-infinite-scroll id="news-infinite-scroll">
                    <ion-infinite-scroll-content loading-spinner="crescent">
                    </ion-infinite-scroll-content>
                </ion-infinite-scroll>
            </ion-content>
        ];
    }
}
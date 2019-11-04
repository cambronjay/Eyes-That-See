import { Component, h, State } from '@stencil/core';
import { WordPressData } from "../../providers/wordpress-data";
import { Utils } from "../../providers/utils";
import { Observable, Subscription } from "rxjs";

@Component({
    tag: 'screen-stories',
    styleUrl: 'screen-stories.css',
})

export class ScreenStories {
    @State() stories: any;
    public skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    private storiesObservable: Observable<any>;
    private storiesSubscription: Subscription;
    private refresher: any;
    private infiniteScroll: any;
    private content: any;
    private tabs: any;
    private menuTab: any;
    private menuNav: any;
    private nav: any;

    constructor() {
        WordPressData.loadStories();
        this.storiesObservable = WordPressData.storiesSubject;
    }

    async componentDidLoad() {
        this.storiesSubscription = this.storiesObservable.subscribe(data => {
            this.stories = data;
        });
        this.refresher = document.getElementById("stories-refresher");
        this.content = document.getElementById("stories-content");
        this.refresher.addEventListener("ionRefresh", async () => {
            await Utils.wait(500);
            await WordPressData.getStories({ count: '15', offset: '0' }, false)
                .then(() => {
                    this.refresher.complete();
                })
                .catch(() => {
                    this.refresher.complete();
                });
        });
        this.infiniteScroll = document.getElementById('stories-infinite-scroll');
        this.infiniteScroll.addEventListener('ionInfinite', async () => {
            await Utils.wait(500);
            await WordPressData.getStories({ count: '5', offset: this.stories.length.toString() }, true)
                .then(() => {
                    this.infiniteScroll.complete();
                })
                .catch(() => {
                    this.infiniteScroll.complete();
                });
        });
        if (Utils.isSmallScreen()) {
            this.tabs = document.querySelector("ion-tabs");
            this.menuTab = document.querySelector("#menuTab");
            this.menuTab.addEventListener("click", (event) => {
                event.preventDefault();
                event.stopPropagation();
                this.tabs.getSelected().then((data) => {
                    if (data == "tab-stories") {
                        this.content.scrollToTop(500);
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
                    if (data.component == "screen-stories") {
                        this.content.scrollToTop(500);
                    }
                });
            });
        }
    }

    componentDidUnload() {
        this.storiesSubscription.unsubscribe();
    }

    renderAvatar(story) {
        if (story.thumbnail_images) {
            return (<ion-img src={story.thumbnail_images.large.url}></ion-img>)
        } else {
            if (story.attachments) {
                if (story.attachments.length > 0) {
                    return (<ion-img src={story.attachments[0].images.large.url}></ion-img>)
                } else {
                    return (<ion-img src="assets/img/thumbnail.png"></ion-img>)
                }
            } else {
                return (<ion-img src="assets/img/thumbnail.png"></ion-img>)
            }
        }
    }

    renderItem(item: any, index: number) {
        return (<ion-item>
            <ion-avatar slot="start">
                {this.renderAvatar(item)}
            </ion-avatar>
            <ion-label>
                <h2 innerHTML={item.title}></h2>
                <h3 innerHTML={Utils.formatDate(item.date)}></h3>
                <p innerHTML={item.excerpt}></p>
            </ion-label>
        </ion-item>)
    }

    addScroll() {
        this.content.classList.remove("disableScroll");
    }

    removeScroll() {
        this.content.classList.add("disableScroll");
    }

    renderData() {
        if (this.stories != null) {
            if (this.stories.length > 0) {
                return (
                    <ion-list id="storiesList">
                        {this.addScroll()}
                        <ion-virtual-scroll items={this.stories} renderItem={(item, index) => this.renderItem(item, index)} itemHeight={() => 87}></ion-virtual-scroll>
                    </ion-list>
                )
            } else {
                return (
                    <ion-list>
                        {this.removeScroll()}
                        {this.skeleton.map(() => (
                            <ion-item lines="none">
                                <ion-avatar slot="start">
                                    <ion-skeleton-text animated></ion-skeleton-text>
                                </ion-avatar>
                                <ion-label>
                                    <h2>
                                        <ion-skeleton-text animated class="skeleton-50"></ion-skeleton-text>
                                    </h2>
                                    <h3>
                                        <ion-skeleton-text animated class="skeleton-30"></ion-skeleton-text>
                                    </h3>
                                    <p>
                                        <ion-skeleton-text animated class="skeleton-80"></ion-skeleton-text>
                                    </p>
                                </ion-label>
                            </ion-item>
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

            <ion-content id="stories-content">
                <ion-refresher slot="fixed" id="stories-refresher">
                    <ion-refresher-content pulling-icon="arrow-down" refreshing-spinner="crescent">
                    </ion-refresher-content>
                </ion-refresher>
                {this.renderData()}
                <ion-infinite-scroll id="stories-infinite-scroll">
                    <ion-infinite-scroll-content loading-spinner="crescent">
                    </ion-infinite-scroll-content>
                </ion-infinite-scroll>
            </ion-content>
        ];
    }
}
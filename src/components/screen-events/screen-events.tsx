import { Component, h, State, Prop } from "@stencil/core";
import { WordPressData } from "../../providers/wordpress-data";
import { Utils } from "../../providers/utils";
import { Observable, Subscription } from "rxjs";
import { Calendar } from "@ionic-native/calendar";

@Component({
    tag: 'screen-events',
    styleUrl: 'screen-events.css',
})
export class ScreenEvents {
    @State() events: any;
    public skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    private eventsObservable: Observable<any>;
    private eventsSubscription: Subscription;
    private refresher: HTMLIonRefresherElement;
    private content: HTMLIonContentElement;
    private tabs: HTMLIonTabsElement;
    private menuTab: HTMLIonTabBarElement;
    private menuNav: HTMLIonListElement;
    private nav: HTMLIonNavElement;

    constructor() {
        WordPressData.loadEvents();
        this.eventsObservable = WordPressData.eventsSubject;
    }

    async componentDidLoad() {
        this.eventsSubscription = this.eventsObservable.subscribe(data => {
            this.events = data;
        });
        this.refresher = document.querySelector("#events-refresher");
        this.content = document.querySelector("#events-content");
        this.refresher.addEventListener("ionRefresh", async (event) => {
            event.preventDefault();
            event.stopPropagation();
            await Utils.wait(500);
            await WordPressData.getEvents()
                .then(() => {
                    this.refresher.complete();
                })
                .catch(() => {
                    this.refresher.complete();
                });
        });
        if (Utils.isSmallScreen()) {
            this.tabs = document.querySelector("ion-tabs");
            this.menuTab = document.querySelector("#menuTab");
            this.menuTab.addEventListener("click", (event) => {
                event.preventDefault();
                event.stopPropagation();
                this.tabs.getSelected().then((data) => {
                    if (data == "tab-events") {
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
                    if (data.component == "screen-events") {
                        this.content.scrollToTop(500);
                    }
                });
            });
        }
    }

    componentDidRender() {
        if (this.events != null) {
            if (this.events.length > 0) {
                if (this.refresher.disabled) {
                    this.refresher.disabled = false;
                }
            }
        }
    }

    addEvent(event: any) {
        Calendar.createEventInteractively(event.title, event.location, event.description, event.startDate, event.endDate).then(
            (msg) => { },
            (err) => { }
        );
    }

    renderMedia(event) {
        return (<ion-img src={event.image}></ion-img>);
    }

    componentDidUnload() {
        this.eventsSubscription.unsubscribe();
    }

    renderData() {
        if (this.events != null) {
            if (this.events.length > 0) {
                return (
                    <ion-list id="eventsList">
                        {this.events.map((event) => (
                            <ion-card>
                                {this.renderMedia(event)}
                                <ion-card-header>
                                    <ion-card-subtitle innerHTML={Utils.formatDate(event.startDate) + '-' + Utils.formatDate(event.endDate)}></ion-card-subtitle>
                                    <ion-card-title innerHTML={event.title}></ion-card-title>
                                </ion-card-header>
                                <ion-card-content innerHTML={event.description}></ion-card-content>
                                <ion-row class="ion-no-padding ion-justify-content-left">
                                    <ion-col size="4" text-left>
                                        <ion-button
                                            fill="clear"
                                            size="small"
                                            color="primary"
                                            onClick={() => this.addEvent(event)}>
                                            <ion-icon name="calendar" slot="start"></ion-icon>
                                            Add to calendar
                                        </ion-button>
                                    </ion-col>
                                </ion-row>
                            </ion-card>
                        ))}
                    </ion-list>
                )
            } else {
                return (
                    <ion-list>
                        {this.skeleton.map(() => (
                            <ion-card>
                                <ion-thumbnail class="skeleton-card-image" slot="start">
                                    <ion-skeleton-text animated></ion-skeleton-text>
                                </ion-thumbnail>
                                <ion-card-header>
                                    <ion-card-subtitle><ion-skeleton-text animated class="skeleton-30"></ion-skeleton-text></ion-card-subtitle>
                                    <ion-card-title><ion-skeleton-text animated class="skeleton-50"></ion-skeleton-text></ion-card-title>
                                </ion-card-header>
                                <ion-card-content>
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
                        <h3 class="loadError">
                            There seems to be a problem with your connection.<br></br>Pull down to refresh!
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

            <ion-content id="events-content">
                <ion-refresher slot="fixed" id="events-refresher" disabled={true}>
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
            </ion-content>
        ];
    }
}
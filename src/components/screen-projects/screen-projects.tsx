import { Component, h, State, Prop } from '@stencil/core';
import { WordPressData } from "../../providers/wordpress-data";
import { Utils } from "../../providers/utils";
import { Observable, Subscription } from "rxjs";

@Component({
    tag: 'screen-projects',
    styleUrl: 'screen-projects.css',
})
export class ScreenProjects {
    @State() projects: any;
    public skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    private projectsObservable: Observable<any>;
    private projectsSubscription: Subscription;
    private refresher: HTMLIonRefresherElement;
    private content: HTMLIonContentElement;
    private tabs: HTMLIonTabsElement;
    private menuTab: HTMLIonTabBarElement;
    private menuNav: HTMLIonListElement;
    private nav: HTMLIonNavElement;
    @Prop({ connect: 'ion-modal-controller' }) modalCtrl: HTMLIonModalControllerElement;

    constructor() {
        WordPressData.loadProjects();
        this.projectsObservable = WordPressData.projectsSubject;
    }

    async componentDidLoad() {
        this.projectsSubscription = this.projectsObservable.subscribe(data => {
            this.projects = data;
        });
        this.refresher = document.querySelector("#projects-refresher");
        this.content = document.querySelector("#projects-content");
        this.refresher.addEventListener("ionRefresh", async (event) => {
            event.preventDefault();
            event.stopPropagation();
            await Utils.wait(500);
            await WordPressData.getProjects()
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
                    if (data == "tab-projects") {
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
                    if (data.component == "screen-projects") {
                        this.content.scrollToTop(500);
                    }
                });
            });
        }
    }

    componentDidRender() {
        if (this.projects != null) {
            if (this.projects.length > 0) {
                if (this.refresher.disabled) {
                    this.refresher.disabled = false;
                }
            }
        }
    }

    async getInvolved() {
        const modal = await this.modalCtrl.create({
            component: 'modal-contact'
        });
        await modal.present();
    }

    componentDidUnload() {
        this.projectsSubscription.unsubscribe();
    }

    renderData() {
        if (this.projects != null) {
            if (this.projects.length > 0) {
                return (
                    <ion-list id="projectsList">
                        {this.projects.map((project) => (
                            <ion-card>
                                <ion-card-header>
                                    <ion-card-title innerHTML={project.name}></ion-card-title>
                                </ion-card-header>
                                <ion-card-content innerHTML={project.description}></ion-card-content>
                                <ion-row class="ion-no-padding ion-justify-content-center">
                                    <ion-col size="4" text-left>
                                        <ion-button
                                            fill="clear"
                                            size="small"
                                            color="primary"
                                            onClick={() => this.getInvolved()}>
                                            <ion-icon name="logo-twitter" slot="start"></ion-icon>
                                            Tweet
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
                                <ion-card-header>
                                    <ion-skeleton-text animated class="skeleton-50"></ion-skeleton-text>
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

            <ion-content id="projects-content">
                <ion-refresher slot="fixed" id="projects-refresher" disabled={true}>
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
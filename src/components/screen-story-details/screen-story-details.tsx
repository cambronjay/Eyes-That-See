
import { Component, Prop, h } from '@stencil/core';
import { WordPressData } from "../../providers/wordpress-data";
import { Utils } from "../../providers/utils";

@Component({
    tag: 'screen-story-details',
    styleUrl: 'screen-story-details.css',
})
export class ScreenStoryDetails {
    @Prop() storyId: number;
    @Prop() goback = '/';
    private story: any;
    public skeleton = [1];

    constructor() {

    }

    async componentWillLoad() {
        this.story = await WordPressData.getStory(this.storyId);
    }

    renderMedia(story) {
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

    renderData() {
        if (this.story != null) {
            if (this.story.length > 0) {
                return (
                    <ion-list>
                        {this.story.map((story) => (
                            <ion-card>
                                {this.renderMedia(story)}
                                <ion-card-header>
                                    <ion-card-subtitle innerHTML={story.author.first_name + ' ' + story.author.last_name + ' &bull; ' + Utils.formatDate(story.date)}></ion-card-subtitle>
                                    <ion-card-title innerHTML={story.title}></ion-card-title>
                                </ion-card-header>
                                <ion-card-content innerHTML={Utils.formatDescription(story.content)}></ion-card-content>
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
                            This story is currently unavailable.<br></br>Please pick another story.
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
                    <ion-buttons slot="start">
                        <ion-back-button text="" defaultHref={this.goback} />
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>,

            <ion-content>
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
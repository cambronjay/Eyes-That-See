// import { Component, h } from '@stencil/core';

// @Component({
//     tag: 'screen-stories',
//     styleUrl: 'screen-stories.css',
// })
// export class ScreenStories {
//     skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
//     @State() virtualScroll: any;


//     renderTweets(tweet, index) {
//         return (<ion-card>
//             {this.renderReTweet(tweet)}
//             <ion-item lines="none">
//                 <ion-avatar slot="start">
//                     {tweet.retweeted_status
//                         ? <ion-img src={tweet.retweeted_status.user.profile_image_url_https}></ion-img>
//                         : <ion-img src={tweet.user.profile_image_url_https}></ion-img>
//                     }
//                 </ion-avatar>
//                 <ion-label>
//                     {tweet.retweeted_status
//                         ? <h2 innerHTML={tweet.retweeted_status.user.name}></h2>
//                         : <h2 innerHTML={tweet.user.name}></h2>
//                     }
//                     {tweet.retweeted_status
//                         ? <p innerHTML={'@' + tweet.retweeted_status.user.screen_name}></p>
//                         : <p innerHTML={'@' + tweet.user.screen_name}></p>
//                     }
//                 </ion-label>
//             </ion-item>
//             <ion-card-content>
//                 {tweet.retweeted_status
//                     ? this.fixTweets(tweet.retweeted_status.full_text)
//                     : this.fixTweets(tweet.full_text)
//                 }
//             </ion-card-content>
//             {this.renderMedia(tweet)}
//             {this.renderQuotedTweet(tweet)}
//         </ion-card>)
//     }
//     render() {
//         return [
//             <ion-header>
//                 <ion-toolbar>
//                     <ion-title>
//                         <img class="logo" src="/assets/logo/logo.svg"></img>
//                     </ion-title>
//                 </ion-toolbar>
//             </ion-header>,

//             <ion-content>
//                 <ion-virtual-scroll id="virtualTwitterTimeline" items={this.tweets} renderItem={(item, index) => this.renderTweets(item, index)}></ion-virtual-scroll>
//                 <ion-grid>
//                     <ion-row>
//                         <ion-col>
//                             <div id="skeleton">
//                                 <ion-list>
//                                     {this.skeleton.map(() => (
//                                         <ion-item>
//                                             <ion-thumbnail slot="start">
//                                                 <ion-skeleton-text></ion-skeleton-text>
//                                             </ion-thumbnail>
//                                             <ion-label>
//                                                 <h3>
//                                                     <ion-skeleton-text animated class="skeleton-80"></ion-skeleton-text>
//                                                 </h3>
//                                                 <p>
//                                                     <ion-skeleton-text animated class="skeleton-60"></ion-skeleton-text>
//                                                 </p>
//                                                 <p>
//                                                     <ion-skeleton-text animated class="skeleton-30"></ion-skeleton-text>
//                                                 </p>
//                                             </ion-label>
//                                         </ion-item>
//                                     ))}
//                                 </ion-list>
//                             </div>
//                         </ion-col>
//                     </ion-row>
//                 </ion-grid>
//             </ion-content>
//         ];
//     }
// }
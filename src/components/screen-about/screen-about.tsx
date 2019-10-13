import { Component, h } from '@stencil/core';

@Component({
  tag: 'screen-about',
  styleUrl: 'screen-about.css',
})
export class ScreenAbout {
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
          <ion-row justify-content-center align-items-center class="center-row">
            <ion-col sizeMd="11" sizeLg="10" sizeXl="8">
              <div id="skeleton">
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
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    ];
  }
}
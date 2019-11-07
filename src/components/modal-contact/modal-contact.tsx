import { Component, h, State, Element, Prop } from '@stencil/core';
import { Mailgun } from '../../providers/mailgun';

@Component({
  tag: 'modal-contact',
  styleUrl: 'modal-contact.css'
})
export class ModalContact {

  @State() firstName: string;
  @State() lastName: string;
  @State() email: string;
  @Element() el: any;
  @Prop() projectName: string;

  joinProject(event) {
    event.preventDefault();
    event.stopPropagation();
    Mailgun.sendEmail(this.projectName, this.firstName, this.lastName, this.email);
  }

  updateFirstName(event) {
    event.preventDefault();
    event.stopPropagation();
    this.firstName = event.target.value;
  }

  updateLastName(event) {
    event.preventDefault();
    event.stopPropagation();
    this.lastName = event.target.value;
  }

  updateEmail(event) {
    event.preventDefault();
    event.stopPropagation();
    this.email = event.target.value;
  }


  dismiss(data?: any) {
    (this.el.closest('ion-modal') as any).dismiss(data);
  }

  render() {
    return [<ion-header>
      <ion-toolbar>
        <ion-buttons slot="primary">
          <ion-button onClick={() => this.dismiss()}>Cancel</ion-button>
        </ion-buttons>

        <ion-title>
          {this.projectName}
        </ion-title>

      </ion-toolbar>
    </ion-header>,

    <ion-content class="outer-content">
      <ion-list lines="full" class="ion-no-margin ion-no-padding">
        <form onSubmit={(e) => this.joinProject(e)}>
          <ion-item>
            <ion-label position="floating">First Name</ion-label>
            <ion-input type="text" inputmode="text" required={true} value={this.firstName} onInput={(e) => this.updateFirstName(e)}></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Last Name</ion-label>
            <ion-input type="text" inputmode="text" required={true} value={this.lastName} onInput={(e) => this.updateLastName(e)}></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Email</ion-label>
            <ion-input type="email" inputmode="email" required={true} value={this.email} onInput={(e) => this.updateEmail(e)}></ion-input>
          </ion-item>

          <div class="ion-padding">
            <ion-grid>
              <ion-row justify-content-center align-items-center class="center-row">
                <ion-col size="8">
                  <ion-button expand="block" type="submit" class="ion-no-margin">Join Now!</ion-button>
                </ion-col>
              </ion-row>
            </ion-grid>
          </div>

        </form>
      </ion-list>
    </ion-content>
    ];
  }
}
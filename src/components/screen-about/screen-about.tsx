import { Component, h } from '@stencil/core';

@Component({
  tag: 'screen-about',
  styleUrl: 'screen-about.css',
})
export class ScreenAbout {

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
              <ion-list>
                <ion-card>
                  <ion-card-header>
                    <ion-card-title>Who we are</ion-card-title>
                  </ion-card-header>
                  <ion-card-content>
                    Eyes That See is a small organization that is passionate about seeing God’s Kingdom at work here on earth.  We dream of children, families, and communities reflecting God’s image and radiating His love.  Below you can learn more about our vision, values, history and board members.
                  <ion-item lines="none" class="ion-no-padding">
                      <h2>Mission</h2>
                    </ion-item>
                    Eyes That See is a non-profit, Christian organization dedicated to exposing the full worth of children, families, and communities worldwide through education and development.
                    <ion-item lines="none" class="ion-no-padding">
                      <h2>Core Values</h2>
                    </ion-item>
                    <strong>Human Worth</strong>
                    <br></br>
                    In Matthew 13:16, Jesus says, “Blessed are your eyes because they see; and your ears, because they hear.” Every one of us has been invited to see and hear God’s heart for all people — no one disqualified, no one excluded.  It is our prayer that anyone who comes in contact with Eyes That See would know and live in this truth.
                    <br></br>
                    <strong>Holistic Integrity</strong>
                    <br></br>
                    We believe that hope is born out of God-developed character and integrity (Romans 5:4).  Eyes That See will honor this by reflecting trust, honesty, and moral character in everything we do.
                    <br></br>
                    <strong>Respectful Assertiveness</strong>
                    <br></br>
                    Eyes That See is committed to fighting poverty and injustice that holds people back from who they are created to be.  As we obey our calling, we realize that it will sometimes lead to opposition.  The New Testament is full of stories of Jesus respectfully fighting against poverty and injustice.
                    <br></br>
                    <strong>Obedient Dedication</strong>
                    <br></br>
                    It is very easy to become energized by new ideas and possibilities of what God may be doing next.  Eyes That See is dedicated to beginning and ending exclusively with things that are acts of obedience to God’s leading.  We will not settle for a smaller picture of what God wants to do in His children.
                    <ion-item lines="none" class="ion-no-padding">
                      <h2>History</h2>
                    </ion-item>
                    Eyes That See began out of a desire to live out the words of Jesus in Matthew 13:16.  For several years, Nikki and I were given opportunities to travel to Ethiopia and help to launch a NGO in that country.  Through prayer and experience, the vision of Eyes That See became clear.  For over a year we, along with some dear friends, prayed for the day that God would allow Eyes That See to begin. We were preparing to go wherever God led us, even if that meant we were to leave the church that we loved and Matt pastored for eleven years.  In the summer of 2010 we moved our family to Louisville, Kentucky to pursue this ministry full time.  We feel honored to invest our lives doing the work of seeing the Kingdom of God transform lives in real ways.
                    <br></br>
                    <br></br>
                    We will continue to write out history as it unfolds and we would love for you to be a part of it.  Thanks for all of your prayers and support.”
                    <h3>-Matt and Nikki Ness</h3>
                  </ion-card-content>
                </ion-card>

                <ion-card>
                  <ion-item lines="none">
                    <ion-avatar slot="start">
                      <img src="assets/img/nikki.jpg"></img>
                    </ion-avatar>
                    <ion-label>
                      <h2>
                        Nikki Ness
                      </h2>
                    </ion-label>
                  </ion-item>
                  <ion-card-content>
                    Nikki has been involved in development work within Ethiopia for the past seven years. She was co-founder of Kingdom Vision International and founded Eyes That See. She has experience working in the areas of adoption, child sponsorship, women empowerment, and fundraising. Nikki laid out the vision and values of the organization and is currently in charge of project development, communications, new partnerships and program coordination. Her education background is in early childhood and she loves being with her five kids.
                  </ion-card-content>
                </ion-card>

                <ion-card>
                  <ion-item lines="none">
                    <ion-avatar slot="start">
                      <img src="assets/img/lauren.jpg"></img>
                    </ion-avatar>
                    <ion-label>
                      <h2>
                        Lauren Arnwine
                      </h2>
                    </ion-label>
                  </ion-item>
                  <ion-card-content>
                    Lauren has given her time to Eyes That See for the past three years.  She has made two trips to visit Eyes That See.  Through witnessing the women live out their redeemed lives, she knew it was something she wanted to be a part of long term.  Lauren has a degree in Communications from the University of Louisville. She uses her skills for program development, fundraising, social media, and event planning. Lauren lives in Old Louisville with her husband, Josh, and their baby (coming January 2016).
                  </ion-card-content>
                </ion-card>

                <ion-card>
                  <ion-item lines="none">
                    <ion-avatar slot="start">
                      <img src="assets/img/matt.jpg"></img>
                    </ion-avatar>
                    <ion-label>
                      <h2>
                        Matt Ness
                      </h2>
                    </ion-label>
                  </ion-item>
                  <ion-card-content>
                    Matt has been involved in development work with his wife for the past several years. Previously he was Assistant Lead Pastor at Valleybrook Church where he served for 11 years. Now Matt is serving as Lead Pastor at The Avenue Church. He is also overseeing the fundraising as well as representing Eyes That See at conferences and churches. He has a degree in Organizational Communication from University of Wisconsin-Eau Claire.
                  </ion-card-content>
                </ion-card>

                <ion-card>
                  <ion-item lines="none">
                    <ion-avatar slot="start">
                      <img src="assets/img/cj.jpg"></img>
                    </ion-avatar>
                    <ion-label>
                      <h2>
                        CJ Clymer
                      </h2>
                    </ion-label>
                  </ion-item>
                  <ion-card-content>
                    CJ serves as the Lead Pastor of NewLife Church in Adrian, MI. He has been in full time ministry for 17 years, serving at churches in the Detroit Area and Eau Claire, Wisconsin. He is also a Freelance Graphic Designer (hy-per.com) who has help shape the look and feel of Eyes That See. CJ enjoys coaching and watching his kids sports teams. CJ lives in Adrian, MI with his wife Katie and there 4 kids Kalkidan, Ezekiel, Selah and Hadley.
                  </ion-card-content>
                </ion-card>

              </ion-list>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    ];
  }
}
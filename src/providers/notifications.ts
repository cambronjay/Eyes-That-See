import {
    Plugins,
    PushNotification,
    PushNotificationToken,
    PushNotificationActionPerformed
} from '@capacitor/core';
const { PushNotifications } = Plugins;

class NotificationsController {

    constructor() {
    }

    async loadPushNotifications(): Promise<any> {
        PushNotifications.register();

        PushNotifications.addListener('registration',
            (token: PushNotificationToken) => {

            }
        );

        PushNotifications.addListener('registrationError',
            (error: any) => {

            }
        );

        PushNotifications.addListener('pushNotificationReceived',
            (notification: PushNotification) => {

            }
        );

        PushNotifications.addListener('pushNotificationActionPerformed',
            (notification: PushNotificationActionPerformed) => {

            }
        );
    }

}

export const Notifications = new NotificationsController();
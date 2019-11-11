import { Utils } from "./utils";

class MailgunController {

    constructor() {
    }

    async sendVolunteerEmail(subject: string, firstName: string, lastName: string, email: string): Promise<any> {
        const url = `https://us-central1-api-project-324114021707.cloudfunctions.net/postVolunteer`;
        try {
            const response = await Utils.fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `subject=${subject}&html=<html>Full Name: ${firstName} ${lastName}<br>Email: ${email}</html>`
            });
            if (!response.ok) {
                throw new Error(response.statusText);
            } else {
                const json = await response.json();
                return 2;
            }
        }
        catch (error) {
            return 1;
        }
    }

}

export const Mailgun = new MailgunController();
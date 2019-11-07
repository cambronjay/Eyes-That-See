import { Utils } from "./utils";

class MailgunController {
    private mailgunUrl = "mg.jaycambron.com";
    private mailgunApiKey = window.btoa("api:key-82207bb9b56dfd829da312395c2a5115");

    constructor() {
    }

    async sendEmail(subject: string, firstName: string, lastName: string, email: string): Promise<any> {
        const recipient = 'cambronjay@gmail.com';
        const url = `https://api.mailgun.net/v3/${this.mailgunUrl}/messages`;
        try {
            const response = await Utils.fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${this.mailgunApiKey}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `from=EyesThatSee@mg.jaycambron.com&to=${recipient}&subject=${subject}&html=<html>Full Name: ${firstName} ${lastName}<br>Email: ${email}</html>`
            });
            if (!response.ok) {
                throw new Error(response.statusText);
            } else {
                const json = await response.json();
                console.log(json)
                return 2;
            }
        }
        catch (error) {
            console.log(error)
            return 1;
        }
    }

}

export const Mailgun = new MailgunController();
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "../firebase";


const VAPID_KEY = 'BDew8eK_CYSf0SDJcZ3nl-n6ET_JfJZaavWHKeG_kwUKsP1uvAM9K7Bjsbz1XLq0-UaJNmKoI0VwjBX752qwHHw'

export const requestForToken = () => {
    return getToken(messaging, { vapidKey: VAPID_KEY })
        .then((currentToken) => {
            if (currentToken) {
                return currentToken;
            }
            else {
                alert(
                    "No registration token available. Request permission to generate one."
                );
                return null;
            }
        })
        .catch((err) => {
            alert("An error occurred while retrieving token - " + err);
            return null;
        });
};

onMessage(messaging, ({ notification }) => {
    new Notification(notification.title, {
        body: notification.body,
        icon: notification.icon,
    });
});





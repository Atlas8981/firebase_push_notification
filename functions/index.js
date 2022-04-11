const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();



exports.sendHttpPushNotification = functions.https.onRequest((req, res) => {
    const userId = req.body.userId;
    // const FCMToken = admin.database().ref(`/FCMTokens/${userId}`).once('value');
    console.log($userid);
    const FCMToken = "dkMu2kibSxmCgED8Sk0DGh:APA91bFvIkJMZCUvgLDKEu18li19oKOVbhXSqqYXVGSF7QQZDvD_TVbHDyqFA5crvHo4-ERIFLRW-07yiEtJROjbREHOxeObf8pg0vCOaXPf28_DqzRDjuvAR8rXVEfUC1jBS9rIjgwr";

    const payload = {
        token: FCMToken,
        notification: {
            title: 'cloud function demo',
            body: message,
        },
        data: {
            body: message,
        }
    };
    admin.messaging().send(payload).then((response) => {
        // Response is a message ID string.
        console.log('Successfully sent message:', response);
        return { success: true };
    }).catch((error) => {
        return { error: error.code };
    });
});

exports.sendHttpCallablePushNotification = functions.https.onCall((data, context) => {
    // DEVICE TOKEN FOR PIXEL 4 EMULATOR
    const FCMToken = [
        "dBlZu_ItR7SKH0agXpZRVa:APA91bG_9968BQnZ5HGtl_gDA3rZfqhqbL0gqu8dpr4Un8e9USHAwIgutcwpydvIN597QYg-LbPGpLB-OQ0SuJvhMFUk9zsaqegybfifVio2_lQsRpQt3fHDDzfKFL4ndRIDQtzkLDr1"
    ];

    const payload = {
        tokens: FCMToken,
        notification: {
            title: 'cloud function demo',
            body: "message",
            imageUrl: "https://firebasestorage.googleapis.com/v0/b/mygoods-e042f.appspot.com/o/flutter%2F2021-10-31%2021%3A58%3A15.282499?alt=media&token=f492b829-e106-467e-b3f1-6c05122a0969",
        },
        data: {
            title: 'cloud function demo',
            body: "message",
            imageUrl: "https://firebasestorage.googleapis.com/v0/b/mygoods-e042f.appspot.com/o/flutter%2F2021-10-31%2021%3A58%3A15.282499?alt=media&token=f492b829-e106-467e-b3f1-6c05122a0969"
        },
        android: {
            notification: {
                priority: 'max',
                channelId: "basic_channel",
            }
        },
    };
    admin.messaging().sendMulticast(payload).then((response) => {
        // Response is a message ID string.
        console.log('Successfully sent message:', response);
        return { success: true };
    }).catch((error) => {
        return { error: error.code };
    });
});

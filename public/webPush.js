const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:'BGxOXVIvjsl4X-Szk8YzUx_vQuwFS_yJ9m1WdwW_grXfGYs3U5XRgDGWJI6rn3y-0MD_i2TLmwkzmHjtapLiUFo',
  privateKey: 'YvRejEweJV4Bm8SLyME1RrW7RXG1HZk-dB6Pm4z5dao'
};

webpush.setVapidDetails(
  'mailto:marjoaesp@outlook.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);



// This is the same output of calling JSON.stringify on a PushSubscription
let pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/cmT2-6jtYoo:APA91bGJcBQZiCLgg9tSAgZxCEPOXcN0bhAt4teD8JMMKn7pbFJzm2fjFypTwjQ0DJyWRdSO1uAtzRO40ViQmZvFpd-MjqxbsMFef49L6HqLnZLvKsgL4R39aGMav-j0L-f_0FCSuJeB",
  expirationTime: null,
  keys: {
    p256dh:
      "BEGzF5FZ1rtuWO3SRg9VvheXYtpMXoFPG_3WnA7EYJMzmmbSEf3dx0fwhXUX-1k2R9SDPcTrk-igWKsnfM6plY0",
    auth: "oqo0s9AyHTzTf7pkbqE4og",
  },
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
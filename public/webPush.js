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
const pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/d57RY8aRgXc:APA91bHkCVBDZx0swM-Vs9_63PGfjnYpr8FMh45Kmj-TW1mZ3RMSr20xeKHqBDJUIXtxamsbWrwxy3oJKDPOiDFywJvcCkGRZ5RFP7_eKpHHGK-MqT2VBtMtpZR7t6F75j4cNFZ8lwAA",
  expirationTime: null,
  keys: {
    p256dh:
      "BOPd4nCXPg_elDZN1HfvqChMX7CaHuvy9V-K_hkChK3A1Xdi31xVXVD28FCz8bBH_SQKCwhTyAArqcHV8HIvSJU",
    auth: "6B70ZLJ4HpoQE0SEr7oy0w",
  },
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
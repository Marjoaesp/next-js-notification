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
    "https://fcm.googleapis.com/fcm/send/eWei2dUFXXw:APA91bE_ZyynaEHdSHfBOZQBaYlSoGFkx4OhhjeK9lOmvJ0B7TWxY_a1dpo0KDOgzho3I2XIt_RrzEWS0qfHfBOKYn-5UnNq9JHFxkucaVK3PTO-5v3sElMdxfqhyqY1o1eh8dCVruF7",
  expirationTime: null,
  keys: {
    p256dh:
      "BNsV2R3wRFWCndV3BpQmpv5yuLlmVJZe2STW7LYI8vD0-MUnm9DJyBiSi8JJZjrGY9EahaWOiSe4UDJjhi-rTOU",
    auth: "dEqjrOAe0oSzjzxgZVxOUQ",
  },
};
webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
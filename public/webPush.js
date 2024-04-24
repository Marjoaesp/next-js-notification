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
const pushSubscription = {}

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
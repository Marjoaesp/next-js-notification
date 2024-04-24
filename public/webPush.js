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
    "https://fcm.googleapis.com/fcm/send/etu2spplcbY:APA91bG7QHdoJ3laQNrtHj6Sbn24_2pm5KyTw8acfXKQ1lHJU8tT8903JD69UbdFfbXPNKJE9LiPlZ999V7l5PlDAwZCkOTAeLMImGl2Db2HVYZrM5Daeyvc9oORlrbTYV_4tY2N_Ckw",
  expirationTime: null,
  keys: {
    p256dh:
      "BIeIA4DZvluwRvJr7OysRnP6NZvJurPEO0ofyZKpVla0mDTumF3xtnYlrOX8lKULY031FtKOn3SOe0GyMcmNRg0",
    auth: "VT8jH7Pzc8HjMgp0IrCP_A",
  },
};
webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
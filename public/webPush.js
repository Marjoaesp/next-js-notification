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
    "https://fcm.googleapis.com/fcm/send/dT4C7GB82qs:APA91bGsXZdsZoueFd7U9xHX0fcIb-0QA4v89_bqMKcnQqAhn5kNdTjULjlL1MJLp3LEIk1QSloxrxoIvbOP-j0__Ju5zWu9dTJPl9_cHo7wTI5mKOoHqcQa6w1NvhMerU8Yh3VG1CkQ",
  expirationTime: null,
  keys: {
    p256dh:
      "BGNuuuxPLCuUe_oEg-de7tIYlsONL5TgaBwtsCq6OKyVc5Xqauc2p5jUmJ4h5zyR0bpJuSp_suwmvFpuv3UpECU",
    auth: "RfwWw0UBKRG_Y_vQsrmxDw",
  },
};
webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
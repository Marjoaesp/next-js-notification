const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:'BOl5NVzVulXULl2_9anP_8WKfx4W2bi2a_TBk6d2cpzUKthgBD72mTdvHj_HLHW4XWF-XV7MpGowC8t-a2wqr_Q',
  privateKey: 'P9a_gAfhObtnrb_hHX_ngXHdCdTxXqI_eFoyXrWGgWE'
};

webpush.setVapidDetails(
  'mailto:martin.parisi@desarrollosnea.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/dYa_HXu6cSA:APA91bFts6lRE6cw-gXbmS9kzNOyDlYw8yHgZIHWYZoHvYEo9dSIB0Uit5qeTMXJ4oNeUSoGn0RWcQ-6MuLBrQ1BnsUqSwEaJxa1-tqUOE6yL1RUr8CEpo95H2KU7-aDDn7vn15pp8Ak","expirationTime":null,"keys":{"p256dh":"BGOM9Pa2v9gLmF74gzrYtB0r9edgcP5nLjsaEOrQrD1vBLzoMtZUCQiqsgE64RkUdRzdyd4LN1Kn4-NbWifeQ18","auth":"HyQ9TT_THG5t8sNAmsCmkw"}}
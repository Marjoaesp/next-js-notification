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
const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/c_ozlHfztTo:APA91bFZv0QL0JADqdsTcZ6in8tjDig83Vy8QErdikudwVfu9KzPlYjEPEKaEh6e8SUWTYZhkNlOrAXVmEm355NUqJTWfjtV0KhwgQIt0l-qMyzKFng05y7NK8HA9oGxE8HXfbJc_ma_","expirationTime":null,"keys":{"p256dh":"BN2ImgFt9jy-2DmhMbciEkylw1M8fap4CEDMo3YjvuVl-Wi1xqcN8qgBFeoH55q8N_e33BhwaqMX6ZEegvJrxNo","auth":"938vj7rNWK5fYKFEoRBYRQ"}}

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:'BF2qyHLVbXQ08GjCovZ0f3hbp-HAnkztVhHd2OBvjyJZoHshpzCcpBkRtwV28Fg0nLboj--rHVY14anei5VLqeo', //Public VAPID key
  privateKey: 'MM2KsAjSRlJomyuCbpdRaNaGKEWcxWhWYUc-N8yANdA' //Private VAPID key
};

webpush.setVapidDetails(
  'mailto:test2@hotmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);



// This is the same output of calling JSON.stringify on a PushSubscription
let pushSubscription = {};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text')
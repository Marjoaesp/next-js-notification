const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:'BJdT478PMr74g2xoyCwPGkkFsBAisxb7u1h51H7WRwKsKQk9IbR9Zxngz-r0rx9S7fMVU3KqkrUDkjKnBGr6QDM',
  privateKey: 'laejhmT6vGzJ_xc9xI11KRSsSvbNetrDD_IknFah9V8'
};

webpush.setVapidDetails(
  'mailto:martin.parisi@desarrollosnea.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);



// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/fsh_rPw_vEU:APA91bHeIdtlFY9emNiBdgAoLNs5y9YLIczCPxc7_-sUJumCvQs_ads5PwlWtpYEXqTxdFkgMrqE9HjYWqlBKZxFpqzcZK6pCsgu_7MEtQ6mocPPgp2JOmwpQyqP0psn9DsPvGTm6Nx2","expirationTime":null,"keys":{"p256dh":"BB5xjdCcM9RBWolzSL9ix6MPPkJACcJJ0fVFlw_8FbIxUBXm-40snE5x1nQaiFYRzxb5-dcQvljl3O1h1sPSRkU","auth":"tIv_hyb_OzIY-D_4xAEFCA"}}

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
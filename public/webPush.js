
// VAPID keys should only be generated once.
const vapidKeys = {
  publicKey: 'BGxOXVIvjsl4X-Szk8YzUx_vQuwFS_yJ9m1WdwW_grXfGYs3U5XRgDGWJI6rn3y-0MD_i2TLmwkzmHjtapLiUFo', // Public VAPID key
  privateKey: 'YvRejEweJV4Bm8SLyME1RrW7RXG1HZk-dB6Pm4z5dao' // Private VAPID key
};

const subscribe = async () => {
  try {
    let sw = await navigator.serviceWorker.ready;
    let pushSubscription = await sw.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: 'BDSIh3BSC70FVGo3fo39aAgTLivEYZv3S60Mn-tGSJY0JTCxe76-TbW2llAXukQHm-Fwc6oiuEnvvDcIWxy57bA' // Public VAPID key
    });

    console.log(JSON.stringify(pushSubscription));

    // Ahora que tienes la suscripción, puedes enviar una notificación
    sendNotification(pushSubscription, 'Your Push Payload Text');
  } catch (error) {
    console.error('Error subscribing to push notifications:', error);
  }
}

const sendNotification = async (subscription, payloadText) => {
  try {
    // Configura las claves VAPID para enviar notificaciones
    webpush.setVapidDetails(
      'mailto:test@hotmail.com',
      vapidKeys.publicKey,
      vapidKeys.privateKey
    );

    // Envía la notificación usando la suscripción y el texto del payload
    await webpush.sendNotification(subscription, payloadText);
    console.log('Notification sent successfully.');
  } catch (error) {
    console.error('Error sending push notification:', error);
  }
}


export default subscribe;
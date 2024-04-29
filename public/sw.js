function sendPushNotification() {
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    navigator.serviceWorker.ready.then(registration => {
      const options = {
        body: "this notif",
        icon: "/icon-192x192.png",
        vibrate: [100, 50, 20],
        data: {
          dateOfArrival: Date.now(),
          primateKeys: "2"
        },
        actions: [
          {
            action: "explore",
            title: "explore this new world",
            icon: "/icon-192x192.png"
          },
          { action: "close", title: "Close", icon: "/icon-192x192.png" }
        ]
      };

      registration.showNotification('Hello world!', options);
    });
  }
}

export default sendPushNotification;
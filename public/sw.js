function sendPushNotification() {
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    navigator.serviceWorker.ready.then(registration => {
      const options = {
        body: "this notif",
        icon: "/images/icons/icon-72x72.png",
        vibrate: [100, 50, 20],
        data: {
          dateOfArrival: Date.now(),
          primateKeys: "2"
        },
        actions: [
          {
            action: "explore",
            title: "explore this new world",
            icon: "/images/icons/icon-72x72.png"
          },
          { action: "close", title: "Close", icon: "/images/icons/icon-72x72.png" }
        ]
      };

      registration.showNotification('Hello world!', options);
    });
  }
}

export default sendPushNotification;
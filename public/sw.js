self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SEND_NOTIFICATION') {
    const options = {
      body: event.data.body,
      icon: "/icon-192x192.png",
      vibrate: [100, 50, 20],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: "2"
      },
      actions: [
        {
          action: "explore",
          title: "Explore this new world",
          icon: "/icon-192x192.png"
        },
        {
          action: "close",
          title: "Close",
          icon: "/icon-192x192.png"
        }
      ]
    };
    self.registration.showNotification(event.data.title, options);
  }
});
self.addEventListener('push', function(event)  {
  const options = {
    body: "this notif",
    icon: "/public/images/icons/icon-72x72.png",
    vibrate: [100, 50, 20],
    data: {
      dateOfArrival: Date.now(),
      primateKeys: "2"
    },
    actions: [
      {
        action: "explore",
        title: "explore this new world",
        icon: "/public/images/icons/icon-72x72.png"
      },
      { action: "close", title: "Close", icon: "/public/images/icons/icon-72x72.png" }
    ]
  };

  event.waitUntil(self.registration.showNotification('Hello world!', options));
})
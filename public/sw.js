self.addEventListener('push', function(e)  {
    var options={
      body: "this notif",
      icon: "images/example.png",
      vibrate:[100,50,20],
      data:{
        dateOfArrival: Date.now(),
        primateKeys: "2"

      },
      actions:[{
        action: "explore",
        title: "explore this new world",
        icon: "images/example.png"
      },
      {action: "close", title:"Close", icon: "images/example.png"}
      ]
    };
    e.waitUntil(self.registration.showNotification('Hello world!', options
    ));
  
  });
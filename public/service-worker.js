
//Check permissions
const checkPermission = () => {
  if (!('serviceWorker' in navigator)) {
      throw new Error("No support for service worker!")
  }

  if (!('Notification' in window)) {
      throw new Error("No support for notification API");
  }

  if (!('PushManager' in window)) {
      throw new Error("No support for Push API")
  }
}

const requestNotificationPermission = async () => {
  const permission = await Notification.requestPermission();

  if (permission !== 'granted') {
      throw new Error("Notification permission not granted")
  }

}

//Register service worker
const registerSW = async () => {
  const registration = await navigator.serviceWorker.register('./sw.js');
  return registration;
}

const subscribe = async () => {
  let sw = await navigator.serviceWorker.ready;
  let push = await sw.pushManager.subscribe({ //subscribe to notification push, and returns the pushSubcription.

    userVisibleOnly: true,
    applicationServerKey:'BF2qyHLVbXQ08GjCovZ0f3hbp-HAnkztVhHd2OBvjyJZoHshpzCcpBkRtwV28Fg0nLboj--rHVY14anei5VLqeo' //Public VAPID key
  });
  console.log(JSON.stringify(push));
}

const main = async () => {
  checkPermission()
  await requestNotificationPermission()
  await registerSW()
  await subscribe()
}

export default main;

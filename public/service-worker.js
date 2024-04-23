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
const subscribe = async () => {
    let sw = await navigator.serviceWorker.ready;
    let push = await sw.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey:
        'BJdT478PMr74g2xoyCwPGkkFsBAisxb7u1h51H7WRwKsKQk9IbR9Zxngz-r0rx9S7fMVU3KqkrUDkjKnBGr6QDM'
    });
    console.log(JSON.stringify(push));
  }

const registerSW = async () => {
    const registration = await navigator.serviceWorker.register('sw.js');
    return registration;
}

const requestNotificationPermission = async () => {
    const permission = await Notification.requestPermission();

    if (permission !== 'granted') {
        throw new Error("Notification permission not granted")
    }

}

const main = async () => {
    checkPermission()
    await requestNotificationPermission()
    await registerSW()
    await subscribe()
}

export default main;
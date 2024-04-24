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
      applicationServerKey:'BGxOXVIvjsl4X-Szk8YzUx_vQuwFS_yJ9m1WdwW_grXfGYs3U5XRgDGWJI6rn3y-0MD_i2TLmwkzmHjtapLiUFo'
    });
    console.log(JSON.stringify(push));
  }

const registerSW = async () => {
    const registration = await navigator.serviceWorker.register('./sw.js');
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
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
const subscribe = async () => {
  let sw = await navigator.serviceWorker.ready;
  let push = await sw.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey:'BDSIh3BSC70FVGo3fo39aAgTLivEYZv3S60Mn-tGSJY0JTCxe76-TbW2llAXukQHm-Fwc6oiuEnvvDcIWxy57bA'
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

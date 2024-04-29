"use client";
import { useEffect } from "react";
import main from "../../public/service-worker.js";

const page = () => {
  const sendPushNotification = async () => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      const controller = navigator.serviceWorker.controller;
      if (controller) {
        // Enviamos un mensaje al service worker
        controller.postMessage({
          type: 'SEND_NOTIFICATION',
          title: 'Hello world!',
          body: 'This is a notification.'
        });
      } else {
        console.error('No active service worker controller found.');
      }
    }
  };
  
  return (
    <main className="bg-gray-200">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <form className="text-center space-y-4">
        <h1 className="font-bold">Push Notifications</h1>
        <div className="flex justify-center space-x-4">
            <button type="button" onClick={main} className="m-2 p-2 text-base cursor-pointer bg-gray-300 rounded-sm">Allow notification</button>
            <button type="button" onClick={sendPushNotification} className="m-2 p-2 text-base cursor-pointer bg-gray-300 rounded-sm">Send Notification</button>
        </div>
        </form>
      </div>
    </main>
  )
}

export default page
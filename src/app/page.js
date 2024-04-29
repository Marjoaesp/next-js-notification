"use client";
import { useEffect } from "react";
import main from "../../public/service-worker.js";
import  sendPushNotification  from "../../public/sw.js";
const page = () => {
  
  
  return (
    <main className="bg-gray-400">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <form className="text-center space-y-4">
        <h1 className="font-bold">Push Notifications</h1>
        <div className="flex justify-center space-x-4">
            <button onClick={main} className="m-2 p-2 text-base cursor-pointer bg-gray-300 rounded-sm">Allow notification</button>
            <button onClick={sendPushNotification} className="m-2 p-2 text-base cursor-pointer bg-gray-300 rounded-sm">Send Notification</button>
              </div>
        </form>
      </div>
    </main>
  )
}

export default page
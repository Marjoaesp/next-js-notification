"use client";
import { useEffect } from "react";
import main from "../../public/service-worker.js";
import  sendPushNotification  from "../../public/sw.js";


const page = () => {
  
  
  return (
    <main>
      <div>
        <button onClick={main} className="m-2 p-2 text-base cursor-pointer bg-cyan-300">Allow notification</button>
        <button onClick={sendPushNotification} className="m-2 p-2 text-base cursor-pointer bg-cyan-300">Send Notification</button>

      </div>
    </main>
  )
}

export default page
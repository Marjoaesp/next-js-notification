"use client";
import { useEffect } from "react";
import main from "../../public/service-worker.js";


const page = () => {
  
  
  return (
    <main>
      <div>
        <button onClick={main} className="m-2 p-2 text-base cursor-pointer bg-cyan-300">Allow notification</button>
      </div>
    </main>
  )
}

export default page
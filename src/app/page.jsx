"use client";
import { useEffect } from "react";
import main from "./service-worker.js";


const page = () => {
  
  
  return (
    <main>
      <div>
        <button onClick={main}>Allow notification</button>
      </div>
    </main>
  )
}

export default page
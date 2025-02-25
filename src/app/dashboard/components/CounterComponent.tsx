"use client";
import { useState } from "react";

interface DashboardProps {
  title: string
}

export default function CounterComponent({title}: DashboardProps) {
  const [count, setCount] = useState(0);

  return (
    <div>
        <h2>{title} : {count}</h2>
        <button className="bg-black text-white p-2 my-4 rounded-md" onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
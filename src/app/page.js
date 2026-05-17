"use client";

import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const compileCode = () => {
    if (code === "") {
      setOutput("Please write code");
    } else {
      setOutput("Code Compiled Successfully");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-5xl font-bold mb-5">
        Online Compiler
      </h1>

      <textarea
        className="w-full h-64 p-4 rounded text-black"
        placeholder="Write code..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <button
        onClick={compileCode}
        className="bg-green-500 px-6 py-3 rounded mt-5"
      >
        Compile
      </button>

      <div className="bg-gray-800 mt-5 p-5 rounded">
        <h2 className="text-2xl mb-2">
          Output
        </h2>

        <p>{output}</p>
      </div>
    </div>
  );
}
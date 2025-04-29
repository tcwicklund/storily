"use client";
import React, { useState } from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);
    
    return (
        <div className="items-center justify-center flex flex-col h-screen">
            <div className="text-3xl font-bold mb-4">
                <h4>Counter</h4>
                <h1 className="flex flex-col items-center justify-center text-3x1">{count}</h1>
            </div>
        <p className="text-lg mb-2">This is a simple counter component.</p>
        <p className="text-lg mb-2">Click the buttons to increase, decrease, or reset the count.</p>
        <div>

        <button 
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            +1
        </button>
        <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 ml-2">
            -1
        </button>
        <button
            onClick={() => setCount(0)}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 ml-2">
            Reset
        </button>
                </div>
        </div>
    );
}


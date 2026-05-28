'use client';

import { useState } from "react";
export default function ButtonState() {
    const [stateCount, setStateCount] = useState(0);

    function handleStateCount() {
        setStateCount(stateCount + 1);
    }

    return (
        <>
        <button
            onClick={handleStateCount}
            className="bg-red-600 rounded-full h-5"
        >
            Count: {stateCount}
        </button>
        </>
    );
}
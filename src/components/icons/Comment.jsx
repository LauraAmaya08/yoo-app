import React from "react";

const Comment = () => {
    return (
        <>
        <button className="text-sm -rotate-90">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-message-circle"
            >
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>
        </button>
        </>
    );
};

export default Comment;
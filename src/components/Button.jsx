import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-yellow-500",
    textColor = "text-black",
    className = "",
    ...props
}) {
    return (
        <button className={`px-6 py-3 rounded-full font-semibold text-xl  ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}
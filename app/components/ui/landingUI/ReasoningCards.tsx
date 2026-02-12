"use client"

import Image from "next/image"

export default function ReasoningCards({ heading, subheading, imageURL  }: {
    heading: string,
    subheading: string,
    imageURL: string,


}) {
    // Card
    return (<div className="flex flex-col gap-4 items-center justify-between px-4 py-4 bg-[#FBFBFB] outline-1 oultine-[#DCDDDE] rounded-md shadow-[0px_4px_20px_-7px_rgba(0,_0,_0,_0.1)]">
        <p className="text-black font-bold max-w-60 text-center ">
            {heading}
        </p>
        <Image 
        src={imageURL}
        width={200}
        height={200}
        alt= "card"
        />
        <p className="text-black text-sm max-w-50 text-center">
            {subheading}
        </p>
    </div>)
}
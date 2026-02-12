"use client"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import Image from "next/image"

export default function LoginComponent() {
    return <>
        <div className="flex flex-col gap-6 justify-center items-center ">
            <Image
                src="/asset/loginIMage.svg"
                alt="Login"
                width={60}
                height={50}
                className="hover:scale-105"
            />
            <p className="text-black text-3xl font-medium">
                Think Once, Remember Forever.
            </p>
            <Input label="Username" placeholder="name123" />
            <Input label="Password" placeholder="********" />

            <div className="flex gap-2 ">
                <Button text="Login" variant="default" />
                <Button text="Create a new account!" variant="secondary" />
            </div>
        </div>
    </>
}
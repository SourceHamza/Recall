import { Button } from "./button"
import Image from "next/image"
import Container from "./Container"

export default function Navbar() {
    return <>
        <nav className="sticky top-2 z-50 w-full">

            <Container>
                <div className="flex justify-between items-center px-6 py-4 outline-2 oultine-[#C8C8C8] rounded-md backdrop-blur-md ">
                    <Image
                        src="/asset/Logo.svg"
                        alt="logo"
                        width={75}
                        height={75}
                    />
                    {/* Links */}
                    <div className="flex gap-8  items-center  ">
                        <p className="text-black text-sm cursor-pointer hover:text-[#4A4A4A]"> Product </p>
                        <p className="text-black text-sm cursor-pointer hover:text-[#4A4A4A]"> Change Logs </p>
                        <p className="text-black text-sm cursor-pointer hover:text-[#4A4A4A]"> Pricing </p>
                        <Button text="Signup" variant="defaultsmall" />
                    </div>

                </div>

            </Container >
        </nav>

    </>
}
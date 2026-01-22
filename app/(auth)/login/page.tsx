import { Button } from "@/app/components/button"

export default function Page() {

    return <div className="flex flex-row gap-6 justify-baseline items-center">
        <Button text="Login" variant="default"/>
        <Button text="Signup" variant="secondary"/>
    </div>
   
    

}
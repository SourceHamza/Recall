import { Button } from "@/app/components/button"
import { Input } from "@/app/components/input"

export default function Page() {

    return <div className="flex flex-row gap-6 justify-baseline items-center">
        <Button text="Signup" variant="default"/>
        <Button text="Login" variant="secondary"/>
    </div>
   
    

}
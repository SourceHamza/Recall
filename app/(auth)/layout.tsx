import { Input } from "../components/input";
export default function Layout(
    { children }
        : Readonly<{
            children: React.ReactNode;
        }>

) {

    return <div className="min-h-screen bg-cover bg-center " 
    style={{backgroundImage: "url(/asset/login.png)"}}>
            <div className="h-screen flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-8 px-4 py-12">
        
            <p className="text-[33px] text-[#FCFCFC]  ">
                Think Once. Remember Forever.
            </p>
            
        
        
            <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-8 items-center ">
                <Input label={"Username"}/>
                <Input label={"Password"}/>
            </div>
        
            <div className="flex flex-row gap-6 justify-baseline items-center">
                {children}
            </div>
            </div>
            </div>
            </div>
        
            
        
    </div>



}
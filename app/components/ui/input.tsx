

export function Input({label, placeholder} : { 
    label :string 
    placeholder? : string
}){

    return <> 
    <div className="flex flex-col gap-2 items-start ">
        <div className="text-[16px] text-black" >
            {label}
        </div>
        <input type="text" placeholder={placeholder} className="px-6 py-2 w-115 outline-1 outline-black rounded-sm bg-white text-black "/>
    </div>
    </>

}
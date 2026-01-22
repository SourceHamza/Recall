

export function Input({label} : { 
    label :string 
}){

    return <> 
    <div className="flex flex-col gap-2 items-start ">
        <div className="text-[16px]" >
            {label}
        </div>
        <input type="text" className="px-6 py-2 w-115 outline-none rounded-sm bg-white text-black "/>
    </div>
    </>

}
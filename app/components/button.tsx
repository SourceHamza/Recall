
interface ButtonProps{ 
    text : string , 
    variant? : "default" | "destructive" | "secondary", 
    onClick? : () => void 
    
} 

const varaints = { 
    default : `outline outline-1 outline-white bg-[#161616] hover:bg-[#262626]`, 
    secondary : `text-white`, 
    destructive : `bg-red-700`
}

export function Button({text , variant , onClick} : ButtonProps){ 
    return  <div onClick={onClick} className = {`cursor-pointer px-8 py-1 text-white flex items-center justify-center rounded-sm ${variant? varaints[variant] : varaints.default}`} >
        {text}
    </div>
}
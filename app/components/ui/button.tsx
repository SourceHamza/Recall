
interface ButtonProps{ 
    text : string , 
    variant? : "default"  | "defaultsmall"  | "destructive" | "secondary", 
    onClick? : () => void 
    
} 

const varaints = { 
    default : `bg-[#161616] hover:bg-[#4A4A4A] text-white hover:scale-102`, 
    defaultsmall : `bg-[#161616] hover:bg-[#4A4A4A] text-sm text-white hover:scale-102`, 
    secondary : `text-black font-medium hover:text-[#4A4A4A]`, 
    destructive : `text-white  bg-red-700`
}

export function Button({text , variant , onClick} : ButtonProps){ 
    return  <div onClick={onClick} className = {`cursor-pointer px-8 py-2 flex items-center justify-center rounded-sm ${variant? varaints[variant] : varaints.default}`} >
        {text}
    </div>
}
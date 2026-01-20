

export default function Signup() {

    return <>
        <div>
            <div >
                Username
                <input type="Username" />
            </div>
            <div >
                Password
                <input type="Password" />
            </div>
            <div className="flex gap-3 items-center">
                <button className=" rounded-sm outline-1 px-8 py-1 outline-gray-200 hover:bg-gray-200/60 ">
                    Signup
                </button>
                <div>
                    Login
                </div>

            </div>
        </div>
    </>
}
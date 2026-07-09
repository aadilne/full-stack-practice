
function   Header(){


    return (
        <div>
            <div className="bg-red-300 py-5">
                <header className="max-w-[60rem] flex items-center justify-between text-3xl text-black/80 m-auto ">

                    <h1 className="text-3xl"><span className="font-extrabold text-[tomato]">B</span>rand</h1>

                    <div className="flex   gap-7">
                        <a href="">Features</a>
                        <a href="">Use Cases</a>
                        <a href="">Intergration</a>
                        <a href="">Portfolio</a>
                    </div>

                    <button className="bg-[tomato] rounded-lg px-4 py-2 ">Join US</button>
                </header>
            </div>

        </div>
    )
}

export default Header

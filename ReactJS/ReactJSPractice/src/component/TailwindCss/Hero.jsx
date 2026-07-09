import Button from "./Button"

function  Hero(){

    return(
        <div className="max-w[55rem] m-auto text-center py-[8rem]">
            <h1 className="text-7xl font-serif font-bold">The best Way to 
                <span className="bg-red-300 rounded-2xl px-3 ">Review</span>Creative Assets
             </h1>

            <p className="text-lg my-7">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, nesciunt? Rerum, facere repudiandae. Deleniti sed cumque reiciendis obcaecati qui atque consectetur illo optio eius doloremque error quidem, unde aliquid nemo? </p>

            <div>
                <Button text ="Join Subscription" />
            </div>
        </div>
    )
}

export default Hero
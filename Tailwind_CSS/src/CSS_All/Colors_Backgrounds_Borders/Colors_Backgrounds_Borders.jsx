

function    Colors_Backgrounds_Borders(){


    return(
        <div className="space-y-8 p-6">
            <p className="text-amber-50" > First tailwind css text</p>

             {/* Topic 1: Text Color */}
      <section>
        <h2 className="text-xl font-bold">1. Text Color</h2>
        <p className="text-red-500">Red Text</p>
        <p className="text-blue-500">Blue Text</p>
        <p className="text-green-500">Green Text</p>
        <p className="text-blue-300">Light Blue</p>
        <p className="text-blue-900">Dark Blue</p>
      </section>

      {/* Topic 2: Background Color */}
      <section>
        <h2 className="text-xl font-bold">2. Background Color</h2>
        <div className="bg-red-500 p-3 text-white">Red Background</div>
        <div className="bg-blue-500 p-3 text-white">Blue Background</div>
        <div className="bg-green-500 p-3 text-white">Green Background</div>
      </section>

      {/* Topic 3: Border Color */}
      <section>
        <h2 className="text-xl font-bold">3. Border Color</h2>
        <div className="border-2 border-red-500 p-3 ">Red Border</div>
        <div className="border-2 border-blue-500 p-3 m-2">Blue Border</div>
        <div className="border-4 border-green-500 p-3">Green Border</div>
      </section>

      {/* Topic 4: Placeholder Color */}
      <section>
        <h2 className="text-xl font-bold">4. Placeholder Color</h2>
        <input
          type="text"
          placeholder="Red Placeholder"
          className="border p-3 placeholder-red-500"
        />
      </section>

      {/* Topic 5: Outline Color */}
      <section>
        <h2 className="text-xl font-bold">5. Outline Color</h2>
        <input
          type="text"
          placeholder="Click here"
          className="rounded border p-3 outline-2 outline-offset-2 outline-blue-500"
        />
      </section>

      {/* Topic 6: Ring Color */}
      <section>
        <h2 className="text-xl font-bold">6. Ring Color</h2>
        <button className="rounded bg-white px-4 py-2 ring-2 ring-blue-500">
          Blue Ring
        </button>
        <button className="ml-4 rounded bg-white px-4 py-2 ring-2 ring-red-500">
          Red Ring
        </button>
      </section>

      {/* Topic 7: Opacity Utilities */}
      <section>
        <h2 className="text-xl font-bold">7. Opacity</h2>
        <div className="bg-blue-600 p-3 text-white">Normal</div>
        <div className="bg-blue-600/75 p-3 text-white">75% Background</div>
        <div className="bg-blue-600/50 p-3 text-white">50% Background</div>
        <div className="bg-blue-600/25 p-3 text-white">25% Background</div>
        <p className="text-black/50">50% Text Opacity</p>
        <p className="opacity-50">Whole Element Opacity</p>
      </section>

      {/* Topic 8: Background Image */}
      <section>
        <h2 className="text-xl font-bold">8. Background Image</h2>
        <div className="h-40 rounded-lg bg-[url('https://img.magnific.com/free-vector/charming-house-with-tree-illustration_1308-176337.jpg?semt=ais_hybrid&w=740&q=80')] bg-cover bg-center">
        </div>
      </section>

      {/* Topic 9: Background Size */}
      <section>
        <h2 className="text-xl font-bold">9. Background Size</h2>
        <div className="h-32 bg-[url('https://media.istockphoto.com/id/1987630154/photo/a-black-and-white-luxury-home-with-a-sunset.jpg?s=612x612&w=0&k=20&c=zGERIVpfMD6NsKc5WsYfReNz6Wj0nJuDOYmt93NA43k=')] bg-cover bg-center">
          <p className="bg-black/50 p-2 text-white">Cover</p>
        </div>
        <div className="h-32 bg-[url('https://media.istockphoto.com/id/1987630154/photo/a-black-and-white-luxury-home-with-a-sunset.jpg?s=612x612&w=0&k=20&c=zGERIVpfMD6NsKc5WsYfReNz6Wj0nJuDOYmt93NA43k=')] bg-contain bg-center bg-no-repeat">
          <p className="bg-black/50 p-2 text-white">Contain</p>
        </div>
        <div className="h-32 bg-[url('https://media.istockphoto.com/id/1987630154/photo/a-black-and-white-luxury-home-with-a-sunset.jpg?s=612x612&w=0&k=20&c=zGERIVpfMD6NsKc5WsYfReNz6Wj0nJuDOYmt93NA43k=')] bg-auto bg-center bg-no-repeat">
          <p className="bg-black/50 p-2 text-white">Auto</p>
        </div>
      </section>

      {/* Topic 10: Background Position */}
      <section>
        <h2 className="text-xl font-bold">10. Background Position</h2>
        <div className="h-32 bg-[url('https://media.istockphoto.com/id/1987630154/photo/a-black-and-white-luxury-home-with-a-sunset.jpg?s=612x612&w=0&k=20&c=zGERIVpfMD6NsKc5WsYfReNz6Wj0nJuDOYmt93NA43k=')] bg-cover bg-left">
          <p className="bg-black/50 p-2 text-white mt-3">Left</p>
        </div>
        <div className="h-32 bg-[url('https://media.istockphoto.com/id/1987630154/photo/a-black-and-white-luxury-home-with-a-sunset.jpg?s=612x612&w=0&k=20&c=zGERIVpfMD6NsKc5WsYfReNz6Wj0nJuDOYmt93NA43k=')] bg-cover bg-center">
          <p className="bg-black/50 p-2 text-white mt-3">Center</p>
        </div>
        <div className="h-32  bg-[url('https://media.istockphoto.com/id/1987630154/photo/a-black-and-white-luxury-home-with-a-sunset.jpg?s=612x612&w=0&k=20&c=zGERIVpfMD6NsKc5WsYfReNz6Wj0nJuDOYmt93NA43k=')] bg-cover bg-right">
          <p className="bg-black/50 p-2 text-white mt-3">Right</p>
        </div>
      </section>

      {/* Topic 11: Background Repeat */}
      <section>
        <h2 className="text-xl font-bold">11. Background Repeat</h2>
        <div className="h-24 bg-[url('https://media.istockphoto.com/id/1987630154/photo/a-black-and-white-luxury-home-with-a-sunset.jpg?s=612x612&w=0&k=20&c=zGERIVpfMD6NsKc5WsYfReNz6Wj0nJuDOYmt93NA43k=')] bg-repeat">
          Repeat
        </div>
        <div className="h-24 bg-[url('https://media.istockphoto.com/id/1987630154/photo/a-black-and-white-luxury-home-with-a-sunset.jpg?s=612x612&w=0&k=20&c=zGERIVpfMD6NsKc5WsYfReNz6Wj0nJuDOYmt93NA43k=')] bg-no-repeat mt-3">
          No Repeat
        </div>
        <div className="h-24 bg-[url('https://media.istockphoto.com/id/1987630154/photo/a-black-and-white-luxury-home-with-a-sunset.jpg?s=612x612&w=0&k=20&c=zGERIVpfMD6NsKc5WsYfReNz6Wj0nJuDOYmt93NA43k=')] bg-repeat-x mt-3">
          Repeat X
        </div>
        <div className="h-150 bg-[url('https://media.istockphoto.com/id/1987630154/photo/a-black-and-white-luxury-home-with-a-sunset.jpg?s=612x612&w=0&k=20&c=zGERIVpfMD6NsKc5WsYfReNz6Wj0nJuDOYmt93NA43k=')] bg-repeat-y mt-3">
          Repeat Y
        </div>
      </section>

      {/* Topic 12: Linear Gradients */}
      <section>
        <h2 className="text-xl font-bold">12. Linear Gradients</h2>
        <div className="rounded bg-linear-to-r from-blue-500 to-purple-500 p-5 text-white">
          Gradient Right
        </div>
        <div className="rounded bg-linear-to-b from-green-400 to-blue-600 p-5 mt-5 text-white">
          Gradient Bottom
        </div>
        <div className="rounded bg-linear-to-br from-pink-500 to-orange-400 p-5 mt-5 text-white">
          Gradient Diagonal
        </div>
      </section>

      {/* Topic 13: Gradient Direction and Color Stops */}
      <section>
        <h2 className="text-xl font-bold">13. Gradient Color Stops</h2>
        <div className="rounded bg-linear-to-r from-red-500 via-yellow-400 to-green-500 p-5 text-white">
          Three Color Gradient
        </div>
        <div className="rounded bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 p-5 text-white">
          Diagonal Gradient
        </div>
        <div className="rounded bg-linear-to-t from-black to-transparent p-5 text-white">
          Bottom to Top
        </div>
      </section>

      {/* Topic 14: Border Style and Width */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">14. Border Style and Width</h2>

        <div className="border border-blue-500 p-3">1px Border</div>
        <div className="border-2 border-blue-500 p-3">2px Border</div>
        <div className="border-4 border-blue-500 p-3">4px Border</div>

        <div className="border-2 border-dashed border-red-500 p-3">
          Dashed Border
        </div>
        <div className="border-2 border-dotted border-green-500 p-3">
          Dotted Border
        </div>
        <div className="border-4 border-double border-purple-500 p-3">
          Double Border
        </div>

        <div className="border-t-4 border-blue-500 p-3">Top Border</div>
        <div className="border-b-4 border-red-500 p-3">Bottom Border</div>
        <div className="border-l-4 border-green-500 p-3">Left Border</div>
        <div className="border-r-4 border-purple-500 p-3">Right Border</div>
      </section>


        </div>
    )
}

export default Colors_Backgrounds_Borders
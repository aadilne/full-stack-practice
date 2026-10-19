

function        Responsive_Design() {


    return (
        <div className="mx-20">   
            <div className="min-h-screen space-y-8 bg-gray-100 p-4 sm:p-6 lg:p-10">

      {/* 1. Responsive Design Fundamentals */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-[35px] bg-purple-400 w-full text-center font-bold">
          1. Responsive Design Fundamentals
        </h2>

        <div className="bg-red-200 p-4 sm:bg-green-200 lg:bg-blue-200">
          My background changes with screen size.
        </div>
      </section>

      {/* 2. Mobile-First Approach */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">
          2. Mobile-First Approach
        </h2>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded bg-blue-200 p-4">Box 1</div>
          <div className="rounded bg-blue-300 p-4">Box 2</div>
          <div className="rounded bg-blue-400 p-4">Box 3</div>
        </div>
      </section>

      {/* 3. Responsive Breakpoints */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">
          3. Responsive Breakpoints
        </h2>

        <div className="rounded bg-purple-200 p-4 sm:bg-purple-300 md:bg-purple-400 lg:bg-purple-500 xl:bg-purple-600 2xl:bg-purple-700">
          Background changes at different breakpoints.
        </div>

        <h3 className="mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Responsive Heading
        </h3>
      </section>

      {/* 4. Responsive Width and Height */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">
          4. Responsive Width & Height
        </h2>

        <div className="w-full bg-green-200 p-4 md:w-1/2 lg:w-1/3">
          My width changes with screen size.
        </div>

        <div className="mt-3 h-24 bg-green-300 md:h-40">
          My height changes at the medium breakpoint.
        </div>
      </section>

      {/* 5. Responsive Padding and Margin */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">
          5. Responsive Padding & Margin
        </h2>

        <div className="mt-2 bg-yellow-200 p-3 md:mt-6 md:p-6 lg:mt-8 lg:p-10">
          Padding and margin change with screen size.
        </div>
      </section>

      {/* 6. Responsive Typography */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">
          6. Responsive Typography
        </h2>

        <h1 className="text-center text-2xl font-bold sm:text-3xl md:text-left md:text-4xl">
          Responsive Title
        </h1>

        <p className="mt-3 text-sm leading-tight sm:text-base md:leading-normal">
          This paragraph uses responsive text sizes and line spacing.
        </p>
      </section>

      {/* 7. Responsive Flexbox */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">
          7. Responsive Flexbox
        </h2>

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="bg-pink-200 p-4">Left Content</div>
          <div className="bg-pink-300 p-4">Right Content</div>
        </div>
      </section>

      {/* 8. Responsive Grid */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">
          8. Responsive Grid
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-orange-200 p-4">Product 1</div>
          <div className="bg-orange-300 p-4">Product 2</div>
          <div className="bg-orange-400 p-4">Product 3</div>
          <div className="bg-orange-500 p-4">Product 4</div>
        </div>
      </section>

      {/* 9. Show and Hide Responsively */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold"> 9. Show & Hide Elements</h2>

        <div className="bg-green-200 p-4 md:hidden">Mobile View
        </div>

        <div className="hidden bg-blue-200 p-4 md:block">
          Tablet and Desktop View
        </div>
      </section>

      {/* 10. Responsive Images */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">
          10. Responsive Images
        </h2>

        <img 
          src="https://img.magnific.com/free-photo/assortment-with-happy-emotion_23-2148860256.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Sample landscape"
          className=" h-auto w-full rounded-lg object-cover md:h-64"
        />
      </section>

      {/* 11. Responsive Navigation Bar */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">
          11. Responsive Navigation Bar
        </h2>

        <nav className="flex flex-col gap-4 rounded-lg bg-gray-800 p-4 text-white md:flex-row md:items-center md:justify-between">
          <h3 className="text-xl font-bold">My Website</h3>

          <div className="flex flex-col gap-3 md:flex-row md:gap-5">
            <a href="#home" className="hover:text-yellow-300">Home</a>

            <a href="#about" className="hover:text-yellow-300">About </a>

            <a href="#services" className="hover:text-yellow-300"> Services</a>

            <a href="#contact" className="hover:text-yellow-300">Contact </a>
          </div>
        </nav>
      </section>

      {/* 12. Responsive Product Layout Project */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">
          12. Responsive Product Layout
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-lg border p-4">
            <img
              src="https://img.magnific.com/free-photo/assortment-with-happy-emotion_23-2148860256.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Product 1"
              className="mb-3 h-40 w-full rounded object-cover"
            />
            <h3 className="text-lg font-bold">Product One</h3>
            <p className="mt-2 text-gray-600">
              A simple responsive product card.
            </p>
            <button className="mt-4 w-full rounded bg-blue-600 p-2 text-white hover:bg-blue-700">
              View Product
            </button>
          </article>

          <article className="rounded-lg border p-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWQW98YSkSQTP2licJRYyEqjiUN-FOgC0fbLSxbuBNkpg_Ys_PMB8Iwwdd&s=10"
              alt="Product 2"
              className="mb-3 h-40 w-full rounded object-cover"
            />
            <h3 className="text-lg font-bold">Product Two</h3>
            <p className="mt-2 text-gray-600">
              The card adjusts to screen size.
            </p>
            <button className="mt-4 w-full rounded bg-blue-600 p-2 text-white hover:bg-blue-700">
              View Product
            </button>
          </article>

          <article className="rounded-lg border p-4">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/072/354/947/small/yellow-smiling-emoji-ball-on-wet-wooden-surface-with-blurred-happy-face-balls-in-background-photo.jpg"
              alt="Product 3"
              className="mb-3 h-40 w-full rounded object-cover"
            />
            <h3 className="text-lg font-bold">Product Three</h3>
            <p className="mt-2 text-gray-600"> One layout for mobile and desktop. </p>
            
            <button className="mt-4 w-full rounded bg-blue-600 p-2 text-white hover:bg-blue-700">
              View Product
            </button>
          </article>
        </div>
      </section>

    </div>

        </div>
    )
}


export default Responsive_Design;
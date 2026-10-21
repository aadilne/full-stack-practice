

function    States_And_Variants(){


    return (
        <div className="mx-20">

         <div className="min-h-screen space-y-8 bg-gray-100 p-6">

      <h1 className="text-5xl font-bold text-shadow-2xs text-shadow-white  bg-purple-700 text-black w-full p-4 rounded-lg text-center">
        Phase 8: States & Variants
      </h1>

      {/* 1. State Variants Fundamentals */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">
          1. State Variants
        </h2>

        <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
          Hover Me
        </button>
      </section>

      {/* 2. Hover */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">2. Hover</h2>

        <button className="rounded bg-green-500 px-4 py-2 text-white transition hover:scale-105 hover:bg-green-700">
          Hover Button
        </button>
      </section>

      {/* 3. Focus */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">3. Focus</h2>

        <input
          type="text"
          placeholder="Enter your name"
          className="rounded border border-gray-300 p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
      </section>

      {/* 4. Active */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">4. Active</h2>

        <button className="rounded bg-purple-600 px-4 py-2 text-white active:scale-95 active:bg-purple-800">
          Press Me
        </button>
      </section>

      {/* 5. Disabled */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">5. Disabled</h2>

        <button
          disabled
          className="cursor-pointer rounded bg-blue-600 px-4 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500"
        >
          Disabled Button
        </button>
      </section>

      {/* 6. Visited and Checked */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">
          6. Visited & Checked
        </h2>

        <a
          href="https://example.com"
          className="text-blue-600 underline visited:text-purple-600"
        >
          Visit Example Website
        </a>

        <div className="mt-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="size-5 accent-blue-600"
            />
            <span>Accept Terms</span>
          </label>
        </div>
      </section>

      {/* 7. Focus Within and Focus Visible */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">
          7. Focus Within & Focus Visible
        </h2>

        <div className="rounded border border-gray-300 p-3 focus-within:border-blue-500">
          <label htmlFor="phase8-name">Name:</label>

          <input
            id="phase8-name"
            type="text"
            className="ml-2 rounded p-2 outline-none"
            placeholder="Enter name"
          />
        </div>

        <button className="mt-4 rounded bg-blue-600 px-4 py-2 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">
          Keyboard Focus
        </button>
      </section>

      {/* 8. Group Hover */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">8. Group Hover</h2>

        <div className="group rounded-lg border p-4 transition hover:bg-blue-50">
          <h3 className="text-lg font-bold group-hover:text-blue-600">
            Property Card
          </h3>

          <p className="mt-2 text-gray-600">
            Hover over this card to change the heading.
          </p>
        </div>
      </section>

      {/* 9. Peer State */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">9. Peer State</h2>

        <label className="flex items-center gap-2">
          <input type="checkbox" className="peer size-5" />

          <span className="peer-checked:font-bold peer-checked:text-green-600">
            Select this checkbox
          </span>
        </label>
      </section>

      {/* 10. Placeholder and Selection */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">
          10. Placeholder & Selection
        </h2>

        <input
          type="email"
          placeholder="Enter email"
          className="rounded border p-3 placeholder:text-gray-400 placeholder:italic"
        />

        <p className="mt-4 selection:bg-yellow-300 selection:text-black">
          Select this text to see the selection styling.
        </p>
      </section>

      {/* 11. First, Last, Odd and Even */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">
          11. First, Last, Odd & Even
        </h2>

        <ul className="divide-y rounded border">
          <li className="first:font-bold odd:bg-gray-100 even:bg-white p-3">
            Item 1
          </li>
          <li className="odd:bg-gray-100 even:bg-white p-3">
            Item 2
          </li>
          <li className="odd:bg-gray-100 even:bg-white p-3">
            Item 3
          </li>
          <li className="last:text-blue-600 odd:bg-gray-100 even:bg-white p-3">
            Item 4
          </li>
        </ul>
      </section>

      {/* 12. Before and After */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">12. Before & After</h2>

        <p className="before:mr-2 before:content-['★'] after:ml-2 after:content-['!']">
          Featured Property
        </p>
      </section>

      {/* 13. Responsive and State Variants */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">
          13. Responsive + State Variants
        </h2>

        <button className="rounded bg-blue-500 p-3 text-white hover:bg-blue-700 md:hover:bg-purple-700">
          Responsive Hover
        </button>
      </section>

      {/* 14. Combining Multiple Variants */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">
          14. Combining Multiple Variants
        </h2>

        <button
          disabled
          className="rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 active:scale-95 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          Combined Variants
        </button>
      </section>

    </div>


        </div>
    )
}

export default States_And_Variants
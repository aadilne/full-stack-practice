
function   Radius_And_Shadows(){


    return(
        <div className="mx-20">

            <div className="min-h-screen space-y-8 bg-gray-100 p-6">

      <h1 className="text-3xl font-bold text-blue-700">
        Phase 10: Borders, Radius, Shadows & Effects
      </h1>

      {/* 1. Border Width */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">1. Border Width</h2>

        <div className="mb-2 border border-gray-400 p-3">
          Border 1
        </div>
        <div className="mb-2 border-2 border-gray-400 p-3">
          Border 2
        </div>
        <div className="border-4 border-gray-400 p-3">
          Border 4
        </div>
      </section>

      {/* 2. Border Color */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">2. Border Color</h2>

        <div className="mb-2 border-2 border-red-500 p-3">
          Red Border
        </div>
        <div className="mb-2 border-2 border-blue-500 p-3">
          Blue Border
        </div>
        <div className="border-2 border-green-500 p-3">
          Green Border
        </div>
      </section>

      {/* 3. Border Style */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">3. Border Style</h2>

        <div className="mb-2 border-2 border-solid border-blue-500 p-3">
          Solid Border
        </div>
        <div className="mb-2 border-2 border-dashed border-red-500 p-3">
          Dashed Border
        </div>
        <div className="border-2 border-dotted border-green-500 p-3">
          Dotted Border
        </div>
      </section>

      {/* 4. Border Radius */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">4. Border Radius</h2>

        <div className="mb-2 rounded-none bg-blue-200 p-3">
          rounded-none
        </div>
        <div className="mb-2 rounded-md bg-blue-300 p-3">
          rounded-md
        </div>
        <div className="mb-2 rounded-xl bg-blue-400 p-3">
          rounded-xl
        </div>
        <div className="rounded-full bg-blue-500 p-3 text-white">
          rounded-full
        </div>
      </section>

      {/* 5. Divide Utilities */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">5. Divide Utilities</h2>

        <div className="divide-y-2 divide-gray-300 rounded border">
          <div className="p-3">Item 1</div>
          <div className="p-3">Item 2</div>
          <div className="p-3">Item 3</div>
        </div>

        <div className="mt-4 flex divide-x-2 divide-blue-500 rounded border">
          <div className="flex-1 p-3">Left</div>
          <div className="flex-1 p-3">Middle</div>
          <div className="flex-1 p-3">Right</div>
        </div>
      </section>

      {/* 6. Outline Utilities */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">6. Outline Utilities</h2>

        <button className="rounded border border-blue-600 px-4 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">
          Focus Me
        </button>

        <div className="mt-4 rounded p-3 outline-2 outline-dashed outline-red-500">
          Dashed Outline
        </div>
      </section>

      {/* 7. Ring Utilities */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">7. Ring Utilities</h2>

        <input
          type="text"
          placeholder="Click to focus"
          className="rounded border p-3 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        />
      </section>

      {/* 8. Box Shadow */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">8. Box Shadow</h2>

        <div className="mb-4 rounded bg-white p-4 shadow-sm">
          Shadow Small
        </div>
        <div className="mb-4 rounded bg-white p-4 shadow-md">
          Shadow Medium
        </div>
        <div className="rounded bg-white p-4 shadow-xl">
          Shadow Extra Large
        </div>
      </section>

      {/* 9. Opacity */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">9. Opacity</h2>

        <div className="mb-2 bg-blue-600 p-3 text-white opacity-25">
          Opacity 25
        </div>
        <div className="mb-2 bg-blue-600 p-3 text-white opacity-50">
          Opacity 50
        </div>
        <div className="bg-blue-600 p-3 text-white opacity-100">
          Opacity 100
        </div>
      </section>

      {/* 10. Background Blend Modes */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">
          10. Background Blend Modes
        </h2>

        <div
          className="h-40 rounded-lg bg-blue-500 bg-blend-multiply"
          style={{
            backgroundImage: "url('https://placehold.co/600x300')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </section>

      {/* 11. Mix Blend Modes */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">
          11. Mix Blend Modes
        </h2>

        <div className="relative overflow-hidden rounded-lg bg-yellow-300 p-8">
          <div className="absolute inset-y-0 left-1/2 w-24 bg-blue-500 mix-blend-multiply" />

          <h3 className="relative text-2xl font-bold">
            Blend Effect
          </h3>
        </div>
      </section>

      {/* 12. Box Shadow Color */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">
          12. Box Shadow Color
        </h2>

        <div className="mb-4 rounded-xl bg-white p-5 shadow-lg shadow-blue-500/30">
          Blue Shadow
        </div>

        <div className="rounded-xl bg-white p-5 shadow-lg shadow-red-500/30">
          Red Shadow
        </div>
      </section>

      {/* 13. Combining Borders, Radius and Effects */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">
          13. Combining Borders, Radius & Effects
        </h2>

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-md transition hover:shadow-xl">
          <h3 className="text-xl font-bold text-gray-800">
            Property Card
          </h3>

          <p className="mt-2 text-gray-600">
            A professional card with border, radius and shadow.
          </p>

          <button className="mt-4 rounded-lg border border-blue-600 bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 active:scale-95">
            View Property
          </button>
        </div>
      </section>

    </div>

        </div>
    )
}

export  default  Radius_And_Shadows
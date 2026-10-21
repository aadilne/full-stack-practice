

function    Positioning(){


    return(
        <div className="mx-20">

             <div className="min-h-screen space-y-8 bg-gray-100 p-6">

      <h1 className="text-3xl text-white font-bold bg-purple-700 text-center h-20 p-2">
        Phase 9: Position, Overflow & Z-Index
      </h1>

      {/* 1. Position Fundamentals */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">
          1. Position Fundamentals
        </h2>

        <div className="static bg-blue-200 p-3">
          Static Box
        </div>

        <div className="relative mt-2 bg-green-200 p-3">
          Relative Box
        </div>
      </section>

      {/* 2. Static Position */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">2. Static</h2>

        <div className="static bg-yellow-200 p-4">
          Normal document flow
        </div>
      </section>

      {/* 3. Relative Position */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">3. Relative</h2>

        <div className="relative left-4 top-2 bg-green-200 p-4">
          Moved relative to original position
        </div>
      </section>

      {/* 4. Absolute Position */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">4. Absolute</h2>

        <div className="relative h-32 rounded bg-gray-200 p-3">
          Parent Box

          <div className="absolute right-8 top-2 rounded bg-red-500 p-2 text-white">
            Badge
          </div>

          <div className="absolute bottom-2 left-2 bg-blue-500 p-2 text-white">
            Bottom Left
          </div>
        </div>
      </section>

      {/* 5. Fixed Position */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">5. Fixed</h2>

        <p className="text-gray-600">
          Fixed positioning is useful for floating buttons.
          The actual fixed button is at the bottom-right of the viewport.
        </p>

        <button className="fixed bottom-4 right-4 z-50 rounded-full bg-blue-600 px-4 py-3 text-white shadow-lg hover:bg-blue-700">
          Help
        </button>
      </section>

      {/* 6. Sticky Position */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">6. Sticky</h2>

        <div className="h-48 overflow-y-auto rounded border">
          <div className="sticky top-0 z-10 bg-yellow-300 p-3 font-bold">
            Sticky Heading
          </div>

          <div className="space-y-4 p-4">
            <p>Scrollable Content 1</p>
            <p>Scrollable Content 2</p>
            <p>Scrollable Content 3</p>
            <p>Scrollable Content 4</p>
            <p>Scrollable Content 5</p>
            <p>Scrollable Content 6</p>
          </div>
        </div>
      </section>

      {/* 7. Top, Right, Bottom and Left */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">
          7. Top, Right, Bottom & Left
        </h2>

        <div className="relative h-36 rounded bg-gray-200">
          <div className="absolute left-0 top-0 bg-blue-300 p-2">
            Top Left
          </div>

          <div className="absolute right-0 top-0 bg-green-300 p-2">
            Top Right
          </div>

          <div className="absolute bottom-0 left-0 bg-yellow-300 p-2">
            Bottom Left
          </div>

          <div className="absolute bottom-0 right-0 bg-red-300 p-2">
            Bottom Right
          </div>
        </div>
      </section>

      {/* 8. Inset Utilities */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">8. Inset Utilities</h2>

        <div className="relative h-36 rounded bg-gray-200">
          <div className="absolute inset-4 rounded bg-purple-300 p-3">
            Inset 4
          </div>
        </div>
      </section>

      {/* 9. Z-Index */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">9. Z-Index</h2>

        <div className="relative h-36">
          <div className="absolute left-4 top-4 z-10 bg-blue-500 p-6 text-white">
            Z-10
          </div>

          <div className="absolute left-12 top-8 z-20 bg-red-500 p-6 text-white">
            Z-20
          </div>
        </div>
      </section>

      {/* 10. Overflow */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">10. Overflow</h2>

        <div className="h-24 overflow-auto rounded border p-3">
          <p>Content Line 1</p>
          <p>Content Line 2</p>
          <p>Content Line 3</p>
          <p>Content Line 4</p>
          <p>Content Line 5</p>
          <p>Content Line 6</p>
        </div>
      </section>

      {/* 11. Overflow X and Y */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">
          11. Overflow X & Y
        </h2>

        <div className="overflow-x-auto rounded border">
          <div className="flex w-max gap-3 p-3">
            <div className="w-48 shrink-0 bg-blue-200 p-4">
              Card 1
            </div>

            <div className="w-48 shrink-0 bg-blue-300 p-4">
              Card 2
            </div>

            <div className="w-48 shrink-0 bg-blue-400 p-4">
              Card 3
            </div>

            <div className="w-48 shrink-0 bg-blue-500 p-4">
              Card 4
            </div>
          </div>
        </div>
      </section>

      {/* 12. Visibility and Real-World Layout */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-3 text-xl font-bold">
          12. Visibility & Real-World Layout
        </h2>

        <div className="relative overflow-hidden rounded-lg bg-gray-200">
          <div className="flex h-32 items-center justify-center text-gray-500">
            Property Image Area
          </div>

          <span className="absolute right-2 top-2 rounded bg-green-600 px-3 py-1 text-white">
            Available
          </span>
        </div>

        <p className="mt-4 visible bg-green-100 p-2">
          Visible Element
        </p>

        <p className="invisible bg-red-100 p-2">
          Invisible Element: space is preserved
        </p>

        <p className="bg-blue-100 p-2">
          Hidden elements would not reserve layout space.
        </p>
      </section>

    </div>
        </div>
    )
}


export default Positioning
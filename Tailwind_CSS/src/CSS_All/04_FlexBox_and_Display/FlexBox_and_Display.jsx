
function      FlexBox_and_Display(){


    return(
        <div className="bg-pink-200 mx-20" >
            <div className="bg-pink-950 h-30 pt-6 font-bold text-5xl text-white text-center mt-3">Flex Box and Display</div>

            <div className="min-h-screen space-y-8 bg-gray-100 p-6">

      <h1 className="text-3xl font-bold text-blue-700">
        Phase 5: Display & Flexbox
      </h1>

      {/* 1. Display Utilities */}
      <section className="space-y-2 rounded-lg bg-white p-4">
        <h2 className="text-xl font-bold">1. Display Utilities</h2>

        <div className="block bg-blue-200 p-2">Block Element</div>
        <span className="inline bg-green-200">Inline Element</span>
        <span className="inline-block w-80 bg-yellow-200 p-2">
          Inline Block
        </span>
      </section>

      {/* 2. Block, Inline and Inline-block */}
      <section className="space-y-2 rounded-lg bg-white p-4">
        <h2 className="text-xl font-bold">2. Block, Inline, Inline-block</h2>

        <div className="block bg-red-200 p-2">Block 1</div>
        <div className="block bg-red-300 p-2">Block 2</div>

        <span className="inline bg-green-200">Inline 1</span>
        <span className="inline bg-green-300">Inline 2</span>

        <div className="inline-block h-16 w-24 bg-yellow-200 p-2">Box 1 </div>
        <div className="inline-block h-16 w-24 bg-yellow-300 p-2">Box 2</div>
      </section>

      {/* 3. Hidden */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-2 text-xl font-bold">3. Hidden</h2>

        <div className="hidden bg-red-200 p-2">
          Ye element hidden hai
        </div>

        <div className="bg-green-200 p-2">
          Ye element visible hai
        </div>

        <p className="mt-2 text-sm text-gray-600">
          Hidden element layout mein jagah nahi leta.
        </p>
      </section>

      {/* 4. Flex Container */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-2 text-xl font-bold">4. Flex Container</h2>

        <div className="flex gap-2">
          <div className="bg-blue-200 p-4">Box 1</div>
          <div className="bg-blue-300 p-4">Box 2</div>
          <div className="bg-blue-400 p-4">Box 3</div>
        </div>
      </section>

      {/* 5. Flex Direction */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-2 text-xl font-bold">5. Flex Direction</h2>

        <p>Row:</p>
        <div className="mb-3 flex flex-row gap-2">
          <div className="bg-purple-200 p-2">1</div>
          <div className="bg-purple-300 p-2">2</div>
          <div className="bg-purple-400 p-2">3</div>
        </div>

        <p>Column:</p>
        <div className="flex flex-col items-start gap-2">
          <div className="bg-purple-200 p-2">1</div>
          <div className="bg-purple-300 p-2">2</div>
          <div className="bg-purple-400 p-2">3</div>
        </div>
      </section>

      {/* 6. Flex Wrap */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-2 text-xl font-bold">6. Flex Wrap</h2>

        <div className="flex flex-wrap gap-2">

          <div className="w-32 bg-orange-200 p-4">Box 1</div>
          <div className="w-32 bg-orange-300 p-4">Box 2</div>
          <div className="w-32 bg-orange-400 p-4">Box 3</div>
          <div className="w-32 bg-orange-500 p-4">Box 4</div>
        </div>
      </section>

      {/* 7. Justify Content */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-2 text-xl font-bold">7. Justify Content</h2>

        <div className="mb-2 flex justify-start bg-gray-200">
          <div className="bg-blue-300 p-2">Start</div>
        </div>

        <div className="mb-2 flex justify-center bg-gray-200">
          <div className="bg-blue-300 p-2">Center</div>
        </div>

        <div className="mb-2 flex justify-end bg-gray-200">
          <div className="bg-blue-300 p-2">End</div>
        </div>

        <div className="mb-2 flex justify-between bg-gray-200">
          <div className="bg-blue-300 p-2">Left</div>
          <div className="bg-blue-300 p-2">Right</div>
        </div>

        <div className="flex justify-evenly bg-gray-200">
          <div className="bg-blue-300 p-2">One</div>
          <div className="bg-blue-300 p-2">Two</div>
          <div className="bg-blue-300 p-2">Three</div>
        </div>
      </section>

      {/* 8. Align Items */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-2 text-xl font-bold">8. Align Items</h2>

        <div className="flex h-32 items-center gap-3 bg-gray-200">
          <div className="bg-green-300 p-2">Box 1</div>
          <div className="bg-green-400 p-5">Box 2</div>
          <div className="bg-green-500 p-3">Box 3</div>
        </div>
      </section>

      {/* 9. Align Self */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-2 text-xl font-bold">9. Align Self</h2>

        <div className="flex h-32 items-start gap-3 bg-gray-200">
          <div className="bg-pink-200 p-2">Start</div>
          <div className="self-center bg-pink-300 p-2">Center</div>
          <div className="self-end bg-pink-400 p-2">End</div>
        </div>
      </section>

      {/* 10. Flex Grow and Shrink */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-2 text-xl font-bold">10. Flex Grow and Shrink</h2>

        <div className="flex gap-2">
          <div className="grow bg-teal-200 p-3">
            Grow Box
          </div>

          <div className="shrink-0 bg-teal-300 p-3">
            Fixed Size
          </div>
        </div>
      </section>

      {/* 11. Flex Basis */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-2 text-xl font-bold">11. Flex Basis</h2>

        <div className="flex flex-wrap gap-2">
          <div className="basis-1/2 bg-indigo-200 p-3">
            Basis 1/2
          </div>

          <div className="basis-1/3 bg-indigo-300 p-3">
            Basis 1/3
          </div>

          <div className="basis-full bg-indigo-400 p-3">
            Basis Full
          </div>
        </div>
      </section>

      {/* 12. Gap */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-2 text-xl font-bold">12. Gap</h2>

        <div className="flex flex-wrap gap-4">
          <div className="bg-amber-200 p-4">Box 1</div>
          <div className="bg-amber-300 p-4">Box 2</div>
          <div className="bg-amber-400 p-4">Box 3</div>
        </div>
      </section>

      {/* 13. Order */}
      <section className="rounded-lg bg-white p-4">
        <h2 className="mb-2 text-xl font-bold">13. Order</h2>

        <div className="flex flex-wrap gap-2">
          <div className="order-3 bg-rose-200 p-4">
            First in HTML, third visually
          </div>

          <div className="order-2 bg-rose-300 p-4">
            Second in HTML, first visually
          </div>

          <div className="order-1 bg-rose-400 p-4">
            Third in HTML, second visually
          </div>
        </div>
      </section>

    </div>

        </div>
    )
}

export default FlexBox_and_Display
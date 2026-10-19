function Grid() {
  return (
    <div className="mx-20 mt-5 ">

      <div className="min-h-screen space-y-8 bg-gray-100 p-6">
        <h1 className="text-6xl font-bold text-white bg-red-600 h-25 text-center">Phase 6: CSS Grid</h1>

        {/* 1. Grid Container */}
        <section className="rounded-lg bg-white p-4">
          <h2 className="mb-3 text-xl font-bold">1. Grid Container</h2>

          <div className="grid grid-cols-3 gap-2">
            <div className="bg-blue-200 p-3">Box 1</div>
            <div className="bg-blue-300 p-3">Box 2</div>
            <div className="bg-blue-400 p-3">Box 3</div>
          </div>
        </section>

        {/* 2. Grid Columns */}
        <section className="rounded-lg bg-white p-4">
          <h2 className="mb-3 text-xl font-bold">2. Grid Columns</h2>

          <div className="grid grid-cols-3 gap-2">
            <div className="bg-green-200 p-3">1</div>
            <div className="bg-green-300 p-3">2</div>
            <div className="bg-green-400 p-3">3</div>
            <div className="bg-green-200 p-3">4</div>
            <div className="bg-green-300 p-3">5</div>
            <div className="bg-green-400 p-3">6</div>
          </div>
        </section>

        {/* 3. Grid Rows */}
        <section className="rounded-lg bg-white p-4">
          <h2 className="mb-3 text-xl font-bold">3. Grid Rows</h2>

          <div className="grid grid-cols-2 grid-rows-3 gap-2">
            <div className="bg-yellow-200 p-3">Box 1</div>
            <div className="bg-yellow-300 p-3">Box 2</div>
            <div className="bg-yellow-400 p-3">Box 3</div>
            <div className="bg-yellow-200 p-3">Box 4</div>
            <div className="bg-yellow-300 p-3">Box 5</div>
            <div className="bg-yellow-400 p-3">Box 6</div>
          </div>
        </section>

        {/* 4. Column Span */}
        <section className="rounded-lg bg-white p-4">
          <h2 className="mb-3 text-xl font-bold">4. Column Span</h2>

          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2 bg-purple-200 p-3">Takes 2 Columns</div>
            <div className="bg-purple-300 p-3">Box 2</div>
            <div className="bg-purple-400 p-3">Box 3</div>
            <div className="bg-purple-200 p-3">Box 4</div>
          </div>
        </section>

        {/* 5. Row Span */}
        <section className="rounded-lg bg-white p-4">
          <h2 className="mb-3 text-xl font-bold">5. Row Span</h2>

          <div className="grid grid-cols-2 grid-rows-3 gap-2">
            <div className="row-span-2 bg-pink-200 p-3">Takes 2 Rows</div>
            <div className="bg-pink-300 p-3">Box 2</div>
            <div className="bg-pink-400 p-3">Box 3</div>
            <div className="bg-pink-200 p-3">Box 4</div>
          </div>
        </section>

        {/* 6. Grid Auto Flow */}
        <section className="rounded-lg bg-white p-4">
          <h2 className="mb-3 text-xl font-bold">6. Grid Auto Flow</h2>

          <div className="grid grid-flow-col grid-rows-2 gap-2">
            <div className="bg-orange-200 p-3">Box 1</div>
            <div className="bg-orange-300 p-3">Box 2</div>
            <div className="bg-orange-400 p-3">Box 3</div>
            <div className="bg-orange-200 p-3">Box 4</div>

          </div>
        </section>

        {/* 7. Auto Columns */}
        <section className="rounded-lg bg-white p-4">
          <h2 className="mb-3 text-xl font-bold">7. Auto Columns</h2>

          <div className="grid grid-flow-col auto-cols-fr gap-2">
            <div className="bg-teal-200 p-3">Column 1</div>
            <div className="bg-teal-300 p-3">Column 2</div>
            <div className="bg-teal-400 p-3">Column 3</div>
          </div>
        </section>

        {/* 8. Auto Rows */}
        <section className="rounded-lg bg-white p-4">
          <h2 className="mb-3 text-xl font-bold">8. Auto Rows</h2>

          <div className="grid grid-cols-2 auto-rows-[100px] gap-2">
            <div className="bg-indigo-200 p-3">Box 1</div>
            <div className="bg-indigo-300 p-3">Box 2</div>
            <div className="bg-indigo-400 p-3">Box 3</div>
            <div className="bg-indigo-200 p-3">Box 4</div>
          </div>
        </section>

        {/* 9. Grid Gap */}
        <section className="rounded-lg bg-white p-4">
          <h2 className="mb-3 text-xl font-bold">9. Grid Gap</h2>

          <div className="grid grid-cols-3 gap-x-6 gap-y-3">
            <div className="bg-amber-200 p-3">Box 1</div>
            <div className="bg-amber-300 p-3">Box 2</div>
            <div className="bg-amber-400 p-3">Box 3</div>
            <div className="bg-amber-200 p-3">Box 4</div>
            <div className="bg-amber-300 p-3">Box 5</div>
            <div className="bg-amber-400 p-3">Box 6</div>
          </div>
        </section>

        {/* 10. Grid Item Alignment */}
        <section className="rounded-lg bg-white p-4">
          <h2 className="mb-3 text-xl font-bold">10. Grid Item Alignment</h2>

          <div className="grid h-40 grid-cols-2 items-center justify-items-center gap-3 bg-gray-200">
            <div className="bg-red-200 p-2">Box 1</div>
            <div className="bg-red-300 p-4">Box 2</div>
            <div className="bg-red-400 p-3">Box 3</div>
            <div className="bg-red-200 p-2">Box 4</div>
          </div>
        </section>

        {/* 11. Grid Content Alignment */}
        <section className="rounded-lg bg-white p-4">
          <h2 className="mb-3 text-xl font-bold">11. Grid Content Alignment</h2>

          <div className="grid h-64 grid-cols-2 content-center justify-center gap-3 bg-gray-200">
            <div className="bg-cyan-200 p-3">Box 1</div>
            <div className="bg-cyan-300 p-3">Box 2</div>
            <div className="bg-cyan-400 p-3">Box 3</div>
            <div className="bg-cyan-200 p-3">Box 4</div>
          </div>
        </section>


        {/* 12. Grid Placement and Responsive Grid */}
        <section className="rounded-lg bg-white p-4">
          <h2 className="mb-3 text-xl font-bold">12. Grid Placement & Responsive Grid </h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

            <div className="col-span-1 bg-rose-200 p-4 sm:col-span-2 lg:col-span-3"> Featured Item </div>

            <div className="bg-rose-300 p-4 ">Product 2</div>
            <div className="bg-rose-400 p-4">Product 3</div>
            <div className="bg-rose-200 p-4">Product 4</div>
          </div>
        </section>


      </div>
    </div>
  );
}

export default Grid;

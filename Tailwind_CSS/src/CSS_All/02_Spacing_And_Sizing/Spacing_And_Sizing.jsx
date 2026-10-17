
function    SpacingAndSizing() {

    return (
    <div className="bg-gray-700 p-4">

        <div className="bg-blue-600 mx-4 mb-3 text-2xl text-center font-bold text-white border border-black">Spacing and Sizing and marging</div>

 
    <div className="space-y-8 p-6">

      {/* Topic 1: Margin */}
      <section>
        <h2 className="text-xl font-bold">1. Margin</h2>

        <div className="m-4 bg-blue-200 p-3">Margin 4</div>
        <div className="m-8 bg-green-200 p-3">Margin 8</div>
      </section>

      {/* Topic 2: Margin on Individual Sides */}
      <section>
        <h2 className="text-xl font-bold">2. Margin Sides</h2>

        <div className="mt-4 bg-red-200 p-3">Top Margin</div>
        <div className="mb-4 bg-green-200 p-3">Bottom Margin</div>
        <div className="ml-4 bg-blue-200 p-3">Left Margin</div>
        <div className="mr-4 bg-purple-200 p-3">Right Margin</div>
        <div className="mx-4 bg-yellow-200 p-3">Horizontal Margin</div>
        <div className="my-4 bg-pink-200 p-3">Vertical Margin</div>

        <div className="mx-auto max-w-md bg-gray-200 p-3">
          Centered Container
        </div>
      </section>

      {/* Topic 3: Padding */}
      <section>
        <h2 className="text-xl font-bold">3. Padding</h2>

        <div className="bg-blue-200 p-2">Padding 2</div>
        <div className="bg-green-200 p-4">Padding 4</div>
        <div className="bg-red-200 p-8">Padding 8</div>
      </section>

      {/* Topic 4: Padding on Individual Sides */}
      <section>
        <h2 className="text-xl font-bold">4. Padding Sides</h2>

        <div className="bg-red-200 pt-6">Top Padding</div>
        <div className="bg-green-200 pb-6">Bottom Padding</div>
        <div className="bg-blue-200 pl-6">Left Padding</div>
        <div className="bg-purple-200 pr-6">Right Padding</div>
        <div className="bg-yellow-200 px-6">Horizontal Padding</div>
        <div className="bg-pink-200 py-6">Vertical Padding</div>

        <div className="bg-gray-200 ps-4">Inline Start Padding</div>
        <div className="bg-gray-300 pe-4">Inline End Padding</div>
      </section>

      {/* Topic 5: Space Between Children */}
      <section>
        <h2 className="text-xl font-bold">5. Space Between Children</h2>

        <div className="space-y-5">
          <div className="bg-red-200 p-3">Vertical One</div>
          <div className="bg-green-200 p-3">Vertical Two</div>
          <div className="bg-blue-200 p-3">Vertical Three</div>
        </div>

        <div className="mt-4 flex space-x-4">
          <div className="bg-red-200 p-3">One</div>
          <div className="bg-green-200 p-3">Two</div>
          <div className="bg-blue-200 p-3">Three</div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="bg-red-200 p-3">Grid One</div>
          <div className="bg-green-200 p-3">Grid Two</div>
          <div className="bg-blue-200 p-3">Grid Three</div>
          <div className="bg-purple-200 p-3">Grid Four</div>
        </div>
      </section>

      {/* Topic 6: Width */}
      <section>
        <h2 className="text-xl font-bold">6. Width</h2>

        <div className="w-16 bg-red-200 p-2">w-16</div>
        <div className="w-32 bg-green-200 p-2">w-32</div>
        <div className="w-64 bg-blue-200 p-2">w-64</div>
        <div className="w-full bg-yellow-200 p-2">w-full</div>
        <div className="w-fit bg-purple-200 p-2">w-fit</div>
        <div className="w-min bg-pink-200 p-2">w-min</div>
        <div className="w-max bg-gray-200 p-2">w-max</div>
      </section>

      {/* Topic 7: Height */}
      <section>
        <h2 className="text-xl font-bold">7. Height</h2>

        <div className="h-10 bg-red-300">h-10</div>
        <div className="h-20 bg-green-300">h-20</div>
        <div className="h-32 bg-blue-300">h-32</div>

        <div className="mt-4 h-40 bg-gray-200">
          <div className="h-full bg-purple-300">
            h-full inside h-40 parent
          </div>
        </div>

        <div className="mt-4 h-auto bg-yellow-200 p-4">
          h-auto
        </div>
      </section>

      {/* Topic 8: Minimum Width and Height */}
      <section >
        <h2 className="text-xl font-bold">8. Minimum Width and Height</h2>

        <div className="  min-w-0 bg-blue-200 p-4">
          min-w-0 lorem My name is aadil  lsdkfs sdkfjlksflk sdkklsjklsd sjfoieiowfislkd lksdfj sf sf  sdfslfjklsfjlksdjkls skdklsdjlksdj 
        </div>

        <div className="min-w-full bg-green-200 p-4">
          min-w-full
        </div>

        <div className="min-w-max bg-yellow-200 p-4">
          min-w-max content
        </div>

        <div className="min-h-40 bg-red-200 p-4">
          min-h-40
        </div>

        <div className="min-h-screen bg-purple-100 p-4">
          min-h-screen
        </div>
      </section>

      {/* Topic 9: Maximum Width and Height */}
      <section>
        <h2 className="text-xl font-bold">9. Maximum Width and Height</h2>

        <div className="mx-auto w-full max-w-sm bg-blue-200 p-4">
          max-w-sm
        </div>

        <div className="mx-auto mt-4 w-full max-w-md bg-green-200 p-4">
          max-w-md
        </div>

        <div className="mt-4 max-w-full bg-yellow-200 p-4">
          max-w-full
        </div>

        <div className="mt-4 max-h-32 overflow-auto bg-red-200 p-4">
          max-h-32: This is some long content.
          Scroll to see more content. More content.
          More content. More content. More content.
          More content. More content.
        </div>
      </section>

      {/* Topic 10: Full Width and Full Height */}
      <section>
        <h2 className="text-xl font-bold">10. Full Width and Full Height</h2>

        <div className="h-40 w-full bg-gray-200 p-4">
          <div className="h-full w-full bg-blue-500 p-4 text-white">
            Full Width and Full Height
          </div>
        </div>
      </section>

      {/* Topic 11: Viewport Width and Height */}
      <section>
        <h2 className="text-xl font-bold">11. Viewport Sizing</h2>

        <div className="w-screen bg-blue-200 p-4">
          w-screen
        </div>

        <div className="mt-4 h-screen bg-green-100 p-4">
          h-screen
        </div>

        <div className="size-16 bg-purple-300">
          size-16
        </div>
      </section>

      {/* Topic 12: Fixed, Fluid and Arbitrary Sizing */}
      <section>
        <h2 className="text-xl font-bold">
          12. Fixed, Fluid and Arbitrary Sizing
        </h2>

        {/* Fixed Width */}
        <div className="w-64 bg-blue-200 p-4">
          Fixed Width: w-64
        </div>

        {/* Fluid Width */}
        <div className="mt-4 w-full bg-green-200 p-4">
          Fluid Width: w-full
        </div>

        {/* Half Width */}
        <div className="mt-4 w-1/2 bg-yellow-200 p-4">
          Half Width: w-1/2
        </div>

        {/* Arbitrary Width */}
        <div className="mt-4 w-[350px] bg-red-200 p-4">
          Custom Width: 350px
        </div>

        {/* Arbitrary Height */}
        <div className="mt-4 h-[180px] w-[45%] bg-purple-200 p-4">
          Custom Width and Height
        </div>
      </section>

    </div>
</div>
        
    )
}

export default SpacingAndSizing
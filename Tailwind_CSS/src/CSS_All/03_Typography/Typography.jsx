


function     Typography() {


    return (
        <div>
            <div className="space-y-8 p-6">

      {/* Topic 1: Font Family */}
      <section>
        <h2 className="text-xl font-bold">1. Font Family</h2>

        <p className="font-sans">Sans Font</p>
        <p className="font-serif">Serif Font</p>
        <p className="font-mono">Monospace Font</p>
      </section>

      {/* Topic 2: Font Size */}
      <section>
        <h2 className="text-xl font-bold">2. Font Size</h2>

        <p className="text-xs">Extra Small Text</p>
        <p className="text-sm">Small Text</p>
        <p className="text-base">Normal Text</p>
        <p className="text-lg">Large Text</p>
        <p className="text-xl">Extra Large Text</p>
        <p className="text-2xl">Text 2XL</p>
        <p className="text-3xl">Text 3XL</p>
        <p className="text-4xl">Text 4XL</p>
        <p className="text-[36px]">Custom 36px Text</p>
      </section>

      {/* Topic 3: Font Weight */}
      <section>
        <h2 className="text-xl font-bold">3. Font Weight</h2>

        <p className="font-light">Light Text</p>
        <p className="font-normal">Normal Text</p>
        <p className="font-medium">Medium Text</p>
        <p className="font-semibold">Semi Bold Text</p>
        <p className="font-bold">Bold Text</p>
        <p className="font-extrabold">Extra Bold Text</p>
        <p className="font-black">Black Text</p>
      </section>

      {/* Topic 4: Font Style */}
      <section>
        <h2 className="text-xl font-bold">4. Font Style</h2>

        <p className="italic">Italic Text</p>
        <p className="not-italic">Normal Style Text</p>
      </section>

      {/* Topic 5: Text Alignment */}
      <section>
        <h2 className="text-xl font-bold">5. Text Alignment</h2>

        <p className="text-left">Left Aligned Text</p>
        <p className="text-center">Center Aligned Text</p>
        <p className="text-right">Right Aligned Text</p>
        <p className="text-justify">
          This is a longer paragraph to demonstrate justified text
          alignment across multiple lines in a container.
        </p>
      </section>

      {/* Topic 6: Text Color */}
      <section>
        <h2 className="text-xl font-bold">6. Text Color</h2>

        <p className="text-red-500">Red Text</p>
        <p className="text-blue-500">Blue Text</p>
        <p className="text-green-600">Green Text</p>
        <p className="text-gray-500">Gray Text</p>
        <p className="text-[#7c3aed]">Custom Purple Text</p>
      </section>

      {/* Topic 7: Text Decoration */}
      <section>
        <h2 className="text-xl font-bold">7. Text Decoration</h2>

        <p className="underline">Underlined Text</p>
        <p className="overline">Overline Text</p>
        <p className="line-through">Line Through Text</p>
        <p className="no-underline">No Underline</p>

        <p className="underline decoration-red-500 decoration-2">
          Red Underline
        </p>

        <p className="underline decoration-dashed">
          Dashed Underline
        </p>

        <p className="underline decoration-wavy">
          Wavy Underline
        </p>
      </section>

      {/* Topic 8: Text Transform */}
      <section>
        <h2 className="text-xl font-bold">8. Text Transform</h2>

        <p className="uppercase">hello world</p>
        <p className="lowercase">HELLO WORLD</p>
        <p className="capitalize">hello world from tailwind</p>
        <p className="normal-case">Hello World</p>
      </section>

      {/* Topic 9: Line Height */}
      <section>
        <h2 className="text-xl font-bold">9. Line Height</h2>

        <p className="leading-none">
          Tight line spacing. Second line of text.
        </p>

        <p className="leading-normal">
          Normal line spacing. Second line of text.
        </p>

        <p className="leading-relaxed">
          Relaxed line spacing. Second line of text.
        </p>

        <p className="leading-loose">
          Loose line spacing. Second line of text.
        </p>

        <p className="leading-[32px]">
          Custom line height of 32 pixels.
        </p>
      </section>

      {/* Topic 10: Letter Spacing */}
      <section>
        <h2 className="text-xl font-bold">10. Letter Spacing</h2>

        <p className="tracking-tighter">Tighter Letters</p>
        <p className="tracking-tight">Tight Letters</p>
        <p className="tracking-normal">Normal Letters</p>
        <p className="tracking-wide">Wide Letters</p>
        <p className="tracking-widest">Widest Letters</p>
        <p className="tracking-[3px]">Custom Letter Spacing</p>
      </section>

      {/* Topic 11: Text Wrapping */}
      <section>
        <h2 className="text-xl font-bold">11. Text Wrapping</h2>

        <p className="w-64 text-wrap">
          This text wraps naturally onto the next line when required.
        </p>

        <p className="mt-3 w-64 text-nowrap">
          This text stays on one line and may overflow.
        </p>

        <h3 className="mt-3 w-64 text-balance text-2xl font-bold">
          Balanced Heading Wrapping Example
        </h3>

        <p className="mt-3 w-64 text-pretty">
          This paragraph uses pretty wrapping to improve readability
          when text spans multiple lines.
        </p>
      </section>

      {/* Topic 12: Text Overflow and Truncation */}
      <section>
        <h2 className="text-xl font-bold">
          12. Text Overflow and Truncation
        </h2>

        <p className="w-48 truncate">
          This is a very long text that will be truncated with an ellipsis.
        </p>

        <p className="mt-3 w-48 overflow-hidden text-ellipsis whitespace-nowrap">
          This is another long text with an ellipsis.
        </p>

        <p className="mt-3 w-64 line-clamp-2">
          Tailwind CSS is useful for building modern interfaces.
          It provides utility classes for typography, spacing,
          responsive design, colors, layouts and much more.
        </p>
      </section>

      {/* Topic 13: Lists and List Markers */}
      <section>
        <h2 className="text-xl font-bold">13. Lists and List Markers</h2>

        <h3 className="font-semibold">Disc List</h3>
        <ul className="list-disc pl-6">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>

        <h3 className="mt-4 font-semibold">Decimal List</h3>
        <ol className="list-decimal pl-6">
          <li>Learn HTML</li>
          <li>Learn CSS</li>
          <li>Learn Tailwind</li>
        </ol>

        <h3 className="mt-4 font-semibold">Circle List</h3>
        <ul className="list-[circle] pl-6">
          <li>React</li>
          <li>Vite</li>
        </ul>

        <h3 className="mt-4 font-semibold">Square List</h3>
        <ul className="list-[square] pl-6">
          <li>Node.js</li>
          <li>MongoDB</li>
        </ul>

        <h3 className="mt-4 font-semibold">Colored Markers</h3>
        <ul className="list-disc pl-6 marker:text-red-500">
          <li>Red Marker</li>
          <li>Red Marker</li>
        </ul>

        <h3 className="mt-4 font-semibold">No Marker</h3>
        <ul className="list-none">
          <li>First Item</li>
          <li>Second Item</li>
        </ul>
      </section>

    </div>

        </div>
    )
}


export default Typography
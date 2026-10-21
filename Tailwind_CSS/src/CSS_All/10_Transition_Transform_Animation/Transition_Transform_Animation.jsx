function Transition_Transform_Animation() {

    
  return (
    <div className="mx-20">
      <div className="min-h-screen space-y-8 bg-slate-100 p-6 text-center">
        <h1 className="text-5xl font-bold bg-purple-700  h-20">
          Phase 11: Transitions & Animations
        </h1>

        {/* 1. Transition Fundamentals */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">1. Transition</h2>
          <button className="rounded bg-red-500 px-4 py-2 text-white transition  hover:bg-blue-500">
            Smooth Color Change
          </button>
        </section>

        {/* 2. Transition Properties */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. Transition Properties</h2>
          <button className="rounded bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-800">
            Transition Colors
          </button>
          <div className="mx-auto w-fit rounded bg-blue-500 p-3 text-white transition-opacity hover:opacity-30">
            Transition Opacity
          </div>
          <div className="mx-auto w-fit rounded bg-purple-500 p-3 text-white transition-transform hover:scale-110">
            Transition Transform
          </div>
          <div className="mx-auto w-fit rounded bg-white p-4 shadow transition-shadow hover:shadow-xl">
            Transition Shadow
          </div>
        </section>

        {/* 3. Transition Duration */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">3. Duration</h2>
          <button className="rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-700 hover:bg-orange-500">
            Duration 700ms
          </button>
        </section>

        {/* 4. Transition Timing Function */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Timing Function</h2>
          <button className="rounded bg-indigo-500 px-4 py-2 text-white transition duration-500 ease-linear hover:scale-110">
            Ease Linear
          </button>
          <button className="rounded bg-indigo-500 px-4 py-2 text-white transition duration-500 ease-in hover:scale-110">
            Ease In
          </button>
          <button className="rounded bg-indigo-500 px-4 py-2 text-white transition duration-500 ease-out hover:scale-110">
            Ease Out
          </button>
          <button className="rounded bg-indigo-500 px-4 py-2 text-white transition duration-500 ease-in-out hover:scale-110">
            Ease In Out
          </button>
        </section>

        {/* 5. Transition Delay */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">5. Delay</h2>
          <button className="rounded bg-orange-500 px-4 py-2 text-white transition-colors delay-300 duration-300 hover:bg-red-600">
            Delay 300ms
          </button>
        </section>

        {/* 6. Transform Fundamentals */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">6. Transform</h2>
          <div className="mx-auto w-fit rounded bg-teal-500 p-4 text-white transition hover:scale-110">
            Hover to Transform
          </div>
        </section>

        {/* 7. Scale */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">7. Scale</h2>
          <div className="mx-auto w-fit rounded bg-pink-500 p-4 text-white transition  duration-300 hover:scale-125">
            Scale 125%
          </div>
        </section>

        {/* 8. Rotate */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">8. Rotate</h2>
          <div className="mx-auto w-fit rounded bg-yellow-400 p-4 transition duration-300 hover:rotate-12">
            Rotate Me
          </div>
        </section>

        {/* 9. Translate */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">9. Translate</h2>
          <div className="mx-auto w-fit rounded bg-cyan-500 p-4 text-white transition duration-300 hover:-translate-y-2">
            Move Up
          </div>
          <div className="mx-auto w-fit rounded bg-cyan-700 p-4 text-white transition duration-300 hover:translate-x-4">
            Move Right
          </div>
        </section>

        {/* 10. Skew */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">10. Skew</h2>
          <div className="mx-auto w-fit rounded bg-violet-500 p-4 text-white transition duration-300 hover:skew-x-6">
            Skew on Hover
          </div>
        </section>

        {/* 11. Transform Origin */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">11. Transform Origin</h2>
          <div className="mx-auto w-fit origin-top-left rounded bg-rose-500 p-4 text-white transition duration-300 hover:rotate-12">
            Rotate from Top Left
          </div>
        </section>

        {/* 12. Built-in Animations */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">12. Built-in Animations</h2>
          <div className="text-4xl animate-spin">⚙️</div>
          <div className="mx-auto w-fit animate-pulse rounded bg-blue-400 p-4 text-white">
            Loading...
          </div>
          <div className="text-4xl animate-bounce">⬇️</div>
          <div className="mx-auto h-5 w-5 rounded-full bg-pink-500 animate-ping"></div>
        </section>

        {/* 13. Custom Animation */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">13. Custom Animation</h2>
          <div className="inline-block animate-wiggle text-4xl">👋</div>
          <p className="text-sm text-slate-600">
            Add the custom wiggle animation to index.css first.
          </p>
        </section>

        {/* 14. Combining Effects */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">14. Combined Effects</h2>
          <button className="rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white shadow transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-purple-800 hover:shadow-xl">
            Hover for All Effects
          </button>
        </section>
      </div>
    </div>
  );
}

export default Transition_Transform_Animation;

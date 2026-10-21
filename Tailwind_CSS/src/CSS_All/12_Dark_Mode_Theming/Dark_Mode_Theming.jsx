import { useState } from "react";

function Dark_Mode_Theming() {
  const [Dark, setDark] = useState(false);

  function toggleThem() {
    setDark((prev) => !prev);
  }

  return (
    <div className="mx-20">
      <div className={Dark ? "dark" : ""}>
        {/* 4. Page background and text colors */}
        <main className="min-h-screen space-y-6 bg-slate-50 p-6 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
          {/* 5. Theme heading */}
          <header className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl text-center font-bold">Dark Mode Demo</h1>

              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Learn Tailwind CSS v4 theming.
              </p>
            </div>

            {/* 6. Manual theme toggle */}
            <button
              type="button"
              onClick={toggleThem}
              className="rounded-lg bg-brand-500 px-4 py-2 text-white transition-colors hover:bg-brand-700"
            >
              {Dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </header>

          {/* 7. Card background, border and shadow */}
          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-md dark:border-slate-700 dark:bg-slate-900 dark:shadow-black/20">
            <h2 className="text-xl font-bold">Profile Card</h2>

            <p className="mt-2 text-slate-600 dark:text-slate-300">
              The card changes its colors with the theme.
            </p>

            {/* 8. Custom theme color */}
            <button className="mt-4 rounded-lg bg-brand-500 px-4 py-2 text-white hover:bg-brand-700">
              View Profile
            </button>
          </section>

          {/* 9. Multiple theme-aware elements */}
          <section className="rounded-xl bg-slate-100 p-5 dark:bg-slate-800">
            <h2 className="text-lg font-semibold">Theme Information</h2>

            <p className="mt-2 text-slate-600 dark:text-slate-300">
              Current theme: {Dark ? "Dark" : "Light"}
            </p>

            <div className="mt-4 rounded-lg border border-slate-300 p-3 dark:border-slate-600">
              This box also supports both themes.
            </div>
          </section>

          {/* 10. Theme-aware form elements */}
          <section className="space-y-3 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
            <h2 className="text-lg font-semibold">Contact Form</h2>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            />

            <button className="rounded-lg bg-brand-500 px-4 py-2 text-white hover:bg-brand-700">
              Submit
            </button>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dark_Mode_Theming;

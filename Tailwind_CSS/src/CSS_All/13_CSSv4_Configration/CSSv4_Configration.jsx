
import { useState } from "react"

function   CSSv4_Configration(){

      // 1. Store the theme state
  const [isDark, setIsDark] = useState(false);


    return(
        <div className="mx-20">

            <div className={isDark ? "dark" : ""}>
      <main className="min-h-screen bg-slate-50 p-6 text-slate-900 dark:bg-slate-950 dark:text-white">

        {/* 1–3. Theme and custom colors */}
        <header className="content-layout space-y-4">
          <h1 className="font-heading text-3xl font-bold">
            Tailwind CSS v4
          </h1>

          <p className="text-brand-title">
            My Custom Design System
          </p>

          {/* 4. Custom brand color */}
          <button
            onClick={() => setIsDark((prev) => !prev)}
            className="rounded-card bg-brand-500 px-4 py-2 text-white transition-colors hover:bg-brand-700 hocus:outline-2 hocus:outline-offset-2"
          >
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </header>

        {/* 5–8. Spacing, breakpoint, shadow and radius */}
        <section className="content-layout mt-6 grid gap-4 tablet:grid-cols-2">
          <article className="rounded-card bg-white p-18 shadow-card dark:bg-slate-900">
            <h2 className="font-heading text-xl font-bold">
              Custom Card
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Custom spacing, radius and shadow.
            </p>
          </article>

          {/* 9. Custom animation */}
          <article className="rounded-card bg-white p-6 shadow-card dark:bg-slate-900">
            <div className="animate-wiggle text-4xl">
              👋
            </div>

            <h2 className="mt-4 text-xl font-bold">
              Custom Animation
            </h2>

            <p className="mt-2 text-slate-600 dark:text-slate-300">
              This element uses custom keyframes.
            </p>
          </article>
        </section>

        {/* 13. Normal CSS variable example */}
        <section
          className="content-layout mt-6 rounded-card p-6"
          style={{ "--panel-bg": isDark ? "#1e293b" : "#dbeafe" }}
        >
          <h2 className="text-xl font-bold">
            CSS Variables
          </h2>

          <p
            className="mt-2 rounded p-3"
            style={{ backgroundColor: "var(--panel-bg)" }}
          >
            This background uses a CSS variable.
          </p>
        </section>

      </main>
    </div>

        </div>
    )
}


export  default CSSv4_Configration
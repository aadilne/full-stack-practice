
# Tailwind CSS Phase 14 --- Configuration (React + Vite + Tailwind CSS v4)



## 1. Project mein kaunsi files use hongi?

Is example mein hum sirf do files edit karenge:

my-project/
└── src/
    ├── index.css   # Tailwind setup + custom configuration
    └── App.jsx     # React component + UI


-   **`src/index.css`**: Tailwind import, theme variables, custom
    variants aur custom utilities.
-   **`src/App.jsx`**: React component, HTML-like JSX markup, button
    click aur page ka layout.

> Important: CSS code ko `App.jsx` mein mat paste karna. JSX code ko
> `index.css` mein mat paste karna.

------------------------------------------------------------------------

## 2. Step 1 --- `src/index.css` mein kya likhna hai?

Apni `src/index.css` file kholo. Agar usmein pehle se
`@import "tailwindcss";` hai, to us line ko dobara mat likhna. Neeche
diya gaya complete example use kar sakte ho:

``` css
@import "tailwindcss";

/* 1. Theme values: custom color, font, spacing, breakpoint, shadow and radius */
@theme {
  --color-brand-500: #2563eb;
  --color-brand-700: #1d4ed8;

  --font-heading: Georgia, serif;

  --spacing-18: 4.5rem;
  --breakpoint-tablet: 48rem;

  --shadow-card: 0 8px 24px rgb(0 0 0 / 10%);
  --radius-card: 1rem;

  /* 2. Custom animation */
  --animate-wiggle: wiggle 1s ease-in-out infinite;

  @keyframes wiggle {
    0%, 100% {
      transform: rotate(-3deg);
    }

    50% {
      transform: rotate(3deg);
    }
  }
}

/* 3. Manual dark mode: activate dark styles with a .dark ancestor */
@custom-variant dark (&:where(.dark, .dark *));

/* 4. Custom utility: centered content with a maximum width */
@utility content-layout {
  margin-inline: auto;
  width: 100%;
  max-width: 72rem;
  padding-inline: 1rem;
}

/* 5. Another custom utility */
@utility text-brand-title {
  color: #1d4ed8;
  font-weight: 700;
  text-transform: uppercase;
}

/* 6. Custom variant: apply utilities on hover OR focus */
@custom-variant hocus (&:hover, &:focus);
```

### `index.css` ke har section ka kaam

  -----------------------------------------------------------------------
  CSS code                            Iska kaam
  ----------------------------------- -----------------------------------
  `@import "tailwindcss";`            Tailwind CSS load karta hai

  `@theme`                            Custom design values define karta
                                      hai

  `--color-brand-500`                 `bg-brand-500`, `text-brand-500`
                                      jaise color utilities ke liye

  `--font-heading`                    `font-heading` utility ke liye

  `--spacing-18`                      `p-18` jaise spacing utility ke
                                      liye

  `--breakpoint-tablet`               `tablet:` responsive variant ke
                                      liye

  `--shadow-card`                     `shadow-card` utility ke liye

  `--radius-card`                     `rounded-card` utility ke liye

  `--animate-wiggle` + `@keyframes`   `animate-wiggle` custom animation
                                      ke liye

  `@custom-variant dark`              `.dark` class ke zariye manual dark
                                      mode ke liye

  `@utility content-layout`           `content-layout` custom utility
                                      banata hai

  `@utility text-brand-title`         `text-brand-title` custom utility
                                      banata hai

  `@custom-variant hocus`             `hocus:` utility ko hover/focus par
                                      chalata hai
  -----------------------------------------------------------------------

**Yaad rakho:** `@theme`, `@utility` aur `@custom-variant` CSS
directives hain. Inko `index.css` mein hi likhna hai.

------------------------------------------------------------------------

## 3. Step 2 --- `src/App.jsx` mein kya likhna hai?

Ab `src/App.jsx` kholo. Is file mein React me likhna :

``` jsx
import { useState } from "react";

function Phase14Config() {
  // Store whether dark mode is active
  const [isDark, setIsDark] = useState(false);

  return (
    // The .dark class activates dark: styles inside this wrapper
    <div className={isDark ? "dark" : ""}>
      <main className="min-h-screen bg-slate-50 p-6 text-slate-900 dark:bg-slate-950 dark:text-white">

        {/* Heading uses the custom font */}
        <header className="content-layout space-y-4">
          <h1 className="font-heading text-3xl font-bold">
            Tailwind CSS v4
          </h1>

          {/* Custom utility from index.css */}
          <p className="text-brand-title">
            My Custom Design System
          </p>

          {/* Custom color, radius, and hocus variant */}
          <button
            type="button"
            onClick={() => setIsDark((prev) => !prev)}
            className="rounded-card bg-brand-500 px-4 py-2 text-white hover:bg-brand-700 hocus:outline-2 hocus:outline-offset-2"
          >
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </header>

        {/* Custom breakpoint, spacing, radius and shadow */}
        <section className="content-layout mt-6 grid gap-4 tablet:grid-cols-2">
          <article className="rounded-card bg-white p-18 shadow-card dark:bg-slate-900">
            <h2 className="font-heading text-xl font-bold">
              Custom Card
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Custom spacing, radius and shadow.
            </p>
          </article>

          {/* Custom animation */}
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

      </main>
    </div>
  );
}

export default Phase14Config;
```

### `App.jsx` ke important parts

-   `useState(false)` React mein dark mode ki current state rakhta hai.
-   `setIsDark(...)` button click hone par state toggle karta hai.
-   `className={isDark ? "dark" : ""}` wrapper par `.dark` class lagata
    ya hatata hai.
-   `dark:bg-slate-950` jaise classes tab apply hoti hain jab element ke
    ancestor par `.dark` ho.
-   `bg-brand-500`, `font-heading`, `p-18`, `tablet:grid-cols-2`,
    `shadow-card`, `rounded-card` aur `animate-wiggle` utilities
    `index.css` ki configuration se aati hain.

------------------------------------------------------------------------

## 4. Step 3 --- `main.jsx` check karo

Vite ke normal React setup mein `src/main.jsx` usually `index.css` ko
import karta hai. Check karo ki ismein CSS import ho:

``` jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

Agar tumhare `main.jsx` mein `import "./index.css";` pehle se hai, to
use dobara add mat karna.

------------------------------------------------------------------------

## 5. Step 4 --- Project run kaise karein?

VS Code terminal mein project ke root folder par jao, jahan
`package.json` file hai. Phir:

``` bash
npm run dev
```

Terminal mein jo local URL aaye, use browser mein kholo.

Agar project pehle se run ho raha hai, to changes save karke browser
refresh karo. Vite aksar changes automatically reload kar deta hai.

------------------------------------------------------------------------

## 6. Class aur CSS configuration ka connection

  `index.css` mein define kiya   `App.jsx` mein use kiya
  ------------------------------ -------------------------
  `--color-brand-500`            `bg-brand-500`
  `--color-brand-700`            `hover:bg-brand-700`
  `--font-heading`               `font-heading`
  `--spacing-18`                 `p-18`
  `--breakpoint-tablet`          `tablet:grid-cols-2`
  `--shadow-card`                `shadow-card`
  `--radius-card`                `rounded-card`
  `--animate-wiggle`             `animate-wiggle`
  `@custom-variant dark ...`     `dark:bg-slate-900`
  `@utility content-layout`      `content-layout`
  `@utility text-brand-title`    `text-brand-title`
  `@custom-variant hocus ...`    `hocus:outline-2`

------------------------------------------------------------------------

## 7. Common mistakes se bacho

1.  **`@import "tailwindcss";` do baar mat likho.** Existing import ko
    rehne do.
2.  **CSS aur JSX ko mix mat karo.** Configuration `index.css` mein aur
    component `App.jsx` mein rahega.
3.  **Class names bilkul same rakho.** Agar CSS mein `--radius-card` hai
    to JSX mein `rounded-card` use karo.
4.  **Custom theme change ke baad Vite ko restart karna pad sakta hai.**
    Agar class generate nahi ho rahi, terminal mein server stop karke
    `npm run dev` dobara chalao.
5.  **Manual dark mode system setting se alag hai.** Is configuration
    mein `.dark` class toggle hone par dark theme activate hoti hai.
6.  **Default utilities ko bina wajah customize mat karo.** Custom
    values tab banao jab project ko waqai unki zaroorat ho.

------------------------------------------------------------------------

## 8. Phase 14 ka short recap

-   `index.css` = Tailwind configuration aur custom CSS.
-   `App.jsx` = React UI aur interaction.
-   `@theme` = custom design tokens.
-   `@utility` = custom utility class.
-   `@custom-variant` = custom condition/variant.
-   React `useState` = button click se dark mode toggle.
-   `main.jsx` = `index.css` ko import karta hai.

Bhai ❤️ agar tum bas ye rule yaad rakhoge --- **configuration
`index.css` mein, component `App.jsx` mein** --- to samajhna kaafi
aasaan ho jayega.

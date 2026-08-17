# 🟢 Part 1: DOM Basics

## 1. DOM kya hai?

**DOM = Document Object Model**


Browser HTML page ko ek **object/tree structure** mein convert karta hai.
Isi structure ko **DOM** kehte hain.

Example:

HTML:
<h1>Hello Aadil</h1>
<p>I am learning JavaScript</p>

DOM:

Document
   │
   ├── h1
   │    └── "Hello Aadil"
   │
   └── p
        └── "I am learning JavaScript"

JavaScript DOM ki help se HTML ko:
- Access kar sakti hai
- Change kar sakti hai
- Add kar sakti hai
- Delete kar sakti hai




## 2. DOM ki zarurat kyu padti hai?

DOM ki help se JavaScript webpage ko **dynamic** bana sakti hai.

Jaise:

- HTML ka text change karna
- CSS change karna
- Button click par kuch karna
- New element banana
- Element delete karna
- Form ki value lena

Example:

```html
<h1 id="title">Hello</h1>



# JavaScript DOM – Part 1

## 2. DOM ki zarurat kyu padti hai?

DOM allows JavaScript to **access and change HTML**.

JavaScript can:
- Change text
- Change CSS
- Add elements
- Remove elements
- Handle events

Example:

    const title = document.getElementById("title");
    title.textContent = "Hello Aadil";

Simple:

    JavaScript → DOM → HTML


## 3. HTML → DOM kaise banta hai?

Browser reads the HTML and creates the DOM.

    HTML
      ↓
    Browser
      ↓
    DOM

Example:

    <h1>Hello</h1>

Browser creates:

    Document
       ↓
      h1


## 4. DOM Tree kya hota hai?

DOM Tree is the **tree structure of HTML elements**.

Example:

    body
    ├── h1
    └── p

Here:

- `body` → Parent
- `h1` → Child
- `p` → Child


## 5. Document Object kya hai?

`document` represents the **current webpage**.

It is used to access HTML elements.

Example:

    const title = document.querySelector("h1");

Simple:

    document → Webpage


## 6. Window Object kya hai?

`window` represents the **browser window**.

It provides browser-related features.

Example:

    window.alert("Hello");
    window.innerWidth;

Simple:

    window → Browser


## 7. Window vs Document

| window | document |
|---|---|
| Represents browser | Represents webpage |
| Browser features | HTML elements |
| `window.alert()` | `document.querySelector()` |
| `window.innerWidth` | `document.getElementById()` |

Remember:

    window → Browser
    document → Webpage


## 8. Browser HTML ko DOM mein kaise convert karta hai?

The browser follows these steps:

    HTML
      ↓
    Read HTML
      ↓
    Create elements
      ↓
    Create DOM Tree
      ↓
    JavaScript accesses DOM

Example:

    <h1>Hello</h1>

Becomes:

    Document
       ↓
      h1
       ↓
    "Hello"


## 9. DOM aur HTML mein Difference

### HTML

HTML is the **code written by us**.

    <h1>Hello</h1>

### DOM

DOM is the **structure created by the browser** from HTML.

    HTML → Browser → DOM

Remember:

    HTML = Code
    DOM  = Browser's structure


## 10. DOM aur BOM mein Difference

### DOM

DOM works with the **webpage**.

    DOM
      ↓
    document
      ↓
    HTML elements

Example:

    document.querySelector("h1");


### BOM

BOM works with the **browser**.

    BOM
      ↓
    window
      ↓
    Browser features

Example:

    window.location;


### Simple Difference

| DOM           |       BOM |

| Works with webpage | Works with browser |
| `document`        | `window` |
| HTML elements     | Browser features |

Remember:

    DOM → Webpage
    BOM → Browser
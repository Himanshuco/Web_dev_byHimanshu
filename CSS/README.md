# CSS (Cascading Style Sheets)

CSS (Cascading Style Sheets) is used to describe the presentation of a web page, including its layout, colors, fonts, and more. It allows us to enhance the visual appearance of the HTML content and can be used for both styling the entire website or just specific elements.

## Introduction to CSS

CSS provides style and layout information for HTML elements. Without CSS, a webpage would display in its default formatting, which is plain and unappealing. With CSS, you can:

- Set colors, fonts, and backgrounds
- Control the layout and positioning of elements
- Add transitions and animations
- Make your website responsive to different screen sizes

## How to Add Styles

CSS can be added to HTML documents in three ways:

### Inline CSS

Inline CSS allows you to apply styles directly to individual HTML elements using the `style` attribute.

```html
<h1 style="color: red; background-color: green;">Hello World</h1>
````

### Internal CSS

Internal CSS is written within the `<style>` tag in the `<head>` section of the HTML document. It is applied to the entire page.

```html
<head>
  <style>
    h1 {
      color: red;
      background-color: green;
    }
  </style>
</head>
<body>
  <h1>Hello World</h1>
</body>
```

### External CSS

External CSS involves linking to an external `.css` file that contains the styles. This is the most efficient way to manage styles across multiple web pages.

```html
<link rel="stylesheet" type="text/css" href="styles.css">
```

## Basic CSS Syntax

The basic syntax of a CSS rule consists of a **selector**, **property**, and **value**:

```css
selector {
  property: value;
}
```

For example:

```css
h1 {
  color: red;
  background-color: green;
}
```

### Explanation:

* **Selector**: `h1` (The HTML element to which the styles will be applied).
* **Property**: `color` (The style you want to apply).
* **Value**: `red` (The value of the style property).

## Selectors

CSS selectors are used to target HTML elements to apply styles.

* **Element Selector**: Targets all instances of a specific element.
  Example: `h1 { color: red; }`

* **Class Selector**: Targets all elements with a specific class.
  Example: `.example { color: blue; }`

* **ID Selector**: Targets a specific element with a unique ID.
  Example: `#uniqueID { color: green; }`

* **Universal Selector**: Targets all elements in the document.
  Example: `* { margin: 0; padding: 0; }`

## CSS Properties

Some commonly used CSS properties include:

* `color`: Defines the text color.
* `background-color`: Defines the background color of an element.
* `font-size`: Defines the size of the text.
* `padding`: Adds space inside the element between the content and the border.
* `margin`: Adds space outside the element, separating it from other elements.
* `border`: Defines the border of an element.

Example of using CSS properties:

```css
h1 {
  color: red;
  background-color: yellow;
  font-size: 32px;
  padding: 20px;
  margin: 10px;
  border: 2px solid black;
}
```

## CSS Positioning

CSS allows you to control the positioning of elements on the page. There are different types of positioning:

* **Static**: The default position for all elements. Elements are positioned based on the normal flow of the document.

* **Relative**: Positioned relative to its normal position. For example:

  ```css
  div {
    position: relative;
    top: 10px;
    left: 20px;
  }
  ```

* **Absolute**: Positioned relative to the nearest positioned ancestor (instead of the viewport). It is removed from the document flow.

  ```css
  div {
    position: absolute;
    top: 50px;
    left: 100px;
  }
  ```

* **Fixed**: Positioned relative to the viewport, meaning it will stay in the same position even if the page is scrolled.

  ```css
  div {
    position: fixed;
    top: 10px;
    left: 10px;
  }
  ```

* **Sticky**: The element is treated as relative until it crosses a specific threshold, at which point it becomes fixed.

  ```css
  div {
    position: sticky;
    top: 0;
  }
  ```

## Note

* **Organize your styles**: Keep your CSS organized by grouping related rules together.

* **Use comments**: Add comments to explain complex styles.

  Example:

  ```css
  /* Header styles */
  h1 {
    color: red;
  }
  ```

* **Minimize inline styles**: Use external or internal CSS for better scalability and readability.

* **Use shorthand properties**: Instead of writing full property values, use shorthand for common properties like padding, margin, etc.

  Example:

  ```css
  padding: 10px 20px 30px 40px;
  ```

  This sets the padding for all four sides in a single line, top-right-bottom-left.

---

Sure! Below is a table summarizing **major CSS properties**, their **uses**, and some examples of how they are commonly applied. This is a quick reference for the most frequently used CSS styles.

---

### Table: Commonly Used CSS Properties

| **Property**                             | **Use**                                                         | **Example**                                             |
| ---------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------- |
| **color**                                | Sets the text color                                             | `color: red;`                                           |
| **background-color**                     | Sets the background color of an element                         | `background-color: #f0f0f0;`                            |
| **font-size**                            | Sets the font size of the text                                  | `font-size: 16px;`                                      |
| **font-family**                          | Specifies the font for text                                     | `font-family: Arial, sans-serif;`                       |
| **font-weight**                          | Sets the thickness of the font                                  | `font-weight: bold;`                                    |
| **line-height**                          | Specifies the space between lines of text                       | `line-height: 1.5;`                                     |
| **text-align**                           | Aligns the text (left, center, right)                           | `text-align: center;`                                   |
| **text-decoration**                      | Adds decoration to text (underline, line-through, etc.)         | `text-decoration: underline;`                           |
| **margin**                               | Sets space outside an element (outside the border)              | `margin: 20px;`                                         |
| **padding**                              | Sets space inside an element (inside the border)                | `padding: 10px;`                                        |
| **border**                               | Sets the border around an element                               | `border: 1px solid black;`                              |
| **width**                                | Sets the width of an element                                    | `width: 100px;`                                         |
| **height**                               | Sets the height of an element                                   | `height: 200px;`                                        |
| **display**                              | Specifies how elements are displayed (block, inline, etc.)      | `display: block;`                                       |
| **position**                             | Sets the positioning method (static, relative, absolute, fixed) | `position: relative;`                                   |
| **top**, **right**, **bottom**, **left** | Specifies the offset of an element in positioning               | `top: 20px; left: 10px;`                                |
| **z-index**                              | Controls the stacking order of elements                         | `z-index: 10;`                                          |
| **overflow**                             | Controls what happens if content overflows an element's box     | `overflow: auto;`                                       |
| **opacity**                              | Sets the transparency level of an element                       | `opacity: 0.5;`                                         |
| **box-shadow**                           | Adds shadow to an element                                       | `box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);`          |
| **text-shadow**                          | Adds shadow to text                                             | `text-shadow: 2px 2px 4px #000000;`                     |
| **border-radius**                        | Rounds the corners of an element                                | `border-radius: 10px;`                                  |
| **flexbox**                              | A layout model to create complex layouts with ease              | `display: flex; justify-content: space-between;`        |
| **grid**                                 | A layout system for creating two-dimensional grids              | `display: grid; grid-template-columns: repeat(3, 1fr);` |
| **visibility**                           | Controls the visibility of an element (visible, hidden)         | `visibility: hidden;`                                   |
| **cursor**                               | Changes the mouse cursor type                                   | `cursor: pointer;`                                      |
| **transition**                           | Specifies a transition effect (for hover effects, etc.)         | `transition: all 0.3s ease-in-out;`                     |
| **animation**                            | Defines keyframes and animation effects                         | `animation: slide 2s infinite;`                         |
| **box-sizing**                           | Controls box model behavior (content-box or border-box)         | `box-sizing: border-box;`                               |
| **white-space**                          | Controls how whitespace inside an element is handled            | `white-space: nowrap;`                                  |
| **vertical-align**                       | Aligns an inline element vertically with its parent             | `vertical-align: middle;`                               |
| **background-image**                     | Sets an image as the background of an element                   | `background-image: url('image.jpg');`                   |
| **background-size**                      | Specifies the size of a background image                        | `background-size: cover;`                               |

---

### Other Important CSS Features

#### 1. **Media Queries** (For Responsiveness)

* **Use**: Apply different styles based on device screen size.

```css
/* Styles for mobile devices */
@media screen and (max-width: 768px) {
  body {
    font-size: 14px;
  }
}

/* Styles for larger screens */
@media screen and (min-width: 769px) {
  body {
    font-size: 18px;
  }
}
```

#### 2. **Flexbox** (For Layout Control)

* **Use**: A more efficient layout model to distribute space in containers.

```css
.container {
  display: flex;
  justify-content: space-between;
}

.item {
  flex: 1;
}
```

#### 3. **CSS Grid** (For Two-Dimensional Layouts)

* **Use**: Create complex layouts with rows and columns.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}

.item {
  grid-column: 2;
}
```

#### 4. **Box Model** (Understanding Padding, Border, Margin, and Content)

* The **box model** is important in CSS because it helps define how an element's content is placed and styled.

  | **Property** | **Use**                                                |
  | ------------ | ------------------------------------------------------ |
  | **margin**   | Space outside the border (distance between elements)   |
  | **border**   | Defines the border surrounding the element             |
  | **padding**  | Space between the element content and its border       |
  | **content**  | The actual content of the element (text, images, etc.) |

#### 5. **Custom Properties** (CSS Variables)

* **Use**: Store and reuse values across CSS.

```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
}

button {
  background-color: var(--primary-color);
}
```

---




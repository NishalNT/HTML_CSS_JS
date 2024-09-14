# HTML_CSS_JS

## JavaScript DOM: Interacting with HTML Elements

| **DOM Method**                 | **Description**                                               | **Example**                                                            | **Usage**                                                       |
|---------------------------------|---------------------------------------------------------------|------------------------------------------------------------------------|-----------------------------------------------------------------|
| **`document.getElementById()`** | Selects an HTML element by its `id`.                          | `document.getElementById('myDiv');`                                    | Selects an element with `id="myDiv"`.                           |
| **`document.querySelector()`**  | Selects the first HTML element that matches a CSS selector.   | `document.querySelector('.button');`                                   | Selects the first element with class `button`.                  |
| **`document.querySelectorAll()`**| Selects all HTML elements that match a CSS selector.          | `document.querySelectorAll('.button');`                                | Selects all elements with class `button`.                       |
| **`element.innerHTML`**         | Gets or sets the HTML content of an element.                  | `document.getElementById('myDiv').innerHTML = 'Hello!';`               | Sets the inner HTML of `myDiv` to `"Hello!"`.                   |
| **`element.textContent`**       | Gets or sets the text content of an element.                  | `document.querySelector('p').textContent = 'New Text';`                | Sets the text content of a `<p>` tag to `"New Text"`.           |
| **`element.style`**             | Sets or modifies the inline style of an HTML element.         | `document.getElementById('myDiv').style.color = 'blue';`               | Changes the text color of `myDiv` to `"blue"`.                  |
| **`element.addEventListener()`**| Attaches an event listener to an HTML element.                | `button.addEventListener('click', () => alert('Clicked!'));`           | Executes the function when the button is clicked.               |
| **`element.setAttribute()`**    | Sets a specified attribute on an HTML element.                | `document.querySelector('img').setAttribute('src', 'image.jpg');`      | Changes the `src` of an `<img>` element to `"image.jpg"`.       |
| **`element.classList.add()`**   | Adds a class to an element's class list.                      | `document.getElementById('myDiv').classList.add('new-class');`          | Adds the `"new-class"` to `myDiv`.                              |
| **`element.remove()`**          | Removes an HTML element from the DOM.                         | `document.getElementById('myDiv').remove();`                           | Removes the `myDiv` element from the webpage.                   |




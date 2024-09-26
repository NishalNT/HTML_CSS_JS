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

## Flex-Box
### index.html
```bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="box-item-1 box">1</div>
        <div class="box-item-2 box">2</div>
        <div class="box-item-3 box">3</div>
        <div class="box-item-4 box">4</div>
        <div class="box-item-5 box">5</div>
    </div>
</body>
    <script src="script.js"></script>
</html>
```

### style.css
```bash
.box{
    flex: 1 1 calc(50% - 20px);
    width: 300px;
    height: 200px;
    border: 2px solid blue;
    background-color: lightblue;
    display: flex;
    font-size: 30px;
    align-items: center;
    justify-content: center;
}

.container{
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.box:nth-child(2){
    background-color: red;
    /* flex-basis: 200px; */
}

@media (max-width: 720px) {
    .box{
        flex: 1 1 calc(100% - 20px);
    }
}
```

### Simple javascript question
```bash
let a = 10;
let b = 20;
let str = "The output is:" + a + b; // this code witll give the output as "The output is:1020
console.log(str);
```
### Onkeyup.html
```bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=">
    <title>Document</title>
</head>
<body>
    <input class="show" id="show" onkeyup="clicked(event)" placeholder="Enter here"></input>
    <p id="msg"></p>
</body>
<script>
    function clicked(event){
        // var key = event.key;
        document.getElementById("msg").textContent = document.getElementById("show").value;
    }
</script>
</html>
```



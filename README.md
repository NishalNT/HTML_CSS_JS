# HTML_CSS_JS

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
let str = "The output is:" + a + b; // this code will give the output as "The output is:1020"
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

## Basic HTML Tags 👨‍💻👨‍💻👨‍💻

| **Tag**       | **Description**                                                    |
|---------------|--------------------------------------------------------------------|
| `<html>`      | Defines the root of an HTML document                               |
| `<head>`      | Contains metadata/information for the document                     |
| `<title>`     | Sets the title of the document (shown in browser's title bar)      |
| `<body>`      | Contains the visible page content                                  |
| `<h1> to <h6>`| Defines HTML headings from largest (`<h1>`) to smallest (`<h6>`)   |
| `<p>`         | Defines a paragraph                                                |
| `<br>`        | Inserts a line break                                               |
| `<hr>`        | Inserts a horizontal rule (line)                                   |
| `<a>`         | Defines a hyperlink                                                |
| `<img>`       | Embeds an image                                                    |
| `<ul>`        | Defines an unordered (bulleted) list                               |
| `<ol>`        | Defines an ordered (numbered) list                                 |
| `<li>`        | Defines a list item                                                |
| `<div>`       | Defines a division or section in an HTML document                  |
| `<table>`     | Defines a table                                                    |
| `<tr>`        | Defines a row in a table                                           |
| `<th>`        | Defines a header cell in a table                                   |
| `<td>`        | Defines a data cell in a table                                     |
| `<form>`      | Defines a form for user input                                      |
| `<input>`     | Defines an input field                                             |
| `<button>`    | Defines a clickable button                                         |
| `<label>`     | Defines a label for an input element                               |
| `<strong>`    | Defines important text (typically bold)                            |
| `<b>`         | Defines bold text                                                  |
| `<i>`         | Defines italic text                                                |
| `<script>`    | Defines a client-side script (e.g., JavaScript)                    |
| `<link>`      | Defines a link to an external resource (e.g., CSS file)            |



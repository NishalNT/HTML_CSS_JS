# HTML_CSS_JS

## Simple calculator

### HTML Code
```bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="./main.css">
</head>
<body>
    <div class="main">
        <div class="text-area">
            <input type="text" id="display" class="text" placeholder="0" readonly>
        </div>
        <hr>
        <div class="btn">
            <table>
                <tr>
                    <td><button value="7">7</button></td>
                    <td><button value="8">8</button></td>
                    <td><button value="9">9</button></td>
                </tr>
                <tr>
                    <td><button value="4">4</button></td>
                    <td><button value="5">5</button></td>
                    <td><button value="6">6</button></td>
                </tr>
                <tr>
                    <td><button value="1">1</button></td>
                    <td><button value="2">2</button></td>
                    <td><button value="3">3</button></td>
                </tr>
                <tr>
                    <td><button value="0">0</button></td>
                    <!-- <td><button value=".">.</button></td> -->
                    <td><button id="add" value="+">+</button></td>
                    <td><button id="subtract" value="-">-</button></td>
                </tr>
                <tr>
                    <td><button id="multiply" value="*">*</button></td>
                    <td><button id="divide" value="/">/</button></td>
                    <td><button id="clear" value="C">C</button></td>
                </tr>
                <tr>
                    <td colspan="4"><button id="equals" value="=">=</button></td>
                </tr>
            </table>
        </div>
    </div>
    <script src="./main.js"></script>
</body>
</html>

```

### CSS code
```bash
html, body {
    margin: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
}

.main {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
}

.text-area {
    margin-bottom: 10px;
}

.text {
    width: 100%;
    font-size: 2em;
    text-align: right;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    box-sizing: border-box;
}

.btn table {
    width: 100%;
    border-collapse: collapse;
}

.btn td {
    padding: 5px;
}

.btn button {
    width: 100%;
    height: 50px;
    font-size: 1.5em;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #e0e0e0;
    cursor: pointer;
}

.btn button:hover {
    background-color: #d0d0d0;
}

#equals {
    background-color: #4caf50;
    color: white;
}

#equals:hover {
    background-color: #45a049;
}

#clear {
    background-color: #f44336;
    color: white;
}

#clear:hover {
    background-color: #e53935;
}

```

### JS code
```bash
// Get all the elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

// Initialize the display value
let currentValue = '0';

// Add event listeners to all buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;

    // Handle number buttons
    if (!isNaN(value)) {
      if (currentValue === '0') {
        currentValue = value;
      } else {
        currentValue += value;
      }
      display.value = currentValue;
    }

    // Handle operator buttons
    else if (value === '+' || value === '-' || value === '*' || value === '/') {
      currentValue += value;
      display.value = currentValue;
    }

    // Handle clear button
    else if (value === 'C') {
      currentValue = '0'; // Reset currentValue to 0
      display.value = currentValue; // Update display with 0
    }

    // Handle equals button
    else if (button.id === 'equals') {
      try {
        const result = eval(currentValue);
        currentValue = result.toString();
        display.value = currentValue;
      } catch (error) {
        currentValue = 'Error';
        display.value = currentValue;
      }
    }
  });
});
```


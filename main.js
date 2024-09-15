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
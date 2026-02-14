# simple-calculator

 A simple calculator using HTML, CSS, and JavaScript that performs basic arithmetic operations using the DOM.

The core logic is contained within a single function "calculateNumbers" with "(operator)" as the placeholder. The function performs the following:
- Uses the DOM to retrieve raw string values from the user.
- Detects if fields are empty and triggers a, error warning.
- Uses "isNaN()" function to ensure only numeric values are processed.
- Implements parseFloat() to ensure the calculator supports both integers and decimal values.
- Prevents division by Zero.
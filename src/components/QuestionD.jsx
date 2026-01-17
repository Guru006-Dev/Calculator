import React, { useState } from 'react';

/**
 * Question D: Basic Calculator
 * Standard calculator with basic arithmetic operations
 */
function QuestionD() {
    const [display, setDisplay] = useState('0');
    const [previousValue, setPreviousValue] = useState(null);
    const [operation, setOperation] = useState(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);

    const inputDigit = (digit) => {
        if (waitingForOperand) {
            setDisplay(String(digit));
            setWaitingForOperand(false);
        } else {
            setDisplay(display === '0' ? String(digit) : display + digit);
        }
    };

    const inputDecimal = () => {
        if (waitingForOperand) {
            setDisplay('0.');
            setWaitingForOperand(false);
        } else if (display.indexOf('.') === -1) {
            setDisplay(display + '.');
        }
    };

    const clear = () => {
        setDisplay('0');
        setPreviousValue(null);
        setOperation(null);
        setWaitingForOperand(false);
    };

    const performOperation = (nextOperation) => {
        const inputValue = parseFloat(display);

        if (previousValue === null) {
            setPreviousValue(inputValue);
        } else if (operation) {
            const currentValue = previousValue || 0;
            const newValue = calculate(currentValue, inputValue, operation);

            setDisplay(String(newValue));
            setPreviousValue(newValue);
        }

        setWaitingForOperand(true);
        setOperation(nextOperation);
    };

    const calculate = (firstValue, secondValue, operation) => {
        switch (operation) {
            case '+':
                return firstValue + secondValue;
            case '-':
                return firstValue - secondValue;
            case '*':
                return firstValue * secondValue;
            case '/':
                return firstValue / secondValue;
            case '%':
                return firstValue % secondValue;
            default:
                return secondValue;
        }
    };

    const handleEquals = () => {
        const inputValue = parseFloat(display);

        if (previousValue !== null && operation) {
            const newValue = calculate(previousValue, inputValue, operation);
            setDisplay(String(newValue));
            setPreviousValue(null);
            setOperation(null);
            setWaitingForOperand(true);
        }
    };

    const toggleSign = () => {
        const value = parseFloat(display);
        setDisplay(String(value * -1));
    };

    return (
        <div className="component-container">
            <div className="component-header">
                <h1>Question D: Calculator</h1>
                <p>A fully functional calculator with basic arithmetic operations</p>
            </div>

            <div className="card" style={{ maxWidth: '500px', margin: '0 auto' }}>
                <div className="calculator-grid">
                    <div className="calculator-display">
                        {display}
                    </div>

                    <button className="calc-btn clear" onClick={clear}>AC</button>
                    <button className="calc-btn" onClick={toggleSign}>+/-</button>
                    <button className="calc-btn" onClick={() => performOperation('%')}>%</button>
                    <button className="calc-btn operator" onClick={() => performOperation('/')}>÷</button>

                    <button className="calc-btn" onClick={() => inputDigit(7)}>7</button>
                    <button className="calc-btn" onClick={() => inputDigit(8)}>8</button>
                    <button className="calc-btn" onClick={() => inputDigit(9)}>9</button>
                    <button className="calc-btn operator" onClick={() => performOperation('*')}>×</button>

                    <button className="calc-btn" onClick={() => inputDigit(4)}>4</button>
                    <button className="calc-btn" onClick={() => inputDigit(5)}>5</button>
                    <button className="calc-btn" onClick={() => inputDigit(6)}>6</button>
                    <button className="calc-btn operator" onClick={() => performOperation('-')}>−</button>

                    <button className="calc-btn" onClick={() => inputDigit(1)}>1</button>
                    <button className="calc-btn" onClick={() => inputDigit(2)}>2</button>
                    <button className="calc-btn" onClick={() => inputDigit(3)}>3</button>
                    <button className="calc-btn operator" onClick={() => performOperation('+')}>+</button>

                    <button className="calc-btn" onClick={() => inputDigit(0)} style={{ gridColumn: 'span 2' }}>0</button>
                    <button className="calc-btn" onClick={inputDecimal}>.</button>
                    <button className="calc-btn equals" onClick={handleEquals}>=</button>
                </div>

                <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(102, 126, 234, 0.05)', borderRadius: '12px' }}>
                    <h4 style={{ marginBottom: '0.5rem' }}>Features:</h4>
                    <ul style={{ marginLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                        <li>Basic arithmetic: +, −, ×, ÷</li>
                        <li>Modulo operation (%)</li>
                        <li>Decimal point support</li>
                        <li>Sign toggle (+/-)</li>
                        <li>Clear (AC) functionality</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default QuestionD;

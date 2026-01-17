import React, { useState } from 'react';

/**
 * Question B: Sum of Digits
 * Read a number and provide sum of digits of the number
 */
function QuestionB() {
    const [number, setNumber] = useState('');
    const [result, setResult] = useState(null);

    const calculateSumOfDigits = (num) => {
        const numStr = Math.abs(num).toString();
        let sum = 0;
        const digits = [];

        for (let digit of numStr) {
            const digitValue = parseInt(digit);
            digits.push(digitValue);
            sum += digitValue;
        }

        return { sum, digits, original: num };
    };

    const handleCalculate = () => {
        const num = parseInt(number);

        if (isNaN(num)) {
            alert('Please enter a valid number');
            return;
        }

        setResult(calculateSumOfDigits(num));
    };

    return (
        <div className="component-container">
            <div className="component-header">
                <h1>Question B: Sum of Digits</h1>
                <p>Calculate the sum of all digits in a number</p>
            </div>

            <div className="card">
                <div className="input-group">
                    <label htmlFor="number">Enter a Number:</label>
                    <input
                        type="number"
                        id="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder="Enter any integer (e.g., 12345)"
                        onKeyPress={(e) => e.key === 'Enter' && handleCalculate()}
                    />
                </div>

                <button className="btn" onClick={handleCalculate}>
                    Calculate Sum of Digits
                </button>

                {result && (
                    <div className="result-box">
                        <h3>Result</h3>

                        <div className="result-item">
                            <strong>Original Number:</strong> {result.original}
                        </div>

                        <div className="result-item">
                            <strong>Digits:</strong> {result.digits.join(' + ')}
                        </div>

                        <div className="result-item">
                            <strong>Sum of Digits:</strong> {result.sum}
                        </div>

                        <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(102, 126, 234, 0.1)', borderRadius: '8px' }}>
                            <strong>Calculation:</strong> {result.digits.join(' + ')} = {result.sum}
                        </div>
                    </div>
                )}
            </div>

            <div style={{ marginTop: '2rem' }}>
                <div className="card">
                    <h3 style={{ marginBottom: '1rem' }}>Examples:</h3>
                    <div className="grid-3">
                        <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                            <strong>123</strong> → 1 + 2 + 3 = 6
                        </div>
                        <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                            <strong>9876</strong> → 9 + 8 + 7 + 6 = 30
                        </div>
                        <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                            <strong>555</strong> → 5 + 5 + 5 = 15
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuestionB;

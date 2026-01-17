import React, { useState } from 'react';

/**
 * Question 8: Factorial Calculator
 * Calculate the factorial of a number (standalone version)
 */
function Question8() {
    const [number, setNumber] = useState('');
    const [result, setResult] = useState(null);

    const calculateFactorial = (n) => {
        if (n < 0) return null;
        if (n === 0 || n === 1) return 1;

        let factorial = 1;
        const steps = [];

        for (let i = n; i >= 1; i--) {
            steps.push(i);
            factorial *= i;
        }

        return { value: factorial, steps };
    };

    const handleCalculate = () => {
        const num = parseInt(number);

        if (isNaN(num)) {
            alert('Please enter a valid number');
            return;
        }

        if (num < 0) {
            alert('Factorial is not defined for negative numbers');
            return;
        }

        if (num > 170) {
            alert('Number too large! Enter a number ≤ 170');
            return;
        }

        const factorialResult = calculateFactorial(num);

        setResult({
            number: num,
            factorial: factorialResult.value,
            steps: factorialResult.steps,
            notation: `${num}!`
        });
    };

    const handleClear = () => {
        setNumber('');
        setResult(null);
    };

    return (
        <div className="component-container">
            <div className="component-header">
                <h1>Question 8: Factorial Calculator</h1>
                <p>Calculate the factorial of any non-negative integer</p>
            </div>

            <div className="card">
                <div className="input-group">
                    <label htmlFor="factorial-number">Enter a Number:</label>
                    <input
                        type="number"
                        id="factorial-number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder="Enter a non-negative integer"
                        onKeyPress={(e) => e.key === 'Enter' && handleCalculate()}
                        min="0"
                    />
                </div>

                <div className="btn-group">
                    <button className="btn" onClick={handleCalculate}>
                        Calculate Factorial
                    </button>
                    <button className="btn btn-secondary" onClick={handleClear}>
                        Clear
                    </button>
                </div>

                {result && (
                    <div className="result-box">
                        <h3>Factorial of {result.number}</h3>

                        <div
                            className="result-item"
                            style={{
                                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)',
                                padding: '2rem',
                                borderRadius: '12px',
                                border: '2px solid #667eea',
                                textAlign: 'center'
                            }}
                        >
                            <strong style={{ fontSize: '1.5rem' }}>{result.notation} =</strong>
                            <div style={{
                                fontSize: '2.5rem',
                                fontWeight: 'bold',
                                marginTop: '1rem',
                                color: '#667eea',
                                wordBreak: 'break-all'
                            }}>
                                {result.factorial.toLocaleString()}
                            </div>
                        </div>

                        {result.steps && result.steps.length > 1 && (
                            <div className="result-item">
                                <strong>Calculation Steps:</strong>
                                <div style={{ marginTop: '1rem', fontFamily: 'monospace', fontSize: '1.1rem' }}>
                                    {result.notation} = {result.steps.join(' × ')}
                                </div>
                            </div>
                        )}

                        <div className="result-item">
                            <strong>Number of Digits:</strong> {result.factorial.toString().length}
                        </div>
                    </div>
                )}
            </div>

            <div style={{ marginTop: '2rem' }}>
                <div className="card">
                    <h3 style={{ marginBottom: '1rem' }}>Factorial Reference</h3>
                    <div className="grid-2">
                        <div>
                            <h4 style={{ marginBottom: '0.5rem', color: '#667eea' }}>Definition</h4>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                The factorial of n (denoted n!) is the product of all positive integers less than or equal to n.
                            </p>
                            <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'rgba(102, 126, 234, 0.1)', borderRadius: '8px', fontFamily: 'monospace' }}>
                                n! = n × (n-1) × (n-2) × ... × 2 × 1
                            </div>
                        </div>
                        <div>
                            <h4 style={{ marginBottom: '0.5rem', color: '#667eea' }}>Examples</h4>
                            <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                <div>0! = 1</div>
                                <div>1! = 1</div>
                                <div>5! = 5 × 4 × 3 × 2 × 1 = 120</div>
                                <div>10! = 3,628,800</div>
                                <div>20! = 2,432,902,008,176,640,000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Question8;

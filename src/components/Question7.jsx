import React, { useState } from 'react';

/**
 * Question 7: Armstrong Number Checker
 * Check if a number is an Armstrong number
 * Armstrong number: sum of cubes of digits equals the number itself
 * Example: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153
 */
function Question7() {
    const [number, setNumber] = useState('');
    const [result, setResult] = useState(null);

    const checkArmstrong = () => {
        const num = parseInt(number);

        if (isNaN(num) || num < 0) {
            alert('Please enter a valid non-negative integer');
            return;
        }

        const digits = num.toString().split('').map(Number);
        const numDigits = digits.length;

        const sumOfPowers = digits.reduce((sum, digit) => {
            return sum + Math.pow(digit, numDigits);
        }, 0);

        const isArmstrong = sumOfPowers === num;

        setResult({
            number: num,
            digits: digits,
            numDigits: numDigits,
            calculation: digits.map(d => `${d}^${numDigits}`).join(' + '),
            calculationValues: digits.map(d => Math.pow(d, numDigits)),
            sum: sumOfPowers,
            isArmstrong: isArmstrong
        });
    };

    const handleClear = () => {
        setNumber('');
        setResult(null);
    };

    return (
        <div className="component-container">
            <div className="component-header">
                <h1>Question 7: Armstrong Number Checker</h1>
                <p>Check if a number is an Armstrong number (Narcissistic number)</p>
            </div>

            <div className="card">
                <div className="input-group">
                    <label htmlFor="armstrong-number">Enter a Number:</label>
                    <input
                        type="number"
                        id="armstrong-number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder="Enter a number (e.g., 153, 9474)"
                        onKeyPress={(e) => e.key === 'Enter' && checkArmstrong()}
                        min="0"
                    />
                </div>

                <div className="btn-group">
                    <button className="btn" onClick={checkArmstrong}>
                        Check Armstrong
                    </button>
                    <button className="btn btn-secondary" onClick={handleClear}>
                        Clear
                    </button>
                </div>

                {result && (
                    <div className="result-box">
                        <h3>Analysis for {result.number}</h3>

                        <div className="result-item">
                            <strong>Number of Digits:</strong> {result.numDigits}
                        </div>

                        <div className="result-item">
                            <strong>Digits:</strong> {result.digits.join(', ')}
                        </div>

                        <div className="result-item">
                            <strong>Calculation:</strong>
                            <div style={{ marginTop: '0.5rem', fontFamily: 'monospace' }}>
                                {result.calculation} = {result.calculationValues.join(' + ')}
                            </div>
                        </div>

                        <div className="result-item">
                            <strong>Sum:</strong> {result.sum}
                        </div>

                        <div
                            className="result-item"
                            style={{
                                background: result.isArmstrong
                                    ? 'linear-gradient(135deg, rgba(74, 172, 254, 0.2) 0%, rgba(0, 242, 254, 0.2) 100%)'
                                    : 'linear-gradient(135deg, rgba(240, 147, 251, 0.2) 0%, rgba(245, 87, 108, 0.2) 100%)',
                                padding: '1.5rem',
                                borderRadius: '12px',
                                border: result.isArmstrong ? '2px solid #4facfe' : '2px solid #f5576c'
                            }}
                        >
                            <strong style={{ fontSize: '1.2rem' }}>Result:</strong>
                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '0.5rem' }}>
                                {result.isArmstrong ? '✓ ARMSTRONG NUMBER' : '✗ NOT AN ARMSTRONG NUMBER'}
                            </div>
                            <div style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                                {result.isArmstrong
                                    ? `${result.number} = ${result.sum} ✓`
                                    : `${result.number} ≠ ${result.sum} ✗`
                                }
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div style={{ marginTop: '2rem' }}>
                <div className="card">
                    <h3 style={{ marginBottom: '1rem' }}>Armstrong Numbers Examples</h3>
                    <div className="grid-3">
                        <div style={{ padding: '1rem', background: 'rgba(74, 172, 254, 0.1)', borderRadius: '8px' }}>
                            <strong>153</strong>
                            <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                1³ + 5³ + 3³ = 153 ✓
                            </div>
                        </div>
                        <div style={{ padding: '1rem', background: 'rgba(74, 172, 254, 0.1)', borderRadius: '8px' }}>
                            <strong>370</strong>
                            <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                3³ + 7³ + 0³ = 370 ✓
                            </div>
                        </div>
                        <div style={{ padding: '1rem', background: 'rgba(74, 172, 254, 0.1)', borderRadius: '8px' }}>
                            <strong>9474</strong>
                            <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                9⁴ + 4⁴ + 7⁴ + 4⁴ = 9474 ✓
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(102, 126, 234, 0.1)', borderRadius: '8px' }}>
                        <strong>Definition:</strong> An Armstrong number is equal to the sum of its digits each raised to the power of the number of digits.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Question7;

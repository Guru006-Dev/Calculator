import React, { useState } from 'react';

/**
 * Question 9: Greatest of 3 Numbers
 * Find the maximum value among three numbers
 */
function Question9() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [num3, setNum3] = useState('');
    const [result, setResult] = useState(null);

    const findGreatest = () => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        const n3 = parseFloat(num3);

        if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
            alert('Please enter valid numbers in all fields');
            return;
        }

        const greatest = Math.max(n1, n2, n3);
        const numbers = [
            { value: n1, label: 'First Number', isGreatest: n1 === greatest },
            { value: n2, label: 'Second Number', isGreatest: n2 === greatest },
            { value: n3, label: 'Third Number', isGreatest: n3 === greatest }
        ];

        setResult({
            numbers: numbers,
            greatest: greatest,
            allEqual: n1 === n2 && n2 === n3
        });
    };

    const handleClear = () => {
        setNum1('');
        setNum2('');
        setNum3('');
        setResult(null);
    };

    return (
        <div className="component-container">
            <div className="component-header">
                <h1>Question 9: Greatest of 3 Numbers</h1>
                <p>Find the maximum value among three numbers</p>
            </div>

            <div className="card">
                <div className="grid-3">
                    <div className="input-group">
                        <label htmlFor="num1">First Number:</label>
                        <input
                            type="number"
                            id="num1"
                            value={num1}
                            onChange={(e) => setNum1(e.target.value)}
                            placeholder="Enter first number"
                            step="any"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="num2">Second Number:</label>
                        <input
                            type="number"
                            id="num2"
                            value={num2}
                            onChange={(e) => setNum2(e.target.value)}
                            placeholder="Enter second number"
                            step="any"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="num3">Third Number:</label>
                        <input
                            type="number"
                            id="num3"
                            value={num3}
                            onChange={(e) => setNum3(e.target.value)}
                            placeholder="Enter third number"
                            step="any"
                            onKeyPress={(e) => e.key === 'Enter' && findGreatest()}
                        />
                    </div>
                </div>

                <div className="btn-group">
                    <button className="btn" onClick={findGreatest}>
                        Find Greatest
                    </button>
                    <button className="btn btn-secondary" onClick={handleClear}>
                        Clear
                    </button>
                </div>

                {result && (
                    <div className="result-box">
                        <h3>Comparison Result</h3>

                        <div className="grid-3" style={{ marginTop: '1.5rem' }}>
                            {result.numbers.map((num, index) => (
                                <div
                                    key={index}
                                    style={{
                                        padding: '1.5rem',
                                        background: num.isGreatest
                                            ? 'linear-gradient(135deg, rgba(74, 172, 254, 0.3) 0%, rgba(0, 242, 254, 0.3) 100%)'
                                            : 'rgba(255, 255, 255, 0.03)',
                                        border: num.isGreatest ? '2px solid #4facfe' : '1px solid var(--card-border)',
                                        borderRadius: '12px',
                                        textAlign: 'center',
                                        transform: num.isGreatest ? 'scale(1.05)' : 'scale(1)',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                                        {num.label}
                                    </div>
                                    <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                                        {num.value}
                                    </div>
                                    {num.isGreatest && (
                                        <div style={{ marginTop: '0.5rem', color: '#4facfe', fontWeight: 'bold' }}>
                                            ★ GREATEST ★
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div
                            className="result-item"
                            style={{
                                marginTop: '2rem',
                                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)',
                                padding: '2rem',
                                borderRadius: '12px',
                                border: '2px solid #667eea',
                                textAlign: 'center'
                            }}
                        >
                            <strong style={{ fontSize: '1.2rem' }}>Maximum Value:</strong>
                            <div style={{
                                fontSize: '3rem',
                                fontWeight: 'bold',
                                marginTop: '0.5rem',
                                color: '#667eea'
                            }}>
                                {result.greatest}
                            </div>
                            {result.allEqual && (
                                <div style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
                                    All three numbers are equal
                                </div>
                            )}
                        </div>

                        <div className="result-item">
                            <strong>Comparison Logic:</strong>
                            <div style={{ marginTop: '0.5rem', fontFamily: 'monospace' }}>
                                max({num1}, {num2}, {num3}) = {result.greatest}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div style={{ marginTop: '2rem' }}>
                <div className="card">
                    <h3 style={{ marginBottom: '1rem' }}>How It Works</h3>
                    <div className="grid-2">
                        <div>
                            <h4 style={{ marginBottom: '0.5rem', color: '#667eea' }}>Method 1: If-Else</h4>
                            <div style={{ padding: '1rem', background: 'rgba(102, 126, 234, 0.1)', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                                if (a ≥ b && a ≥ c)<br />
                                &nbsp;&nbsp;greatest = a<br />
                                else if (b ≥ c)<br />
                                &nbsp;&nbsp;greatest = b<br />
                                else<br />
                                &nbsp;&nbsp;greatest = c
                            </div>
                        </div>
                        <div>
                            <h4 style={{ marginBottom: '0.5rem', color: '#667eea' }}>Method 2: Math.max()</h4>
                            <div style={{ padding: '1rem', background: 'rgba(102, 126, 234, 0.1)', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                                greatest = Math.max(a, b, c)
                            </div>
                            <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                This component uses Math.max() for simplicity and efficiency.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Question9;

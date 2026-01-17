import React, { useState } from 'react';

/**
 * Question 6: Display First N Natural Numbers
 * Generate and display 1 to N natural numbers
 */
function Question6() {
    const [n, setN] = useState('');
    const [numbers, setNumbers] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const generateNumbers = () => {
        const num = parseInt(n);

        if (isNaN(num) || num <= 0) {
            alert('Please enter a positive integer');
            return;
        }

        const naturalNumbers = Array.from({ length: num }, (_, i) => i + 1);
        setNumbers(naturalNumbers);
        setShowResult(true);
    };

    const handleClear = () => {
        setN('');
        setNumbers([]);
        setShowResult(false);
    };

    return (
        <div className="component-container">
            <div className="component-header">
                <h1>Question 6: Display Natural Numbers</h1>
                <p>Generate and display the first N natural numbers</p>
            </div>

            <div className="card">
                <div className="input-group">
                    <label htmlFor="n-value">Enter N (positive integer):</label>
                    <input
                        type="number"
                        id="n-value"
                        value={n}
                        onChange={(e) => setN(e.target.value)}
                        placeholder="Enter a number (e.g., 10)"
                        onKeyPress={(e) => e.key === 'Enter' && generateNumbers()}
                        min="1"
                    />
                </div>

                <div className="btn-group">
                    <button className="btn" onClick={generateNumbers}>
                        Generate Numbers
                    </button>
                    <button className="btn btn-secondary" onClick={handleClear}>
                        Clear
                    </button>
                </div>

                {showResult && (
                    <div className="result-box">
                        <h3>First {n} Natural Numbers</h3>

                        <div className="result-item">
                            <strong>Range:</strong> 1 to {n}
                        </div>

                        <div className="result-item">
                            <strong>Count:</strong> {numbers.length} numbers
                        </div>

                        <div style={{
                            marginTop: '1rem',
                            padding: '1.5rem',
                            background: 'rgba(102, 126, 234, 0.1)',
                            borderRadius: '12px',
                            maxHeight: '400px',
                            overflowY: 'auto'
                        }}>
                            <strong>Numbers:</strong>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(60px, 1fr))',
                                gap: '0.5rem',
                                marginTop: '1rem'
                            }}>
                                {numbers.map((num) => (
                                    <div
                                        key={num}
                                        style={{
                                            padding: '0.75rem',
                                            background: 'var(--primary-gradient)',
                                            borderRadius: '8px',
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                            fontSize: '1.1rem',
                                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                                        }}
                                    >
                                        {num}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(0, 242, 254, 0.1)', borderRadius: '8px' }}>
                            <strong>Formula:</strong> Natural numbers = {'{1, 2, 3, ..., n}'}
                        </div>
                    </div>
                )}
            </div>

            <div style={{ marginTop: '2rem' }}>
                <div className="card">
                    <h3 style={{ marginBottom: '1rem' }}>About Natural Numbers</h3>
                    <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                        <p>• Natural numbers are counting numbers starting from 1</p>
                        <p>• The set of first n natural numbers: {'{1, 2, 3, 4, ..., n}'}</p>
                        <p>• Formula for sum: n(n+1)/2</p>
                        <p>• Example: First 5 natural numbers = 1, 2, 3, 4, 5</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Question6;

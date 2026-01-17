import React, { useState } from 'react';

/**
 * Question A: Mathematical Operations
 * - Calculate factorial of a number
 * - Generate Fibonacci series
 * - Check if a number is prime
 */
function QuestionA() {
    const [number, setNumber] = useState('');
    const [results, setResults] = useState(null);

    // Calculate factorial
    const calculateFactorial = (n) => {
        if (n < 0) return 'Invalid (negative number)';
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    };

    // Generate Fibonacci series
    const generateFibonacci = (n) => {
        if (n < 1) return [];
        if (n === 1) return [0];
        if (n === 2) return [0, 1];

        const fib = [0, 1];
        for (let i = 2; i < n; i++) {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
        return fib;
    };

    // Check if number is prime
    const isPrime = (n) => {
        if (n < 2) return false;
        if (n === 2) return true;
        if (n % 2 === 0) return false;

        for (let i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i === 0) return false;
        }
        return true;
    };

    const handleCalculate = () => {
        const num = parseInt(number);

        if (isNaN(num)) {
            alert('Please enter a valid number');
            return;
        }

        setResults({
            number: num,
            factorial: calculateFactorial(num),
            fibonacci: generateFibonacci(num),
            isPrime: isPrime(num)
        });
    };

    return (
        <div className="component-container">
            <div className="component-header">
                <h1>Question A: Mathematical Operations</h1>
                <p>Calculate factorial, generate fibonacci series, and check if prime</p>
            </div>

            <div className="card">
                <div className="input-group">
                    <label htmlFor="number">Enter a Number:</label>
                    <input
                        type="number"
                        id="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder="Enter a positive integer"
                        onKeyPress={(e) => e.key === 'Enter' && handleCalculate()}
                    />
                </div>

                <button className="btn" onClick={handleCalculate}>
                    Calculate All
                </button>

                {results && (
                    <div className="result-box">
                        <h3>Results for {results.number}</h3>

                        <div className="result-item">
                            <strong>Factorial:</strong> {results.number}! = {results.factorial.toString()}
                        </div>

                        <div className="result-item">
                            <strong>Fibonacci Series (first {results.number} terms):</strong>
                            <div style={{ marginTop: '0.5rem' }}>
                                {results.fibonacci.join(', ')}
                            </div>
                        </div>

                        <div className="result-item">
                            <strong>Prime Number Check:</strong> {results.number} is {results.isPrime ? '✓ PRIME' : '✗ NOT PRIME'}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default QuestionA;

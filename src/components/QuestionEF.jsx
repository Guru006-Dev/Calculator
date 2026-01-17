import React, { useState, useEffect } from 'react';

/**
 * Question E/F: Kids Calculator Game
 * Calculator with gamification for kids learning math
 */
function QuestionEF() {
    const [display, setDisplay] = useState('0');
    const [previousValue, setPreviousValue] = useState(null);
    const [operation, setOperation] = useState(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);

    // Game state
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [totalCalculations, setTotalCalculations] = useState(0);
    const [showCelebration, setShowCelebration] = useState(false);
    const [currentEmoji, setCurrentEmoji] = useState('🧮');

    const emojis = {
        start: '🧮',
        correct: '🎉',
        milestone: '🌟',
        super: '🚀',
        genius: '🧠'
    };

    const encouragements = [
        "Great job!",
        "You're a math star!",
        "Amazing!",
        "Keep going!",
        "Fantastic!",
        "You're on fire!",
        "Brilliant!",
        "Superb!"
    ];

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
                return secondValue !== 0 ? firstValue / secondValue : 0;
            default:
                return secondValue;
        }
    };

    const celebrate = () => {
        setShowCelebration(true);
        setTimeout(() => setShowCelebration(false), 1500);
    };

    const handleEquals = () => {
        const inputValue = parseFloat(display);

        if (previousValue !== null && operation) {
            const newValue = calculate(previousValue, inputValue, operation);
            setDisplay(String(newValue));
            setPreviousValue(null);
            setOperation(null);
            setWaitingForOperand(true);

            // Update game score
            const points = Math.floor(Math.abs(newValue) / 10) + 10;
            setScore(score + points);
            setStreak(streak + 1);
            setTotalCalculations(totalCalculations + 1);

            // Determine emoji based on performance
            if (streak >= 10) {
                setCurrentEmoji(emojis.genius);
            } else if (streak >= 7) {
                setCurrentEmoji(emojis.super);
            } else if (streak >= 4) {
                setCurrentEmoji(emojis.milestone);
            } else {
                setCurrentEmoji(emojis.correct);
            }

            celebrate();
        }
    };

    const resetGame = () => {
        setScore(0);
        setStreak(0);
        setTotalCalculations(0);
        setCurrentEmoji(emojis.start);
        clear();
    };

    // Get random encouragement
    const getEncouragement = () => {
        return encouragements[Math.floor(Math.random() * encouragements.length)];
    };

    return (
        <div className="component-container">
            <div className="component-header">
                <h1>Question E/F: Kids Calculator Game 🎮</h1>
                <p>Learn math while having fun! Earn points with every calculation</p>
            </div>

            <div className="game-container">
                {/* Score Display */}
                <div className="score-display">
                    <div className="score-card">
                        <h3>Score</h3>
                        <div className="value">{score}</div>
                    </div>
                    <div className="score-card">
                        <h3>Streak</h3>
                        <div className="value">{streak} 🔥</div>
                    </div>
                    <div className="score-card">
                        <h3>Total</h3>
                        <div className="value">{totalCalculations}</div>
                    </div>
                </div>

                {/* Emoji Display */}
                <div className="emoji">
                    <span className={showCelebration ? 'animate-pulse' : ''}>
                        {currentEmoji}
                    </span>
                </div>

                {showCelebration && (
                    <div style={{
                        textAlign: 'center',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        background: 'var(--primary-gradient)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        marginBottom: '1rem'
                    }}>
                        {getEncouragement()}
                    </div>
                )}

                {/* Calculator */}
                <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <div className="calculator-grid">
                        <div className="calculator-display" style={{
                            background: 'linear-gradient(135deg, rgba(74, 172, 254, 0.2) 0%, rgba(0, 242, 254, 0.2) 100%)',
                            border: '2px solid rgba(74, 172, 254, 0.5)'
                        }}>
                            {display}
                        </div>

                        <button className="calc-btn clear" onClick={clear}>AC</button>
                        <button className="calc-btn btn-secondary" onClick={resetGame}>
                            Reset Game
                        </button>
                        <button className="calc-btn operator" onClick={() => performOperation('÷')}>÷</button>

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
                        <button className="calc-btn equals" onClick={handleEquals}>
                            = ✨
                        </button>
                    </div>
                </div>

                {/* Game Instructions */}
                <div className="card" style={{ marginTop: '2rem', maxWidth: '600px', margin: '2rem auto 0' }}>
                    <h3 style={{ marginBottom: '1rem' }}>🎯 How to Play:</h3>
                    <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                        <p>• Use the calculator to solve math problems</p>
                        <p>• Press "=" to complete a calculation and earn points</p>
                        <p>• Build your streak by solving problems consecutively</p>
                        <p>• Watch your emoji upgrade as you improve!</p>
                        <p style={{ marginTop: '1rem', padding: '0.5rem', background: 'rgba(74, 172, 254, 0.1)', borderRadius: '8px' }}>
                            <strong>Score System:</strong> Larger numbers = More points! 🌟
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuestionEF;

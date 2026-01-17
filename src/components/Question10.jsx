import React, { useState } from 'react';

/**
 * Question 10: 4-Box Ball Game
 * Complex game with colored balls in 4 boxes with three choice operations
 */
function Question10() {
    const [initialValue, setInitialValue] = useState('');
    const [boxes, setBoxes] = useState(null);
    const [history, setHistory] = useState([]);

    const colors = {
        A: { bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', name: 'Violet' },
        B: { bg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', name: 'Orange' },
        C: { bg: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', name: 'Green' },
        D: { bg: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', name: 'White' }
    };

    const initializeGame = () => {
        const initial = parseInt(initialValue);
        if (isNaN(initial) || initial <= 0) {
            alert('Please enter a positive integer');
            return;
        }

        const newBoxes = {
            A: initial,
            B: initial * 2,
            C: initial * 4,
            D: initial * 8
        };

        setBoxes(newBoxes);
        setHistory([{ action: 'Game Started', boxes: { ...newBoxes } }]);
    };

    const choice1 = () => {
        if (!boxes) return;

        const newBoxes = {
            A: boxes.A * 2,
            B: boxes.B * 2,
            C: boxes.C * 2,
            D: boxes.D * 2
        };

        setBoxes(newBoxes);
        setHistory([...history, { action: 'Choice 1: Doubled all boxes', boxes: { ...newBoxes } }]);
    };

    const choice2 = () => {
        if (!boxes) return;

        const newBoxes = {
            A: 0,
            B: 0,
            C: 0,
            D: boxes.A + boxes.B + boxes.C + boxes.D
        };

        setBoxes(newBoxes);
        setHistory([...history, { action: 'Choice 2: Moved all to last box', boxes: { ...newBoxes } }]);
    };

    const choice3 = () => {
        if (!boxes) return;

        const newBoxes = {
            A: 0,
            B: boxes.B + boxes.A,
            C: 0,
            D: boxes.D + boxes.C
        };

        setBoxes(newBoxes);
        setHistory([...history, { action: 'Choice 3: Odd boxes to even boxes', boxes: { ...newBoxes } }]);
    };

    const resetGame = () => {
        setInitialValue('');
        setBoxes(null);
        setHistory([]);
    };

    const getTotalBalls = () => {
        if (!boxes) return 0;
        return boxes.A + boxes.B + boxes.C + boxes.D;
    };

    return (
        <div className="component-container">
            <div className="component-header">
                <h1>Question 10: 4-Box Ball Game 🎮</h1>
                <p>Interactive ball distribution game with colored boxes and strategic moves</p>
            </div>

            {!boxes ? (
                <div className="card">
                    <h3 style={{ marginBottom: '1.5rem' }}>Start New Game</h3>
                    <div className="input-group">
                        <label htmlFor="initial-value">Enter Initial Value:</label>
                        <input
                            type="number"
                            id="initial-value"
                            value={initialValue}
                            onChange={(e) => setInitialValue(e.target.value)}
                            placeholder="Enter a positive integer"
                            onKeyPress={(e) => e.key === 'Enter' && initializeGame()}
                            min="1"
                        />
                    </div>
                    <button className="btn" onClick={initializeGame}>
                        Start Game
                    </button>

                    <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(102, 126, 234, 0.1)', borderRadius: '12px' }}>
                        <h4 style={{ marginBottom: '1rem' }}>Game Rules:</h4>
                        <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            <p><strong>Initial Setup:</strong></p>
                            <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                                <li>Box A (Violet): n balls</li>
                                <li>Box B (Orange): 2n balls</li>
                                <li>Box C (Green): 4n balls</li>
                                <li>Box D (White): 8n balls</li>
                            </ul>
                            <p style={{ marginTop: '1rem' }}><strong>Choices:</strong></p>
                            <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                                <li><strong>Choice 1:</strong> Double balls in all boxes</li>
                                <li><strong>Choice 2:</strong> Move all balls to Box D</li>
                                <li><strong>Choice 3:</strong> Move odd boxes (A, C) to even boxes (B, D)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                            <h3>Game Board</h3>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ padding: '0.5rem 1rem', background: 'rgba(102, 126, 234, 0.2)', borderRadius: '8px' }}>
                                    <strong>Total Balls:</strong> {getTotalBalls()}
                                </div>
                                <button className="btn btn-secondary" onClick={resetGame}>
                                    Reset Game
                                </button>
                            </div>
                        </div>

                        <div className="grid-2" style={{ gap: '1.5rem', marginBottom: '2rem' }}>
                            {Object.keys(boxes).map((box) => (
                                <div
                                    key={box}
                                    style={{
                                        background: colors[box].bg,
                                        padding: '2rem',
                                        borderRadius: '16px',
                                        textAlign: 'center',
                                        boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                                        animation: 'fadeIn 0.5s ease',
                                        minHeight: '150px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                                        Box {box}
                                    </div>
                                    <div style={{ fontSize: '0.9rem', opacity: 0.9, marginBottom: '1rem' }}>
                                        {colors[box].name} Balls
                                    </div>
                                    <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                                        {boxes[box]}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: '2rem' }}>
                            <h4 style={{ marginBottom: '1rem' }}>Game Choices</h4>
                            <div className="grid-3">
                                <button
                                    className="btn"
                                    onClick={choice1}
                                    style={{ padding: '1.5rem', flexDirection: 'column', height: 'auto' }}
                                >
                                    <strong>Choice 1</strong>
                                    <div style={{ fontSize: '0.9rem', marginTop: '0.5rem', opacity: 0.9 }}>
                                        Double all boxes
                                    </div>
                                </button>

                                <button
                                    className="btn btn-secondary"
                                    onClick={choice2}
                                    style={{ padding: '1.5rem', flexDirection: 'column', height: 'auto' }}
                                >
                                    <strong>Choice 2</strong>
                                    <div style={{ fontSize: '0.9rem', marginTop: '0.5rem', opacity: 0.9 }}>
                                        All to Box D
                                    </div>
                                </button>

                                <button
                                    className="btn btn-success"
                                    onClick={choice3}
                                    style={{ padding: '1.5rem', flexDirection: 'column', height: 'auto' }}
                                >
                                    <strong>Choice 3</strong>
                                    <div style={{ fontSize: '0.9rem', marginTop: '0.5rem', opacity: 0.9 }}>
                                        Odd → Even
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {history.length > 1 && (
                        <div className="card" style={{ marginTop: '2rem' }}>
                            <h3 style={{ marginBottom: '1rem' }}>Move History</h3>
                            <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                {history.map((entry, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            padding: '1rem',
                                            marginBottom: '0.5rem',
                                            background: index === history.length - 1
                                                ? 'rgba(74, 172, 254, 0.1)'
                                                : 'rgba(255, 255, 255, 0.03)',
                                            borderRadius: '8px',
                                            borderLeft: index === history.length - 1
                                                ? '3px solid #4facfe'
                                                : '3px solid var(--card-border)'
                                        }}
                                    >
                                        <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
                                            {entry.action}
                                        </div>
                                        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                            <span>A: {entry.boxes.A}</span>
                                            <span>B: {entry.boxes.B}</span>
                                            <span>C: {entry.boxes.C}</span>
                                            <span>D: {entry.boxes.D}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default Question10;

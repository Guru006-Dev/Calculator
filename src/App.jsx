import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import QuestionA from './components/QuestionA';
import QuestionB from './components/QuestionB';
import QuestionC from './components/QuestionC';
import QuestionD from './components/QuestionD';
import QuestionEF from './components/QuestionEF';

function Home() {
    return (
        <div className="component-container">
            <div className="component-header">
                <h1>ReactJS Assignment Questions</h1>
                <p>Select a question to explore different React concepts</p>
            </div>

            <div className="grid-2" style={{ marginTop: '3rem' }}>
                <Link to="/question-a" style={{ textDecoration: 'none' }}>
                    <div className="card" style={{ height: '100%', cursor: 'pointer' }}>
                        <h2 style={{ color: '#667eea', marginBottom: '1rem' }}>Question A</h2>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Mathematical Operations</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            • Calculate Factorial<br />
                            • Generate Fibonacci Series<br />
                            • Check Prime Numbers
                        </p>
                    </div>
                </Link>

                <Link to="/question-b" style={{ textDecoration: 'none' }}>
                    <div className="card" style={{ height: '100%', cursor: 'pointer' }}>
                        <h2 style={{ color: '#f5576c', marginBottom: '1rem' }}>Question B</h2>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Sum of Digits</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            Read a number and calculate the sum of all its digits
                        </p>
                    </div>
                </Link>

                <Link to="/question-c" style={{ textDecoration: 'none' }}>
                    <div className="card" style={{ height: '100%', cursor: 'pointer' }}>
                        <h2 style={{ color: '#4facfe', marginBottom: '1rem' }}>Question C</h2>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Question Paper Selector</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            Implemented using both Class and Function Components<br />
                            • Odd Roll → Set 1<br />
                            • Even Roll → Set 2
                        </p>
                    </div>
                </Link>

                <Link to="/question-d" style={{ textDecoration: 'none' }}>
                    <div className="card" style={{ height: '100%', cursor: 'pointer' }}>
                        <h2 style={{ color: '#764ba2', marginBottom: '1rem' }}>Question D</h2>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Calculator</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            Full-featured calculator with basic arithmetic operations
                        </p>
                    </div>
                </Link>

                <Link to="/question-ef" style={{ textDecoration: 'none' }}>
                    <div className="card" style={{ height: '100%', cursor: 'pointer', gridColumn: '1 / -1' }}>
                        <h2 style={{ color: '#00f2fe', marginBottom: '1rem' }}>Question E/F 🎮</h2>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Kids Calculator Game</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            Interactive calculator with gamification elements:<br />
                            • Score tracking<br />
                            • Streak system<br />
                            • Fun animations and emojis for kids
                        </p>
                    </div>
                </Link>
            </div>

            <div className="card" style={{ marginTop: '3rem', background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)' }}>
                <h3 style={{ marginBottom: '1rem' }}>About This Project</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                    This project demonstrates various ReactJS concepts including:
                    state management, event handling, conditional rendering,
                    both function and class components, and modern UI/UX design principles.
                </p>
            </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <div className="app">
                <nav className="nav-container">
                    <div className="nav-wrapper">
                        <h1 className="nav-title">ReactJS Assignments</h1>
                        <ul className="nav-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/question-a">Question A</Link></li>
                            <li><Link to="/question-b">Question B</Link></li>
                            <li><Link to="/question-c">Question C</Link></li>
                            <li><Link to="/question-d">Question D</Link></li>
                            <li><Link to="/question-ef">Question E/F</Link></li>
                        </ul>
                    </div>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/question-a" element={<QuestionA />} />
                    <Route path="/question-b" element={<QuestionB />} />
                    <Route path="/question-c" element={<QuestionC />} />
                    <Route path="/question-d" element={<QuestionD />} />
                    <Route path="/question-ef" element={<QuestionEF />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

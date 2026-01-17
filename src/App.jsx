import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import QuestionA from './components/QuestionA';
import QuestionB from './components/QuestionB';
import QuestionC from './components/QuestionC';
import QuestionD from './components/QuestionD';
import QuestionEF from './components/QuestionEF';
import Question6 from './components/Question6';
import Question7 from './components/Question7';
import Question8 from './components/Question8';
import Question9 from './components/Question9';
import Question10 from './components/Question10';

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

            <div style={{ marginTop: '3rem' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}>Additional Experiments</h2>
                <div className="grid-3">
                    <Link to="/question-6" style={{ textDecoration: 'none' }}>
                        <div className="card" style={{ height: '100%', cursor: 'pointer' }}>
                            <h2 style={{ color: '#f093fb', marginBottom: '1rem' }}>Question 6</h2>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Natural Numbers</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Display first N natural numbers in a grid layout
                            </p>
                        </div>
                    </Link>

                    <Link to="/question-7" style={{ textDecoration: 'none' }}>
                        <div className="card" style={{ height: '100%', cursor: 'pointer' }}>
                            <h2 style={{ color: '#43e97b', marginBottom: '1rem' }}>Question 7</h2>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Armstrong Checker</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Check if a number is an Armstrong number
                            </p>
                        </div>
                    </Link>

                    <Link to="/question-8" style={{ textDecoration: 'none' }}>
                        <div className="card" style={{ height: '100%', cursor: 'pointer' }}>
                            <h2 style={{ color: '#fa709a', marginBottom: '1rem' }}>Question 8</h2>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Factorial</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Calculate factorial of any number
                            </p>
                        </div>
                    </Link>

                    <Link to="/question-9" style={{ textDecoration: 'none' }}>
                        <div className="card" style={{ height: '100%', cursor: 'pointer' }}>
                            <h2 style={{ color: '#feca57', marginBottom: '1rem' }}>Question 9</h2>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Greatest of 3</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Find the maximum value among three numbers
                            </p>
                        </div>
                    </Link>

                    <Link to="/question-10" style={{ textDecoration: 'none', gridColumn: '1 / -1' }}>
                        <div className="card" style={{ height: '100%', cursor: 'pointer' }}>
                            <h2 style={{ color: '#48dbfb', marginBottom: '1rem' }}>Question 10 🎮</h2>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>4-Box Ball Game</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Interactive game with colored balls and strategic moves<br />
                                • Choice 1: Double all boxes<br />
                                • Choice 2: Move all to last box<br />
                                • Choice 3: Odd boxes to even boxes
                            </p>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="card" style={{ marginTop: '3rem', background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)' }}>
                <h3 style={{ marginBottom: '1rem' }}>About This Project</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                    This project demonstrates various ReactJS concepts including:
                    state management, event handling, conditional rendering,
                    both function and class components, arrays, mathematical operations, and modern UI/UX design principles.
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
                            <li><Link to="/question-a">Q-A</Link></li>
                            <li><Link to="/question-b">Q-B</Link></li>
                            <li><Link to="/question-c">Q-C</Link></li>
                            <li><Link to="/question-d">Q-D</Link></li>
                            <li><Link to="/question-ef">Q-E/F</Link></li>
                            <li><Link to="/question-6">Q-6</Link></li>
                            <li><Link to="/question-7">Q-7</Link></li>
                            <li><Link to="/question-8">Q-8</Link></li>
                            <li><Link to="/question-9">Q-9</Link></li>
                            <li><Link to="/question-10">Q-10</Link></li>
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
                    <Route path="/question-6" element={<Question6 />} />
                    <Route path="/question-7" element={<Question7 />} />
                    <Route path="/question-8" element={<Question8 />} />
                    <Route path="/question-9" element={<Question9 />} />
                    <Route path="/question-10" element={<Question10 />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

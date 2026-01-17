import React, { useState } from 'react';

/**
 * Question C (Function Component): Question Paper Set Selector
 * Odd roll number → Set 1
 * Even roll number → Set 2
 */
function QuestionCFunction() {
    const [rollNumber, setRollNumber] = useState('');
    const [result, setResult] = useState(null);

    const determineSet = () => {
        const roll = parseInt(rollNumber);

        if (isNaN(roll) || roll <= 0) {
            alert('Please enter a valid roll number');
            return;
        }

        const set = roll % 2 === 0 ? 2 : 1;
        setResult({
            rollNumber: roll,
            set: set,
            isEven: roll % 2 === 0
        });
    };

    return (
        <div className="card">
            <h2 style={{ marginBottom: '1.5rem', color: '#667eea' }}>
                Function Component Implementation
            </h2>

            <div className="input-group">
                <label htmlFor="roll-func">Enter Roll Number:</label>
                <input
                    type="number"
                    id="roll-func"
                    value={rollNumber}
                    onChange={(e) => setRollNumber(e.target.value)}
                    placeholder="Enter your roll number"
                    onKeyPress={(e) => e.key === 'Enter' && determineSet()}
                />
            </div>

            <button className="btn" onClick={determineSet}>
                Get Question Paper Set
            </button>

            {result && (
                <div className="result-box">
                    <h3>Assignment Details</h3>

                    <div className="result-item">
                        <strong>Roll Number:</strong> {result.rollNumber}
                    </div>

                    <div className="result-item">
                        <strong>Type:</strong> {result.isEven ? 'Even' : 'Odd'}
                    </div>

                    <div className="result-item" style={{
                        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)',
                        padding: '1.5rem',
                        borderRadius: '12px',
                        border: '2px solid #667eea'
                    }}>
                        <strong style={{ fontSize: '1.2rem' }}>Assigned Question Paper:</strong>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '0.5rem', color: '#667eea' }}>
                            SET {result.set}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

/**
 * Question C (Class Component): Question Paper Set Selector
 */
class QuestionCClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rollNumber: '',
            result: null
        };
    }

    handleRollNumberChange = (e) => {
        this.setState({ rollNumber: e.target.value });
    }

    determineSet = () => {
        const roll = parseInt(this.state.rollNumber);

        if (isNaN(roll) || roll <= 0) {
            alert('Please enter a valid roll number');
            return;
        }

        const set = roll % 2 === 0 ? 2 : 1;
        this.setState({
            result: {
                rollNumber: roll,
                set: set,
                isEven: roll % 2 === 0
            }
        });
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.determineSet();
        }
    }

    render() {
        return (
            <div className="card">
                <h2 style={{ marginBottom: '1.5rem', color: '#f5576c' }}>
                    Class Component Implementation
                </h2>

                <div className="input-group">
                    <label htmlFor="roll-class">Enter Roll Number:</label>
                    <input
                        type="number"
                        id="roll-class"
                        value={this.state.rollNumber}
                        onChange={this.handleRollNumberChange}
                        placeholder="Enter your roll number"
                        onKeyPress={this.handleKeyPress}
                    />
                </div>

                <button className="btn btn-secondary" onClick={this.determineSet}>
                    Get Question Paper Set
                </button>

                {this.state.result && (
                    <div className="result-box">
                        <h3>Assignment Details</h3>

                        <div className="result-item">
                            <strong>Roll Number:</strong> {this.state.result.rollNumber}
                        </div>

                        <div className="result-item">
                            <strong>Type:</strong> {this.state.result.isEven ? 'Even' : 'Odd'}
                        </div>

                        <div className="result-item" style={{
                            background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.2) 0%, rgba(245, 87, 108, 0.2) 100%)',
                            padding: '1.5rem',
                            borderRadius: '12px',
                            border: '2px solid #f5576c'
                        }}>
                            <strong style={{ fontSize: '1.2rem' }}>Assigned Question Paper:</strong>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '0.5rem', color: '#f5576c' }}>
                                SET {this.state.result.set}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

/**
 * Main Question C Component
 */
function QuestionC() {
    return (
        <div className="component-container">
            <div className="component-header">
                <h1>Question C: Question Paper Set Selector</h1>
                <p>Odd roll numbers get Set 1, Even roll numbers get Set 2</p>
                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                    Implemented using both Class and Function Components
                </p>
            </div>

            <div className="grid-2">
                <QuestionCFunction />
                <QuestionCClass />
            </div>

            <div style={{ marginTop: '2rem' }}>
                <div className="card">
                    <h3 style={{ marginBottom: '1rem' }}>How it works:</h3>
                    <div className="grid-2">
                        <div style={{ padding: '1rem', background: 'rgba(102, 126, 234, 0.1)', borderRadius: '8px' }}>
                            <strong>Odd Roll Numbers (1, 3, 5, 7...)</strong>
                            <div style={{ marginTop: '0.5rem', fontSize: '1.5rem', color: '#667eea' }}>→ Set 1</div>
                        </div>
                        <div style={{ padding: '1rem', background: 'rgba(245, 87, 108, 0.1)', borderRadius: '8px' }}>
                            <strong>Even Roll Numbers (2, 4, 6, 8...)</strong>
                            <div style={{ marginTop: '0.5rem', fontSize: '1.5rem', color: '#f5576c' }}>→ Set 2</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuestionC;
export { QuestionCFunction, QuestionCClass };

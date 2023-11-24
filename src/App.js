import React, { useState } from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [selectedOption, setSelectedOption] = useState('');
    const [displayText, setDisplayText] = useState('fuck');

    const handleOptionChange = (option) => {
        setSelectedOption(option);

        // Update the display text based on the selected option
        switch (option) {
            case 'off':
                setDisplayText('fuck off');
                break;
            case 'me':
                setDisplayText('fuck me');
                break;
            case 'you':
                setDisplayText('fuck you');
                break;
            default:
                setDisplayText('fuck');
        }
    };

    return (
        <div className="container">
            <h1>{displayText}</h1>

            <div>
                <label>
                    <input
                        type="radio"
                        value="off"
                        checked={selectedOption === 'off'}
                        onChange={() => handleOptionChange('off')}
                    />
                    Off
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        value="me"
                        checked={selectedOption === 'me'}
                        onChange={() => handleOptionChange('me')}
                    />
                    Me
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        value="you"
                        checked={selectedOption === 'you'}
                        onChange={() => handleOptionChange('you')}
                    />
                    You
                </label>
            </div>
        </div>
    );
}

export default App;

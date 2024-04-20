import React, { useState } from 'react';
import { post } from '@aws-amplify/api';
import { Amplify } from '@aws-amplify/core';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

function App() {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = async () => {
        const apiName = 'serviceDataAPI'; // The name of the API
        const path = '/items'; // The path you have configured for your API
        const init = {
            body: { content: inputValue }, // The data you want to send
            headers: {}  // Optional headers
        };

        try {
            const response = await post(apiName, path, init);
            console.log('API response:', response);
        } catch (err) {
            console.error('Error calling API:', err);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default App;

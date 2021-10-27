import React, { useState} from 'react'
import Pages from './Pages';
import countries from './data/countries.json';

function App() {
    const [data] = useState(countries);
    return (
        <>
            {
                data.length > 0 ?
                <Pages data={data} /> : <h1>Loading...</h1>
            }
        </>
    )
}

export default App

import React, { useState, useEffect } from 'react';
import ReactAutocomplete from 'react-autocomplete'
import {useSearch} from "./hooks";


function App() {
    const [value, setValue] = useState('');
    const {articles} = useSearch(value);

    return (
        <ReactAutocomplete
                items={articles}
                shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                getItemValue={item => item.label}
                renderItem={(item, highlighted) =>
                    <div
                        key={item.id}
                        style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
                    >
                        {item.label}
                    </div>
                }
                value={value}
                onChange={e => setValue(e.target.value)}
                onSelect={value => setValue( value )}
            />
    )
}

export default App;

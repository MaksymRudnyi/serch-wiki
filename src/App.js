import React, { useState, useEffect } from 'react';
import ReactAutocomplete from 'react-autocomplete'
import axios from 'axios';

function App() {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${value}`)
            .then(function (response) {
                const parsedResponse = [];

                for (let i = 0; i < response.data[1].length; i++) {
                    parsedResponse.push({
                        id: response.data[3][i],
                        label: response.data[1][i]
                    })
                }

                setItems(parsedResponse)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                debugger
            })
    }, [value]);

    return (
        <ReactAutocomplete
            items={items}
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

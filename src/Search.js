import React, {useState} from 'react'
import Input from "./Input";
import Card from "./Card";
import './index.css'

export const Search = () => {
   const [searchResults, setSearchResults] = React.useState([])
   const [isLoading, setLoading] = React.useState(false)
    const handleOnKeyUp = (e) => {
        setLoading(true)
        let query = e.target.value
       debounce((query) => {
        fetchData(query).then((data) => {
            setSearchResults(data.handelsnaam)
            setLoading(false)
        })
    },500)(query)}
    return <div>
        <Input
            type="text"
            onKeyUp={handleOnKeyUp}
            className="input-field"
        />
        {isLoading ? <div>...Loading</div> : <div className="card-wrapper">
            {searchResults.map((result,index) => {
              let {handelsnaam, dossiernummer, plaats} = result
                return (<Card
                    name={handelsnaam}
                    id={dossiernummer}
                    place={plaats}
                />)

            })}
        </div>
            }
    </div>
}

 const fetchData = async (query) => {
    let response = await fetch(`https://api.overheid.io/suggest/openkvk/${query}?&ovio-api-key=06f37335f01597898c16ffbd729d31c4763768f49f2621384cd2ee021cf976ca`)
    let data = await response.json()

     return data
 }


export const debounce = (func, wait) => {
    let timeout;

    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};
 console.log(fetchData('insify').then(data => console.log(data)))

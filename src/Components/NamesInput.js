import { useCallback,useState } from 'react';
import './NamesInput.css';


export default function NamesInput ({label}){

    const [resNames, setResNames] = useState(null);

    const onNamesSubmit = useCallback(async (event) => {
        event.preventDefault();

        const tartget = event.target;
        const firstName = tartget[0].value;
        const lastName = tartget[1].value;

        console.log('target[0]', firstName);
        console.log('target[1]', lastName);

        const localURL = 'http://localhost:3000/names';
        const response = await fetch(localURL,{
            method: 'POST',
            body: JSON.stringify({firstName: firstName, lastName: lastName}),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const responseBody = await response.json();
        console.log('response', );
        setResNames(responseBody.name);

    },[]);

    //function onNamesSubmit(event) {
    //    event.preventDefault();

    //    console.log('Form submitted');
    //}

    return (
    <div>
        {resNames && <label>{resNames.firstName + ' ' + resNames.lastName}</label>}
        <div className="test"/>
          <label>{ label }</label>
            <form onSubmit={onNamesSubmit}>
             <label>
                first name<input name="first name"/>
             </label>
             <label>
                last name<input name="last name"/>
             </label>
             <button type="submit"> Submit </button>
            </form>
    </div>
    );
}
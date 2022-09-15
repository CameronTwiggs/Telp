import { useEffect, useState} from "react";



export default function Places(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        props.restaurants.length > 0 ? setLoading(false) : setLoading(true);
    }, [props.restaurants])
    

    console.log(props.restaurants)
    return (
        <>
            <h2 className="title">Places.</h2>
            <ul className="placelist">
            {loading ? <h1>Loading...</h1> : null}
          
            {props.restaurants.map((restaurant) => (
                <li key={restaurant.id}>
                    <h1>{restaurant.name}</h1>
                    <p>{restaurant.vicinity}</p>
                </li>
            ))}
          </ul>
        </>
    )
}
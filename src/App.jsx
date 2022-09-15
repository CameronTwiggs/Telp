import { useEffect, useState } from "react";
import Maps from "./Components/Maps";
import "./styles/styles.css"
import Friends from "./pages/Friends";
import Places from "./pages/Places";

export default function App() {
  const [sectionComponent, setSectionComponent] = useState("places");
  const [restaurants, setRestaurants] = useState([]);
  const [center, setCenter] = useState({ lng:-80.8431540176569, lat:  35.22720374893173 });


  console.log(center.lat)
  useEffect(() => {
    fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${center.lat},${center.lng}&radius=15000&type=restaurant&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
    .then(res => res.json())
    .then(data => {
        setRestaurants(data.results);
    }
    )
},[])

  

  const toggleSection = (section) => {
    if (section === "places") {
      setSectionComponent("friends");
    }
    else {
      setSectionComponent("places");
    }
  };




  return (
    <>
      <div className="section__main">
        <button onClick={() => toggleSection(sectionComponent)}>Toggle</button>
        {sectionComponent === "friends" ? <Friends /> : <Places restaurants={restaurants}/>}
      </div>
      <Maps restaurants={restaurants} center={center}/>
    </>
  );
}

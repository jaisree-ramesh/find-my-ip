
import './App.css';
import useIp from './useIp';
import { Map, Marker } from "pigeon-maps";

function App() {

  const {
    ip,
    isp,
    city,
    country,
    lat,
    lng,
    isLoading
  } = useIp();

  // console.log(lat,lng);
  // console.log(country);
  const c = (country.toLowerCase());
  // console.log(c)
  const img = `https://flagcdn.com/${c}.svg`;
  console.log(img)

  const getContent = () => {
    if (isLoading) return <div>is loading...</div>
    return (
      <div className="info-container">
      <div className="row">
          <Map height={475} defaultCenter={[ lat, lng ]} defaultZoom={9}>
            <Marker width={50} anchor={[lat, lng ]} />
          </Map>          
      </div>
      <div className="row">
        <br /> IP : {ip} <br />
        <br /> ISP : {isp} <br />
        <br /> CITY : {city} <br />
        <br /> COUNTRY : {country} <br />
        <img src = {img} width = "425" height = "300"/>
      </div>
    </div>
    )
  }
  return (
    <div className="App">
      <div className="container">
        <h1>FOUND YOUR IP</h1>
          {getContent()}
       
      </div>
    </div>
  );
}

export default App;

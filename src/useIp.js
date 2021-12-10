import { useState, useEffect } from "react";


function useIp () {

    const [items,setItems] = useState([{}])
    const [isLoading,setIsLoading] = useState([true])

    useEffect(() =>  { 
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}`)
            .then((res) => res.json())
            .then((json) => {
            setIsLoading(false);
            setItems(json);
            })
            .catch(() => console.log("request failed"));
        }, []);
        const country = (items.location?.country);
        // console.log("inside UseIP : ", country)
        const city = items.location?.city;
        const ip= items.ip;
        const isp= items.isp;
        const lat= items.location?.lat;
        const lng= items.location?.lng;
    
    return {
        ip, 
        isp,
        country,
        city,
        lat,
        lng,  
        isLoading
    };
        
}
export default useIp;
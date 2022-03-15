import { useEffect, useState } from "react";

const Page = () => {
    const [data, setData] = useState(null);
    useEffect(() => {   
        const getData  = async () => {  
            const endPoint = `${process.env.REACT_APP_API}/WeatherForecast`
            const result = await fetch(endPoint);
            if(result.ok)
            {
                const json = await result.json();
                console.log(json);
                setData(json);
            }
        }
        getData();
    }, []);

    return (
        <div>
            <h1>Page</h1>
            <p>{process.env.REACT_APP_VAR}</p>
            {
                data && <p>{JSON.stringify(data)}</p>
            }
        </div>
    );
}

export default Page;
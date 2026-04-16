import { useEffect, useState } from "react";
export type RocketType = {flickr_images: string[]; name: string; active: boolean; cost_per_launch: number; country: string; description: string; id: string};

function Home() {
    const [loading, setLoading] = useState(true);
    const [rockets, setRockets] = useState<RocketType[]>([]);
    useEffect(() => {
        fetch("https://api.spacexdata.com/v4/rockets")
            .then(res => res.json())
            .then((json : RocketType[]) => {
                setRockets(json);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, [])

    return <></>
}

export default Home;
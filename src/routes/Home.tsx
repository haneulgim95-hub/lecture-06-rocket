import { useEffect, useState } from "react";
import RocketCard from "../components/RocketCard.tsx";
import styles from "./Home.module.css"

export type Rocket = {
    id: string;
    name: string;
    description: string;
    country: string;
    flickr_images: string[];
    first_flight: string;
};

function Home() {
    const [loading, setLoading] = useState<boolean>(true);
    const [rockets, setRockets] = useState<Rocket[]>([]);

    useEffect(() => {
        fetch("https://api.spacexdata.com/v4/rockets")
            .then(res => res.json())
            .then((json: Rocket[]) => {
                setRockets(json);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    if (loading) {
        return <div className={styles.loading}>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            {rockets.map(rocket => {
                return <RocketCard key={rocket.id} image={rocket.flickr_images[0]} name={rocket.name} startFlight={rocket.first_flight} country={rocket.country} id={rocket.id}/>;
            })}
        </div>
    );
}

export default Home;

import { useEffect, useState } from "react";
import type { RollupCommonJSOptions } from "vite";
import RocketCard from "../components/RocketCard.tsx";
import styles from "./Home.module.css";
export type RocketType = {name: string; active: boolean; cost_per_launch: number; country: string; description: string; id: string};

function Home(){
    const [loading, setLoading] = useState<boolean>(true);
    const [rockets, setRockets] = useState<RocketType[]>([]);

    useEffect(() => {
        fetch("https://api.spacexdata.com/v4/rockets")
            .then(res => res.json())
            .then((json: RocketType[]) => {
                setRockets(json);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            })
    }, [])

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>SpaceX Archive</h1>
            </header>
            <main>
                {
                    loading? <div>Loading...</div> : <div>
                        {
                            rockets.map((value) => (
                                <div key={value.id}>
                                    <RocketCard/>
                                </div>
                            ))
                        }
                    </div>
                }
            </main>
        </div>
    );
}

export default Home;
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import type { Rocket } from "./Home.tsx";
import styles from "./Detail.module.css";

function Detail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(true);
    const [rocket, setRocket] = useState<Rocket | null>(null);

    useEffect(() => {
        fetch(`https://api.spacexdata.com/v4/rockets/${id}`)
            .then(res => res.json())
            .then((json: Rocket) => {
                setRocket(json);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className={styles.loading}>Loading...</div>;
    }
    if (!rocket) {
        return <div className={styles.loading}>데이터를 불러오는데 실패 하였습니다.</div>;
    }
    return (
        <div className={styles.container}>
            <button className={styles.backBtn} onClick={() => {navigate(-1)}}>뒤로 가기</button>
            <div className={styles.rocketCard}>
                <img className={styles.image} src={rocket.flickr_images[0]} alt={"rocket"} />
                <div className={styles.content}>
                    <h1 className={styles.name}>{rocket.name}</h1>
                    <div className={styles.meta}>
                        <h5>{rocket.first_flight}</h5>
                        <h5>{rocket.country}</h5>
                    </div>
                    <h6 className={styles.description}>{rocket.description}</h6>
                </div>
            </div>
        </div>
    );
}

export default Detail;

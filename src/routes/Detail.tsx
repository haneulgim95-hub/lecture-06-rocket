import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import type { RocketType } from "./Home.tsx";
import styles from "./Detail.module.css";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [rocket, setRocket] = useState<RocketType | null>(null);

    useEffect(() => {
        if (!id) return;
        fetch(`https://api.spacexdata.com/v4/rockets/${id}`)
            .then(res => res.json())
            .then((json: RocketType) => {
                setRocket(json);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className={styles.loading}>접속 중....</div>;
    if (!rocket) return <div className={styles.loading}>로켓 정보를 찾을 수 없습니다.</div>;

    return (
        <div className={styles.container}>
            <Link className={styles.backLink} to={"/"}>
                목록으로 돌아가기
            </Link>
            <div className={styles.article}>
                {rocket.flickr_images[0] && (
                    <div className={styles.imgwrapper}>
                        <img
                            className={styles.image}
                            src={rocket.flickr_images[0]}
                            alt={rocket.name}
                        />
                    </div>
                )}
                <div className={styles.info}>
                    <h1>
                        <span className={styles.name}>{rocket.name}</span>
                    </h1>
                    <p className={styles.description}>{rocket.description}</p>
                    <div className={styles.specs}>
                        <div className={styles.specItem}>
                            <span className={styles.label}>발사비용</span>
                            <span className={styles.value}>
                                {rocket.cost_per_launch.toLocaleString()}
                            </span>
                        </div>
                        <div className={styles.specItem}>
                            <span className={styles.label}>제조국가</span>
                            <span className={styles.value}>{rocket.country}</span>
                        </div>
                        <div className={styles.specItem}>
                            <span className={styles.label}>상태</span>
                            <span
                                className={styles.value}
                                style={{ color: rocket.active ? "#10b981" : "#ef4444" }}>
                                {rocket.active ? "운용 중" : "비운용"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;

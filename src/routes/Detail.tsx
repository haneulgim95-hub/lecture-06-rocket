import { useEffect, useState } from "react";
import type { RocketType } from "./Home.tsx";
import { Link, useParams } from "react-router";
import styles from "./Detail.module.css";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState<boolean>(true);
    const [roacket, setRoacket] = useState<RocketType | null>(null);

    useEffect(() => {
        if (!id) return;
        fetch(`https://api.spacexdata.com/v4/rockets/${id}`)
            .then(res => res.json())
            .then((json: RocketType) => {
                setRoacket(json);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className={styles.loading}>접속 중...</div>;
    }
    if (!roacket) {
        return <div className={styles.loading}>로켓 정보를 찾을 수 없습니다...</div>;
    }

    return (
        <div className={styles.container}>
            <Link to={"/"} className={styles.backLink}>
                목록으로 돌아가기
            </Link>
            <article className={styles.article}>
                {roacket.flickr_images[0] && (
                    <div className={styles.imageWrapper}>
                        <img
                            className={styles.rocketImage}
                            alt={roacket.name}
                            src={roacket.flickr_images[0]}
                        />
                    </div>
                )}
                <div className={styles.info}>
                    <h1>
                        <span className={styles.name}>{roacket.name}</span>
                    </h1>
                    <p className={styles.description}>{roacket.description}</p>
                    <div className={styles.specs}>
                        <div className={styles.specItem}>
                            <span className={styles.label}>발사비용</span>
                            <span className={styles.value}>{roacket.cost_per_launch}</span>
                        </div>
                        <div className={styles.specItem}>
                            <span className={styles.label}>제조국가</span>
                            <span className={styles.value}>{roacket.country}</span>
                        </div>
                        <div className={styles.specItem}>
                            <span className={styles.label}>상태</span>
                            <span style={{ color: roacket.active ? "#10b981" : "#ef4444" }}>
                                {roacket.active ? "운용 중" : "비운용"}
                            </span>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default Detail;

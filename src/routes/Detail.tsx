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
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
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
            <Link to={"/"}>목록으로 돌아가기</Link>
            <div></div>
        </div>
    );
}

export default Detail;

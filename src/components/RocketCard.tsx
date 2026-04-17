import type { RocketType } from "../routes/Home.tsx";
import { Link } from "react-router";
import styles from "./RocketCard.module.css";

function RocketCard({ rocket }: { rocket: RocketType }) {
    return (
        <Link to={`/${rocket.id}`} className={styles.card}>
            <h1 className={styles.name}>{rocket.name}</h1>
            <div className={styles.country}>{rocket.country}</div>
        </Link>
    );
}

export default RocketCard;

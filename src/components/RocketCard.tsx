import type { RocketType } from "../routes/Home.tsx";
import styles from "./RocketCard.module.css";
import { Link } from "react-router";

function RocketCard({ rocket }: { rocket: RocketType }) {
    return (
        <Link to={`/${rocket.id}`} className={styles.card}>
            <h3 className={styles.name}>{rocket.name}</h3>
            <div className={styles.country}>{rocket.country}</div>
        </Link>
    );
}

export default RocketCard;

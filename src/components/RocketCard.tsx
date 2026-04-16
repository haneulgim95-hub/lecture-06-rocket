import type { RocketType } from "../routes/Home.tsx";
import { Link } from "react-router";
import styles from "./RocketCard.module.css";

function RocketCard({ rocket }: { rocket: RocketType }) {
    return (
        <Link className={styles.card} to={`/${rocket.id}`}>
            <h1 className={styles.name}>{rocket.name}</h1>
            <div>
                <span className={styles.country}>{rocket.country}</span>
            </div>
        </Link>
    );
}

export default RocketCard;

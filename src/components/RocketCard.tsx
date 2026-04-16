import styles from "./RocketCard.module.css";
import type { Rocket } from "../routes/Home.tsx";
import { Link } from "react-router";

function RocketCard({ rocket }: { rocket: Rocket }) {
    return (
        <Link className={styles.card} to={`/${rocket.id}`}>
            <h3 className={styles.name}>{rocket.name}</h3>
            <div className={styles.country}>
                {rocket.country}
            </div>
        </Link>
    );
}

export default RocketCard;

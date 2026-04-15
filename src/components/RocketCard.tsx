import { Link } from "react-router";
import styles from "./RocketCard.module.css"

function RocketCard({id ,image, name, startFlight, country}: {
    id: string, image: string, name: string, startFlight: string, country: string
}) {
    return (
        <div className={styles.rocketCard}>
            <img className={styles.image} src={image} alt={"image"} />
            <div className={styles.content}>
                <Link to={`/${id}`} className={styles.link}>
                    {name}
                </Link>
                <h3 className={styles.firstFlight}>{startFlight}</h3>
                <h3 className={styles.country}>Country : {country}</h3>
            </div>
        </div>
    );
}

export default RocketCard;
import { useRouter } from "next/router"
import carsData from "@/data/carsData"
import styles from "../../styles/CarDetails.module.css"
import Company from "@/components/icons/Company"
import Model from "@/components/icons/Model"
import Calender from "@/components/icons/Calender"
import Road from "@/components/icons/Road"
import Location from "@/components/icons/Location"
import Money from "@/components/icons/Money"
const carDetail = () => {
    const router = useRouter()
    const carId = router.query.carId
    const carDetail = carsData[carId-1] || []
    const {id,name,model,year,distance,location,image,price,description}=carDetail
    return (
    <div>
        <div className={styles.container}>
            <img src={image} className={styles.image}></img>
            <h3 className={styles.header}>{name} {model}</h3>
           <div className={styles.details}>
                <div>
                    <Company></Company>
                    <p>company</p>
                    <span>{name}</span>
                </div>
                <div>
                    <Model></Model>
                    <p>model</p>
                    <span>{model}</span>
                </div>
                <div>
                    <Calender></Calender>
                    <p>first registration</p>
                    <span>{year}</span>
                </div>
                <div>
                    <Road></Road>
                    <p>kms driven</p>
                    <span>{distance}</span>
                </div>
           </div>
           <div className={styles.details}>
                <div>
                    <Location></Location>
                    <p>location</p>
                    <span>{location}</span>
                </div>
           </div>
           <div className={styles.details}>
            <p className={styles.descriptionTitle}>extra information</p>
            <p className={styles.descriptionText}>{description}</p>
           </div>
           <div className={styles.details}>
                <div className={styles.price}>
                    <Money></Money>
                    <p>price</p>
                    <span>{price}</span>
                </div>
           </div>
           <button className={styles.button}>buy</button>
        </div>
    </div>
  )
}

export default carDetail
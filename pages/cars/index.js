import carsData from "@/data/carsData"
import styles from "../../styles/CarsPage.module.css"
const Cars = () => {
  return (
    <div className={styles.container}>
        {carsData.map(car=>(
            <p key={car.id}>{car.name}</p>
        ))}
    </div>
  )
}

export default Cars
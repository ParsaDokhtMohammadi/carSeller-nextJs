import carsData from "@/data/carsData"
import styles from "../../styles/CarsPage.module.css"
import Card from "@/components/module/Card"
const Cars = () => {
  return (
    <div className={styles.container}>
        {carsData.map(car=>(
            <Card key={car.id} {...car}></Card>
        ))}
    </div>
  )
}

export default Cars
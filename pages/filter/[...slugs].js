import carsData from "@/data/carsData"
import { useRouter } from "next/router"
import Card from "@/components/module/Card"
import Back from "@/components/icons/Back"
import styles from "@/styles/CarsList.module.css"
const filteredCars = () => {
    const router = useRouter()
    const [min,max] = router.query.slugs || []
    const filteredData = carsData.filter(car=> car.price >= min && car.price<=max)
    if (!filteredData.length) return <h3>no cars found</h3>
    return (
   <div className={styles.container}>
            <div className={styles.back} onClick={() => router.back()}>
                <Back></Back>
                back
            </div>
            <div className={styles.cards}>

                {filteredData.map(car => (
                    <div key={car.id}>
                        <Card {...car}></Card>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default filteredCars
import { useRouter } from "next/router"
import carsData from "@/data/carsData"
import Card from "@/components/module/Card"
import styles from "@/styles/CarsList.module.css"
import Back from "@/components/icons/Back"
const Category = () => {
    const router = useRouter()
    const category = router.query.categoryType
    const cars = carsData.filter(car=>car.category==category) || []
    
    return (
    <div className={styles.container}>
        <div className={styles.back} onClick={()=>router.back()}>
            <Back></Back>
            back
        </div>
        <div className={styles.cards}>

        {cars.map(car=>(
            <div key={car.id}>
                <Card {...car}></Card>
            </div>
        ))}
    </div>
        </div>
  )
}

export default Category
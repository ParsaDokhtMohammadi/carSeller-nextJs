import { useRouter } from "next/router"
import carsData from "@/data/carsData"
const carDetail = () => {
    const router = useRouter()
    const carId = router.query.carId
    const carDetail = carsData[carId-1]
    return (
    <div>carDetail</div>
  )
}

export default carDetail
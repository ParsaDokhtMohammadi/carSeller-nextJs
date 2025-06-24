import carsData from "@/data/carsData"
import styles from "../../styles/CarsPage.module.css"
import Card from "@/components/module/Card"
import Categories from "@/components/module/Categories"
import SearchBar from "@/components/module/SearchBar"
const Cars = () => {
  return (
    <>
      <SearchBar></SearchBar>
      <Categories></Categories>
      <div className={styles.container}>
        {carsData.map(car => (
          <Card key={car.id} {...car}></Card>
        ))}
      </div>
    </>
  )
}

export default Cars
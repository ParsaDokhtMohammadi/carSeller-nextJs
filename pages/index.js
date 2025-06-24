import carsData from "@/data/carsData"
import styles from "@/styles/CarsPage.module.css"
import Card from "@/components/module/Card"
import Categories from "@/components/module/Categories"
import SearchBar from "@/components/module/SearchBar"
import AllButton from "@/components/module/AllButton"
const car4sell = () => {
  const cars = carsData.slice(0, 3)
  return (
    <>
      <SearchBar></SearchBar>
      <Categories></Categories>
      <AllButton></AllButton>
      <div className={styles.container}>
        {cars.map(car => (
          <Card key={car.id} {...car}></Card>
        ))}
      </div></>
  )
}

export default car4sell
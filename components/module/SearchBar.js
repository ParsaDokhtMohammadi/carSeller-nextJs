import { useState } from "react"
import styles from "./SearchBar.module.css"
import { useRouter } from "next/router"
const SearchBar = () => {
    const [min , setMin] = useState()
    const [max , setMax] = useState()
    const router = useRouter()
    const searchHandler = () =>{
        min&&max ? router.push(`/filter/${min}/${max}`):alert("please enter a currect value")
    } 
  return (
    <div className={styles.container}>
        <div>
            <input type="number"  placeholder="enter min price" value={min} onChange={(e)=>setMin(e.target.value)}></input>
            <input type="number" placeholder="enter max price" value={max} onChange={(e)=>setMax(e.target.value)}></input>
        </div>
        <button onClick={searchHandler}>search</button>
    </div>
  )
}

export default SearchBar
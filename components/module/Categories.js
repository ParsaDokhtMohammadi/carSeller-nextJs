import styles from "./Categories.module.css"
import Link from 'next/link'
import Sedan from "../icons/Sedan"
import Suv from "../icons/Suv"
import Hatchback from "../icons/Hatchback"
import Sport from "../icons/Sport"

const Categories = () => {
    return (
        <>
            <div className={styles.container}>
                <Link href={`/categories/sedan`}>
                    <div>
                        <p>sedan</p>
                        <Sedan></Sedan>
                    </div>
                </Link>
                <Link href={`/categories/hatchback`}>
                    <div>
                        <p>hatchback</p>
                        <Hatchback></Hatchback>
                    </div>
                </Link>
                <Link href={`/categories/suv`}>
                    <div>
                        <p>SUV</p>
                        <Suv></Suv>
                    </div>
                </Link>
                <Link href={`/categories/sport`}>
                    <div>
                        <p>Sport cars</p>
                        <Sport></Sport>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Categories
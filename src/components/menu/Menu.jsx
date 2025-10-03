import { useEffect, useState } from 'react'
import styles from './Menu.module.css'

import MenuSelect from '../menuSelect/MenuSelect'

function Menu()
{

    const [menu, setMenu] = useState(false)

    useEffect(() => {
        console.log(menu)
    }, [menu])

    return(
        <div className={styles.background}>
            <img src='../../assets/Hamburger_icon.png' className={styles.icon} height='689px' width='689px' onClick={() => setMenu(!menu)}></img>
            <MenuSelect menu={menu} setMenu={setMenu}></MenuSelect>
        </div>
    )
}

export default Menu
import { useEffect, useState } from 'react'
import styles from './Menu.module.css'

import MenuSelect from '../menuSelect/MenuSelect'

import hamburgerIcon from '../../assets/Hamburger_icon.png'

function Menu()
{

    const [menu, setMenu] = useState(false)

    useEffect(() => {
        console.log(menu)
    }, [menu])

    return(
        <div className={styles.background}>
            <img src={hamburgerIcon} className={styles.icon} height='689px' width='689px' onClick={() => setMenu(!menu)}></img>
            <MenuSelect menu={menu} setMenu={setMenu}></MenuSelect>
        </div>
    )
}

export default Menu
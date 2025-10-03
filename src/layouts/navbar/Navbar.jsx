import styles from './Navbar.module.css'

import Menu from '../../components/menu/Menu'

function Navbar()
{
    return(
        <div className={styles.background}>
            <Menu></Menu>
        </div>
    )
}

export default Navbar
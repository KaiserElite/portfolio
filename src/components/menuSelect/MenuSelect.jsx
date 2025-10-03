import styles from './MenuSelect.module.css'

function MenuSelect(props)
{
    return(
        <div className={styles.background} style={{width: props.menu? '350px': '0px'}}>
            <img src='/portfolio/src/assets/close.png' className={styles.icon} height='689px' width='689px' onClick={() => props.setMenu(!props.menu)}></img>
            <ul className={styles.nav}>
                <li className={styles.navPage}>Home Page</li>
                <li className={styles.navPage}>About Me</li>
            </ul>
        </div>
    )
}

export default MenuSelect
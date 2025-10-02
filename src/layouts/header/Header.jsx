import styles from './Header.module.css'

function Header()
{
    return(
        <div className={styles.background}>
            <div className={styles.introduction}>
                <h1>Hello there! I'm Erik Le</h1>
                <p>I'm a full stack and game developer who wants to improve their skills.</p>
            </div>
        </div>
    )
}

export default Header
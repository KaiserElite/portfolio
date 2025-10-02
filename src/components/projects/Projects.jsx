import { Link } from 'react-router-dom'
import styles from './Projects.module.css'

function Projects(props)
{
    return(
        <div className={styles.background} style={{backgroundImage: `url(${props.backgroundPath})`}}>
            <a className={styles.link} href={props.urlLink} target={props.urlLink?.startsWith('/')? '_self': '_blank'}>
                <div className={styles.description}>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            </a>
        </div>
    )
}

export default Projects
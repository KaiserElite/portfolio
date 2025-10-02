import styles from '../ProjectDivider.module.css'
import Projects from '../../components/projects/Projects'

import Draw3 from '../../assets/Draw3.jpg'
import { Link } from 'react-router-dom'

function CurrentProjects()
{
    return(
        <div className={styles.background}>
            <h2>Current Projects that I am working on</h2>
            <div className={styles.projects}>
                <Projects title='Draw3' backgroundPath={Draw3} description='Trading card game deck builder and tournament organizer' urlLink='/portfolio/#draw3info'></Projects>
            </div>
        </div>
    )
}

export default CurrentProjects
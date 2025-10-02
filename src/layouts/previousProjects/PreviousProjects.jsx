import Projects from '../../components/projects/Projects'
import styles from '../ProjectDivider.module.css'

function PreviousProjects()
{
    return(
        <div className={styles.background}>
            <h2>Previous Projects that I worked on</h2>
            <div className={styles.projects}>
                <Projects title='Mementoes' backgroundPath={'https://img.itch.zone/aW1nLzE0MjM4NDAxLmpwZw==/347x500/4i0dJq.jpg'} description='Maze Horror Dating Adventure' urlLink='https://kaiserelite.itch.io/mementoes'></Projects>
                <Projects title='Undercooked' backgroundPath={'https://img.itch.zone/aW1nLzE0MjM4NTQzLnBuZw==/347x500/vSItJq.png'} description='Co-op cooking game inspired by Overcooked' urlLink='https://kaiserelite.itch.io/undercooked'></Projects>
                <Projects title='Baller' backgroundPath={'https://img.itch.zone/aW1nLzEyMzUxMDI4LnBuZw==/315x250%23c/YJCVjy.png'} description='Co-op game of catch' urlLink='https://megapig9001.itch.io/baller'></Projects>
            </div>
        </div>
    )
}

export default PreviousProjects
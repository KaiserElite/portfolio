import Lists from '../../components/lists/Lists'
import styles from '../ProjectDivider.module.css'

function Skills()
{

    const programmingLanguages = ['C++', 'C#', 'Python', 'JavaScrpt', 'HTML', 'CSS', 'SQL']
    const gameEngines = ['Unity', 'Unreal Engine 5']
    const databaseApplications = ['PostgreSQL', 'MongoDB', 'MySQL']
    const fullstackApplications = ['FastAPI', 'React', 'Node.js', 'Firebase']
    const languages = ['English', 'Vietnamese']

    return(
        <div className={styles.background}>
            <h2>My Skills</h2>
            <div className={styles.projects}>
                <Lists title='Programming Languages' list={programmingLanguages}></Lists>
                <Lists title='Game Engines' list={gameEngines}></Lists>
                <Lists title="Database Applications" list={databaseApplications}></Lists>
                <Lists title="Full Stack Applications" list={fullstackApplications}></Lists>
                <Lists title="Languages" list={languages}></Lists>
            </div>
        </div>
    )
}

export default Skills
import styles from './Lists.module.css'

function Lists(props)
{
    return(
        <div className={styles.background}>
            <h3>{props.title}</h3>
            <ul>
                {props.list.map(item => <li>{item}</li>)}
            </ul>
        </div>
    )
}

export default Lists
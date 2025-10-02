import Header from '../layouts/header/Header.jsx'
import CurrentProjects from '../layouts/currentProjects/CurrentProjects.jsx'
import PreviousProjects from '../layouts/previousProjects/PreviousProjects.jsx'
import Skills from '../layouts/skills/Skills.jsx'
import Hobbies from '../layouts/hobbies/Hobbies.jsx'

function Home()
{
    return(
        <div>
            <Header></Header>
            <Skills></Skills>
            <CurrentProjects></CurrentProjects>
            <PreviousProjects></PreviousProjects>
            <Hobbies></Hobbies>
        </div>
    )
}

export default Home
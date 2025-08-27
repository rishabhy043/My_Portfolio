
import './do.css'
import uidesign from '../../assets/ui-design.png'
import webdesign from '../../assets/website-design.png'
import appdesign from '../../assets/app-design.png'
const Skills = () => {
    return (<>
        <div className="skilltitle" id='Skills'>
            <h3>What I do ? </h3>
            <p className="skilldescription">
                i am skille and passinated web Designer with experience in creating
                visually appealing and
                user-friendly websites.i have a strong understanding
                of design and a keen eye for a detai. i am proficient in HTML, CSs ,
                JAVASRIPT, REACT.JSS, REACT NATIVE ,SQL and many other skills.

            </p>
            <ul className='skillbar'>
                <li><img src={uidesign} className="skillbarimg" />
                    <div className="skillbartext">
                        <h2>UI/UX design</h2>
                        <p>Improving my skills by practicing</p>
                    </div></li>
                <li><img src={webdesign} className="skillbarimg" />
                    <div className="skillbartext">
                        <h2>Website design</h2>
                        <p>Improving my skills by practicing</p>
                    </div></li>
                <li><img src={appdesign} className="skillbarimg" />
                    <div className="skillbartext">
                        <h2>Application design</h2>
                        <p>Improving my skills by practicing</p>
                    </div></li>
            </ul>
        </div>
    </>)
}
export default Skills;
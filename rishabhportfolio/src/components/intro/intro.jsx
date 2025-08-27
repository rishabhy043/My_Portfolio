import './intro.css'
import bg from '../../assets/image3.png'
import btnimg from '../../assets/hireme.png'
import { Link } from 'react-scroll'
const Intro = () => {
    return (
        <div className="intro">
            <div className="introcontent">
                <span className="hello">Hello, </span>
                <span>i'm <strong className="name"> ऋषभ </strong> YADAV <br /> Website Designer</span>
                <p className="introPara">I am a Skilled Web Designer wih Experience in creating a visually <br />appealing and user friendly websites.</p>
                <Link><button className='hiremebtn'><img src=
                    {btnimg} alt="" /> Hireme</button></Link>
            </div><img src={bg} alt="" className="introimg" />
        </div>
    )
}
export default Intro;
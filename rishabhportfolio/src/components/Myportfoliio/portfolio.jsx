import './portfolio.css'
import porfolioimg1 from '../../assets/portfolio-1.png';
import porfolioimg2 from '../../assets/portfolio-2.png';
import porfolioimg3 from '../../assets/portfolio-3.png';
import porfolioimg4 from '../../assets/portfolio-4.png';
import porfolioimg5 from '../../assets/portfolio-5.png';
import porfolioimg6 from '../../assets/portfolio-6.png';
const Works = () => {
    return (
        <section className="works" id='works'>
            <h3 className="works">My Portfolio</h3>
            <p className="aboutwroks">
                i am skilled and passinated web designerwith experience in creatingvisually appealing and user-friendlywebsites.i have strong understandingof desisn and keeneye fordetail. i am proficient in HTML,  CSS, JAVASCRIPT, TYPESCRIPT, REACT.JS, REACT NATIVE,
                SQL, DATABASE, and many other technologies like design software.
            </p>
            <div className="workimages">
                <img src={porfolioimg1} alt="" />
                <img src={porfolioimg2} alt="" />
                <img src={porfolioimg3} alt="" />
                <img src={porfolioimg4} alt="" />
                <img src={porfolioimg5} alt="" />
                <img src={porfolioimg6} alt="" />


            </div>
            <button className='seemorebtn'>see more</button>
        </section>
    )
}
export default Works;
import style from './slide.module.scss'
import arrow from '../../../assets/images/arrow.png'


const Slide = (props) =>{
    const changeSlide = (activeIndex) =>{
        props.setActiveIndex(activeIndex)
    }

    return (
        <div className={style.slideItem} style={{backgroundColor:props.color}}>
            <img src={arrow} alt="стрелка влево" className={style.arrowLeft} onClick={()=>changeSlide(props.activeIndex === 0 ? props.quantitySlide - 1 : props.activeIndex - 1)}/>
            {props.title}
            <img src={arrow} alt="стрелка вправо" className={style.arrowRight} onClick={()=>changeSlide(props.activeIndex === props.quantitySlide - 1 ? 0 : props.activeIndex + 1)}/>
        </div>
    )
}

export default Slide
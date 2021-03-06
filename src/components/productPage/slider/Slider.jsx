import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getSlides } from '../../../redux/productSlider/productSliderSelector'
import Slide from './Slide'
import style from './slider.module.scss'

const Slider = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hovered, setHovered] = useState(true);//вынужденное true которое сразу единожды меняется на false для того что бы анимация прогресса просмотра слайда работала и стартовый слайд
    const [hoveredStart, setHoveredStart] = useState(false);
    const timeAutoChangeSlide = 2000
    const slides = props.slides.map((slide) => {
        return <Slide key={slide.id} title={slide.title} color={slide.color} activeIndex={activeIndex} setActiveIndex={setActiveIndex} quantitySlide={props.slides.length} />
    })

    useEffect(() => {
        if (!hovered) {
            const interval = setInterval(() => {
                setActiveIndex((current) =>
                    current === slides.length - 1 ? 0 : current + 1
                )
            }, timeAutoChangeSlide);

            return () => clearInterval(interval)
        }

        if (!hoveredStart) {
            setHoveredStart(true)
            setHovered(false)
        }
    }, [slides.length, activeIndex, hovered, hoveredStart]);

    const prevImageIndex = activeIndex ? activeIndex - 1 : slides.length - 1
    const nextImageIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1


    const itemsArray = new Array(slides.length)
    itemsArray.fill(null)
    const itemsArrayID = itemsArray.map((item, index) => {
        return (
            { id: index }
        )
    })
    const slideСhoiceItemArray = itemsArrayID.map((item, ind, arr) => {
        if (activeIndex === arr.length - 1 || activeIndex === 0) {
            if (item.id === arr.length - 1 || item.id === 0) {
                return (
                    <div className={style.slideСhoiceItem} onClick={() => { setActiveIndex(item.id) }} key={item.id}>
                        {item.id === activeIndex && hovered === false
                            ? <div className={style.slideСhoiceItemProgressBar + ' ' + style.slideСhoiceItemProgressBarActive} style={{transitionDuration:timeAutoChangeSlide/1000+'s'}}></div>
                            : <div className={style.slideСhoiceItemProgressBar}></div>
                        }                        
                    </div>
                )
            }
            else if (item.id < activeIndex - 1 || item.id > activeIndex + 1) {
                return (
                    <div className={style.slideСhoiceItem + ' ' + style.slideСhoiceItemDisabled} key={item.id}>
                        {item.id === activeIndex && hovered === false
                            ? <div className={style.slideСhoiceItemProgressBar + ' ' + style.slideСhoiceItemProgressBarActive} style={{transitionDuration:timeAutoChangeSlide/1000+'s'}}></div>
                            : <div className={style.slideСhoiceItemProgressBar}></div>
                        }                    
                    </div>
                )
            }
            else {
                return (
                    <div className={style.slideСhoiceItem} onClick={() => { setActiveIndex(item.id) }} key={item.id}>
                        {item.id === activeIndex && hovered === false
                            ? <div className={style.slideСhoiceItemProgressBar + ' ' + style.slideСhoiceItemProgressBarActive} style={{transitionDuration:timeAutoChangeSlide/1000+'s'}}></div>
                            : <div className={style.slideСhoiceItemProgressBar}></div>
                        }                    
                    </div>
                )
            }
        }

        else if (item.id < activeIndex - 1 || item.id > activeIndex + 1) {
            return (
                <div className={style.slideСhoiceItem + ' ' + style.slideСhoiceItemDisabled} key={item.id}>
                    {item.id === activeIndex && hovered === false
                        ? <div className={style.slideСhoiceItemProgressBar + ' ' + style.slideСhoiceItemProgressBarActive} style={{transitionDuration:timeAutoChangeSlide/1000+'s'}}></div>
                        : <div className={style.slideСhoiceItemProgressBar}></div>
                    }                
                </div>
            )
        }
        else {
            return (
                <div className={style.slideСhoiceItem} onClick={() => { setActiveIndex(item.id) }} key={item.id}>
                    {item.id === activeIndex && hovered === false
                        ? <div className={style.slideСhoiceItemProgressBar + ' ' + style.slideСhoiceItemProgressBarActive} style={{transitionDuration:timeAutoChangeSlide/1000+'s'}}></div>
                        : <div className={style.slideСhoiceItemProgressBar}></div>
                    }
                </div>
            )
        }
    })

    return (
        <>
            <div className={style.slider}>
                <div className={style.slideBlock + " " + style.prevSlideBlock} key={prevImageIndex}>{slides[prevImageIndex]}</div>
                <div className={style.slideBlock} key={activeIndex} onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)}>{slides[activeIndex]}</div>
                <div className={style.slideBlock + " " + style.nextSlideBlock} key={nextImageIndex}>{slides[nextImageIndex]}</div>
            </div>
            <div className={style.slideСhoiceItemBlock}>
                {slideСhoiceItemArray}
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    slides: getSlides(state)
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Slider)
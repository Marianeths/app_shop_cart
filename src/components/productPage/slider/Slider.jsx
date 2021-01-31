import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getSlides } from '../../../redux/productSlider/productSliderSelector'
import Slide from './Slide'
import style from './slider.module.scss'

const Slider = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hovered, setHovered] = useState(false);

    const slides = props.slides.map((slide) => {
        return <Slide key={slide.id} title={slide.title} color={slide.color} activeIndex={activeIndex} setActiveIndex={setActiveIndex} quantitySlide={props.slides.length} />
    })

    useEffect(() => {
        if (!hovered) {
            const interval = setInterval(() => {
                setActiveIndex((current) =>
                    current === slides.length - 1 ? 0 : current + 1
                )
            }, 2000);

            return () => clearInterval(interval)
        }
    }, [slides.length, activeIndex, hovered]);

    const prevImageIndex = activeIndex ? activeIndex - 1 : slides.length - 1

    const nextImageIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1


    return (
        <div className={style.slider}>
            <div className={style.slideBlock + " " + style.prevSlideBlock} key={prevImageIndex}>{slides[prevImageIndex]}</div>
            <div className={style.slideBlock} key={activeIndex} onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)}>{slides[activeIndex]}</div>
            <div className={style.slideBlock + " " + style.nextSlideBlock} key={nextImageIndex}>{slides[nextImageIndex]}</div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    slides: getSlides(state)
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Slider)
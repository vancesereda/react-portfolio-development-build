import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {

    constructor(props) {
        super(props);
    }

    render() {
    const settings = {
        dots: this.props.photos.length < 15 ? true : false,
        infinite: false,
        speed: 350,
        lazyload: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        animate: true,
        initialSlide: 0,
        className:'slider-width'
    };
    const { resize } = this.props;
    return (
        <div>
        <Slider {...settings}>
        {this.props.photos.map((photo, i) =>  (
            <div>
                <img key={photo} src={require(`../images/${photo}${photo.includes('gif') ? '' :'.png'}`)}
                onLoad={()=>window.dispatchEvent(new Event('resize'))} className={resize ? 'resize' : null}
                style={{width: this.props.width || null}}
                />
            </div>
        ))}
        </Slider>
        </div>
    );
    }
}
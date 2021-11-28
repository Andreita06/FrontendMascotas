import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import BannerMascotas1 from '../images/BannerMascotas1.jpg';
import BannerMascotas2 from '../images/BannerMascotas2.jpg';
import BannerMascotas3 from '../images/BannerMascotas3.jpg';


const carousel = () => {

        return (

                        <Carousel>
                                <div>
                                        <img src={BannerMascotas1} alt="foto 1" />
                                        <p className="legend"> Texto1 </p>
                                </div>
                                <div>
                                        <img src={BannerMascotas2} alt="foto 2" />
                                        <p className="legend"> Texto2 </p>
                                </div>
                                <div>
                                        <img src={BannerMascotas3} alt="foto 3" />
                                        <p className="legend"> Texto3 </p>
                                </div>
                        </Carousel>



        );
}

export default carousel;
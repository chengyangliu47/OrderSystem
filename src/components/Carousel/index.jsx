import React from "react";
import banner1 from "../../assets/banner1.jpeg"
import banner2 from "../../assets/banner2.jpeg"
import banner3 from "../../assets/banner3.jpeg"
import banner4 from "../../assets/banner4.jpeg"
import './style.less'
import './glide.core.css'
import './glide.theme.css'
import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'


const Carousel = () =>{
    return(
      <div class="glide">
        <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
                <li class="glide__slide"><img class="carousel-img" src={banner1}></img></li>
                <li class="glide__slide"><img class="carousel-img" src={banner2}></img></li>
                <li class="glide__slide"><img class="carousel-img" src={banner3}></img></li>
                <li class="glide__slide"><img class="carousel-img" src={banner4}></img></li>
            </ul>
        </div>

        <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
        </div>

        <div class="glide__bullets" data-glide-el="controls[nav]">
            <button class="glide__bullet" data-glide-dir="=0"></button>
            <button class="glide__bullet" data-glide-dir="=1"></button>
            <button class="glide__bullet" data-glide-dir="=2"></button>
            <button class="glide__bullet" data-glide-dir="=3"></button>
            
        </div>

        <script src="node_modules/@glidejs/glide/dist/glide.min.js">console.log.('hi')</script>

        <script src="./glide-config.jsx">

        </script>
      </div>
    )
}

export default Carousel
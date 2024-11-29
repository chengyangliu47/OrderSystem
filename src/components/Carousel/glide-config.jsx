
import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'

const glide = new Glide('.glide', {
    type:'carousel',
    startAt : 0,
    perView : 1,
    Breakpoints:{
        800:{
            pervView: 2
        }
    }
}).mount({ Controls, Breakpoints })   


console.log("hi")
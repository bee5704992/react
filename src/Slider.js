import React,{useState} from 'react';
import ImgComp from './ImgComp';
import './slider.scss';
import i1 from './Picture/1.jpg'
import i2 from './Picture/2.jpg'
import i3 from './Picture/3.jpg'
import i4 from './Picture/4.jpg'
import i5 from './Picture/5.jpg'


function Slider () {
    const [x,setX] = useState(0)
    const goLeft = () => {
        (x === 0) ? setX(-100 * (sliderArr.length-1)) : setX(x + 100); 
    };
    const goRight = () => {
        (x === -100 * (sliderArr.length-1)) ? setX(0) : setX(x - 100);
    };

    let sliderArr = [<ImgComp src={i1} />,<ImgComp src={i2} />,<ImgComp src={i3} />,<ImgComp src={i4} />,<ImgComp src={i5} />]
    return(
        <div className="slider">
            {
                sliderArr.map((item,index)=>{
                    return(
                        <div key={index} className="slide" style ={{transform: `translateX(${x}%)`}}>
                            {item}
                        </div>
                    )
                })
            }

            <button className="goLeft" onClick={goLeft} >
            <i class="fas fa-chevron-left"></i>
            </button>
            <button className="goRight" onClick={goRight} >
            <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    )
}

export default Slider;
import React from "react";
import banner1 from "../../assets/banner1.jpeg"
import banner2 from "../../assets/banner2.jpeg"
import banner3 from "../../assets/banner3.jpeg"
import banner4 from "../../assets/banner4.jpeg"
import banner5 from "../../assets/banner1.png"
import './style.less'
import Avatar from '@mui/material/Avatar';
import mcAvatar from "../../assets/avatar.jpeg"


//c

import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const images = [
    {
      label: 'Image 1',
      imgPath: banner5,
    },
    {
      label: 'Image 2',
      imgPath: banner5,
    },
    {
      label: 'Image 3',
      imgPath: banner5,
    },
    {
      label: 'Image 4',
      imgPath: banner5,
    }
  ];

const Carousel=()=> {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  

    return (
      <div className="stepper-container" >
        <div className="image-container">
          <img
            src={images[activeStep].imgPath}
            alt={images[activeStep].label}
            className="carousel-image"
          />
          <div style={{marginTop:-30}}>
            <Avatar className="carousel-avatar" src={mcAvatar}  sx={{ width: 70, height: 70 }}/>


            <MobileStepper
              variant="dots"
              steps={maxSteps}
              position="realtive"
              activeStep={activeStep}
              className="mobile-stepper"
              sx={{ maxWidth: 400, flexGrow: 1, background:'transparent', marginTop:'-80px', marginLeft:'30%',
                          '& .MuiMobileStepper-dotActive': {
                backgroundColor: 'white', // Active dot color
              },
              }}
              style={{marginLeft:'0',marginRight:'0',maxWidth:'100%'}}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                  className="next-button"
                  sx={{marginTop:'-150px', marginRight:'0',color: 'white',}}
                >
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                  className="back-button"
                  sx={{marginTop:'-150px', marginLeft:'0%',color: 'white',}}
                >
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                </Button>
              }
            />
         </div>
        </div>
        
      </div>
    );
  }

  export default Carousel
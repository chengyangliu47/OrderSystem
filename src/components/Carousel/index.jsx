import React from "react";
import banner1 from "../../assets/banner1.jpeg"
import banner2 from "../../assets/banner2.jpeg"
import banner3 from "../../assets/banner3.jpeg"
import banner4 from "../../assets/banner4.jpeg"
import './style.less'
import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'


//c

import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const images = [
    {
      label: 'Image 1',
      imgPath: banner1,
    },
    {
      label: 'Image 2',
      imgPath: banner2,
    },
    {
      label: 'Image 3',
      imgPath: banner3,
    },
    {
      label: 'Image 4',
      imgPath: banner4,
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
      <div className="stepper-container">
        <div className="image-container">
          <img
            src={images[activeStep].imgPath}
            alt={images[activeStep].label}
            className="carousel-image"
          />
        </div>
        <MobileStepper
          variant="dots"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className="mobile-stepper"
          sx={{ maxWidth: 400, flexGrow: 1 }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              className="next-button"
            >
              Next
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
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </div>
    );
  }

  export default Carousel
import React from "react";
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import "./style.less";

const images = [
    {
      label: 'Image 1',
      imgPath: '../../assets./banner1.jpeg',
    },
    {
      label: 'Image 2',
      imgPath: '../../assets./banner2.jpeg',
    },
    {
      label: 'Image 3',
      imgPath: '../../assets./banner3.jpeg',
    },
    {
      label: 'Image 4',
      imgPath: '../../assets./banner4.jpeg',
    }
  ];

const  Carousel=()=> {
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
        <div>
        {/* 显示当前图片 */}
        <img
            src={images[activeStep].imgPath}
            alt={images[activeStep].label}
            style={{ maxWidth: 400, maxHeight: 250, width: '100%', marginBottom: '16px' }}
        />
        <MobileStepper
            variant="dots"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={{ maxWidth: 400, flexGrow: 1 }}
            nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                Next
                {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
                ) : (
                    <KeyboardArrowRight />
                )}
            </Button>
            }
            backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
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

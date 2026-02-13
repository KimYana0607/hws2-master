import React from 'react'
import {Slider, SliderProps} from '@mui/material'


const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={ // стили для слайдера // пишет студент
                {
                    width: 200,

                    '& .MuiSlider-rail': {
                        opacity: 0.3,
                        height: 4,
                        backgroundColor: '#8B8B8B',
                    },

                    '& .MuiSlider-track': {
                        height: 4,
                        backgroundColor: '#00CC22',
                        border: 'none',
                    },

                    '& .MuiSlider-thumb': {
                        width: 20,
                        height: 20,
                        backgroundColor: '#ffffff',
                        border: '1px solid #00CC22',
                        boxShadow: 'none',

                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            backgroundColor: '#00CC22',
                            boxShadow: 'none'
                            },
                    },
                }
            }
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange

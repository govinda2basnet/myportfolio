import React from 'react'
import { useThemeContext } from '../../providers/ThemeProvider';
import './IntroScreen.scss';

export interface iProps {
    setIsLoading: (loading: boolean) => void;
}

const IntroScreen: React.FC<iProps> = (props: iProps) => {
    const { theme } = useThemeContext();

    return (
        <div id={theme} className='app__loading app__flex app__full-height'>
            <div onAnimationEnd={e => {
                    if (e.animationName === "fade-out")
                        props.setIsLoading(false);
                }}
            >
                <p>Govinda Basnet;</p>
            </div>
        </div>
    )
}

export default IntroScreen
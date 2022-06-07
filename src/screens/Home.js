import React, { useEffect } from 'react';

import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import MenuIcon from '@mui/icons-material/Menu';

import { StylesPro } from "../components/Styles";
import WzColors from "../components/WzColors";
import WzResources from "../components/WzResources";
import BodyFatCalculator from "../components/BodyFatCalculator";

function Home(props) {

    const {
        wzHeaderLogoImage,

        wzHorizontalSpace1,
        wzPadding5,
        
        wzTextNormalHeader,
    } = StylesPro();


    const scrollToTheTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    useEffect(() => {
        scrollToTheTop()
    }, [])

    return (
        <Grid container style={{ backgroundColor: WzColors.hexBlack }}>
            {/*Top Navigation bar with logo, title and MenuIcon*/}
            <AppBar position="static" style={{ backgroundColor: WzColors.hexPurple }}>
                <Toolbar className={wzPadding5} style={{ paddingTop: 0, paddingBottom: 0 }}>
                    <img src={WzResources().pngLogo} alt="Logo" className={wzHeaderLogoImage} style={{  }}/>
                    
                    <Grid className={wzHorizontalSpace1}/>
                    
                    <p className={wzTextNormalHeader} style={{ flexGrow: 1 }}>Health Overview</p>

                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>


            {/*Applies a padding of 5 relative pixels like 5vh for all the inside content*/}
            <Grid className={wzPadding5}>
                <BodyFatCalculator/>
            </Grid>
        </Grid>
    );
}

export default Home;
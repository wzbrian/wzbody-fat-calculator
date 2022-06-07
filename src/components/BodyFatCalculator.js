import React, { useState, useEffect, useRef } from 'react';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { useSpring, animated } from "react-spring";


import { StylesPro } from "../components/Styles";
import WzColors from "../components/WzColors";

//The white icon styled component for the Radio
const WzIcon = styled('span')(({ theme }) => ({
    borderRadius: '50%',
    width: 16,
    height: 16,
    
    backgroundColor: WzColors.hexWhite,
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    'root':{
        color: 'white',
    },
    '.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,0.6)',
        outlineOffset: 2,
        color: 'white',
    },
    'input:hover ~ &': {
        backgroundColor: WzColors.hexResWhite,
        color: 'white',
    },
    'input:disabled ~ &': {
        boxShadow: 'none',
        color: 'white',
        background: theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
    },
    color: 'white'
}));

//The purple checked icon styled component for the Radio
const WzCheckedIcon = styled(WzIcon)({
    backgroundColor: WzColors.hexPurple,
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
        content: '""',
    },
    'input:hover ~ &': {
        backgroundColor: WzColors.hexResPurple,
    },
});


//Custom Radio working for use every where with the applied styles
const WzCustomRadio = (props) => {
    return (
        <Radio
            sx={{
                '&:hover': {
                    backgroundColor: 'transparent',
                },
            }}
            disableRipple
            color={'info'}
            checkedIcon={<WzCheckedIcon />}
            icon={<WzIcon />}
            {...props}
        />
    );
}

//Move the arrow and text percentage horizontally relative to gradientGraph parent
const getWidthForArrowPosition = (userGender, fatResult) => {
    if(userGender === 'H'){
        //The limit is 25 as 100% but for real is 93% relative to parent giving space for extra limit results
        return fatResult < 25 ?
            parseFloat(fatResult*3.72) + '%'
        :
            fatResult < 40 ?
                (parseFloat((fatResult-25)*0.666666667) + 93) + '%'
            :
                '103%' //I used 103% to fit perfectly at the end of the gradientGraph parent leaving 10% space for extra limit results
    }else{
        //The limit is 32 as 100% but for real is 93% relative to parent giving space for extra limit results
        return fatResult < 32 ?
            parseFloat(fatResult*2.90625) + '%'
        :
            fatResult < 50 ?
                (parseFloat((fatResult-32)*0.555555556) + 93) + '%'
            :
                '103%' //I used 103% to fit perfectly at the end of the gradientGraph parent leaving 10% space for extra limit results
    }
}

//Applies the right formula for male or female and then sets the state "setFatResult" with the finalResult
const getFatResult = (setFatResult, userGender, userHeight, userWeight, userWaist, userHip, userNeck) => {
    var finalResult = 0
    var preResult = 0
    switch(userGender) {
        case 'H':
            preResult = (495/(1.0324-(0.19077*Math.log10(userWaist-userNeck))+(0.15456*Math.log10(userHeight))))-450
            finalResult = preResult > 0 ? parseFloat(preResult).toFixed(2) : 0
            break;
        case 'M':
            preResult = (495/(1.29579-(0.35004*Math.log10(userWaist+userHip-userNeck))+(0.22100*Math.log10(userHeight))))-450
            finalResult = preResult > 0 ? parseFloat(preResult).toFixed(2) : 0
            break;
        default:
            preResult = (495/(1.0324-(0.19077*Math.log10(userWaist-userNeck))+(0.15456*Math.log10(userHeight))))-450
            finalResult = preResult > 0 ? parseFloat(preResult).toFixed(2) : 0
            break;
    }
    setFatResult(finalResult)
}

function BodyFatCalculator(props) {

    const {
        wzGradientGraph,
        wzCircleMini,
        wzTriangle,

        wzHorizontalSpace1,
        wzHorizontalSpace05,
        wzVerticalSpace1,
        wzVerticalSpace05,
        wzPadding5,

        wzTextInput,
        wzTextInputError,

        wzTextHuge,
        wzTextTitle,
        wzTextSubtitle,
        wzTextNormal,
        wzTextMedium,

        wzButtonCirclePadding,

        wzBgPurple
    } = StylesPro();

    
    /*Start form states*/
    const [userGender, setUserGender] = useState('H');
    const [userHeight, setUserHeight] = useState('');
    const userHeightRef = useRef(null);
    const [userWeight, setUserWeight] = useState('');
    const userWeightRef = useRef(null);
    const [userWaist, setUserWaist] = useState('');
    const userWaistRef = useRef(null);
    const [userHip, setUserHip] = useState('');
    const userHipRef = useRef(null);
    const [userNeck, setUserNeck] = useState('');
    const userNeckRef = useRef(null);
    /*End form states*/

    const [fatResult, setFatResult] = useState(0);

    //Used for showing and hiding the gradientGraph
    const [showingResult, setShowingResult] = useState(false);

    //Used to focus the button when I press return at the last TextField of the form
    const calculateButtonRef = useRef(null);

    //Whe the gradientGraph appears (using showingResult as flag), it shows with a smooth transition
    const gradientAnimation = useSpring({
        opacity: showingResult ? 1 : 0,
        marginTop: showingResult ? 0 : -500,
    });


    const doGetFatResult = () => {
        getFatResult(setFatResult, userGender, parseFloat(userHeight), parseFloat(userWeight), parseFloat(userWaist), parseFloat(userHip), parseFloat(userNeck))
    }

    const getDisabledButtonCalculate = () => {
        if(userGender === 'H'){
            if((userHeight !== '' && parseFloat(userHeight) > 0) && (userWeight !== '' && parseFloat(userWeight) > 0) && (userWaist !== '' && parseFloat(userWaist) > 0) && (userNeck !== '' && parseFloat(userNeck) > 0)){
                return false
            }else{
                return true
            }
        }else{
            if((userHeight !== '' && parseFloat(userHeight) > 0) && (userWeight !== '' && parseFloat(userWeight) > 0) && (userWaist !== '' && parseFloat(userWaist) > 0) && (userHip !== '' && parseFloat(userHip) > 0) && (userNeck !== '' && parseFloat(userNeck) > 0)){
                return false
            }else{
                return true
            }
        }
    }

    const cleanForm = () => {
        userHeightRef.current.focus()
        setUserHeight('')
        setUserWeight('')
        setUserWaist('')
        setUserHip('')
        setUserNeck('')

        setFatResult(0)

        setShowingResult(false)
    }


    const scrollToTheTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    useEffect(() => {
        scrollToTheTop()
        const handleWheel = e => e.preventDefault();
        userHeightRef.current.addEventListener("wheel", handleWheel);
        userWeightRef.current.addEventListener("wheel", handleWheel);
        userWaistRef.current.addEventListener("wheel", handleWheel);
        if(userGender === 'M')
            userHipRef.current.addEventListener("wheel", handleWheel);
        userNeckRef.current.addEventListener("wheel", handleWheel);

        var cleanUserHeightRef = userHeightRef.current
        var cleanUserWeightRef = userWeightRef.current
        var cleanUserWaistRef = userWaistRef.current
        if(userGender === 'M')
            var cleanUserHipRef = userHipRef.current
        var cleanUserNeckRef = userNeckRef.current

        return () => {
            cleanUserHeightRef.removeEventListener("wheel", handleWheel);
            cleanUserWeightRef.removeEventListener("wheel", handleWheel);
            cleanUserWaistRef.removeEventListener("wheel", handleWheel);
            if(userGender === 'M')
                cleanUserHipRef.removeEventListener("wheel", handleWheel);
            cleanUserNeckRef.removeEventListener("wheel", handleWheel);
        };
    }, [userGender])

    return (
        /*Horizontal Row with space of level 5 for its items*/
        <Grid container spacing={5}>
            {/*Item using 12 columns (all width) at phone and tablets, using 6 columns (half width) for computers or bigger devices*/}
            <Grid item xs={12} sm={12} md={6}>
                <p className={wzTextHuge} style={{ flex: 1, fontWeight: '600', marginTop: 0 }}>Calculadora de Grasa Corporal</p>
                <p className={wzTextMedium} style={{ color: WzColors.hexGray }}>El método de la Marina de Estados Unidos (US Navy Method) ofrece una manera sencilla de calcular un aproximado del porcentaje de tejido adiposo en el cuerpo de una persona.</p>
                <p className={wzTextMedium} style={{ color: WzColors.hexGray }}>Los valores requeridos por la fórmula son los siguientes:</p>

                <Grid className={wzVerticalSpace1}/>

                <p className={wzTextNormal}>Género:</p>
                <RadioGroup
                    row
                    name="userGenderRadioGroup"
                    value={userGender}
                    onChange={(event) => {setUserGender(event.target.value)}}
                >
                    <FormControlLabel value="H" control={<WzCustomRadio />} label="Hombre" className={wzTextNormal} />
                    
                    <Grid className={wzHorizontalSpace1}/>
                    
                    <FormControlLabel value="M" control={<WzCustomRadio />} label="Mujer" className={wzTextNormal} />
                </RadioGroup>

                <Grid className={wzVerticalSpace05}/>

                {
                    userHeight !== '' ? 
                        /*Verify if value whe isn't empty is greater than 0, this will change the text and color of the label depending on the case*/
                        parseFloat(userHeight) < 0 ? 
                            <p className={wzTextNormal} style={{ color: WzColors.hexRed }}>Altura (cm) No puede ser menor a 0</p>
                        :
                            <p className={wzTextNormal}>Altura (cm)</p>
                    :
                        <p className={wzTextNormal}>*Altura (cm)</p>
                }
                <TextField
                    id="textFieldUserHeight"
                    autoFocus={true}
                    /*Verify if value whe isn't empty is greater than 0, this will change className for the TextField depending on the case*/
                    className={userHeight !== '' ? parseFloat(userHeight) < 0 ? wzTextInputError : wzTextInput : wzTextInput}
                    size="small"
                    label={userHeight !== '' ? '' : 'Escribe tu altura'}
                    variant="outlined"
                    type="number"
                    value={userHeight}
                    onChange={(e) => {setUserHeight(e.target.value)}}
                    onBlur={(e) => {
                        /*
                            Verify if value whe isn't empty is greater than 0,
                            if is smaller than 0, won't let you get out until you type a valid value
                        */
                        if(e.target.value !== ''){
                            if(e.target.value < 0){
                                userHeightRef.current.focus()
                            }
                        }
                    }}
                    inputProps={{
                        className: wzTextNormal,
                        onKeyPress: event => {
                            const { key } = event;
                            //console.log(key);
                            if (key === "Enter") {
                                userWeightRef.current.focus()
                            }
                        }
                    }}
                    inputRef={userHeightRef}
                />

                <Grid className={wzVerticalSpace05}/>

                {
                    userWeight !== '' ? 
                        /*Verify if value whe isn't empty is greater than 0, this will change the text and color of the label depending on the case*/
                        parseFloat(userWeight) < 0 ? 
                            <p className={wzTextNormal} style={{ color: WzColors.hexRed }}>Peso (kg) No puede ser menor a 0</p>
                        :
                            <p className={wzTextNormal}>Peso (kg)</p>
                    :
                        <p className={wzTextNormal}>*Peso (kg)</p>
                }
                <TextField
                    id="textFieldUserWeight"
                    /*Verify if value whe isn't empty is greater than 0, this will change className for the TextField depending on the case*/
                    className={userWeight !== '' ? parseFloat(userWeight) < 0 ? wzTextInputError : wzTextInput : wzTextInput}
                    size="small"
                    label={userWeight !== '' ? '' : 'Escribe tu peso'}
                    variant="outlined"
                    type="number"
                    value={userWeight}
                    onChange={(e) => {setUserWeight(e.target.value)}}
                    onBlur={(e) => {
                        /*
                            Verify if value whe isn't empty is greater than 0,
                            if is smaller than 0, won't let you get out until you type a valid value
                        */
                        if(e.target.value !== ''){
                            if(e.target.value < 0){
                                userWeightRef.current.focus()
                            }
                        }
                    }}
                    inputProps={{
                        className: wzTextNormal,
                        onKeyPress: event => {
                            const { key } = event;
                            //console.log(key);
                            if (key === "Enter") {
                                userWaistRef.current.focus()
                            }
                        }
                    }}
                    inputRef={userWeightRef}
                />

                <Grid className={wzVerticalSpace05}/>

                {
                    userWaist !== '' ? 
                        /*Verify if value whe isn't empty is greater than 0, this will change the text and color of the label depending on the case*/
                        parseFloat(userWaist) < 0 ? 
                            <p className={wzTextNormal} style={{ color: WzColors.hexRed }}>Cintura (cm) No puede ser menor a 0</p>
                        :
                            <p className={wzTextNormal}>Cintura (cm)</p>
                    :
                        <p className={wzTextNormal}>*Cintura (cm)</p>
                }
                <TextField
                    id="textFieldUserWaist"
                    /*Verify if value whe isn't empty is greater than 0, this will change className for the TextField depending on the case*/
                    className={userWaist !== '' ? parseFloat(userWaist) < 0 ? wzTextInputError : wzTextInput : wzTextInput}
                    size="small"
                    label={userWaist !== '' ? '' : 'Medida de tu cintura'}
                    variant="outlined"
                    type="number"
                    value={userWaist}
                    onChange={(e) => {setUserWaist(e.target.value)}}
                    onBlur={(e) => {
                        /*
                            Verify if value whe isn't empty is greater than 0,
                            if is smaller than 0, won't let you get out until you type a valid value
                        */
                        if(e.target.value !== ''){
                            if(e.target.value < 0){
                                userWaistRef.current.focus()
                            }
                        }
                    }}
                    inputProps={{
                        className: wzTextNormal,
                        onKeyPress: event => {
                            const { key } = event;
                            //console.log(key);
                            if (key === "Enter") {
                                if(userGender === 'H') {
                                    userNeckRef.current.focus()
                                }else{
                                    userHipRef.current.focus()
                                }
                            }
                        }
                    }}
                    inputRef={userWaistRef}
                />

                {
                    userGender === 'M' ?
                        <React.Fragment>
                            <Grid className={wzVerticalSpace05}/>

                            {
                                userHip !== '' ? 
                                    /*Verify if value whe isn't empty is greater than 0, this will change the text and color of the label depending on the case*/
                                    parseFloat(userHip) < 0 ? 
                                        <p className={wzTextNormal} style={{ color: WzColors.hexRed }}>Cadera (cm) No puede ser menor a 0</p>
                                    :
                                        <p className={wzTextNormal}>Cadera (cm)</p>
                                :
                                    <p className={wzTextNormal}>*Cadera (cm)</p>
                            }
                            <TextField
                                id="textFieldUserHip"
                                /*Verify if value whe isn't empty is greater than 0, this will change className for the TextField depending on the case*/
                                className={userHip !== '' ? parseFloat(userHip) < 0 ? wzTextInputError : wzTextInput : wzTextInput}
                                size="small"
                                label={userHip !== '' ? '' : 'Medida de tu cadera'}
                                variant="outlined"
                                type="number"
                                value={userHip}
                                onChange={(e) => {setUserHip(e.target.value)}}
                                onBlur={(e) => {
                                    /*
                                        Verify if value whe isn't empty is greater than 0,
                                        if is smaller than 0, won't let you get out until you type a valid value
                                    */
                                    if(e.target.value !== ''){
                                        if(e.target.value < 0){
                                            userHipRef.current.focus()
                                        }
                                    }
                                }}
                                inputProps={{
                                    className: wzTextNormal,
                                    onKeyPress: event => {
                                        const { key } = event;
                                        //console.log(key);
                                        if (key === "Enter") {
                                            userNeckRef.current.focus()
                                        }
                                    }
                                }}
                                inputRef={userHipRef}
                            />
                        </React.Fragment>
                    : null
                }

                <Grid className={wzVerticalSpace05}/>

                {
                    userNeck !== '' ? 
                        /*Verify if value whe isn't empty is greater than 0, this will change the text and color of the label depending on the case*/
                        parseFloat(userNeck) < 0 ? 
                            <p className={wzTextNormal} style={{ color: WzColors.hexRed }}>Cuello (cm) No puede ser menor a 0</p>
                        :
                            <p className={wzTextNormal}>Cuello (cm)</p>
                    :
                        <p className={wzTextNormal}>*Cuello (cm)</p>
                }
                <TextField
                    id="textFieldUserNeck"
                    /*Verify if value whe isn't empty is greater than 0, this will change className for the TextField depending on the case*/
                    className={userNeck !== '' ? parseFloat(userNeck) < 0 ? wzTextInputError : wzTextInput : wzTextInput}
                    size="small"
                    label={userNeck !== '' ? '' : 'Medida de tu cuello'}
                    variant="outlined"
                    type="number"
                    value={userNeck}
                    onChange={(e) => {setUserNeck(e.target.value)}}
                    onBlur={(e) => {
                        /*
                            Verify if value whe isn't empty is greater than 0,
                            if is smaller than 0, won't let you get out until you type a valid value
                        */
                        if(e.target.value !== ''){
                            if(e.target.value < 0){
                                userNeckRef.current.focus()
                            }
                        }
                    }}
                    inputProps={{
                        className: wzTextNormal,
                        onKeyPress: event => {
                            const { key } = event;
                            //console.log(key);
                            if (key === "Enter") {
                                if(getDisabledButtonCalculate() === false)
                                    calculateButtonRef.current.focus()
                                else
                                    userNeckRef.current.blur()
                            }
                        }
                    }}
                    inputRef={userNeckRef}
                />

                <Grid className={wzVerticalSpace1}/>
                <Grid className={wzVerticalSpace1}/>

                <Grid container direction="row" alignItems="center">
                    <Tooltip title={'Obtén tu resultado'}>
                        <Button
                            className={`${wzButtonCirclePadding} ${wzBgPurple}`}
                            disabled={getDisabledButtonCalculate()}
                            variant="primary"
                            ref={calculateButtonRef}
                            onClick={() => {
                                calculateButtonRef.current.blur()
                                doGetFatResult()
                                setShowingResult(true)
                            }}
                            style={{ textTransform: 'none', opacity: getDisabledButtonCalculate() ? 0.5 : 1 }}
                        >
                            <p className={wzTextNormal} style={{ marginTop: 0, marginBottom: 0 }}>Calcular</p>
                        </Button>
                    </Tooltip>

                    <Grid className={wzHorizontalSpace1}/>

                    <Tooltip title="Limpia el formulario">
                        <Button
                            className={`${wzButtonCirclePadding}`}
                            variant="text"
                            onClick={() => {
                                cleanForm()
                            }}
                            style={{ textTransform: 'none' }}
                        >
                            <p className={wzTextNormal} style={{ marginTop: 0, marginBottom: 0 }}>Limpiar</p>
                        </Button>
                    </Tooltip>
                </Grid>
            </Grid>
            {/*Item using 12 columns (all width) at phone and tablets, using 6 columns (half width) for computers or bigger devices*/}
            <Grid item xs={12} sm={12} md={6} alignItems="center" style={{ display: 'flex' }}>
                {
                    /*
                        Shows the gradientGraph and the result when the state showingResult is true
                    */
                    showingResult ?
                        <animated.div style={gradientAnimation}>
                            <Grid container className={wzPadding5}>
                                <p className={wzTextTitle} style={{ flex: 1, fontWeight: '600', marginTop: 0 }}>Tú resultado</p>
                                
                                <Grid container style={{ position: 'relative' }}>
                                    <Grid style={{ position: 'absolute', top: 0, left: 0, right: 0, width: getWidthForArrowPosition(userGender, fatResult) }}>
                                        <p className={wzTextSubtitle} style={{ marginTop: 0, marginBottom: 0, textAlign: 'right' }}>{fatResult}%</p>
                                        
                                        {/*Triangle*/}
                                        <Grid className={wzTriangle} style={{ marginLeft: 'auto' }}/>
                                    </Grid>

                                    {/*Graph Rectangle*/}
                                    <Grid className={wzGradientGraph}/>
                                </Grid>
                                
                                <Grid container>
                                    <Grid className={wzVerticalSpace1}/>
                                </Grid>

                                {/*Row container for all the range values of the graph*/}
                                <Grid container direction="row" alignItems="center" justifyContent="space-evenly">
                                    {/*Range item with its assigned values to show depending on the userGender*/}
                                    <Grid>
                                        <Grid className={wzCircleMini} style={{ backgroundColor: WzColors.hexBlue, margin: 'auto' }} />
                                        <p className={wzTextNormal} style={{ fontWeight: '600', textAlign: 'center', marginBottom: 0 }}>{userGender === 'H' ? '2-4' : '10-13'}%</p>
                                        <p className={wzTextMedium} style={{ color: WzColors.hexGray, textAlign: 'center', marginBottom: 0 }}>Esencial</p>
                                    </Grid>

                                    <Grid className={wzHorizontalSpace1}/>

                                    <Grid>
                                        <Grid className={wzCircleMini} style={{ backgroundColor: WzColors.hexGreen, margin: 'auto' }} />
                                        <p className={wzTextNormal} style={{ fontWeight: '600', textAlign: 'center', marginBottom: 0 }}>{userGender === 'H' ? '6-13' : '14-20'}%</p>
                                        <p className={wzTextMedium} style={{ color: WzColors.hexGray, textAlign: 'center', marginBottom: 0 }}>Deportista</p>
                                    </Grid>

                                    <Grid className={wzHorizontalSpace1}/>

                                    <Grid>
                                        <Grid className={wzCircleMini} style={{ backgroundColor: WzColors.hexLightGreen, margin: 'auto' }} />
                                        <p className={wzTextNormal} style={{ fontWeight: '600', textAlign: 'center', marginBottom: 0 }}>{userGender === 'H' ? '14-17' : '21-24'}%</p>
                                        <p className={wzTextMedium} style={{ color: WzColors.hexGray, textAlign: 'center', marginBottom: 0 }}>Fitness</p>
                                    </Grid>

                                    <Grid className={wzHorizontalSpace1}/>

                                    <Grid>
                                        <Grid className={wzCircleMini} style={{ backgroundColor: WzColors.hexYellow, margin: 'auto' }} />
                                        <p className={wzTextNormal} style={{ fontWeight: '600', textAlign: 'center', marginBottom: 0 }}>{userGender === 'H' ? '18-24' : '25-31'}%</p>
                                        <p className={wzTextMedium} style={{ color: WzColors.hexGray, textAlign: 'center', marginBottom: 0 }}>Aceptable</p>
                                    </Grid>

                                    <Grid className={wzHorizontalSpace1}/>

                                    <Grid>
                                        <Grid className={wzCircleMini} style={{ backgroundColor: WzColors.hexOrange, margin: 'auto' }} />
                                        <p className={wzTextNormal} style={{ fontWeight: '600', textAlign: 'center', marginBottom: 0 }}>{userGender === 'H' ? '25' : '32'}% +</p>
                                        <p className={wzTextMedium} style={{ color: WzColors.hexGray, textAlign: 'center', marginBottom: 0 }}>Obeso</p>
                                    </Grid>

                                    <Grid className={wzHorizontalSpace05}/>
                                </Grid>
                            </Grid>
                        </animated.div>
                    : null
                }
            </Grid>
        </Grid>
    );
}

export default BodyFatCalculator;
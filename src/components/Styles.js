import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

import WzColors from "./WzColors";

/*Start Defined values for custom sizes in every device*/
const wzRoyalLargeSize = 14

/*Values that multiply its assigned above Size*/
const wzScaleLargeMini = 0.8
const wzScaleLargeSmall = 0.86
const wzScaleLargeMedium = 0.95
const wzScaleLargeNormalHeader = 1.29
const wzScaleLargeSubtitle = 1.79
const wzScaleLargeTitle = 2.14
const wzScaleLargeHuge = 2.64

const wzRoyalTabletSize = 13.7

/*Values that multiply its assigned above Size*/
const wzScaleTabletMini = 0.8
const wzScaleTabletSmall = 0.82
const wzScaleTabletMedium = 0.88
const wzScaleTabletNormalHeader = 1.17
const wzScaleTabletSubtitle = 1.46
const wzScaleTabletTitle = 1.72
const wzScaleTabletHuge = 2.19


const wzRoyalPhoneSize = 12.5

/*Values that multiply its assigned above Size*/
const wzScalePhoneMini = 0.8
const wzScalePhoneSmall = 0.82
const wzScalePhoneMedium = 0.88
const wzScalePhoneNormalHeader = 1.12
const wzScalePhoneSubtitle = 1.28
const wzScalePhoneTitle = 1.6
const wzScalePhoneHuge = 2

/*End Defined values for custom sizes in every device*/

const theme = createTheme();

// returns the style
export const StylesPro = makeStyles(() => ({

    wzHeaderLogoImage: {
        backgroundColor: '',
        
        objectFit: 'contain',
        alignSelf: 'center',

        //boxShadow: '0px 0px 7px 0px ' + WzColors.tAuxPrimary + '0.79)',
        [theme.breakpoints.up('xs')]: {
            height: wzRoyalPhoneSize * 2,
            width: wzRoyalPhoneSize * 2,
        },
        [theme.breakpoints.up('sm')]: {
            height: wzRoyalTabletSize * 2,
            width: wzRoyalTabletSize * 2,
        },
        [theme.breakpoints.up('md')]: {
            height: wzRoyalLargeSize * 2,
            width: wzRoyalLargeSize * 2,
        },
    },





    wzGradientGraph:{
        background: 'linear-gradient(90deg, rgba(0,159,227,1) 0%, rgba(0,156,61,1) 25%, rgba(152,194,29,1) 50%, rgba(254,202,0,1) 75%, rgba(215,99,40,1) 100%)',
        width: '100%',
        [theme.breakpoints.up('xs')]: {
            height: wzRoyalPhoneSize * 6,
            borderRadius: wzRoyalPhoneSize * 0.5,
            marginTop: wzRoyalPhoneSize * 3.8,
        },
        [theme.breakpoints.up('sm')]: {
            height: wzRoyalTabletSize * 6,
            borderRadius: wzRoyalTabletSize * 0.5,
            marginTop: wzRoyalTabletSize * 4,
        },
        [theme.breakpoints.up('md')]: {
            height: wzRoyalLargeSize * 6,
            borderRadius: wzRoyalLargeSize * 0.5,
            marginTop: wzRoyalLargeSize * 4.5,
        },
    },
    wzTriangle:{
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderColor: 'transparent',
        borderTopColor: WzColors.hexWhite,
        [theme.breakpoints.up('xs')]: {
            borderLeftWidth: wzRoyalPhoneSize * 1,
            borderRightWidth: wzRoyalPhoneSize * 1,
            borderTopWidth: wzRoyalPhoneSize * 1.5,
            marginTop: wzRoyalPhoneSize * 0.5 + 'px !important',
        },
        [theme.breakpoints.up('sm')]: {
            borderLeftWidth: wzRoyalTabletSize * 1,
            borderRightWidth: wzRoyalTabletSize * 1,
            borderTopWidth: wzRoyalTabletSize * 1.5,
            marginTop: wzRoyalTabletSize * 0.5 + 'px !important',
        },
        [theme.breakpoints.up('md')]: {
            borderLeftWidth: wzRoyalLargeSize * 1,
            borderRightWidth: wzRoyalLargeSize * 1,
            borderTopWidth: wzRoyalLargeSize * 1.5,
            marginTop: wzRoyalLargeSize * 0.5 + 'px !important',
        },
    },
    wzCircleMini:{
        borderColor: WzColors.hexWhite,
        borderStyle: 'solid',
        [theme.breakpoints.up('xs')]: {
            borderRadius: wzRoyalPhoneSize * 0.4,
            borderWidth: wzRoyalPhoneSize * 0.1,
            height: wzRoyalPhoneSize * 1,
            width: wzRoyalPhoneSize * 1,
        },
        [theme.breakpoints.up('sm')]: {
            borderRadius: wzRoyalTabletSize * 0.4,
            borderWidth: wzRoyalTabletSize * 0.1,
            height: wzRoyalTabletSize * 1,
            width: wzRoyalTabletSize * 1,
        },
        [theme.breakpoints.up('md')]: {
            borderRadius: wzRoyalLargeSize * 0.27,
            borderWidth: wzRoyalLargeSize * 0.1,
            height: wzRoyalLargeSize * 0.8,
            width: wzRoyalLargeSize * 0.8,
        },
    },





    wzHorizontalSpace05:{
        [theme.breakpoints.up('xs')]: {
            width: wzRoyalPhoneSize * 0.5,
        },
        [theme.breakpoints.up('sm')]: {
            width: wzRoyalTabletSize * 0.5,
        },
        [theme.breakpoints.up('md')]: {
            width: wzRoyalLargeSize * 0.5,
        },
    },
    wzHorizontalSpace1:{
        [theme.breakpoints.up('xs')]: {
            width: wzRoyalPhoneSize * 1,
        },
        [theme.breakpoints.up('sm')]: {
            width: wzRoyalTabletSize * 1,
        },
        [theme.breakpoints.up('md')]: {
            width: wzRoyalLargeSize * 1,
        },
    },
    wzVerticalSpace05:{
        [theme.breakpoints.up('xs')]: {
            height: wzRoyalPhoneSize * 0.5,
        },
        [theme.breakpoints.up('sm')]: {
            height: wzRoyalTabletSize * 0.5,
        },
        [theme.breakpoints.up('md')]: {
            height: wzRoyalLargeSize * 0.5,
        },
    },
    wzVerticalSpace1:{
        [theme.breakpoints.up('xs')]: {
            height: wzRoyalPhoneSize * 1,
        },
        [theme.breakpoints.up('sm')]: {
            height: wzRoyalTabletSize * 1,
        },
        [theme.breakpoints.up('md')]: {
            height: wzRoyalLargeSize * 1,
        },
    },

    wzPadding1:{
        [theme.breakpoints.up('xs')]: {
            padding: wzRoyalPhoneSize * 1,
        },
        [theme.breakpoints.up('sm')]: {
            padding: wzRoyalTabletSize * 1,
        },
        [theme.breakpoints.up('md')]: {
            padding: wzRoyalLargeSize * 1,
        },
    },
    wzPadding2:{
        [theme.breakpoints.up('xs')]: {
            padding: wzRoyalPhoneSize * 1,
        },
        [theme.breakpoints.up('sm')]: {
            padding: wzRoyalTabletSize * 1,
        },
        [theme.breakpoints.up('md')]: {
            padding: wzRoyalLargeSize * 2,
        },
    },
    wzPadding5:{
        [theme.breakpoints.up('xs')]: {
            padding: wzRoyalPhoneSize * 2.5,
        },
        [theme.breakpoints.up('sm')]: {
            padding: wzRoyalTabletSize * 2.5,
        },
        [theme.breakpoints.up('md')]: {
            padding: wzRoyalLargeSize * 5,
        },
    },



    wzTextInput:{
        width: '100%',
        '& label.Mui-focused': {
            color: WzColors.hexGray,
        },
        '& .MuiInputLabel-root': {
            color: WzColors.hexGray,
        },
        '& .MuiInputBase-root': {
            color: WzColors.hexWhite,
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderRadius: 5000,
                borderColor: WzColors.hexGray,
                [theme.breakpoints.up('xs')]: {
                    borderWidth: wzRoyalPhoneSize * 0.1,
                },
                [theme.breakpoints.up('sm')]: {
                    borderWidth: wzRoyalTabletSize * 0.1,
                },
                [theme.breakpoints.up('md')]: {
                    borderWidth: wzRoyalLargeSize * 0.1,
                },
            },
            '&:hover fieldset': {
                boxShadow: '0px 0px 10px 0px ' + WzColors.tGray + '0.5)',
                borderRadius: 5000,
                borderColor: WzColors.hexGray,
            },
            '&.Mui-focused fieldset': {
                boxShadow: '0px 0px 7px 0px ' + WzColors.tWhite + '0.5)',
                borderRadius: 5000,
                borderColor: WzColors.hexWhite,
            },
        },
    },
    wzTextInputError:{
        width: '100%',
        '& label.Mui-focused': {
            color: WzColors.hexDesRed,
        },
        '& .MuiInputLabel-root': {
            color: WzColors.hexDesRed,
        },
        '& .MuiInputBase-root': {
            color: WzColors.hexRed,
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderRadius: 5000,
                borderColor: WzColors.hexDesRed,
                [theme.breakpoints.up('xs')]: {
                    borderWidth: wzRoyalPhoneSize * 0.1,
                },
                [theme.breakpoints.up('sm')]: {
                    borderWidth: wzRoyalTabletSize * 0.1,
                },
                [theme.breakpoints.up('md')]: {
                    borderWidth: wzRoyalLargeSize * 0.1,
                },
            },
            '&:hover fieldset': {
                boxShadow: '0px 0px 10px 0px ' + WzColors.tDesRed + '0.5)',
                borderRadius: 5000,
                borderColor: WzColors.hexDesRed,
            },
            '&.Mui-focused fieldset': {
                boxShadow: '0px 0px 7px 0px ' + WzColors.tRed + '0.5)',
                borderRadius: 5000,
                borderColor: WzColors.hexRed,
            },
        },
    },



    
    wzButtonCirclePadding:{
        borderRadius: 5000 + 'px !important',
        overflow: 'hidden !important',
        //margin: 'auto' + ' !important',
        alignItems: 'center !important',
        justifyContent: 'center !important',

        [theme.breakpoints.up('xs')]: {
            padding: wzRoyalPhoneSize * 1 + 'px !important',
        },
        [theme.breakpoints.up('sm')]: {
            padding: wzRoyalTabletSize * 1 + 'px !important',
        },
        [theme.breakpoints.up('md')]: {
            padding: wzRoyalLargeSize * 1 + 'px !important',
        },
    },



    wzBgPurple: {
        background: WzColors.hexPurple + ' !important',
        boxShadow: '0px 0px 7px 0px ' + WzColors.tResPurple + '0.79) !important',
        '&:hover': {
            background: WzColors.hexResPurple + ' !important',
            boxShadow: '0px 0px 7px 0px ' + WzColors.tResPurple + '0.79) !important',
        },
    },


    

    

    wzTextHuge:{
        color: WzColors.hexWhite,
        //lineHeight: '3vh',
        //marginBottom: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            fontSize: wzRoyalPhoneSize * wzScalePhoneHuge,
            lineHeight: wzRoyalPhoneSize * wzScalePhoneHuge + 'px',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: wzRoyalTabletSize * wzScaleTabletHuge,
            lineHeight: wzRoyalTabletSize * wzScaleTabletHuge + 'px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: wzRoyalLargeSize * wzScaleLargeHuge,
            lineHeight: wzRoyalLargeSize * wzScaleLargeHuge + 'px',
        },
    },
    wzTextTitle:{
        color: WzColors.hexWhite,
        //lineHeight: '3vh',
        //marginBottom: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            fontSize: wzRoyalPhoneSize * wzScalePhoneTitle,
            lineHeight: wzRoyalPhoneSize * wzScalePhoneTitle + 'px',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: wzRoyalTabletSize * wzScaleTabletTitle,
            lineHeight: wzRoyalTabletSize * wzScaleTabletTitle + 'px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: wzRoyalLargeSize * wzScaleLargeTitle,
            lineHeight: wzRoyalLargeSize * wzScaleLargeTitle + 'px',
        },
    },
    wzTextSubtitle:{
        color: WzColors.hexWhite,
        //lineHeight: '3vh',
        //marginBottom: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            fontSize: wzRoyalPhoneSize * wzScalePhoneSubtitle,
            lineHeight: wzRoyalPhoneSize * wzScalePhoneSubtitle + 'px',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: wzRoyalTabletSize * wzScaleTabletSubtitle,
            lineHeight: wzRoyalTabletSize * wzScaleTabletSubtitle + 'px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: wzRoyalLargeSize * wzScaleLargeSubtitle,
            lineHeight: wzRoyalLargeSize * wzScaleLargeSubtitle + 'px',
        },
    },
    wzTextNormalHeader:{
        color: WzColors.hexWhite,
        //lineHeight: '3vh',
        //marginBottom: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            fontSize: wzRoyalPhoneSize * wzScalePhoneNormalHeader,
            lineHeight: wzRoyalPhoneSize * wzScalePhoneNormalHeader + 'px',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: wzRoyalTabletSize * wzScaleTabletNormalHeader,
            lineHeight: wzRoyalTabletSize * wzScaleTabletNormalHeader + 'px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: wzRoyalLargeSize * wzScaleLargeNormalHeader,
            lineHeight: wzRoyalLargeSize * wzScaleLargeNormalHeader + 'px',
        },
    },
    wzTextNormal:{
        color: WzColors.hexWhite,
        //lineHeight: '3vh',
        //marginBottom: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            fontSize: wzRoyalPhoneSize * 1,
            lineHeight: wzRoyalPhoneSize * 1 + 'px',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: wzRoyalTabletSize * 1,
            lineHeight: wzRoyalTabletSize * 1 + 'px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: wzRoyalLargeSize * 1,
            lineHeight: wzRoyalLargeSize * 1 + 'px',
        },
    },
    wzTextMedium:{
        color: WzColors.hexWhite,
        //lineHeight: '3vh',
        //marginBottom: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            fontSize: wzRoyalPhoneSize * wzScalePhoneMedium,
            lineHeight: wzRoyalPhoneSize * wzScalePhoneMedium + 'px',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: wzRoyalTabletSize * wzScaleTabletMedium,
            lineHeight: wzRoyalTabletSize * wzScaleTabletMedium + 'px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: wzRoyalLargeSize * wzScaleLargeMedium,
            lineHeight: wzRoyalLargeSize * wzScaleLargeMedium + 'px',
        },
    },
    wzTextSmall:{
        color: WzColors.hexWhite,
        //lineHeight: '3vh',
        //marginBottom: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            fontSize: wzRoyalPhoneSize * wzScalePhoneSmall,
            lineHeight: wzRoyalPhoneSize * wzScalePhoneSmall + 'px',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: wzRoyalTabletSize * wzScaleTabletSmall,
            lineHeight: wzRoyalTabletSize * wzScaleTabletSmall + 'px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: wzRoyalLargeSize * wzScaleLargeSmall,
            lineHeight: wzRoyalLargeSize * wzScaleLargeSmall + 'px',
        },
    },
    wzTextMini:{
        color: WzColors.hexWhite,
        //lineHeight: '3vh',
        //marginBottom: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            fontSize: wzRoyalPhoneSize * wzScalePhoneMini,
            lineHeight: wzRoyalPhoneSize * wzScalePhoneMini + 'px',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: wzRoyalTabletSize * wzScaleTabletMini,
            lineHeight: wzRoyalTabletSize * wzScaleTabletMini + 'px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: wzRoyalLargeSize * wzScaleLargeMini,
            lineHeight: wzRoyalLargeSize * wzScaleLargeMini + 'px',
        },
    },

}))
import { createUseStyles } from "react-jss"


export const styles = createUseStyles({
    mainContainer:{
        position: 'relative'
    },
    buttomLine:{
        height: '5px',
        width: '100px',
        backgroundColor: 'black'
    },
    verticalLine:{
        height: '175px',
        width: '5px',
        backgroundColor: 'black',
        marginLeft: '45px'
    },
    horizontalLine:{
        height: '5px',
        width: '100px',
        backgroundColor: 'black',
        marginLeft: '45px'
    },
    topLine:{
        width: '5px',
        height: '30px',
        backgroundColor: 'black',
        marginLeft: '310PX',
        position: 'absolute',
        top: '1px',
        right: 0
    },
    head:{
        width: '30px',
        aspectRatio: 1,
        borderRadius:'50%',
        border:'5px solid black',
        position: 'absolute',
        top: '30px',
        right: '-17px'
    },
    body:{
        width: '5px',
        height: '50px',
        backgroundColor: 'black',
        position: 'absolute',
        top: '68px',
        right: '0'
    },
    rightArm:{
        height: '5px',
        width: '50px',
        backgroundColor: 'black',
        position: 'absolute',
        top: '85px',
        right: '-50px',
        rotate: '-30deg',
        transformOrigin: 'left bottom'
    },
    leftArm:{
        height: '5px',
        width: '50px',
        backgroundColor: 'black',
        position: 'absolute',
        top: '85px',
        right: '5px',
        rotate: '30deg',
        transformOrigin: 'right bottom'
    },
    rightLeg:{
        height: '5px',
        width: '40px',
        backgroundColor: 'black',
        position: 'absolute',
        top: '110px',
        right: '-35px',
        rotate: '60deg',
        transformOrigin: 'left bottom'
    },
    leftLeg:{
        height: '5px',
        width: '40px',
        backgroundColor: 'black',
        position: 'absolute',
        top: '110px',
        right: '0px',
        rotate: '-60deg',
        transformOrigin: 'right bottom'
    }

})
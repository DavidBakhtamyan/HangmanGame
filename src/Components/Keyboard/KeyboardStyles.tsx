import { createUseStyles } from 'react-jss'

export const styles = createUseStyles({
    mainContainer:{
        alignSelf: "stretch" 
    },
    keyboardContainer:{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
    },
    btns:{
        width:'100%',
        border: '3px solid black',
        backgtound:'none',
        aspectRatio: 1,
        fontSize: '2.5rem',
        padding: '.5rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        color: 'black',
        '&:focus:not(:disabeled)':{
            backgroundColor: 'hsl(200, 100%, 75%)'

        },
        '&:hover:not(:disabled)':{
            backgroundColor: 'hsl(200, 100%, 75%)'
        }
    },
    inactive:{
        opacity:.3
    },
    active:{
        backgroundColor: 'hsl(200, 100%, 50%)'
    }
})
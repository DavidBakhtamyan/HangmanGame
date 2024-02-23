import { createUseStyles } from 'react-jss'

export const styles = createUseStyles({
 mainContainer:{
    display: 'flex',
    gap: '.25em',
    fontSize: '6rem',
    fontWeight: 'bold',
    textTransform: "uppercase",
    fontFamily: 'monospace'
 },
 letter:{
    borderBottom: '.1em solid black'
},
visibleLetter:{
    visibility: 'visible'
},
hiddenLetter:{
    visibility: 'hidden'
},
revealLetter:{
    color:'red'
}
})
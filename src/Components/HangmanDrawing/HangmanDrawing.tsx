import { styles } from "./HangmanDrawungStyles"


type HangmanDrowingProps ={
    numberOfGuesses: number
}

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrowingProps) => {
    const classes = styles()
    const HEAD =(
        <div key={1} className={classes.head}/>
        )
    const BODY = (
        <div key={2} className={classes.body}/>
    )
    const RIGHT_ARM =(
        <div key={3} className={classes.rightArm}/>
    ) 
    const LEFT_ARM =(
        <div key={4} className={classes.leftArm}/>
    )
    const RIGHT_LEG =(
        <div key={5} className={classes.rightLeg}/>
    )
    const LEFT_LEG =(
        <div key={6} className={classes.leftLeg}/>
    )
    const BODY_PARTS=[
        HEAD,
        BODY,
        RIGHT_ARM,
        LEFT_ARM,
        RIGHT_LEG,
        LEFT_LEG
    ]
  return (
    <div className={classes.mainContainer}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div className={classes.topLine}/>
        <div className={classes.horizontalLine}/>
        <div className={classes.verticalLine}/>
        <div className={classes.buttomLine}/>
    </div>
  )
}

export default HangmanDrawing
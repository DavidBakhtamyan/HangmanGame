import { styles } from "./KeyboardStyles";

type KeyboardProps = {
    disabled: boolean,
    activeLetters: string[],
    inactiveLetters: string[],
    addGuessedLetter: (letter: string) => void
}

const Keyboard = ({ disabled, activeLetters, inactiveLetters, addGuessedLetter }: KeyboardProps) => {
    const classes = styles()
    const KEYS:string[] = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z'
    ];
    return (
        <div className={classes.mainContainer}>
            <div className={classes.keyboardContainer}>
                {KEYS.map((letter, index) =>{
                    const isActive = activeLetters.includes(letter)
                    const isInactive = inactiveLetters.includes(letter)
                    return(
                    <button 
                        onClick={() => addGuessedLetter(letter)} 
                        className={`${classes.btns} ${isActive && classes.active } ${isInactive && classes.inactive}`} 
                        key={index} 
                        disabled ={isActive || isInactive || disabled}>{letter}</button>
                )})}
            </div>
        </div>
    )
}

export default Keyboard
import { styles } from "./WordToGuessStyles"
type WordToGuessProps={
    guessedLetters: string[],
    wordToGuess: string,
    reveal?: boolean
}
const WordToGuess = ({ guessedLetters, wordToGuess, reveal= false}: WordToGuessProps) => {
    const classes = styles()
  return (
    <div className={classes.mainContainer}>
        {wordToGuess.split('').map((letter, index) => (
            <span className={classes.letter} key={index}>
                <span className={`${guessedLetters.includes(letter) || reveal ? classes.visibleLetter : classes.hiddenLetter} ${reveal && !guessedLetters.includes(letter) ? classes.revealLetter : letter }`}>{letter}</span>
            </span>
        ))}
    </div>
  )
}

export default WordToGuess
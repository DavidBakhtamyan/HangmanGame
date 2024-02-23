import './App.css'
import { useState,useEffect,useCallback } from 'react'
import word from "./wordList.json"
import Keyboard from './Components/Keyboard/Keyboard'
import HangmanDrawing from './Components/HangmanDrawing/HangmanDrawing'
import WordToGuess from './Components/WordToGuess/WordToGuess'



function App() {
  const [wordToGuess] = useState<string>(word[Math.floor(Math.random() * word.length)])
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const incorrectLetters:string[] = guessedLetters.filter(letter => !wordToGuess.includes(letter))
  const isLoser = incorrectLetters.length >=  6
  const isWinner = wordToGuess.split('').every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter: string) =>{
    if(guessedLetters.includes(letter) || isLoser || isWinner) return
    
    setGuessedLetters((currentLetters) => [...currentLetters, letter])
  },[guessedLetters, isLoser,isWinner])


  useEffect(() => {
  const handler = (e: KeyboardEvent) => {
    const key = e.key

    if(!key.match(/^[a-z]$/)) return

    e.preventDefault()
    addGuessedLetter(key)
  }


  document.addEventListener("keypress", handler)
    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [guessedLetters])


  return (
    <div className="mainContainer">
      <div className="loseWin">
        {isWinner && "WINNER! Refresh to try again" }
        {isLoser && "Nice try Refresh to try again" }
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
      <WordToGuess 
        guessedLetters = {guessedLetters} 
        wordToGuess={wordToGuess}
        reveal = {isLoser}
      />
      <Keyboard 
        disabled = {isLoser || isWinner}
        activeLetters = {guessedLetters.filter(letter => wordToGuess.includes(letter))} 
        inactiveLetters ={incorrectLetters} 
        addGuessedLetter= {addGuessedLetter}
      />
    </div>  
  )
}

export default App

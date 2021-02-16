import React, { useEffect } from "react"

export default function HackingGlitchText(props) {
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  function getRandomLetter() {
    let alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ]
    return alphabet[rand(0, alphabet.length - 1)]
  }
  function getRandomWord(word) {
    let text = word.innerHTML

    let finalWord = ""
    for (let i = 0; i < text.length; i++) {
      finalWord += text[i] == " " ? " " : getRandomLetter()
    }

    return finalWord.toUpperCase()
  }

  useEffect(() => {
    let word = document.querySelector("#" + props.attributes.id)
    let interv = "undefined"
    let canChange = false
    let globalCount = 0
    let count = 0
    let INITIAL_WORD = word.innerHTML
    let isGoing = false
    let randomWord = getRandomWord(word)
    word.innerHTML = randomWord
    function init() {
      if (isGoing) return

      isGoing = true
      let randomWord = getRandomWord(word)
      word.innerHTML = randomWord

      interv = setInterval(function () {
        let finalWord = ""
        for (let x = 0; x < INITIAL_WORD.length; x++) {
          if (x <= count && canChange) {
            finalWord += INITIAL_WORD[x]
          } else {
            finalWord += getRandomLetter()
          }
        }
        word.innerHTML = finalWord
        if (canChange) {
          count++
        }
        if (globalCount >= 20) {
          canChange = true
        }
        if (count >= INITIAL_WORD.length) {
          clearInterval(interv)
          count = 0
          canChange = false
          globalCount = 0
          isGoing = false
        }
        globalCount++
      }, 50)
    }

    setTimeout(() => {
      init()
    }, 1000)
  }, [])

  return <span {...props.attributes}>{props.children}</span>
}
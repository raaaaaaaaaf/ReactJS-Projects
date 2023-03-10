import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Joke from './Joke'
import Data from './Data'
import './Style.css'



function App() {
   const elements = Data.map(joke => 
   <Joke 
   setup={joke.setup} 
   punchline={joke.punchline}
   upvote = {joke.upvote}
   downvote = {joke.downvote}
   comment = {joke.comments}
   isPun = {joke.isPun}
   />
   )
  return (
      <div className='main--container'>
         {elements}

      </div>
  )
}

export default App

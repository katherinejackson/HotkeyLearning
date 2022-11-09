
import { useState } from 'react';

import CreateStack from './CreateStack';
import FlashcardLearning from './FlashcardLearning';
import keyData from './keyData'
import './App.css'
import Game from './Game';

const options = window.options || { view: 'flashcards', colour_scheme: 'default', selectedItems: '[0, 1, 2, 3, 4,]'};


function App() {
  // const [view, setView] = useState('flashcard')
  const [view, setView] = useState(options['view'])
  document.documentElement.className = options.colour_scheme

  const data = keyData

  console.log(view)

  return (
    <div className="App">
      {view == 'create' ? <CreateStack data={data} options={options} />
        : view == 'flashcards' ? <FlashcardLearning data={data} options={options}/>
          : view == 'game' ? <Game data={data} options={options}/>
            : null
      }
    </div>
  );
}

export default App;

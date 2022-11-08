
import { useState } from 'react';

import CreateStack from './CreateStack';
import FlashcardLearning from './FlashcardLearning';
import keyData from './keyData'
import Matching from './Matching';
import './App.css'

const options = window.options || { view: 'game', color_scheme: 'default' };


function App() {
  // const [view, setView] = useState('flashcard')
  const [view, setView] = useState(options['view'])
  const selectedData = []
  document.documentElement.className = options.colour_scheme

  const data = keyData

  console.log(view)

  return (
    <div className="App">
      {view == 'create' ? <CreateStack data={data} selectedData={selectedData} />
        : view == 'flashcards' ? <FlashcardLearning data={data} selectedData={selectedData} />
          : view == 'game' ? <Matching data={data} />
            : null
      }
    </div>
  );
}

export default App;

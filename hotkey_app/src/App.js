
import { useState } from 'react';

import CreateStack from './CreateStack';
import FlashcardLearning from './FlashcardLearning';
import keyData from './keyData'
import Matching from './Matching';

const options = window.options || { view: 'flashcard', colorScheme: 'default'};


function App() {
  const [view, setView] = useState(options['view'])
  const selectedData = []

  const data = keyData

  return (
    <div className="d-flex flex-column">
      {view == 'create' ? <CreateStack data={data} selectedData={selectedData}/>
        : view == 'flashcard' ? <FlashcardLearning data={data} selectedData={selectedData}/>
          : <Matching />}
    </div>
  );
}

export default App;

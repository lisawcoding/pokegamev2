import React from 'react';
import './App.scss';
import GameApp from './hooks/GameApp';

import {LanguageProvider} from './contexts/LanguageContext';
import {PokeListProvider} from './contexts/PokelistContext';
import {TeamProvider} from './contexts/TeamContext'
import {ScoreProvider} from './contexts/ScoreContext';
import {InitValueProvider} from './contexts/InitValueContext';


function App() {
//   window.addEventListener("hashchange", function(){
//     console.log('hash change')
// })

  return (
      <InitValueProvider>
        <LanguageProvider>
          <TeamProvider>
            <PokeListProvider>
              <ScoreProvider>
                <GameApp/>
              </ScoreProvider>
            </PokeListProvider>
          </TeamProvider>
        </LanguageProvider>          
      </InitValueProvider>
  );
}

export default App;
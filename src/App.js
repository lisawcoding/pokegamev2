import React from 'react';
import './App.scss';
import GameApp from './hooks/GameApp';

import {LanguageProvider} from './contexts/LanguageContext';
import {PokeListProvider} from './contexts/PokelistContext';
import {TeamProvider} from './contexts/TeamContext'
import {ScoreProvider} from './contexts/ScoreContext';


function App() {
  window.addEventListener("hashchange", function(){
    console.log('hash change')
})

  return (
          <LanguageProvider>
            <PokeListProvider>
              <TeamProvider>
                <ScoreProvider>
                    <GameApp/>
                  </ScoreProvider>
                </TeamProvider>              
              </PokeListProvider>
          </LanguageProvider>
  );
}

export default App;
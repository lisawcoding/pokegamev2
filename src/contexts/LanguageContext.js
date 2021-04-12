import React, {createContext, useState} from 'react';

export const LanguageContext = createContext();

export function LanguageProvider (props) {
    const navLan=navigator.language || navigator.userLanguage;
    const iniLan=navLan.toLowerCase().indexOf('zh')!==-1 ? 'zh': 'en'; 
  
    const [language, setLanguage]=useState(iniLan);

    const changeLanguage=(e)=>{
        return setLanguage(e.target.dataset.lan);
    }
    return(
        <LanguageContext.Provider value={{language, changeLanguage}}>
            <>
                {props.children}
            </>
        </LanguageContext.Provider>
    )
}
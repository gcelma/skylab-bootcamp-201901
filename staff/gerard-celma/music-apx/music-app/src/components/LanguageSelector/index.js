'use strict'

import React from 'react'

// destructuring incoming props { selectedLanguage, onLanguageSelected, languages }

function LanguageSelector({ selectedLanguage, onLanguageSelected, languages }) {
    return <select onChange={onLanguageSelected} defaultValue={selectedLanguage}>
        {languages.map(language => <option key={language} value={language}>{language.toUpperCase()}</option>)}
    </select>
}

export default LanguageSelector
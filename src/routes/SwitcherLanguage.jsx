// src/components/LanguageSwitcher.js

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { t, i18n : {changeLanguage, language} } = useTranslation();
  
    const [currentLanguage, setCurrentLanguage] = useState(language);
  
    const handleChangeLanguage = () => {
      const newLanguage = currentLanguage === "pt" ? "en" : "pt";
      setCurrentLanguage(newLanguage);
      changeLanguage(newLanguage);
    }
  

  return (
    <div className="absolute z-50 top-0 right-0">
      <button type="button" aria-label="Mudar linguagem" onClick={handleChangeLanguage}>
        Change Language
      </button>
    </div>
  );
};

export default LanguageSwitcher;

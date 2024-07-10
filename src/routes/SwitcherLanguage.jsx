import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import brImage from "../images/brazil_18295.png"
import enImage from "../images/usa_18285.png"

const LanguageSwitcher = () => {
    const { t, i18n : {changeLanguage, language} } = useTranslation();
  
    const [currentLanguage, setCurrentLanguage] = useState(language);
  
    const handleChangeLanguage = () => {
      const newLanguage = currentLanguage === "pt" ? "en" : "pt";
      setCurrentLanguage(newLanguage);
      changeLanguage(newLanguage);
      console.log(newLanguage)
    }
  

  return (
    <div className="z-50 bottom-10 right-10  fixed shadow-xl btn-language">
      <button type="button" className='border-none bg-inherit' aria-label="Mudar linguagem" onClick={handleChangeLanguage}>
        {console.log(currentLanguage)}
        {
          currentLanguage === "pt" ? (
            <img src={enImage} alt
            ="English" className="w-14 h-14 cursor-pointer"/>
          ) : (
            <img src={brImage} alt="Português" className="w-14 h-14 cursor-pointer"/>
          )
        }
      </button>
    </div>
  );
};

export default LanguageSwitcher;

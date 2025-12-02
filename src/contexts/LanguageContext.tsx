import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'hi' | 'ta';

interface Translations {
  [key: string]: {
    en: string;
    hi: string;
    ta: string;
  };
}

const translations: Translations = {
  home: { en: 'Home', hi: 'होम', ta: 'முகப்பு' },
  shop: { en: 'Shop', hi: 'दुकान', ta: 'கடை' },
  cart: { en: 'Cart', hi: 'कार्ट', ta: 'வண்டி' },
  search: { en: 'Search for sarees...', hi: 'साड़ी खोजें...', ta: 'புடவைகளை தேடுங்கள்...' },
  addToCart: { en: 'Add to Cart', hi: 'कार्ट में डालें', ta: 'வண்டியில் சேர்' },
  buyNow: { en: 'Buy Now', hi: 'अभी खरीदें', ta: 'இப்போது வாங்கவும்' },
  viewAll: { en: 'View All Sarees', hi: 'सभी साड़ी देखें', ta: 'அனைத்து புடவைகளையும் பார்க்கவும்' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

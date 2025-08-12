import React, { createContext, useContext, useState } from 'react';

export type Language = 'RU' | 'BY';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const translations: Record<string, { RU: string; BY: string }> = {
  contacts: { RU: 'Контакты', BY: 'Кантакты' },
  no_subcategories: { RU: 'Нет подкатегорий', BY: 'Няма падкатэгорый' },
  no_categories: { RU: 'Категории не найдены', BY: 'Катэгорыі не знойдзены' },
  no_articles: { RU: 'Нет статей.', BY: 'Няма артыкулаў.' },
  loading_articles: { RU: 'Загрузка статей...', BY: 'Загрузка артыкулаў...' },
  error: { RU: 'Ошибка', BY: 'Памылка' },
  search_placeholder: { RU: 'Поиск...', BY: 'Пошук...' },
  search_results: { RU: 'Результаты поиска', BY: 'Вынікі пошуку' },
  nothing_found: { RU: 'Ничего не найдено.', BY: 'Нічога не знойдзена.' },
  other_articles: { RU: 'Другие статьи', BY: 'Іншыя артыкулы' },
  subcategories: { RU: 'Подкатегории', BY: 'Падкатэгорыі' },
  socials_title: { RU: 'Читайте и смотрите нас в социальных сетях:', BY: 'Чытайце і глядзіце нас у сацыяльных сетках:' },
  footer_text_1a: { RU: 'При перепечатке материалов ссылка на', BY: 'Пры перапублікацыі матэрыялаў спасылка на' },
  footer_text_1b: { RU: 'обязательна. Если вы хотите задать вопрос или высказать свое мнение по поводу сайта или статей, напишите нам, воспользовавшись', BY: 'абавязковая. Калі вы хочаце задаць пытанне або выказаць сваё меркаванне наконт сайта або артыкулаў, напішыце нам, скарыстаўшыся' },
  footer_mail_form: { RU: 'почтовой формой', BY: 'паштовай формай' },
  footer_message: { RU: 'Сообщение', BY: 'Паведамленне' },
  footer_send: { RU: 'Отправить', BY: 'Адправіць' },
  footer_sent: { RU: 'Сообщение отправлено!', BY: 'Паведамленне адпраўлена!' },
  footer_boc_title: { RU: 'Официальный портал Белорусской православной Церкви', BY: 'Афіцыйны партал Беларускай праваслаўнай царквы' },
  footer_boc_copyright: { RU: 'Белорусская Православная Церковь', BY: 'Беларуская Праваслаўная Царква' },
  archive_title: { RU: 'Архив публикаций', BY: 'Архіў публікацый' },
  load_more: { RU: 'Загрузить еще', BY: 'Загрузіць яшчэ' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Detect language from URL
  const path = window.location.pathname;
  const initialLang: Language = path.startsWith('/by') ? 'BY' : 'RU';
  const [language, setLanguage] = useState<Language>(initialLang);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};

export const useTranslation = () => {
  const { language } = useLanguage();
  const t = (key: string) => translations[key]?.[language] || key;
  return { t };
}; 
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
    resources: {
      en: {
        translation: {
          page_title: "IT-School",
          hero_text: "Sign up for a trial lesson at IT School",
          language_switcher_label: "SITE LANGUAGE",
          start_button_text: "START",
          has_account_button_text: "I ALREADY HAVE AN ACCOUNT",
        },
      },
      ru: {
        translation: {
          page_title: "ИТ-Школа",
          hero_text: "Запишитесь на пробное занятие в IT‑Школе",
          language_switcher_label: "ЯЗЫК САЙТА",
          start_button_text: "НАЧАТЬ",
          has_account_button_text: "У МЕНЯ УЖЕ ЕСТЬ АККАУНТ",
        },
      },
    },
    interpolation: { escapeValue: false },
  });
export default i18n;

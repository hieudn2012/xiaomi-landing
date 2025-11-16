const KEYS = {
  LANGUAGE: "language",
};

export const getLanguage = () => {
  return localStorage.getItem(KEYS.LANGUAGE) || "en";
};

export const setLanguage = (language: string) => {
  localStorage.setItem(KEYS.LANGUAGE, language);
};

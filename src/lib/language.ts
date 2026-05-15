"use client";

import { useSyncExternalStore } from "react";

export type Language = "ar" | "en";

const defaultLanguage: Language = "ar";
const storageKey = "educast-language";
const eventName = "educast-language-change";

function isLanguage(value: string | null): value is Language {
  return value === "ar" || value === "en";
}

function getSnapshot(): Language {
  if (typeof window === "undefined") {
    return defaultLanguage;
  }

  const saved = window.localStorage.getItem(storageKey);
  return isLanguage(saved) ? saved : defaultLanguage;
}

function subscribe(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  window.addEventListener(eventName, callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener(eventName, callback);
    window.removeEventListener("storage", callback);
  };
}

export function useStoredLanguage() {
  return useSyncExternalStore(subscribe, getSnapshot, () => defaultLanguage);
}

export function setStoredLanguage(language: Language) {
  window.localStorage.setItem(storageKey, language);
  window.dispatchEvent(new CustomEvent<Language>(eventName, { detail: language }));
}

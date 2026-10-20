// storage.ts
export const storage = {
  get<T>(key: string, defaultValue: T): T {
    const raw = localStorage.getItem(key);
    if (raw === null) return defaultValue;

    try {
      return JSON.parse(raw) as T;
    } catch {
      return defaultValue;
    }
  },

  set<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  },

  remove(key: string): void {
    localStorage.removeItem(key);
  },
};

import { storage } from "./storage";

storage.set("user", { name: "Ilias", age: 22 });
const user = storage.get<{ name: string; age: number } | null>("user", null);
const theme = storage.get("theme", "light");
import { AppConfig } from "../config";

interface StorageService {
  length: number;
  clear: () => void;
  setItem: (key: string, value: string) => void;
  getItem: (key: string) => string;
  removeItem: (key: string) => void;
}

class AppStorage {
  length: number;
  private service: StorageService;

  constructor(service: StorageService) {
    this.service = service;
  }
  clear() {
    this.service.clear();
  }
  setItem(key: string, value: string) {
    this.service.setItem(key, value);
  }
  getItem(key: string) {
    return this.service.getItem(key);
  }
  removeItem(key: string) {
    this.service.removeItem(key);
  }
}

// const Store =
//   AppConfig.platform === "web" ? window.localStorage : window.sessionStorage;

export const PersistedStore = new AppStorage(window.localStorage);

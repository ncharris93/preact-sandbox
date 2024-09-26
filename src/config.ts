import { Capacitor } from "@capacitor/core";

export const AppConfig = Object.freeze({
  platform: Capacitor.getPlatform() as "web" | "ios" | "android",
});

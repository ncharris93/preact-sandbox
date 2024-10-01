import { Capacitor } from "@capacitor/core";

const platform = Capacitor.getPlatform() as "web" | "ios" | "android";

export const AppConfig = Object.freeze({
  platform,
  isNativeMobile: ["ios", "android"].includes(platform),
  mobileMaxWidth: 768,
});

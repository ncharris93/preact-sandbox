import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.helloworld",
  appName: "hello-world",
  webDir: "dist",
  server: {
    url: "http://localhost:5173",
    //url: "http://192.168.1.177:5713",
    cleartext: true,
  },
};

export default config;

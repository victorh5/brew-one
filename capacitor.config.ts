import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'brewone.test.app',
  appName: 'brew-one',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;


import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.ee51ea05937348c9b4b4b18c8a4e5e53',
  appName: 'school-training-navigator-app',
  webDir: 'dist',
  // Comment out the server config for local development
  // server: {
  //   url: 'https://ee51ea05-9373-48c9-b4b4-b18c8a4e5e53.lovableproject.com?forceHideBadge=true',
  //   cleartext: true
  // },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#ffffff',
      showSpinner: false
    }
  }
};

export default config;

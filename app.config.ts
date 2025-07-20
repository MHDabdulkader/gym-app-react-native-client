import 'dotenv/config';

export default {
  expo: {
    name: "Gym App",
    slug: "gym-gym",
    version: "1.0.0",
    scheme: "frontend",
    orientation: "portrait",
    sdkVersion: "53.0.0", // or latest SDK you're using
    extra: {
      API_URL : process.env.EXPO_PUBLIC_API_URL
    },
    android: {
      package: "com.mhdabdulkader.myapp", 
    },
  },
};

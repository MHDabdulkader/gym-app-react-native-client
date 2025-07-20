import AsyncStorage from "@react-native-async-storage/async-storage";
export const checkOnBoarding =  async ():Promise<boolean> =>{
    const getOnBoarding = await AsyncStorage.getItem("onBoarding");
    return getOnBoarding === "true";
}
export const setOnBoarding = async ()=>{
    await AsyncStorage.setItem("onBoarding", "true");
    return ;
}

export const resetOnBoarding = async ()=>{
    await AsyncStorage.removeItem("onBoarding");
    return ;
}

export const checkSetupScreen = async ():Promise<boolean> =>{
    const getSetupScreen = await AsyncStorage.getItem("onSetup");
    return getSetupScreen === "true";
}
export const setSetupScreen = async ()=>{
    await AsyncStorage.setItem("onSetup", "true");
    return ;
}
export const resetSetupScreen = async () =>{
    await AsyncStorage.removeItem("onSetup");
    return ;
}

// export const checkUserToken = async ()=>{
//     const token = await AsyncStorage.getItem("Token");
//     if(token){
//         const isVaild = checkTokenExpire(token);
//     }
// }
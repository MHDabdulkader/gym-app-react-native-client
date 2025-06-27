import { onboardingScreenDataType } from "./types";

export const onboardingScreenData : onboardingScreenDataType[] = [
    {
        background: require("@assets/images/onBoarding-1.jpg"),
        icon: require("@assets/images/logo-dark.png"),
        title:"Welcome to",
        btnText:"Next"
        
    },
    {
        background: require("@assets/images/onBoarding 2.jpg"),
        icon:require("@assets/images/dumbbell.png"),
        title: "Start your journey towards a more active lifestyle",
        btnText:"Next"
    },
    {
        background: require("@assets/images/onBoarding 3.jpg"),
        icon: require("@assets/images/Nutrition.png"),
        title: "Find nutrition tips that fit your lifestyle",
        btnText:"Next"
    },
    {
        background: require("@assets/images/onBoarding 4.jpg"),
        icon: require("@assets/images/Community.png"),
        title:"A community for you, challenge yourself",
        btnText:"Get Started",
        isFinal: true
    }

]
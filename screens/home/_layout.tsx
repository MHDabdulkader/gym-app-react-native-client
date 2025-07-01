
import { Stack } from 'expo-router'

export default function Home_Layout() {
  return (
    <Stack initialRouteName='index'>
      <Stack.Screen name='index' options={{headerShown:false}}/>
    </Stack>
  )
}
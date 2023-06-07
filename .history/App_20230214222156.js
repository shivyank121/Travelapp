import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <SafeAreaView>
        
          <View>
          <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
            <Text className="text-red-500">
              Open up App.js to start working on your app!
            </Text>
            <StatusBar style="auto" />
          </View>
        </SafeAreaView>
      </NavigationContainer>
    </TailwindProvider>
  );
}

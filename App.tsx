import { SafeAreaView } from "react-native";
import BottomNav from "./components/BottomNav";
import FinishedOrdersPage from "./components/FinishedOrdersPage";

export default function App() {
  return (
    <SafeAreaView>
      <FinishedOrdersPage />
      <BottomNav />
    </SafeAreaView>
  );
}

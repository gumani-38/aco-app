import "react-native-gesture-handler";
import StackNavigation from "./app/navigation/StackNavigation";
import { AuthProvider } from "./app/context/AuthContext";
import { ModalPortal } from "react-native-modals";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <AuthProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <StackNavigation />
          <ModalPortal />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </AuthProvider>
  );
}

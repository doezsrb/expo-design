import { useNavigation, useNavigationContainerRef } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { useEffect, useState } from "react";
interface CustomHeaderProps {
  openDrawer: Function;
}
const CustomHeader = ({ openDrawer }: CustomHeaderProps) => {
  const navigation = useNavigation();
  const navRef = useNavigationContainerRef();
  const [pageName, setPageName] = useState("");
  const [back, setBack] = useState(false);
  useEffect(() => {
    if (navRef.getCurrentRoute() != undefined) {
      setPageName(navRef.getCurrentRoute()!.name.toUpperCase());
    }
    const navStateChanged = () => {
      setBack(navigation.canGoBack());
      if (navRef.getCurrentRoute() != undefined) {
        setPageName(navRef.getCurrentRoute()!.name.toUpperCase());
      }
    };
    navigation.addListener("state", navStateChanged);
    return () => {
      navigation.removeListener("state", navStateChanged);
    };
  }, []);
  return (
    <View
      style={{
        width: "100%",
        padding: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        disabled={!back}
        style={{
          opacity: back ? 1 : 0,
        }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <AntDesign name="arrowleft" size={24} color="white" />
      </TouchableOpacity>
      <Text style={{ color: "white", textAlign: "center" }}>{pageName}</Text>
      <TouchableOpacity
        onPress={() => {
          openDrawer();
        }}
      >
        <Feather name="menu" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;

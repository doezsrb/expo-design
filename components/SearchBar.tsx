import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const SearchBar = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: 20,
        height: 39,
        marginTop: 10,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <TextInput
        style={{
          width: "100%",
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
        }}
        placeholder="Choose your bike"
      />
      <LinearGradient
        colors={["#34C8E8", "#4E4AF2"]}
        style={{
          width: 40,
          height: 40,
          backgroundColor: "orange",
          borderRadius: 5,
          justifyContent: "center",

          alignItems: "center",
        }}
      >
        <AntDesign name="search1" size={24} color="white" />
      </LinearGradient>
    </View>
  );
};

export default SearchBar;

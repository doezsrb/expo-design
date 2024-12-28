import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Card from "@/assets/images/card.svg";
import DropShadow from "react-native-drop-shadow";
import { Shadow } from "react-native-shadow-2";
import { LinearGradient } from "expo-linear-gradient";
import ItemCard from "@/components/ItemCard";
import Off from "@/components/Off";
import NavButtons from "@/components/NavButtons";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import Divider from "@/components/Divider";

const Index = () => {
  type Item = {
    id: number;
    name: string;
  };
  const [selected, setSelected] = useState<null | Item>(null);
  const data = [
    {
      id: 1,
      name: "text",
    },
    {
      id: 2,
      name: "text",
    },
    {
      id: 3,
      name: "text",
    },
    {
      id: 4,
      name: "text",
    },
    {
      id: 5,
      name: "text",
    },
    {
      id: 6,
      name: "text",
    },
  ];
  /*  backgroundColor: "#242C3B", */
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <ImageBackground
        source={require("@/assets/images/bg.png")}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#242C3B",
        }}
      ></ImageBackground>

      <ScrollView
        style={{
          width: "100%",
        }}
        contentContainerStyle={{
          alignItems: "center",
        }}
      >
        <SearchBar />
        <Off />
        <Divider size={20} />
        <NavButtons />
        <Divider size={20} />
        <FlatList
          contentContainerStyle={{
            alignItems: "center",
          }}
          numColumns={2}
          keyExtractor={(item: any) => item.id}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  padding: 5,
                  zIndex: 3,
                  marginTop: item.id % 2 === 0 ? 0 : 25,
                }}
              >
                <ItemCard
                  onSelected={() => {
                    setSelected(item);
                  }}
                  selected={selected != null ? selected.id == item.id : false}
                />
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Index;

import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, Image, Text, View } from "react-native";

const Off = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: 20,
        alignItems: "center",
      }}
    >
      <View
        style={{
          marginTop: 30,
          position: "absolute",
          width: "75%",
          height: 170,
          backgroundColor: "transparent",
          zIndex: 3,
        }}
      >
        <Text
          style={{
            position: "absolute",
            bottom: -15,
            left: -5,
            color: "rgba(255, 255, 255,0.6)",
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          30% Off
        </Text>
        <Image
          style={{
            width: "100%",

            resizeMode: "contain",
          }}
          source={require("@/assets/images/bike2.png")}
        />
      </View>
      <View
        style={{
          height: 213,
          top: 30,
          width: 10,
          left: 21,
          position: "absolute",
          borderRadius: 30,
          backgroundColor: "transparent",

          shadowRadius: 15,
        }}
      />
      <View
        style={{
          height: 155,
          top: 30,
          width: 10,
          right: 21,
          position: "absolute",
          borderRadius: 30,
          backgroundColor: "transparent",
          shadowRadius: 15,
        }}
      />
      <View
        style={{
          width: "100%",
          height: 230,
          marginTop: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,

          overflow: "hidden",
        }}
      >
        <BlurView
          intensity={60}
          style={{
            position: "absolute",
            shadowRadius: 10,
            width: "100%",
            marginTop: -50,
            height: 249,

            borderRadius: 22,
            transform: [{ skewY: "-10deg" }],
            zIndex: 2,
          }}
        ></BlurView>
        <LinearGradient
          colors={["rgba(53, 63, 84, 0.1)", "#222834"]}
          style={{
            width: "100%",
            height: 250,
            transform: [{ skewY: "-10deg" }],

            borderRadius: 20,
            position: "absolute",
            marginTop: -50,
            zIndex: 3,
            backgroundColor: "transparent",
          }}
        ></LinearGradient>
      </View>
    </View>
  );
};

export default Off;

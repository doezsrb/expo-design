import {
  Button,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useCallback, useEffect, useRef, useState } from "react";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import PressedDetailButton from "@/components/PressedDetailButton";
import NonPressedDetailButton from "@/components/NonPressedDetailButton";
import BottomModal from "@/components/BottomModal";

const Cart = () => {
  const [page, setPage] = useState(1);

  const height = useSharedValue(Dimensions.get("window").height / 2);
  const width = useSharedValue(Dimensions.get("window").width / 1.5);

  return (
    <GestureHandlerRootView>
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
        <Animated.View
          style={{
            width: width,
            height: height,
          }}
        >
          <ScrollView
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={(event: any) => {
              const screenWidth = width.value;
              const offsetX = event.nativeEvent.contentOffset.x;
              const page_ = Math.round(offsetX / screenWidth);
              console.log(page_);
              setPage(page_ + 1);
            }}
            horizontal
            style={{
              padding: 0,
              margin: 0,
              width: "100%",
            }}
          >
            <Animated.Image
              style={{
                width: width,
                height: height,
                resizeMode: "contain",
              }}
              source={require("@/assets/images/bike2.png")}
            />
            <Animated.Image
              style={{
                width: width,
                height: height,
                resizeMode: "contain",
              }}
              source={require("@/assets/images/bike2.png")}
            />
            <Animated.Image
              style={{
                width: width,
                height: height,
                resizeMode: "contain",
              }}
              source={require("@/assets/images/bike2.png")}
            />
          </ScrollView>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 5,
              marginBottom: 5,
            }}
          >
            {Array.from({ length: 3 }, (v: number, i: number) => {
              return (
                <View
                  key={i + "slider"}
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 100,
                    backgroundColor: page == i + 1 ? "white" : "grey",
                  }}
                />
              );
            })}
          </View>
        </Animated.View>
        <BottomModal height={height} width={width} />
      </View>
    </GestureHandlerRootView>
  );
};

export default Cart;

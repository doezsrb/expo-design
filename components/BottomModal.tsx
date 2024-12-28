import PressedDetailButton from "@/components/PressedDetailButton";
import NonPressedDetailButton from "@/components/NonPressedDetailButton";
import BottomSheet, {
  BottomSheetView,
  useBottomSheetSpringConfigs,
} from "@gorhom/bottom-sheet";
import { useCallback, useMemo, useRef, useState } from "react";
import { Dimensions, Text, TouchableHighlight, View } from "react-native";
import { withSpring, withTiming } from "react-native-reanimated";
import BottomModalButtons from "./BottomModalButtons";
const BottomModal_ = ({ height, width }: { height: any; width: any }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    height.value =
      index == 0
        ? withTiming(Dimensions.get("window").height - 180)
        : withTiming(Dimensions.get("window").height / 2 - 50);
    width.value =
      index == 0
        ? withTiming(Dimensions.get("window").width)
        : withTiming(Dimensions.get("window").width / 1.5);
  }, []);
  return (
    <BottomSheet
      onAnimate={(fromIndex: number, toIndex: number) => {
        console.log("onAnimate", fromIndex, toIndex);
      }}
      handleStyle={{
        backgroundColor: "#353F54",

        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
      }}
      handleIndicatorStyle={{
        display: "none",
      }}
      snapPoints={[Dimensions.get("window").height / 1.8 - 100, 100]}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
    >
      <BottomSheetView
        style={{
          width: "100%",
          height: Dimensions.get("window").height / 1.8 - 100,
          padding: 0,

          backgroundColor: "#353F54",
        }}
      >
        <View
          style={{
            flex: 1,

            flexDirection: "column",
            alignItems: "center",

            borderColor: "transparent",
            paddingHorizontal: 20,
          }}
        >
          <BottomModalButtons />
          <View
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginTop: 20,
              gap: 5,
            }}
          >
            <Text
              style={{
                textAlign: "left",
                fontSize: 18,
                color: "white",
                fontWeight: "bold",
              }}
            >
              PEUGEOT - LR01
            </Text>
            <Text
              style={{
                textAlign: "justify",
                fontSize: 18,
                color: "white",
              }}
            >
              The LR01 uses the same design as the most iconic bikes from
              PEUGEOT Cycles' 130-year history and combines it with agile,
              dynamic performance that's perfectly suited to navigating today's
              cities. As well as a lugged steel frame and iconic PEUGEOT
              black-and-white chequer design, this city bike also features a
              16-speed Shimano Claris drivetrain.
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: 80,
            backgroundColor: "#262E3D",

            borderTopEndRadius: 50,
            borderTopStartRadius: 50,
            borderWidth: 1,
            borderColor: "transparent",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "#3D9CEA",
            }}
          >
            $ 1,999.99
          </Text>
          <TouchableHighlight
            style={{
              paddingHorizontal: 25,
              paddingVertical: 10,
              backgroundColor: "#3D9CEA",
              borderWidth: 1,
              borderRadius: 10,
              borderColor: "transparent",
            }}
          >
            <Text>Add to Cart</Text>
          </TouchableHighlight>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

const BottomModal = ({ height, width }: { height: any; width: any }) => {
  return useMemo(
    () => <BottomModal_ height={height} width={width} />,
    [height, width]
  );
};

export default BottomModal;

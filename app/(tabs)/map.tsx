import { useRef, useState } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import CircleSlider from "@/assets/images/circle.svg";
import TurnOnIcon from "@/assets/images/turnonicon.svg";

const CircleProgress = ({ percent }: any) => {
  const propStyle = (percent: any, base_degrees: any) => {
    const rotateBy = base_degrees + percent * 3.6;
    return {
      transform: [{ rotateZ: `${rotateBy}deg` }],
    };
  };
  const renderThirdLayer = (percent: any) => {
    if (percent > 50) {
      /**
       * Third layer circle default is 45 degrees, so by default it occupies the right half semicircle.
       * Since first 50 percent is already taken care  by second layer circle, hence we subtract it
       * before passing to the propStyle function
       **/
      return (
        <View
          style={[
            {
              width: 200,
              height: 200,
              position: "absolute",
              borderWidth: 20,
              borderRadius: 100,
              borderLeftColor: "transparent",
              borderBottomColor: "transparent",
              borderRightColor: "#3498db",
              borderTopColor: "#3498db",
              transform: [{ rotateZ: "45deg" }],
            },
            propStyle(percent - 50, 45),
          ]}
        ></View>
      );
    } else {
      return (
        <View
          style={{
            width: 200,
            height: 200,
            position: "absolute",
            borderWidth: 20,
            borderRadius: 100,
            borderLeftColor: "transparent",
            borderBottomColor: "transparent",
            borderRightColor: "grey",
            borderTopColor: "grey",
            transform: [{ rotateZ: "-135deg" }],
          }}
        ></View>
      );
    }
  };

  let firstProgressLayerStyle;
  if (percent > 50) {
    firstProgressLayerStyle = propStyle(50, -135);
  } else {
    firstProgressLayerStyle = propStyle(percent, -135);
  }
  return (
    <View
      style={{
        width: 200,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 20,
        borderRadius: 100,
        borderColor: "gray",
      }}
    >
      <View
        style={[
          {
            width: 200,
            height: 200,
            borderWidth: 20,
            borderRadius: 100,
            position: "absolute",
            borderLeftColor: "transparent",
            borderBottomColor: "transparent",
            borderRightColor: "#3498db",
            borderTopColor: "#3498db",
            transform: [{ rotateZ: "-135deg" }],
          },
          firstProgressLayerStyle,
        ]}
      ></View>
      {renderThirdLayer(percent)}
    </View>
  );
};
const Map = () => {
  const [rotation, setRotation] = useState(-180); // Trenutna rotacija u stepenima
  const centerRef = useRef({ cx: 0, cy: 0 }); // Referenca na centar objekta
  const startAngleRef = useRef(0);
  const [startCoords, setStartCoords] = useState({ x: 0, y: 0 });
  return (
    <View
      onLayout={(e) => {
        const { width, height } = e.nativeEvent.layout;
        centerRef.current = {
          cx: width / 2,
          cy: height / 2,
        };
      }}
      style={{
        flex: 1,
        backgroundColor: "#514E4E",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: 300,
          height: 300,

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <View
        onMoveShouldSetResponder={() => {
          console.log("You moved your finger!");
          return true; // Da bi View postao responder
        }}
        onResponderGrant={(event: any) => {
          const { pageX, pageY } = event.nativeEvent;
          const { cx, cy } = centerRef.current;

          // Izračunaj početni ugao
          startAngleRef.current = Math.atan2(pageY - cy, pageX - cx);
        }}
        onResponderMove={(event: any) => {
          const { pageX, pageY } = event.nativeEvent;
          const { cx, cy } = centerRef.current;

          // Izračunaj trenutni ugao
          const currentAngle = Math.atan2(pageY - cy, pageX - cx);

          // Razlika između trenutnog i početnog ugla
          const angleDifference = currentAngle - startAngleRef.current;

          // Pretvori ugao u stepene i postavi rotaciju
          const rotationInDegrees = (angleDifference * 180) / Math.PI;
          if (isNaN(rotation + rotationInDegrees)) return;
          if (rotation + rotationInDegrees < -180) return;
          if (rotation + rotationInDegrees > 0) return;
          console.log(rotation + rotationInDegrees);
          setRotation((prevRotation) => {
            return prevRotation + rotationInDegrees;
          });

          // Ažuriraj početni ugao za glatko praćenje
          startAngleRef.current = currentAngle;
        }}
        style={{
          width: 150,
          height: 150,
          borderRadius: 150,

          zIndex: 2,
          position: "absolute",
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
          }}
          source={require("@/assets/images/circleslider.png")}
        />
      </View> */}
        <View
          style={{
            width: 125,
            height: 125,
            borderRadius: 150,
            position: "absolute",
            display: "flex",
            zIndex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#535151",
          }}
        >
          <TurnOnIcon />
        </View>

        <ImageBackground
          style={{
            width: 250,
            height: 250,
          }}
          source={require("@/assets/images/ellipse_1.png")}
        >
          <View
            onMoveShouldSetResponder={() => {
              console.log("You moved your finger!");
              return true; // Da bi View postao responder
            }}
            onResponderGrant={(event: any) => {
              const { pageX, pageY } = event.nativeEvent;
              const { cx, cy } = centerRef.current;

              // Izračunaj početni ugao
              startAngleRef.current = Math.atan2(pageY - cy, pageX - cx);
            }}
            onResponderMove={(event: any) => {
              const { pageX, pageY } = event.nativeEvent;
              const { cx, cy } = centerRef.current;

              // Izračunaj trenutni ugao
              const currentAngle = Math.atan2(pageY - cy, pageX - cx);

              // Razlika između trenutnog i početnog ugla
              const angleDifference = currentAngle - startAngleRef.current;

              // Pretvori ugao u stepene i postavi rotaciju
              const rotationInDegrees = (angleDifference * 180) / Math.PI;
              if (isNaN(rotation + rotationInDegrees)) return;
              if (rotation + rotationInDegrees < -180) return;
              if (rotation + rotationInDegrees > 0) return;
              console.log(rotation + rotationInDegrees);
              setRotation((prevRotation) => {
                return prevRotation + rotationInDegrees;
              });

              // Ažuriraj početni ugao za glatko praćenje
              startAngleRef.current = currentAngle;
            }}
            style={{
              position: "absolute",
              width: 250,
              height: 250,
              borderRadius: 250,

              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transform: `rotate(${rotation}deg)`,
            }}
          >
            <View
              style={{
                width: 150,
                height: 150,
                borderRadius: 150,

                zIndex: 3,
                position: "absolute",
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                }}
                source={require("@/assets/images/circleslider.png")}
              />
            </View>
            <View
              style={{
                width: 30,
                height: 2,
                left: 10,
                position: "absolute",
                backgroundColor: "orange",
              }}
            />
            <View
              style={{
                width: 30,
                height: 2,
                position: "absolute",
                right: 10,
                backgroundColor: "orange",
              }}
            />
            <View
              style={{
                width: 30,
                height: 2,
                position: "absolute",
                top: 25,
                transform: "rotate(90deg)",
                backgroundColor: "orange",
              }}
            />
            <View
              style={{
                width: 30,
                height: 2,
                backgroundColor: "orange",
                position: "absolute",
                transform: "rotate(90deg)",
                bottom: 25,
              }}
            />
          </View>
        </ImageBackground>
      </View>
      <CircleProgress percent={90} />
    </View>
  );
};

export default Map;

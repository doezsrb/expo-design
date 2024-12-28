import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BikeIcon from "@/assets/images/bikeicon.svg";
const TabsLayout = () => {
  return (
    <Tabs
      tabBar={({ state, descriptors, navigation }: any) => {
        return (
          <View
            style={{
              width: "100%",
              height: 60,
              backgroundColor: "#181C24",
            }}
          >
            <LinearGradient
              colors={["#363E51", "#181C24"]}
              style={{
                position: "absolute",
                width: "100%",
                height: 70,
                marginTop: -10,

                transform: [{ skewY: "-3deg" }],
              }}
            >
              <View
                style={{
                  flexDirection: "row",

                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingHorizontal: 20,
                  transform: [{ skewY: "3deg" }],
                }}
              >
                {state.routes.map((route: any, index: any) => {
                  const onPress = () => {
                    const event = navigation.emit({
                      type: "tabPress",
                      target: route.key,
                      canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                      navigation.navigate(route.name, route.params);
                    }
                  };
                  const isFocused = state.index === index;
                  if (isFocused) {
                    return (
                      <TouchableOpacity onPress={onPress}>
                        <LinearGradient
                          colors={["#34C8E8", "#4E4AF2"]}
                          style={{
                            backgroundColor: "#34C8E8",
                            paddingHorizontal: 5,
                            paddingVertical: 10,
                            borderRadius: 10,
                            marginTop: -30,
                            transform: [{ skewY: "-10deg" }],
                            shadowRadius: 20,
                          }}
                        >
                          <View
                            style={{
                              transform: [{ skewY: "10deg" }],
                            }}
                          >
                            <BikeIcon />
                          </View>
                        </LinearGradient>
                      </TouchableOpacity>
                    );
                  } else {
                    return (
                      <TouchableOpacity onPress={onPress}>
                        <BikeIcon />
                      </TouchableOpacity>
                    );
                  }
                })}
              </View>
            </LinearGradient>
          </View>
        );
      }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Map",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

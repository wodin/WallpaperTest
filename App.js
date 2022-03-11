import { View, TouchableOpacity, Text } from "react-native";
import ManageWallpaper, { TYPE } from "react-native-manage-wallpaper";

export default function App() {

  const _callback = (res) => {
    console.log("Response: ", res);
  };

  const _setWallpaper = () => {
    ManageWallpaper.setWallpaper(
      {
        uri: "https://i.pinimg.com/originals/76/5e/1d/765e1dc8cb1cc115fb3b0b39a895fdeb.jpg",
      },
      _callback,
      TYPE.HOME
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
      }}
    >
      <TouchableOpacity
        style={{
          paddingHorizontal: 30,
          paddingVertical: 8,
          marginBottom: 24,
          borderRadius: 16,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000000",
        }}
        onPress={_setWallpaper}
      >
        <Text
          style={{
            fontSize: 20,
            margin: 10,
            textAlign: "center",
            color: "#FFFFFF",
          }}
        >
          Change Home Wallpaper
        </Text>
      </TouchableOpacity>
    </View>
  );
}

import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import { useThemeColor } from "./Themed";

type CustomButtonProps = {
  onPress: () => void;
  title: string;
};

export default function CustomButton({ onPress, title }: CustomButtonProps) {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const selected = useThemeColor({}, "tabIconSelected");

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: pressed ? selected : backgroundColor,
          borderColor: !pressed ? textColor : backgroundColor,
        },
      ]}
    >
      {({ pressed }) => (
        <Text
          style={[
            styles.buttonText,
            { color: pressed ? backgroundColor : textColor },
          ]}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderWidth: 1,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

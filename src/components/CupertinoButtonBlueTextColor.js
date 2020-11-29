import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonBlueTextColor(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.настройки}>{props.настройки || "настройки"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    flexWrap: "nowrap"
  },
  настройки: {
    color: "rgba(120,154,41,1)",
    fontSize: 22,
    fontFamily: "roboto-500",
    textAlign: "left"
  }
});

export default CupertinoButtonBlueTextColor;

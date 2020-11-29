import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Switch
} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";

function Settings(props) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonStackRow}>
        <View style={styles.buttonStack}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={styles.button}
          ></TouchableOpacity>
          <IoniconsIcon
            name="ios-arrow-back"
            style={styles.icon2}
          ></IoniconsIcon>
        </View>
        <Text style={styles.настройки}>Настройки</Text>
      </View>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.rect}>
            <SimpleLineIconsIcon
              name="directions"
              style={styles.icon}
            ></SimpleLineIconsIcon>
            <Text style={styles.двузонныйРежим}>Двузонный режим</Text>
            <Switch value={true} style={styles.switch}></Switch>
          </View>
          <View style={styles.rect13}></View>
          <View style={styles.rect12}></View>
          <View style={styles.rect11}></View>
          <View style={styles.rect10}></View>
          <View style={styles.rect9}></View>
          <View style={styles.rect8}></View>
          <View style={styles.rect7}></View>
          <View style={styles.rect6}></View>
          <View style={styles.rect5}></View>
          <View style={styles.rect4}></View>
          <View style={styles.rect3}></View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    top: 4,
    left: 0,
    width: 76,
    height: 44,
    position: "absolute"
  },
  icon2: {
    top: 0,
    left: 20,
    position: "absolute",
    color: "rgba(192,208,208,1)",
    fontSize: 48
  },
  buttonStack: {
    width: 76,
    height: 52,
    marginTop: 10
  },
  настройки: {
    fontFamily: "roboto-regular",
    color: "rgba(192,208,208,1)",
    fontSize: 48,
    marginLeft: 9
  },
  buttonStackRow: {
    height: 64,
    flexDirection: "row",
    marginTop: 35,
    marginLeft: 16,
    marginRight: 20
  },
  scrollArea: {
    width: 349,
    height: 663,
    marginTop: 12,
    marginLeft: 13
  },
  scrollArea_contentContainerStyle: {
    height: 818,
    width: 349
  },
  rect: {
    width: 332,
    height: 63,
    borderWidth: 1,
    borderColor: "rgba(192,208,208,1)",
    borderRadius: 8,
    flexDirection: "row",
    marginTop: 12,
    alignSelf: "center"
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    height: 34,
    width: 30,
    marginLeft: 13,
    marginTop: 16
  },
  двузонныйРежим: {
    fontFamily: "roboto-500",
    color: "rgba(71,71,71,1)",
    height: 8,
    width: 206,
    fontSize: 18,
    marginLeft: 20,
    marginTop: 21
  },
  switch: {
    marginTop: 22
  },
  rect13: {
    width: 332,
    height: 63,
    borderWidth: 1,
    borderColor: "rgba(192,208,208,1)",
    borderRadius: 8,
    marginTop: 5,
    alignSelf: "center"
  },
  rect12: {
    width: 332,
    height: 63,
    borderWidth: 1,
    borderColor: "rgba(192,208,208,1)",
    borderRadius: 8,
    marginTop: 4,
    alignSelf: "center"
  },
  rect11: {
    width: 332,
    height: 63,
    borderWidth: 1,
    borderColor: "rgba(192,208,208,1)",
    borderRadius: 8,
    marginTop: 4,
    alignSelf: "center"
  },
  rect10: {
    width: 332,
    height: 63,
    borderWidth: 1,
    borderColor: "rgba(192,208,208,1)",
    borderRadius: 8,
    marginTop: 5,
    alignSelf: "center"
  },
  rect9: {
    width: 332,
    height: 63,
    borderWidth: 1,
    borderColor: "rgba(192,208,208,1)",
    borderRadius: 8,
    marginTop: 4,
    alignSelf: "center"
  },
  rect8: {
    width: 332,
    height: 63,
    borderWidth: 1,
    borderColor: "rgba(192,208,208,1)",
    borderRadius: 8,
    marginTop: 5,
    alignSelf: "center"
  },
  rect7: {
    width: 332,
    height: 63,
    borderWidth: 1,
    borderColor: "rgba(192,208,208,1)",
    borderRadius: 8,
    marginTop: 4,
    alignSelf: "center"
  },
  rect6: {
    width: 332,
    height: 63,
    borderWidth: 1,
    borderColor: "rgba(192,208,208,1)",
    borderRadius: 8,
    marginTop: 5,
    alignSelf: "center"
  },
  rect5: {
    width: 332,
    height: 63,
    borderWidth: 1,
    borderColor: "rgba(192,208,208,1)",
    borderRadius: 8,
    marginTop: 5,
    alignSelf: "center"
  },
  rect4: {
    width: 332,
    height: 63,
    borderWidth: 1,
    borderColor: "rgba(192,208,208,1)",
    borderRadius: 8,
    marginTop: 5,
    alignSelf: "center"
  },
  rect3: {
    width: 332,
    height: 63,
    borderWidth: 1,
    borderColor: "rgba(192,208,208,1)",
    borderRadius: 8,
    marginTop: 4,
    alignSelf: "center"
  }
});

export default Settings;

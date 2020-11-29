import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Switch
} from "react-native";
import CupertinoButtonBlueTextColor from "../components/CupertinoButtonBlueTextColor";
import CupertinoButtonBlackTextColor from "../components/CupertinoButtonBlackTextColor";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import {Settings} from "./Settings";

function Home(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.neptunSmart1}>Neptun Smart</Text>
      <View style={styles.cupertinoButtonBlueTextColor1Stack}>
        <CupertinoButtonBlueTextColor
          style={styles.cupertinoButtonBlueTextColor1}
        ></CupertinoButtonBlueTextColor>
        <CupertinoButtonBlackTextColor
          style={styles.cupertinoButtonBlackTextColor1}
        ></CupertinoButtonBlackTextColor>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Settings")}
          style={styles.button}
        ></TouchableOpacity>
      </View>
      <View style={styles.rect}>
        <Text style={styles.внимание}>Внимание!</Text>
        <Text style={styles.обнаруженаПротечка}>
          Обнаружена протечка! Восславьте Сатану!
        </Text>
        <Text style={styles.loremIpsum}>Зона. Имя линии. Имя датчика.</Text>
      </View>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.rect2}>
            <Text style={styles.краны}>Краны</Text>
            <Switch
              value={true}
              trackColor={{
                true: "rgba(120,154,41,1)",
                false: "rgba(192,208,208,1)"
              }}
              style={styles.switch}
            ></Switch>
          </View>
          <View style={styles.rect3Row}>
            <View style={styles.rect3}>
              <Text style={styles.имяЗоны1}>Имя зоны 1</Text>
              <Switch
                value={true}
                trackColor={{
                  true: "rgba(120,154,41,1)",
                  false: "rgba(192,208,208,1)"
                }}
                style={styles.switch2}
              ></Switch>
            </View>
            <View style={styles.rect4}>
              <Text style={styles.имязоны1}>Имя зоны 1</Text>
              <Switch
                value={true}
                trackColor={{
                  true: "rgba(120,154,41,1)",
                  false: "rgba(192,208,208,1)"
                }}
                style={styles.switch3}
              ></Switch>
            </View>
          </View>
          <View style={styles.rect10Row}>
            <View style={styles.rect10}>
              <Text style={styles.имяСчётчика}>Имя счётчика</Text>
              <View style={styles.iconRow}>
                <IoniconsIcon
                  name="ios-speedometer"
                  style={styles.icon}
                ></IoniconsIcon>
                <Text style={styles.loremIpsum9}>00000-000</Text>
              </View>
            </View>
            <View style={styles.rect9}>
              <Text style={styles.имясчётчика5}>Имя счётчика</Text>
              <View style={styles.icon5Row}>
                <IoniconsIcon
                  name="ios-speedometer"
                  style={styles.icon5}
                ></IoniconsIcon>
                <Text style={styles.loremIpsum6}>00000-000</Text>
              </View>
            </View>
          </View>
          <View style={styles.rect8Row}>
            <View style={styles.rect8}>
              <Text style={styles.имясчётчика4}>Имя счётчика</Text>
              <View style={styles.icon4Row}>
                <IoniconsIcon
                  name="ios-speedometer"
                  style={styles.icon4}
                ></IoniconsIcon>
                <Text style={styles.loremIpsum8}>00000-000</Text>
              </View>
            </View>
            <View style={styles.rect7}>
              <Text style={styles.имясчётчика3}>Имя счётчика</Text>
              <View style={styles.icon3Row}>
                <IoniconsIcon
                  name="ios-speedometer"
                  style={styles.icon3}
                ></IoniconsIcon>
                <Text style={styles.loremIpsum5}>00000-000</Text>
              </View>
            </View>
          </View>
          <View style={styles.rect6Row}>
            <View style={styles.rect6}>
              <Text style={styles.имясчётчика2}>Имя счётчика</Text>
            </View>
            <View style={styles.rect5}>
              <Text style={styles.имясчётчика1}>Имя счётчика</Text>
            </View>
          </View>
          <View style={styles.icon2Row}>
            <IoniconsIcon
              name="ios-speedometer"
              style={styles.icon2}
            ></IoniconsIcon>
            <Text style={styles.loremIpsum7}>00000-000</Text>
            <IoniconsIcon
              name="ios-speedometer"
              style={styles.icon1}
            ></IoniconsIcon>
            <Text style={styles.loremIpsum4}>00000-000</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  neptunSmart1: {
    fontFamily: "roboto-regular",
    color: "rgba(192,208,208,1)",
    fontSize: 48,
    height: 65,
    width: 349,
    marginTop: 39,
    marginLeft: 13
  },
  cupertinoButtonBlueTextColor1: {
    height: 44,
    width: 138,
    position: "absolute",
    left: 0,
    top: 0
  },
  cupertinoButtonBlackTextColor1: {
    height: 44,
    width: 138,
    position: "absolute",
    left: 0,
    top: 37
  },
  button: {
    top: 0,
    left: 0,
    width: 124,
    height: 37,
    position: "absolute"
  },
  cupertinoButtonBlueTextColor1Stack: {
    width: 138,
    height: 81,
    marginLeft: 13
  },
  rect: {
    width: 349,
    height: 84,
    borderWidth: 1,
    borderColor: "rgba(255,0,0,1)",
    borderStyle: "dashed",
    borderRadius: 8,
    marginLeft: 14
  },
  внимание: {
    fontFamily: "roboto-700",
    color: "rgba(255,0,0,1)",
    height: 26,
    width: 118,
    fontSize: 22,
    marginLeft: 9
  },
  обнаруженаПротечка: {
    fontFamily: "roboto-regular",
    color: "rgba(255,0,0,1)",
    height: 19,
    width: 331,
    marginTop: 6,
    marginLeft: 9
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 22,
    width: 331,
    textAlign: "left",
    fontSize: 18,
    marginTop: 5,
    marginLeft: 9
  },
  scrollArea: {
    width: 348,
    height: 497,
    marginTop: 16,
    marginLeft: 14
  },
  scrollArea_contentContainerStyle: {
    height: 497,
    width: 348
  },
  rect2: {
    width: 341,
    height: 67,
    borderWidth: 1,
    borderColor: "rgba(85,181,223,1)",
    borderStyle: "solid",
    borderRadius: 8,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 4
  },
  краны: {
    fontFamily: "roboto-500",
    color: "#121212",
    height: 35,
    width: 159,
    fontSize: 26,
    marginLeft: 11,
    marginTop: 17
  },
  switch: {
    marginLeft: 96,
    marginTop: 22
  },
  rect3: {
    width: 165,
    height: 91,
    borderWidth: 1,
    borderColor: "rgba(85,181,223,1)",
    borderStyle: "solid",
    borderRadius: 8
  },
  имяЗоны1: {
    fontFamily: "roboto-500",
    color: "#121212",
    height: 32,
    fontSize: 20,
    width: 148,
    marginTop: 8,
    marginLeft: 11
  },
  switch2: {
    marginTop: 16,
    marginLeft: 11
  },
  rect4: {
    width: 165,
    height: 91,
    borderWidth: 1,
    borderColor: "rgba(85,181,223,1)",
    borderStyle: "solid",
    borderRadius: 8,
    marginLeft: 11
  },
  имязоны1: {
    fontFamily: "roboto-500",
    color: "#121212",
    height: 32,
    width: 148,
    fontSize: 20,
    marginTop: 8,
    marginLeft: 8
  },
  switch3: {
    marginTop: 16,
    marginLeft: 8
  },
  rect3Row: {
    height: 91,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 4,
    marginRight: 3
  },
  rect10: {
    width: 165,
    height: 91,
    borderWidth: 1,
    borderColor: "rgba(85,181,223,1)",
    borderStyle: "solid",
    borderRadius: 8
  },
  имяСчётчика: {
    fontFamily: "roboto-500",
    color: "#121212",
    height: 32,
    width: 148,
    fontSize: 20,
    marginTop: 8,
    marginLeft: 11
  },
  icon: {
    color: "rgba(85,181,223,1)",
    fontSize: 30,
    height: 33,
    width: 26
  },
  loremIpsum9: {
    fontFamily: "roboto-regular",
    color: "rgba(42,71,5,1)",
    height: 23,
    width: 93,
    fontSize: 18,
    marginLeft: 19,
    marginTop: 5
  },
  iconRow: {
    height: 33,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 11,
    marginRight: 16
  },
  rect9: {
    width: 165,
    height: 91,
    borderWidth: 1,
    borderColor: "rgba(85,181,223,1)",
    borderStyle: "solid",
    borderRadius: 8,
    marginLeft: 11
  },
  имясчётчика5: {
    fontFamily: "roboto-500",
    color: "#121212",
    height: 32,
    width: 148,
    fontSize: 20,
    marginTop: 8,
    marginLeft: 8
  },
  icon5: {
    color: "rgba(85,181,223,1)",
    fontSize: 30,
    height: 33,
    width: 26
  },
  loremIpsum6: {
    fontFamily: "roboto-regular",
    color: "rgba(42,71,5,1)",
    height: 23,
    width: 93,
    fontSize: 18,
    marginLeft: 19,
    marginTop: 5
  },
  icon5Row: {
    height: 33,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 8,
    marginRight: 19
  },
  rect10Row: {
    height: 91,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 4,
    marginRight: 3
  },
  rect8: {
    width: 165,
    height: 91,
    borderWidth: 1,
    borderColor: "rgba(85,181,223,1)",
    borderStyle: "solid",
    borderRadius: 8
  },
  имясчётчика4: {
    fontFamily: "roboto-500",
    color: "#121212",
    height: 11,
    width: 148,
    fontSize: 20,
    marginTop: 7,
    marginLeft: 11
  },
  icon4: {
    color: "rgba(85,181,223,1)",
    fontSize: 30,
    height: 33,
    width: 26
  },
  loremIpsum8: {
    fontFamily: "roboto-regular",
    color: "rgba(42,71,5,1)",
    height: 23,
    width: 93,
    fontSize: 18,
    marginLeft: 19,
    marginTop: 5
  },
  icon4Row: {
    height: 33,
    flexDirection: "row",
    marginTop: 28,
    marginLeft: 11,
    marginRight: 16
  },
  rect7: {
    width: 165,
    height: 91,
    borderWidth: 1,
    borderColor: "rgba(85,181,223,1)",
    borderStyle: "solid",
    borderRadius: 8,
    marginLeft: 11
  },
  имясчётчика3: {
    fontFamily: "roboto-500",
    color: "#121212",
    height: 11,
    width: 148,
    fontSize: 20,
    marginTop: 7,
    marginLeft: 8
  },
  icon3: {
    color: "rgba(85,181,223,1)",
    fontSize: 30,
    height: 33,
    width: 26
  },
  loremIpsum5: {
    fontFamily: "roboto-regular",
    color: "rgba(42,71,5,1)",
    height: 23,
    width: 93,
    fontSize: 18,
    marginLeft: 19,
    marginTop: 5
  },
  icon3Row: {
    height: 33,
    flexDirection: "row",
    marginTop: 28,
    marginLeft: 8,
    marginRight: 19
  },
  rect8Row: {
    height: 91,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 4,
    marginRight: 3
  },
  rect6: {
    width: 165,
    height: 30,
    borderWidth: 1,
    borderColor: "rgba(85,181,223,1)",
    borderStyle: "solid",
    borderRadius: 8
  },
  имясчётчика2: {
    fontFamily: "roboto-500",
    color: "#121212",
    height: 11,
    width: 148,
    fontSize: 20,
    marginTop: 6,
    marginLeft: 8
  },
  rect5: {
    width: 165,
    height: 30,
    borderWidth: 1,
    borderColor: "rgba(85,181,223,1)",
    borderStyle: "solid",
    borderRadius: 8,
    marginLeft: 11
  },
  имясчётчика1: {
    fontFamily: "roboto-500",
    color: "#121212",
    height: 11,
    width: 148,
    fontSize: 20,
    marginTop: 6,
    marginLeft: 8
  },
  rect6Row: {
    height: 30,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 4,
    marginRight: 3
  },
  icon2: {
    color: "rgba(85,181,223,1)",
    fontSize: 30
  },
  loremIpsum7: {
    fontFamily: "roboto-regular",
    color: "rgba(42,71,5,1)",
    height: 23,
    width: 93,
    fontSize: 18,
    marginLeft: 19,
    marginTop: 5
  },
  icon1: {
    color: "rgba(85,181,223,1)",
    fontSize: 30,
    marginLeft: 35
  },
  loremIpsum4: {
    fontFamily: "roboto-regular",
    color: "rgba(42,71,5,1)",
    height: 23,
    width: 93,
    fontSize: 18,
    marginLeft: 19,
    marginTop: 5
  },
  icon2Row: {
    height: 33,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 15,
    marginRight: 22
  }
});

export default Home;

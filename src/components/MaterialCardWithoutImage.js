import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function MaterialCardWithoutImage(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bodyContent}>
        <Text style={styles.внимание}>Внимание!</Text>
        <Text style={styles.обнаруженаПротечка}>Обнаружена протечка!</Text>
      </View>
      <View style={styles.bodyContent1}>
        <Text style={styles.имяЗоны}>Имя Зоны</Text>
        <Text style={styles.имяЛинии}>Имя Линии</Text>
      </View>
      <View style={styles.bodyContent2}>
        <Text style={styles.имязоны1}>Имя Зоны</Text>
        <Text style={styles.имяДатчика}>Имя Датчика</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    justifyContent: "center"
  },
  внимание: {
    fontSize: 24,
    color: "rgba(255,0,0,1)",
    paddingBottom: 12
  },
  обнаруженаПротечка: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  },
  bodyContent1: {
    padding: 16,
    paddingTop: 24,
    justifyContent: "center"
  },
  имяЗоны: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12
  },
  имяЛинии: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  },
  bodyContent2: {
    padding: 16,
    paddingTop: 24,
    justifyContent: "center"
  },
  имязоны1: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12
  },
  имяДатчика: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  }
});

export default MaterialCardWithoutImage;

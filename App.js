import React, { Component } from "react";
import { View, Button, Text } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import SummaryScreen from "./screens/SummaryScreen";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

const switchScreen = createSwitchNavigator({
  HomeScreen: { screen: HomeScreen },
  SummaryScreen: { screen: SummaryScreen },
});

const AppContainer = createAppContainer(switchScreen);
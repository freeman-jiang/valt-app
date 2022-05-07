import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Receive } from "./Receive";
import { Wallet } from "./Wallet";
import { RootStackParamList } from "../../App";
import { Home } from "./Home";
import { Icon, Text, VStack } from "native-base";
import {
  Entypo,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useLang } from "../../context/lang";

export type RootTabParamList = {
  Receive: undefined;
  Wallet: undefined;
  Home: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

type Props = NativeStackScreenProps<RootStackParamList, "Dashboard">;

export const Dashboard = ({ navigation }: Props) => {
  const { isEN } = useLang();
  return (
    // @ts-ignore
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 90,
          paddingTop: 26,
          borderTopWidth: 0,
          backgroundColor: "#ededed",
        },
        lazy: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            const color = focused ? "black" : "gray.500";
            return (
              <VStack alignItems={"center"} space={1}>
                <Icon
                  as={
                    // @ts-ignore
                    <Entypo name="home" size={24} color="black" />
                  }
                  size={7}
                  color={color}
                />

                <Text fontWeight={500} color={color}>
                  Home
                </Text>
              </VStack>
            );
          },
        }}
      />
      <Tab.Screen
        name="Receive"
        component={Receive}
        options={{
          tabBarIcon: ({ focused }) => {
            const color = focused ? "black" : "gray.500";
            return (
              <VStack alignItems={"center"} space={1}>
                <Icon
                  as={
                    // @ts-ignore
                    <MaterialCommunityIcons
                      name="card-plus"
                      size={24}
                      color="black"
                    />
                  }
                  size={7}
                  color={color}
                />

                <Text fontWeight={500} color={color}>
                  Receive
                </Text>
              </VStack>
            );
          },
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ focused }) => {
            const color = focused ? "black" : "gray.500";
            return (
              <VStack alignItems={"center"} space={1}>
                <Icon
                  // @ts-ignore
                  as={<FontAwesome name="credit-card-alt" size={24} />}
                  size={6}
                  color={color}
                />

                <Text color={color} fontWeight={500}>
                  {isEN ? "Spend" : "Gastar"}
                </Text>
              </VStack>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

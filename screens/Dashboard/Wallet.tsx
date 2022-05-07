import { Box, FlatList, Heading, HStack, Image, VStack } from "native-base";
import React, { useRef, useState } from "react";
import { Dimensions, ListRenderItem, ViewToken } from "react-native";

import Card1 from "../../assets/card-1.png";
import Card2 from "../../assets/card-2.png";
import Card3 from "../../assets/card-3.png";
import Card4 from "../../assets/card-4.png";
import Card5 from "../../assets/card-5.png";
import { Dot } from "../../components/Dot";
import { TransactionSheet } from "../../components/TransactionSheet";

const Cards = [Card1, Card2, Card3, Card4, Card5];
const screenWidth = Dimensions.get("window").width;

interface onViewableItemsChangedProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export const Wallet = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const renderItem: ListRenderItem<any> = ({ index, item }) => (
    <Image
      key={index}
      mt={3}
      justifyContent={"center"}
      w={screenWidth}
      h={"100%"}
      source={item}
      alt="Credit Card"
      resizeMode="contain"
    />
  );

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: onViewableItemsChangedProps) => {
      setActiveIndex(viewableItems[0].index!);
    }
  );

  return (
    <VStack w="100%" h="100%" safeArea alignItems="center" space={0} pt={6}>
      <Heading color="gray.900" fontSize={32} alignSelf="flex-start" ml={4}>
        Your cards
      </Heading>
      <Box h={260}>
        <FlatList
          data={Cards}
          renderItem={renderItem}
          horizontal={true}
          decelerationRate={0}
          snapToInterval={screenWidth}
          showsHorizontalScrollIndicator={false}
          initialNumToRender={1}
          onViewableItemsChanged={onViewableItemsChanged.current}
        />
      </Box>
      <HStack mb={4} space={2}>
        {Cards.map((card, index) => (
          <Dot key={index} active={index === activeIndex} />
        ))}
      </HStack>
      <TransactionSheet />
    </VStack>
  );
};

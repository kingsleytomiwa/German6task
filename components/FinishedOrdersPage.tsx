import React from "react";
import { View, TouchableOpacity, Text, Image, ScrollView } from "react-native";
import { SvgXml } from "react-native-svg";
import { styled } from "nativewind";
import { backSvg } from "../helpers/svgs";
import OrderItem from "./Order";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

const i1 = require("../assets/Rectangle1.png");
const ordersData = [
  {
    name: "Angel R.",
    work: "Furniture Assembly",
    item: "TV Mounting Apr 24   12:30 pm",
    amount: "$44.39/hr",
    img: require("../assets/Rectangle2.png"),
  },
  {
    name: "Angel R.",
    work: "Furniture Assembly",
    item: "TV Mounting Apr 24   12:30 pm",
    amount: "$44.39/hr",
    img: require("../assets/Rectangle3.png"),
  },
  {
    name: "Angel R.",
    work: "Furniture Assembly",
    item: "TV Mounting Apr 24   12:30 pm",
    amount: "$44.39/hr",
    img: require("../assets/Rectangle4.png"),
  },
  {
    name: "Angel R.",
    work: "Furniture Assembly",
    item: "TV Mounting Apr 24   12:30 pm",
    amount: "$44.39/hr",
    img: require("../assets/Rectangle5.png"),
  },
  {
    name: "Angel R.",
    work: "Furniture Assembly",
    item: "TV Mounting Apr 24   12:30 pm",
    amount: "$44.39/hr",
    img: require("../assets/Rectangle6.png"),
  },
];

const FinishedOrdersPage = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ScrollView>
      <StyledView className="mx-[28]">
        <TouchableOpacity className="px-[18] py-[13] rounded-lg border-[1px] border-gray-200 mt-[10] flex items-center w-[15] bg-[#F2F2F2]">
          <SvgXml xml={backSvg} width={18} height={18} />
        </TouchableOpacity>
        <StyledText
          style={{ fontFamily: "Montserrat_600SemiBold" }}
          className="text-[30px] mt-[10] mb-[20] font-[600]"
        >
          Finished orders
        </StyledText>
        <StyledView className="border-[1px] border-[#D9D9D9] flex justify-center pt-[40] pb-[30] rounded-2xl">
          <StyledImage source={i1} className="flex mx-auto" />
          <StyledView className="flex flex-col pt-[20] gap-1 ml-[33]">
            <StyledText
              style={{ fontFamily: "Montserrat_600SemiBold" }}
              className="text-[18px] tracking-wider font-semibold ml-[33]"
            >
              Angel R.
            </StyledText>
            <StyledText
              style={{ fontFamily: "Montserrat_400Regular" }}
              className="text-[17px] text-[#00000080]  ml-[33]"
            >
              TV Mounting 2:00 pm
            </StyledText>
            <StyledView className="flex flex-row mx-[33] justify-between">
              <StyledText
                style={{ fontFamily: "Montserrat_600SemiBold" }}
                className="font-semibold text-[17px] text-[#00000080]"
              >
                $80.73/hr
              </StyledText>
              <StyledText
                style={{ fontFamily: "Montserrat_400Regular" }}
                className="text-[#00000080] text-[17px]"
              >
                1:14:59
              </StyledText>
            </StyledView>
          </StyledView>
          <StyledView className="flex flex-row gap-2 justify-center mx-[33] pt-[18]">
            <TouchableOpacity className="bg-[#D9D9D9] rounded-xl">
              <StyledText
                style={{ fontFamily: "Montserrat_400Regular" }}
                className=" px-[30] py-[6] text-[17px]"
              >
                Report issue
              </StyledText>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#58C0DB] rounded-xl">
              <StyledText
                style={{ fontFamily: "Montserrat_400Regular" }}
                className="text-white px-[50] py-[6] text-[17px]"
              >
                Done
              </StyledText>
            </TouchableOpacity>
          </StyledView>
        </StyledView>

        {ordersData.map((order, index) => (
          <OrderItem
            key={`${order.name}-${index}`}
            name={order.name}
            work={order.work}
            item={order.item}
            amount={order.amount}
            img={order.img}
          />
        ))}
      </StyledView>
    </ScrollView>
  );
};

export default FinishedOrdersPage;

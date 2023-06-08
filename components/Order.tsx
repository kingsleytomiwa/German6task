import React from "react";
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { styled } from "nativewind";
import { rescheduleSvg } from "../helpers/svgs";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

interface Orders {
  name: string;
  work: string;
  item: string;
  amount: string;
  img: ImageSourcePropType;
}

const OrderItem = ({ name, work, item, amount, img }: Orders) => {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <StyledView className="flex flex-row justify-between mt-5 items-center">
      <StyledImage source={img} />
      <StyledView className="">
        <StyledText
          style={{ fontFamily: "Montserrat_600SemiBold" }}
          className="text-[15px] tracking-wider font-semibold"
        >
          {name}
        </StyledText>

        <StyledText
          style={{ fontFamily: "Montserrat_500Medium" }}
          className="text-[15px] tracking-wider"
        >
          {work}
        </StyledText>
        <StyledText
          style={{ fontFamily: "Montserrat_400Regular" }}
          className="text-[#00000080] text-[15px]"
        >
          {item}
        </StyledText>
        <StyledText
          style={{ fontFamily: "Montserrat_400Regular" }}
          className="text-[#00000080] text-[15px]"
        >
          {amount}
        </StyledText>
      </StyledView>
      <TouchableOpacity>
        <SvgXml xml={rescheduleSvg} width={26} height={26} />
      </TouchableOpacity>
    </StyledView>
  );
};

export default OrderItem;

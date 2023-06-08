import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import {
  homeSvgXml,
  profileSvgXml,
  listSvgXml,
  commentSvgXml,
} from "../helpers/svgs";
import { styled } from "nativewind";

const StyledView = styled(View);

const BottomNav = () => {
  return (
    <StyledView className="bg-white absolute pt-[2.5rem] h-full top-[800] w-full border-t-[1px] border-[#E2E2E2]">
      <StyledView className="px-[60px] pt-[30px] flex flex-row justify-between">
        <TouchableOpacity className="flex gap-[0.5rem] items-center">
          <SvgXml xml={homeSvgXml} width={30} height={30} />
        </TouchableOpacity>
        <TouchableOpacity className="flex gap-[0.5rem] items-center">
          <SvgXml xml={listSvgXml} width={30} height={30} />
        </TouchableOpacity>
        <TouchableOpacity className="flex gap-[0.5rem] items-center">
          <SvgXml xml={commentSvgXml} width={30} height={30} />
        </TouchableOpacity>
        <TouchableOpacity className="flex gap-[0.5rem] items-center">
          <SvgXml xml={profileSvgXml} width={30} height={30} />
        </TouchableOpacity>
      </StyledView>
    </StyledView>
  );
};

export default BottomNav;

import React from "react";
import { BottomComponentWrapper } from "../../BottomComponent/Specialities/styled";
import { Avator } from "../../SideBar/styled";
import revenue1 from "../../../images/revenue1.svg";
import revenue2 from "../../../images/revenue2.svg";
import revenue3 from "../../../images/revenue3.svg";
import revenue4 from "../../../images/revenue4.svg";

const BottomWrapper = () => {
  return (
    <BottomComponentWrapper>
      <Avator src={revenue1} width="250px" height="250px" marginRight="15px" />
      <Avator src={revenue2} width="250px" height="250px" marginRight="15px" />
      <Avator src={revenue3} width="250px" height="250px" marginRight="15px" />
      <Avator src={revenue4} width="250px" height="250px" marginRight="15px" />
    </BottomComponentWrapper>
  );
};

export default BottomWrapper;

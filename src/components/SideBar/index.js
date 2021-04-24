import React from "react";
import {
  SideBarContainer,
  LogoContainer,
  Logo,
  Avator,
  DailyReport,
  Title,
  Hr,
  ReportItem,
  Figure,
} from "./styled";
import avator from "../../images/avator.svg";
import { Info } from "../Dashboard/styled";

const SideBar = () => {
  return (
    <SideBarContainer>
      <LogoContainer>
        <Logo />
        <Avator src={avator} />
      </LogoContainer>
      <DailyReport>
        <Title>Daily report</Title>
        <Hr />
        <ReportItem>
          <Info>Total appointments</Info>
          <Figure color="black">1623</Figure>
        </ReportItem>
        <Hr />
        <ReportItem>
          <Info>Appointments revenue</Info>
          <Figure color="green">&#163; 335,765.11</Figure>
        </ReportItem>
        <Hr />
        <ReportItem>
          <Info>Total users</Info>
          <Figure color="black">162</Figure>
        </ReportItem>
        <Hr />
        <ReportItem>
          <Info>Available employees</Info>
          <Figure color="black">143</Figure>
        </ReportItem>
      </DailyReport>
    </SideBarContainer>
  );
};
export default SideBar;

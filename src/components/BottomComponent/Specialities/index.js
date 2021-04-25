import React from "react";
import { Info } from "../../Dashboard/styled";
import {
  Button,
  Reservation,
  ReservationItem,
} from "../../SideBar/Reservations/styled";
import { Avator, Hr, Title } from "../../SideBar/styled";
import {
  BottomComponentWrapper,
  SpecialistsCard,
  TopServicesCard,
} from "./styled";
import avator from "../../../images/avator.svg";
import charater1 from "../../../images/character1.svg";
import charater2 from "../../../images/character2.svg";
import charater3 from "../../../images/character3.svg";

const BottomComponent = () => {
  return (
    <BottomComponentWrapper>
      <div>
        <Info>To Specialists</Info>
        <SpecialistsCard marginTop="10px">
          <Reservation>
            <ReservationItem textAlign="left">Name</ReservationItem>
            <ReservationItem>Specialization</ReservationItem>
            <ReservationItem textAlign="center">Visits</ReservationItem>
          </Reservation>
          <Hr />
          <Reservation>
            <Avator src={avator} width="20px" height="20px" />
            <ReservationItem>Aanna Zoe</ReservationItem>
            <Button padding="2px" height="20px">
              Dentist
            </Button>
            <ReservationItem textAlign="center">1542</ReservationItem>
          </Reservation>
          <Hr />
          <Reservation>
            <Avator src={avator} width="20px" height="20px" />
            <ReservationItem>John Smith</ReservationItem>
            <Button padding="2px" height="20px">
              Surgeon
            </Button>
            <ReservationItem textAlign="center">1287</ReservationItem>
          </Reservation>
          <Hr />
          <Reservation>
            <Avator src={avator} width="20px" height="20px" />
            <ReservationItem>Joe Bass</ReservationItem>
            <Button padding="2px" height="20px">
              Internist
            </Button>
            <ReservationItem textAlign="center">1023</ReservationItem>
          </Reservation>
        </SpecialistsCard>
      </div>
      <div style={{ marginLeft: "20px" }}>
        <Info>Top Services</Info>
        <TopServicesCard marginTop="10px" width="110px">
          <Avator src={charater1} width="100px" height="100px" />
          <Title color="black">Guided Trip</Title>
          <Info>Travel with your friends</Info>
        </TopServicesCard>
      </div>
      <div style={{ marginLeft: "20px" }}>
        <TopServicesCard marginTop="30px" width="110px">
          <Avator src={charater2} width="100px" height="100px" />
          <Title color="black">Consultation</Title>
          <Info>Schedule a doctor visit</Info>
        </TopServicesCard>
      </div>
      <div style={{ marginLeft: "20px" }}>
        <TopServicesCard marginTop="30px" width="140px">
          <Avator src={charater3} width="100px" height="100px" />
          <Title color="black">Knitting Lessons</Title>
          <Info>Learn how to craft clothes</Info>
        </TopServicesCard>
      </div>
    </BottomComponentWrapper>
  );
};

export default BottomComponent;

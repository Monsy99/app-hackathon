import React from "react";
import {
  ReservationsCard,
  ReservationItem,
  Reservation,
} from "../../SideBar/Reservations/styled";
import { Avator, Hr, Title } from "../../SideBar/styled";
import avator from "../../../images/avator.svg";

const RevenueCard = () => {
  return (
    <ReservationsCard marginTop="10px">
      <Reservation>
        <Title>Revenue by employee</Title>
      </Reservation>
      <Hr />
      <Reservation>
        <ReservationItem>Name</ReservationItem>
        <ReservationItem textAlign="right">Revenue</ReservationItem>
      </Reservation>
      <Hr />
      <Reservation>
        <Avator src={avator} width="20px" height="20px" />
        <ReservationItem>Anna Zoe</ReservationItem>
        <ReservationItem textAlign="right" color="green">
          +&#163;4,432
        </ReservationItem>
      </Reservation>
      <Hr />
      <Reservation>
        <Avator src={avator} width="20px" height="20px" />
        <ReservationItem>George joy</ReservationItem>
        <ReservationItem textAlign="right" color="green">
          +&#163;332
        </ReservationItem>
      </Reservation>
      <Hr />
      <Reservation>
        <Avator src={avator} width="20px" height="20px" />
        <ReservationItem>Mike May</ReservationItem>
        <ReservationItem textAlign="right" color="green">
          +&#163;1,299
        </ReservationItem>
      </Reservation>
      <Hr />
      <Reservation>
        <Avator src={avator} width="20px" height="20px" />
        <ReservationItem>James May</ReservationItem>
        <ReservationItem textAlign="right" color="green">
          +&#163;881
        </ReservationItem>
      </Reservation>
      <Hr />
      <Reservation>
        <Avator src={avator} width="20px" height="20px" />
        <ReservationItem>Anna Smith</ReservationItem>
        <ReservationItem textAlign="right" color="green">
          +&#163;4,432
        </ReservationItem>
      </Reservation>
      <Hr />
      <Reservation>
        <Avator src={avator} width="20px" height="20px" />
        <ReservationItem>Lizzy Page</ReservationItem>
        <ReservationItem textAlign="right" color="green">
          +&#163;4,009
        </ReservationItem>
      </Reservation>
    </ReservationsCard>
  );
};

export default RevenueCard;

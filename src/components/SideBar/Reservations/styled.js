import styled from "styled-components";

export const ReservationsCard = styled.div`
  border: none;
  padding: 10px;
  border-radius: 24px;
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Reservation = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 30px;
`;

export const ReservationItem = styled.div`
  flex: 1;
  text-align: ${({ textAlign }) => textAlign};
`;

export const Button = styled.button`
  flex: 1;
  text-align: center;
  border-radius: 10px;
  padding: 5px 30px 5px 30px;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
`;

import { Greeting, Header, Info, Input } from "../Dashboard/styled";
import { MainComponentWrapper } from "../MainComponentWrapper";
import { MainContainer } from "../MainContainer";
import { Menu } from "../Menu";
import { Container } from "../Container";
import avator from "../../images/avator.svg";
import reservations from "../../images/Reservations.svg";
import {
  Avator,
  DailyReport,
  Figure,
  Hr,
  Logo,
  LogoContainer,
  ReportItem,
  SideBarContainer,
  Title,
} from "../SideBar/styled";

export const Reservations = () => {
  return (
    <MainContainer>
      <Menu />
      <MainComponentWrapper>
        <Header>
          <div>
            <Greeting>Welcome, Joanna!</Greeting>
            <Info>Metropolitan Hospital Panel</Info>
          </div>
          <Input placeholder="Search for service"></Input>
        </Header>
        <Container>
          <img alt="reservations table" width={"100%"} src={reservations}></img>
        </Container>
      </MainComponentWrapper>
      <SideBarContainer>
        <LogoContainer>
          <Logo />
          <Avator src={avator} />
        </LogoContainer>
        <DailyReport
          marginTop="50px"
          alignItems="center"
          justifyConent="center"
        >
          <Title>Daily summary</Title>
          <Hr />
          <ReportItem>
            <Info>Appointments today</Info>
            <Figure color="black">223</Figure>
          </ReportItem>
          <Hr />
          <ReportItem>
            <Info>Average services revenue</Info>
            <Figure color="green">&#163; 378.12</Figure>
          </ReportItem>
          <Hr />
          <ReportItem>
            <Info>Registered users</Info>
            <Figure color="black">12 875</Figure>
          </ReportItem>
          <Hr />
        </DailyReport>
      </SideBarContainer>
    </MainContainer>
  );
};

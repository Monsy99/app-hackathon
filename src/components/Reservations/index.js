import { Greeting, Header, Info, Input } from "../Dashboard/styled";
import { MainComponentWrapper } from "../MainComponentWrapper";
import { MainContainer } from "../MainContainer";
import { Menu } from "../Menu";
import { Container } from "../Container";
import reservations from "../../images/Reservations.svg";

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
          <img width={"1000px"} src={reservations}></img>
        </Container>
      </MainComponentWrapper>
    </MainContainer>
  );
};

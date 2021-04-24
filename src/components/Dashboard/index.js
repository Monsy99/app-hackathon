import { Container } from "../Container";
import { MainComponentWrapper } from "../MainComponentWrapper";
import { MainContainer } from "../MainContainer";
import { Menu } from "../Menu";
import fakechart from "../../images/fakedChart.png";
import { Greeting, Header, Info, Input } from "./styled";
import SideBar from "../SideBar/index";

export const Dashboard = () => {
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
        <Container gridArea="dash">
          <img width="100%" src={fakechart}></img>
        </Container>
      </MainComponentWrapper>
      <SideBar />
    </MainContainer>
  );
};

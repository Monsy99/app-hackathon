import { Button, ButtonImg, PanelWrapper } from "./styled";
import home from "../../../images/home.svg";
import reports from "../../../images/reports.svg";
import user from "../../../images/user.svg";
import funds from "../../../images/funds.svg";
import insurance from "../../../images/insurance.svg";
import legal from "../../../images/legal.svg";
import settings from "../../../images/settings.svg";
import exit from "../../../images/exit.svg";

export const BottomPanel = () => {
  return (
    <PanelWrapper>
      <Button>
        <ButtonImg src={legal} />
        Legal
      </Button>
      <Button>
        <ButtonImg src={settings} />
        Settings
      </Button>
      <Button>
        <ButtonImg src={exit} />
        Exit
      </Button>
    </PanelWrapper>
  );
};

export const Panel = () => {
  return (
    <PanelWrapper>
      <Button reversed>
        <ButtonImg src={home} />
        Dashboard
      </Button>
      <Button>
        <ButtonImg src={reports} />
        Reports
      </Button>
      <Button>
        <ButtonImg src={user} />
        Users
      </Button>
      <Button>
        <ButtonImg src={funds} />
        Funds
      </Button>
      <Button>
        <ButtonImg src={insurance} />
        Insurance
      </Button>
    </PanelWrapper>
  );
};

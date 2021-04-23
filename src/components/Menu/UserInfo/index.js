import image from "../../../images/silverCircle.svg";
import { UserAvatar, UserDetail, UserName, UserWrapper } from "./styled";

export const UserInfo = () => {
  return (
    <UserWrapper>
      <UserAvatar src={image} />
      <div>
        <UserName>Joanna</UserName>
        <UserDetail>Partner Panel</UserDetail>
      </div>
    </UserWrapper>
  );
};

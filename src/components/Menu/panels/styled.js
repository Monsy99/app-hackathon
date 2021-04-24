import styled, { css } from "styled-components";

export const PanelWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  border: none;
  display: flex;
  align-items: center;
  padding: 14px 11px 13px;
  margin-bottom: 18px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  outline: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.governorBay};
  &:hover {
    filter: brightness(1.1);
    cursor: pointer;
  }
  ${(props) =>
    props.reversed &&
    css`
      color: ${({ theme }) => theme.colors.governorBay};
      background-color: ${({ theme }) => theme.colors.white};
    `}
`;
export const ButtonImg = styled.img`
  width: 18px;
  transform: translateY(-2px);
  margin-right: 8px;
`;

import styled from "styled-components";

export const LabelWrapper = styled.div`
  display: flex;
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? marginBottom : `-40px`};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : `30px`)};
`;

export const Label = styled.div`
  flex: 1;
  text-align: ${({ textAlign }) => textAlign};
`;

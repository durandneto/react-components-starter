import styled from "styled-components";

export const StyledAvatar = styled.div`
  width: 32px;
  height: 32px;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.2);
  background-image: url(${props => props.src && props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;

    ${({ cursorPoniter }) =>
      cursorPoniter &&
      `
      cursor: pointer;
  `}

    ${({ loading }) =>
      loading  &&
      `
      filter: blur(4px);
  `};

`;

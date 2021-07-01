import css from "styled-jsx/css";
import { breakpoints, fonts, colors } from "../../styles/theme";

export const globalStyles = css.global`
  body {
    background-image: radial-gradient(${colors.primary} 1px, transparent 1px),
      radial-gradient(${colors.secundary} 1px, transparent 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    overflow: hidden;
    font-family: ${fonts.base};
  }

  * {
    box-sizing: border-box;
  }

  textarea,
  input {
    font-family: ${fonts.base};
  }
`;

export default css`
  div {
    display: grid;
    place-items: center;
  }

  main {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    height: 90vh;
    overflow-y: auto;
    width: 450px;
  }

  @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      width: ${breakpoints.mobile};
    }
  }
`;

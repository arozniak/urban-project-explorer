import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
  --text-color: #555555;
  --background-color-1: #ffffff;
  --background-color-2: #fafafa;
  --background-color-3: #f5f5f5;
  --border-color:  #ebebeb;
  --urban-font-size: 14px;
  --brand-color: #0079c1;

  font-size: var(--urban-font-size);
}
`;
export default GlobalStyles;

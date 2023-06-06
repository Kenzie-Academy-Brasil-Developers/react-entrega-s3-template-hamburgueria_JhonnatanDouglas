import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  :root{
  --color-primary: #27ae60;
  --color-primary-hover: #93D7AF;
  --color-secondary: #eb5757;
  --color-grey-600: #333333;
  --color-grey-500: #828282;
  --color-grey-400: #999999;
  --color-grey-300: #BDBDBD;
  --color-grey-200: #e0e0e0;
  --color-grey-100: #F5F5F5;
  --color-white: #FFFFFF;
  --color-negative: #e60000;
  --color-warning: #ffcd07;
  --color-sucess: #168821;
  --color-information: #155bcb;

  --font-family: 'Inter', sans-serif;

  --font-size-6: 26px;
  --font-size-5: 22px;
  --font-size-4: 18px;
  --font-size-3: 16px;
  --font-size-2: 14px;
  --font-size-1: 12px;

  --font-weight-4: 700;
  --font-weight-3: 600;
  --font-weight-2: 500;
  --font-weight-1: 400;

  --line-height-8: 34px;
  --line-height-7: 28px;
  --line-height-6: 24px;
  --line-height-5: 20px;
  --line-height-4: 18px;
  --line-height-3: 16px;
  --line-height-2: 15px;
  --line-height-1: 0px;

  --border-radius-1: 8px;
  }
`

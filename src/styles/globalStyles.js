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

  --font-family-default: 'Inter', sans-serif;

  --font-size-6: 1.625rem; 
  --font-size-5: 1.375rem; 
  --font-size-4: 1.125rem; 
  --font-size-3: 1rem; 
  --font-size-2: 0.875rem; 
  --font-size-1: 0.75rem; 

  --font-weight-4: 700; 
  --font-weight-3: 600; 
  --font-weight-2: 500; 
  --font-weight-1: 400; 

  --line-height-8: 2.125rem; 
  --line-height-7: 1.75rem; 
  --line-height-6: 1.5rem; 
  --line-height-5: 1.25rem; 
  --line-height-4: 1.125rem; 
  --line-height-3: 1rem; 
  --line-height-2: 0.9375rem; 
  --line-height-1: 0rem; 

  --border-radius-1: 0.5rem; 
  --border-radius-0: 0.3125rem; 
  }
`
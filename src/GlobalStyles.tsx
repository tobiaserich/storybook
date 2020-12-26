import React from "react";
import { Global, css } from "@emotion/react";

function GlobalStyles({ fontColor }: any): JSX.Element {
  return (
    <Global
      styles={() => css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        body {
        }

        #root {
          color: ${fontColor};
        }
      `}
    />
  );
}
export default GlobalStyles;

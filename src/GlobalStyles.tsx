import React from "react";
import { Global, css } from "@emotion/react";

function GlobalStyles(): JSX.Element {
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
        }
      `}
    />
  );
}
export default GlobalStyles;

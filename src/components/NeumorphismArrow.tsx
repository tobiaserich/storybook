import React from "react";
import styled from "@emotion/styled";

const Svg = styled("svg")`
  width: 35px;
  height: 40px;
  transform: ${({ direction }) => (direction === "left" ? "scale(-1,1)" : "")};
`;

const NeumorphismArrow = ({ direction }) => {
  return (
    <>
      <Svg direction={direction} xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_ddii)">
          <path
            d="M31 19.5884L3.99999 35.1769L8.2 19.5884L3.99999 3.99997L31 19.5884Z"
            fill="#FFE3C7"
          />
        </g>
        <defs>
          <filter
            id="filter0_ddii"
            x="0"
            y="-3.05176e-05"
            width="35"
            height="39.1769"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.83 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.6228 0 0 0 0 0.604213 0 0 0 0 0.5572 0 0 0 0.38 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow"
              result="effect2_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
            />
            <feBlend mode="normal" in2="shape" result="effect3_innerShadow" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.773483 0 0 0 0 0.757303 0 0 0 0 0.746517 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="effect3_innerShadow"
              result="effect4_innerShadow"
            />
          </filter>
        </defs>
      </Svg>
    </>
  );
};

export { NeumorphismArrow };

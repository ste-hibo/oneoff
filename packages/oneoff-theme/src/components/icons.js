import React from "react";
import { colors } from "../styles";
import { styled } from "frontity";

export const MenuIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27.805"
      height="11.494"
      viewBox="0 0 27.805 11.494"
    >
      <g transform="translate(0 1)">
        <line x2="27.805" fill="none" stroke={colors.GOLD} strokeWidth="2" />
        <line
          x2="27.805"
          transform="translate(0 9.494)"
          fill="none"
          stroke={colors.GOLD}
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};

export const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22.691"
      height="21.941"
      viewBox="0 0 22.691 21.941"
    >
      <g transform="translate(-1811.502 -80.279)">
        <line
          x2="21.305"
          y2="20.5"
          transform="translate(1812.195 81)"
          fill="none"
          stroke={colors.WHITE}
          strokeWidth="2"
        />
        <line
          x1="21.305"
          y2="20.5"
          transform="translate(1812.195 81)"
          fill="none"
          stroke={colors.WHITE}
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};

export const Logo = ({ blendMode }) => {
  return (
    <LogoStyle blendMode={blendMode}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="134.174"
        height="19.535"
        viewBox="0 0 134.174 19.535"
      >
        <path
          d="M361.529-671.8v-2.672h-9.407v8.031H336.016V-671.8h6.565v-2.672h-9.408v8.031h-9.928a9.386,9.386,0,0,0-2.787-5.505,9.42,9.42,0,0,0-6.907-2.88,9.6,9.6,0,0,0-6.979,2.855,9.234,9.234,0,0,0-2.823,5.53H287.06V-671.8h7.553v-2.672h-10.4v8.031H273.455v-7.941h-2.843v7.941h-4.838l-7.59-7.941h-1.311v7.941h-9.928a9.389,9.389,0,0,0-2.787-5.505,9.42,9.42,0,0,0-6.907-2.88,9.6,9.6,0,0,0-6.979,2.855,9.227,9.227,0,0,0-2.916,6.833,9.257,9.257,0,0,0,3.2,7.321,9.72,9.72,0,0,0,6.553,2.526,9.718,9.718,0,0,0,7.04-2.843,9.2,9.2,0,0,0,2.794-5.439h9.933v7.941h2.842v-7.941h5.031l7.61,7.941h1.1v-7.941h10.763v7.941h10.4V-658.3H287.06v-5.268h16.711a9.012,9.012,0,0,0,3.082,5.756,9.717,9.717,0,0,0,6.552,2.526,9.721,9.721,0,0,0,7.041-2.843,9.2,9.2,0,0,0,2.793-5.439h9.934v7.941h2.843v-7.941h16.107v7.941h2.843v-7.941H361.3v-.1h0v-2.673h0v-.1h-6.333V-671.8Zm-124.314-.354a6.647,6.647,0,0,1,4.953,2.05,6.742,6.742,0,0,1,1.9,3.663H230.338a6.673,6.673,0,0,1,1.911-3.663A6.712,6.712,0,0,1,237.216-672.154ZM242.145-660a6.782,6.782,0,0,1-5,2.05,6.735,6.735,0,0,1-4.82-2.014,6.58,6.58,0,0,1-1.96-3.609h13.681A6.849,6.849,0,0,1,242.145-660Zm17.571-6.441v-2.382L262-666.441Zm10.9,5.062-2.1-2.194h2.1Zm37.936-8.724a6.713,6.713,0,0,1,4.967-2.05,6.646,6.646,0,0,1,4.953,2.05,6.743,6.743,0,0,1,1.9,3.663H306.638A6.668,6.668,0,0,1,308.549-670.1Zm9.9,10.1a6.782,6.782,0,0,1-5,2.05,6.734,6.734,0,0,1-4.82-2.014,6.583,6.583,0,0,1-1.959-3.609h13.681A6.849,6.849,0,0,1,318.445-660Z"
          transform="translate(-227.355 674.826)"
          fill={colors.WHITE}
        />
      </svg>
    </LogoStyle>
  );
};

export const SubLogo = ({ color }) => {
  return (
    <SubLogoStyle>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="132.129"
      height="5.463"
      viewBox="0 0 132.129 5.463"
    >
      <path
        d="M230.371-628.258v1.142h1.61v.881h-1.61v1.4h1.672v.881H229.36v-5.187h2.683v.88Z"
        transform="translate(-229.36 629.277)"
        fill={color}
      />
      <path
        d="M242.414-629.139h1.2l.825,1.61.757-1.61h1.2l-1.438,2.442,1.6,2.746h-1.176l-1.046-1.9-.991,1.9h-1.183l1.658-2.746Z"
        transform="translate(-234.814 629.277)"
        fill={color}
      />
      <path
        d="M261.335-627.865a1.5,1.5,0,0,0-1.143-.551,1.646,1.646,0,0,0-1.527,1.789,1.634,1.634,0,0,0,1.521,1.748,1.583,1.583,0,0,0,1.149-.551v1.2a2.723,2.723,0,0,1-1.177.31,2.615,2.615,0,0,1-2.539-2.69,2.64,2.64,0,0,1,2.56-2.772,2.413,2.413,0,0,1,1.156.3Z"
        transform="translate(-241.409 629.379)"
        fill={color}
      />
      <path
        d="M273.955-624.832h1.431v.881h-2.443v-5.187h1.012Z"
        transform="translate(-247.942 629.277)"
        fill={color}
      />
      <path
        d="M285.4-629.139h1.012v2.9c0,.64.055,1.541.915,1.541s.915-.9.915-1.541v-2.9h1.011v3.1c0,1.266-.537,2.222-1.926,2.222s-1.927-.956-1.927-2.222Z"
        transform="translate(-253.253 629.277)"
        fill={color}
      />
      <path
        d="M303.331-628.1a.933.933,0,0,0-.777-.427.617.617,0,0,0-.633.585c0,.874,2.057.509,2.057,2.25a1.641,1.641,0,0,1-1.707,1.775,1.838,1.838,0,0,1-1.6-1.011l.653-.64a1.065,1.065,0,0,0,.936.757.693.693,0,0,0,.667-.75c0-.536-.5-.688-.9-.846-.668-.275-1.156-.612-1.156-1.417a1.51,1.51,0,0,1,1.514-1.555,2.131,2.131,0,0,1,1.417.578Z"
        transform="translate(-259.766 629.379)"
        fill={color}
      />
      <path
        d="M316.05-623.952h-1.011v-5.187h1.011Z"
        transform="translate(-265.89 629.277)"
        fill={color}
      />
      <path
        d="M327.284-625.644h.014l1.155-3.495h1.087l-2.016,5.325h-.591l-1.981-5.325h1.087Z"
        transform="translate(-270.117 629.277)"
        fill={color}
      />
      <path
        d="M342.126-628.258v1.142h1.61v.881h-1.61v1.4H343.8v.881h-2.683v-5.187H343.8v.88Z"
        transform="translate(-277.008 629.277)"
        fill={color}
      />
      <path
        d="M355.663-624.832h1.431v.881h-2.443v-5.187h1.012Z"
        transform="translate(-282.779 629.277)"
        fill={color}
      />
      <path
        d="M365.835-629.139h1.177l.908,1.8.99-1.8h1.184l-1.638,2.807v2.381h-1.011v-2.381Z"
        transform="translate(-287.548 629.277)"
        fill={color}
      />
      <path
        d="M391.708-629.139h1.176l.908,1.8.99-1.8h1.184l-1.638,2.807v2.381h-1.011v-2.381Z"
        transform="translate(-298.579 629.277)"
        fill={color}
      />
      <path
        d="M409.4-623.916a2.547,2.547,0,0,1-2.566-2.739,2.548,2.548,0,0,1,2.566-2.724,2.548,2.548,0,0,1,2.566,2.724A2.547,2.547,0,0,1,409.4-623.916Zm0-4.465a1.589,1.589,0,0,0-1.52,1.685,1.59,1.59,0,0,0,1.52,1.782,1.59,1.59,0,0,0,1.521-1.782A1.589,1.589,0,0,0,409.4-628.381Z"
        transform="translate(-305.03 629.379)"
        fill={color}
      />
      <path
        d="M424.287-629.139H425.3v2.9c0,.64.055,1.541.916,1.541s.914-.9.914-1.541v-2.9h1.012v3.1c0,1.266-.537,2.222-1.926,2.222s-1.927-.956-1.927-2.222Z"
        transform="translate(-312.47 629.277)"
        fill={color}
      />
      <path
        d="M443.444-623.952h-1.225l-1.259-2.091h-.014v2.091h-1.011v-5.187H441.3c1.025,0,1.734.454,1.734,1.561a1.371,1.371,0,0,1-1.06,1.438Zm-2.5-2.8h.131c.557,0,.949-.165.949-.8s-.406-.763-.943-.763h-.137Z"
        transform="translate(-319.141 629.277)"
        fill={color}
      />
      <path
        d="M456.594-628.1a.933.933,0,0,0-.777-.427.618.618,0,0,0-.633.585c0,.874,2.057.509,2.057,2.25a1.64,1.64,0,0,1-1.705,1.775,1.84,1.84,0,0,1-1.6-1.011l.654-.64a1.066,1.066,0,0,0,.936.757.693.693,0,0,0,.668-.75c0-.536-.5-.688-.9-.846-.667-.275-1.156-.612-1.156-1.417a1.51,1.51,0,0,1,1.513-1.555,2.13,2.13,0,0,1,1.417.578Z"
        transform="translate(-325.112 629.379)"
        fill={color}
      />
    </svg>
    </SubLogoStyle>
  );
};

export const InstagramIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22.034"
      height="22.034"
      viewBox="0 0 22.034 22.034"
    >
      <path
        d="M15.47,0H6.564A6.571,6.571,0,0,0,0,6.564V15.47a6.571,6.571,0,0,0,6.564,6.564H15.47a6.571,6.571,0,0,0,6.564-6.564V6.564A6.572,6.572,0,0,0,15.47,0Zm4.347,15.47a4.347,4.347,0,0,1-4.347,4.347H6.564A4.347,4.347,0,0,1,2.217,15.47V6.564A4.347,4.347,0,0,1,6.564,2.217H15.47a4.347,4.347,0,0,1,4.347,4.347V15.47Z"
        fill={colors.GOLD}
      />
      <path
        d="M138.7,133a5.7,5.7,0,1,0,5.7,5.7A5.705,5.705,0,0,0,138.7,133Zm0,9.181a3.482,3.482,0,1,1,3.482-3.482A3.482,3.482,0,0,1,138.7,142.181Z"
        transform="translate(-127.682 -127.682)"
        fill={colors.GOLD}
      />
      <circle
        cx="1.366"
        cy="1.366"
        r="1.366"
        transform="translate(15.361 3.995)"
        fill={colors.GOLD}
      />
    </svg>
  );
};

const LogoStyle = styled.div`
  position: fixed;
  mix-blend-mode: ${(props) => props.blendMode};
  padding-bottom: 0.25rem;
`;

const SubLogoStyle = styled.div`
  position: fixed;
  top: 6.7rem;
`;

import { extendTheme, ThemeConfig, ThemeOverride } from "@chakra-ui/react";

const robotoRegular = "RobotoRegular, sans-serif";
const robotoBold = "RobotoBold, sans-serif";
const robotoItalic = "RobotoItalic, sans-serif";
const robotoLight = "RobotoLight, sans-serif";
const ppMoriSemiBold = "PPMoriSemiBold, RobotoBold, sans-serif";

const PlayfairDisplayMedium = "PlayfairDisplayMedium, serif";
const PlayfairDisplayReguler = "PlayfairDisplayReguler, serif";
const PlayfairDisplayMediumItalic = "PlayfairDisplayMediumItalic, serif";
const PlayfairDisplayBold = "PlayfairDisplayMediumBold, serif";
const DidactGothic = "DidactGothic, serif";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors = {
  colors: {
    primary: "#FFE347",
    secondary: "#B0B0B0",
    black: "#000000",
    white: "#FFFFFF",
    gray: "#808080",
  },
};

type CustomColors = typeof colors;

const theme = extendTheme(<ThemeOverride>{
  breakpoints: {
    xl: "1441px",
    "2xl": "1980px",
  },
  colors: { ...colors.colors },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 400,
      },
    },
    Text: {
      sizes: {
        sm: {
          fontSize: "1rem",
        },
        md: {
          fontSize: "20px",
        },
      },
      defaultProps: {
        size: "md",
      },
    },
  },
  fontSizes: {
    xs: "16px",
    md: "22px",
    xl: "32px",
    xxl: "72px",
    "3.5xl": "2rem",
    "6.5xl": "4rem",
  },
  fonts: {
    heading: PlayfairDisplayMedium,
    body: PlayfairDisplayReguler,
  },
  space: {
    "8.5": "32px",
  },
  styles: {
    global: {
      body: {
        // bg: '#6A5A33',
        bg: "#6A5A33 url('/images/bg-body-0.5.webp') repeat-y center/cover",
        overflowY: "auto",
        overflowX: "hidden",
        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased",
        textRendering: "optimizeLegibility",
      },
      html: {
        scrollBehavior: "smooth",
      },
      ".js-focus-visible:focus:not([data-focus-visible-added])": {
        outline: "none",
        boxShadow: "none",
      },
      ".react-player": {
        background: "black",
      },
      ".react-player > video": {
        objectFit: "cover",
      },
      ".react-player-loading > video": {
        objectFit: "contain",
      },
      ".pos-absolute-xcenter": {
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
      },
      ".pos-absolute-ycenter": {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
      },
      ".flex-full-center": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      ".slick-slider": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        height: "100%",
        width: "auto",
      },
      ".slick-dots": {
        position: "absolute",
        zIndex: 4,
        background: "transparant",
        bottom: "-1px",
        paddingLeft: "100px",
        // bg: "blue"
      },
      ".slick-dots li.slick-active button:before": {
        opacity: 1,
        color: "white",
        background: "url('/images/star-dots.svg') no-repeat center/cover",
        width: 68,
        height: 68,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      ".slick-dots li button:hover": {
        opacity: 1,
        color: "white",
        background: "url('/images/star-dots.svg') no-repeat center/cover",
        width: 68,
        height: 68,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      ".slick-dots li": {
        position: "relative",
        width: "68px",
        height: "68px",
      },
      ".slick-list": {
        height: "100%",
      },
      ".slick-dots li button:before": {
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "slick",
        fontSize: "14px",
        position: "absolute",
        top: 0,
        left: 0,
        width: "68px",
        height: "68px",
        content: '"•"',
        textAlign: "center",
        opacity: 1,
        color: "white",
        paddingTop: "2px",
      },
      ".slick-dots li:hover + .slick-active button:before": {
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "slick",
        fontSize: "14px",
        position: "absolute",
        top: 0,
        left: 0,
        width: "68px",
        height: "68px",
        content: '"•"',
        textAlign: "center",
        opacity: 1,
        color: "white",
      },
      "li:nth-of-type(1)": {
        marginTop: -270,
      },
      "li:nth-of-type(2)": {
        marginTop: -190,
      },
      "li:nth-of-type(3)": {
        marginTop: -160,
      },
      "li:nth-of-type(4)": {
        marginTop: -130,
      },
      "li:nth-of-type(5)": {
        marginTop: -110,
      },
      "li:nth-of-type(6)": {
        marginTop: -130,
      },
      "li:nth-of-type(7)": {
        marginTop: -160,
      },
      "li:nth-of-type(8)": {
        marginTop: -190,
      },
      "li:nth-of-type(9)": {
        marginTop: -270,
      },
      "slick-slide": {
        height: "100vh",
      },
    },
  },
  sizes: {
    container: {
      lg: "1080px",
      "2xl": "1440px",
      "3xl": "1920px",
    },
  },
  textStyles: {
    // Heading and Text config are prioritized over textStyle
    robotoRegular: {
      fontFamily: robotoRegular,
      fontWeight: 400,
    },
    robotoBold: {
      fontFamily: robotoBold,
      fontWeight: 400,
    },

    robotoLight: {
      fontFamily: robotoLight,
      fontWeight: 300,
    },
    robotoItalic: {
      fontFamily: robotoItalic,
      fontWeight: 400,
    },
    ppMoriSemiBold: {
      fontFamily: ppMoriSemiBold,
      fontWeight: 400,
    },

    PlayfairDisplayMedium: {
      fontFamily: PlayfairDisplayMedium,
      fontWeight: 400,
    },

    PlayfairDisplayMediumItalic: {
      fontFamily: PlayfairDisplayMediumItalic,
      fontWeight: 400,
    },

    PlayfairDisplayReguler: {
      fontFamily: PlayfairDisplayReguler,
      fontWeight: 400,
    },

    PlayfairDisplayBold: {
      fontFamily: PlayfairDisplayBold,
      fontWeight: 400,
    },

    DidactGothic: {
      fontFamily: DidactGothic,
      fontWeight: 400,
    },
  },
  config,
});
type CustomTheme = typeof theme & CustomColors;
export type { CustomTheme };
export { theme };

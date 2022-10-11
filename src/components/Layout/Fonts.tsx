/* eslintimport/no-named-as-default-member */
import * as React from 'react';
import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "PPMoriSemiBold";
        src: url("fonts/PPMori-SemiBold.otf");
      }

      @font-face {
        font-family: "RobotoRegular";
        src: url("fonts/RobotoCondensed-Regular.ttf");
      }

      @font-face {
        font-family: "RobotoBold";
        src: url("fonts/RobotoCondensed-Bold.ttf");
      }

      @font-face {
        font-family: "RobotoItalic";
        src: url("fonts/RobotoCondensed-Italic.ttf");
      }

      @font-face {
        font-family: "RobotoLight";
        src: url("fonts/RobotoCondensed-Light.ttf");
      }

      @font-face {
        font-family: "PlayfairDisplayMedium";
        src: url("fonts/PlayfairDisplay-Medium.ttf");
      }

      @font-face {
        font-family: "PlayfairDisplayMediumItalic";
        src: url("fonts/PlayfairDisplay-Mediumitalic.ttf");
      }

      @font-face {
        font-family: "PlayfairDisplayReguler";
        src: url("fonts/PlayfairDisplay-Reguler.ttf");
      }

      @font-face {
        font-family: "PlayfairDisplayBold";
        src: url("fonts/PlayfairDisplay-Bold.ttf");
      }

      @font-face {
        font-family: "DidactGothic";
        src: url("fonts/DidactGothic.ttf");
      }


    `}
  />
);

export default Fonts;

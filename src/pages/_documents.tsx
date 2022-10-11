import * as React from "react";
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import Script from "next/script";
// import NextProgress from "next-progress";
// import "nprogress/nprogress.css"

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
          <link
            rel="icon"
            type="image/x-icon"
            href="/images/logo/gaspack-logo.svg"
          />
          <link rel="stylesheet" href="nprogress.css" />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <link
            rel="preload"
            as="video"
            href="https://user-images.githubusercontent.com/4341116/194508188-9af74b13-0c8b-40b9-b941-ded924510acc.mp4"
            key="intro_video"
          />
          <link
            rel="preload"
            as="video"
            href="/images/kain loop_8mb.webm"
            key="kain"
          />
          <link
            rel="preload"
            as="image"
            href="/images/bg-hero-image.webp"
            key="bg_dark"
          />
          <link
            rel="preload"
            as="image"
            href="/images/bg-body-0.5.webp"
            key="bg_light"
          />
          <link
            rel="preload"
            as="audio"
            href="/images/music.wav"
            key="intro_audio"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

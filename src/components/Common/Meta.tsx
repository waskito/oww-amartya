import React from "react";
import { NextSeo } from "next-seo";

const Meta = () => {
  return (
    <>
      <NextSeo
        title="Amartya - Indonesia art-based NFT"
        description="An art-based NFT project which lore is inspired by Indonesia’s Sacred Pattern Collection."
        openGraph={{
          title: "Amartya - Indonesia art-based NFT",
          description:
            "An art-based NFT project which lore is inspired by Indonesia’s Sacred Pattern Collection.",
          images: [
            {
              url: "/images/og-amartya.png",
              width: 1200,
              height: 630,
              alt: "Amartya",
              type: "image/png",
            },
          ],
        }}
      />
    </>
  );
};

export default Meta;

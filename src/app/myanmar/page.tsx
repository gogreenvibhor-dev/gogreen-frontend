import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";

export default function MyanmarPage() {
  return (
    <CountryPageLayout
      countryName="Myanmar"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Myanmar.png"
      welcomeMessage="Welcome to our Myanmar irrigation solutions page."
      greeting="မင်္ဂလာပါ! (Mingalaba! Hello!)"
      introduction={[
        "Vidhi Enterprises provides efficient irrigation systems to Myanmar’s agriculture sector, supporting rice fields, vegetable farms, and plantation crops.",
        "Farmers increasingly adopt micro and drip irrigation to stabilize yield and reduce water usage.",
      ]}
      marketInsights={[
        "Rice nurseries use mini sprinklers for uniform seedbed irrigation.",
        "Plantations such as rubber and fruits require steady drip systems.",
      ]}
      products={[
        "Drip lines",
        "Micro sprinklers",
        "Foggers & misters",
        "Filtration units",
        "HDPE pipes",
      ]}
      industries={[
        "Rice farming",
        "Vegetable growers",
        "Plantations",
        "Greenhouses",
      ]}
      whyChooseUs={[
        "Affordable solutions for developing farm sectors",
        "Reliable performance in tropical climates",
        "Good compatibility with low-pressure water sources",
      ]}
    />
  );
}

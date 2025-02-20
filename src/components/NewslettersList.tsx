"use client";

import { Newsletter } from "@/types";
import { FC } from "react";

type Props = {
  data: Record<string, Newsletter[]>;
};

const NewslettersList: FC<Props> = ({ data }) => {
  return Object.keys(data).map((siteKey) => {
    const newsLetterData = data[siteKey];
    return (
      <span key={siteKey}>
        {siteKey}
        {newsLetterData.length}
      </span>
    );
  });
};

export default NewslettersList;

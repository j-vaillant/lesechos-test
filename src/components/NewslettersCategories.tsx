"use client";

import { Newsletter } from "@/types";
import { FC } from "react";
import NewsletterCard from "./NewsletterCard";

type Props = {
  data: Record<string, Newsletter[]>;
};

const NewslettersCategories: FC<Props> = ({ data }) => {
  return Object.keys(data).map((siteKey) => {
    const newsLetterData = data[siteKey];
    return (
      <div key={siteKey}>
        {siteKey}
        <div className="grid grid-cols-3 gap-4">
          {newsLetterData.map((n) => {
            return <NewsletterCard key={n.id} newsletter={n} />;
          })}
        </div>
      </div>
    );
  });
};

export default NewslettersCategories;

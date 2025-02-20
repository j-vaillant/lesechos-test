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
    const title = newsLetterData[0].title;
    return (
      <div key={siteKey}>
        <h2 className="relative font-semibold text-2xl font-sans mb-[45px] inline-block after:content-[''] after:w-2/3 after:block after:absolute after:left-0 after:right-0 after:top-8 after:h-[4px] after:bg-[#B00005] after:-z-10">
          {title.toUpperCase()}
        </h2>
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

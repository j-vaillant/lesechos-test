"use client";

import { Newsletter, User } from "@/types";
import { FC } from "react";
import NewsletterCard from "./NewsletterCard";

type Props = {
  data: Record<string, Newsletter[]>;
  user: User;
};

const canSubscribed = (
  userSubscriptions: string[],
  newsletterSubscriptions: string[]
) => {
  if (newsletterSubscriptions.length === 0) {
    return true;
  }
  return userSubscriptions.some((sub) => {
    return newsletterSubscriptions.includes(sub);
  });
};

const NewslettersCategories: FC<Props> = ({ data, user }) => {
  return Object.keys(data).map((siteKey) => {
    const newsLetterData = data[siteKey];
    const title = newsLetterData[0].title;

    return (
      <div key={siteKey}>
        <h2 className="relative font-semibold text-2xl font-sans mb-[45px] inline-block after:content-[''] after:w-2/3 after:block after:absolute after:left-0 after:right-0 after:top-8 after:h-[4px] after:bg-[#B00005] after:-z-10">
          {title.toUpperCase()}
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-[24px]">
          {newsLetterData.map((n) => {
            return (
              <NewsletterCard
                canSubscribed={canSubscribed(
                  user.subscriptions,
                  n.subscriptions
                )}
                key={n.id}
                newsletter={n}
              />
            );
          })}
        </div>
      </div>
    );
  });
};

export default NewslettersCategories;

import NewslettersList from "@/components/NewslettersCategories";
import { NEWSLETTER_ITEMS } from "@/mocks/newsletters";
import { formatNewsletters } from "@/utils";
import "./globals.css";
import { FC } from "react";
import { User } from "@/types";
import {
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITHOUT_SUBSCRIPTION,
  USER_WITH_MULTIPLE_SUBSCRIPTION,
} from "@/mocks/user";

type Props = {
  user: User;
};

const App: FC<Props> = ({ user = USER_WITHOUT_SUBSCRIPTION }) => {
  return (
    <>
      <div className="w-[970px] mx-auto">
        <div className="w-full p-3 flex-col justify-center items-center flex h-[135px] font-sans bg-[#F4F4F4] mb-6">
          <h1 className="font-semibold mb-2 rounded-md text-3xl">
            NEWSLETTERS
          </h1>
          <span className="font-sans inline-block text-center text-[#212121]">
            Dans cette page, vous retrouvez l’ensemble des newsletters des Echos
            et des marques satellites. Ainsi, vous pouvez découvrir toutes nos
            newsletters selon vos centres d’intérêt et gérer plus facilement
            l’inscription à vos newsletters.
          </span>
        </div>
        <NewslettersList
          user={user}
          data={formatNewsletters(NEWSLETTER_ITEMS)}
        />
      </div>
    </>
  );
};

export default App;

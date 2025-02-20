import NewslettersList from "@/components/NewslettersCategories";
import { NEWSLETTER_ITEMS } from "@/mocks/newsletters";
import { formatNewsletters } from "@/utils";
import "./globals.css";

export default function App() {
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
        <NewslettersList data={formatNewsletters(NEWSLETTER_ITEMS)} />
      </div>
    </>
  );
}

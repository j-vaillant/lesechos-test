import NewslettersList from "@/components/NewslettersCategories";
import { NEWSLETTER_ITEMS } from "@/mocks/newsletters";
import { formatNewsletters } from "@/utils";
import "./globals.css";

export default function App() {
  return (
    <div className="w-[970px] mx-auto">
      <NewslettersList data={formatNewsletters(NEWSLETTER_ITEMS)} /> 
    </div>
  );
}

import NewslettersList from "@/components/NewslettersList";
import { NEWSLETTER_ITEMS } from "@/mocks/newsletters";
import { formatNewsletters } from "@/utils";

export default function App() {
  return <NewslettersList data={formatNewsletters(NEWSLETTER_ITEMS)} />;
}

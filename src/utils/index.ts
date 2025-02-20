import { Newsletter } from "@/types";

// format newsletters raw data
// as map where key are site name
export const formatNewsletters = (newsletters: Newsletter[]) => {
  return newsletters.reduce<Record<string, Newsletter[]>>((acc, next) => {
    if (!acc[next.site]) {
      return { ...acc, [next.site]: [next] };
    }

    return { ...acc, [next.site]: [...acc[next.site], next] };
  }, {});
};

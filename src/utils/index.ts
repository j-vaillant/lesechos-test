import { Newsletter } from "@/types";

// as map where key are site name
// format newsletters raw data
export const formatNewsletters = (newsletters: Newsletter[]) => {
  return newsletters.reduce<Record<string, Newsletter[]>>((acc, next) => {
    if (!acc[next.site]) {
      return { ...acc, [next.site]: [next] };
    }

    return { ...acc, [next.site]: [...acc[next.site], next] };
  }, {});
};

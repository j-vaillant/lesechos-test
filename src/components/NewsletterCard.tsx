import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Newsletter } from "@/types";
import { FC } from "react";

type Props = {
  newsletter: Newsletter;
};

const NewsletterCard: FC<Props> = ({ newsletter: { title, description } }) => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="bg-[#CECECE] flex-2 basis-[60%]">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">{description}</CardContent>
      <CardFooter className="flex justify-center">
        <Button
          className="rounded-xl text-white font-sans bg-[#B00005]"
          variant="outline"
        >
          Cancel
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NewsletterCard;

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
    <Card>
      <CardHeader className="bg-[#CECECE]">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
};

export default NewsletterCard;

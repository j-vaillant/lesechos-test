import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Newsletter } from "@/types";
import clsx from "clsx";
import { FC } from "react";

type Props = {
  newsletter: Newsletter;
  canSubscribed: boolean;
};

const NewsletterCard: FC<Props> = ({
  newsletter: { title, description },
  canSubscribed,
}) => {
  return (
    <Card className="flex flex-col h-[300px]">
      <CardHeader className="bg-[#CECECE] items-center justify-center text-white  flex-2 basis-[60%]">
        <CardTitle className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 font-sans text-center p-2">
        {description}
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button
          className={clsx("rounded-xl text-white font-sans bg-[#B00005]", {
            "bg-[#FAEC70] text-black": canSubscribed,
          })}
          variant="outline"
        >
          {canSubscribed ? "S'inscrire" : "S'abonner"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NewsletterCard;

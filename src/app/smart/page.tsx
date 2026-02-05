import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import SmartCalculator from "@/components/SmartCalculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart | Calculator App",
  description: "Smart Calculator App",
};

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      <Card className="w-sm md:h-[62dvh] md:w-xl">
        <CardHeader>
          <CardTitle className="grid place-items-center text-2xl md:text-3xl">
            Smart Calculator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <SmartCalculator />
        </CardContent>
      </Card>
    </section>
  );
};

export default page;

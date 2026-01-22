import AdvancedCalculator from "@/components/AdvancedCalculator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advaanced | Calculator App",
  description: "Advaanced Calculator App",
};

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      <Card className="w-lg">
        <CardHeader>
          <CardTitle className="grid place-items-center text-2xl">
            Advaanced Calculator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <AdvancedCalculator />
        </CardContent>
      </Card>
    </section>
  );
};

export default page;

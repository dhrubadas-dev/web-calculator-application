"use client";

import {
  DeleteIcon,
  DivideIcon,
  EqualIcon,
  MinusIcon,
  PercentIcon,
  PlusIcon,
  XIcon,
} from "lucide-react";
import { Button } from "./shadcnui/button";
import { Input } from "./shadcnui/input";

const SmartCalculator = () => {
  return (
    <div className="grid place-items-center gap-4">
      <div className="pt w-full pb-2">
        <Input
          className="h-14 rounded-b-none border-b-0 md:h-18"
          disabled
        />
        <Input
          className="h-10 rounded-t-none border-t-0"
          disabled
        />
      </div>

      <div className="grid w-full grid-cols-4 gap-2">
        <Button className="bg-amber-600 text-3xl font-bold hover:blur-[1px]">
          AC
        </Button>
        <Button className="hover:blur-[1px]">
          <DeleteIcon
            className="size-8 hover:blur-[1px]"
            strokeWidth={3}
          />
        </Button>
        <Button className="hover:blur-[1px]">
          <PercentIcon
            className="size-7 hover:blur-[1px]"
            strokeWidth={3}
          />
        </Button>
        <Button className="hover:blur-[1px]">
          <PlusIcon
            className="size-8"
            strokeWidth={3}
          />
        </Button>
      </div>

      <div className="grid w-full grid-cols-4 gap-2">
        <Button className="text-3xl font-bold hover:blur-[1px]">7</Button>
        <Button className="text-3xl font-bold hover:blur-[1px]">8</Button>
        <Button className="text-3xl font-bold hover:blur-[1px]">9</Button>
        <Button className="hover:blur-[1px]">
          <MinusIcon
            className="size-8"
            strokeWidth={3}
          />
        </Button>
      </div>

      <div className="grid w-full grid-cols-4 gap-2">
        <Button className="text-3xl font-bold hover:blur-[1px]">4</Button>
        <Button className="text-3xl font-bold hover:blur-[1px]">5</Button>
        <Button className="text-3xl font-bold hover:blur-[1px]">6</Button>
        <Button className="hover:blur-[1px]">
          <XIcon
            className="size-8"
            strokeWidth={3}
          />
        </Button>
      </div>

      <div className="grid w-full grid-cols-4 gap-2">
        <Button className="text-3xl font-bold hover:blur-[1px]">1</Button>
        <Button className="text-3xl font-bold hover:blur-[1px]">2</Button>
        <Button className="text-3xl font-bold hover:blur-[1px]">3</Button>
        <Button className="hover:blur-[1px]">
          <DivideIcon
            className="size-8"
            strokeWidth={3}
          />
        </Button>
      </div>

      <div className="grid w-full grid-cols-4 gap-2">
        <Button className="text-3xl font-bold hover:blur-[1px]">00</Button>
        <Button className="text-3xl font-bold hover:blur-[1px]">0</Button>
        <Button className="text-3xl font-bold hover:blur-[1px]">.</Button>
        <Button className="bg-amber-600 hover:blur-[1px]">
          <EqualIcon
            className="size-8"
            strokeWidth={3}
          />
        </Button>
      </div>
    </div>
  );
};

export default SmartCalculator;

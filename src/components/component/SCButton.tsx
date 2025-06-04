import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import type { FC } from "react";

interface SCButtonProps {
  id?: string;
  btnName: string;
  btnAlt: string;
  imgSrc: string;
  className?: string;
  imgStyle?: string;
  btnNameStyle?: string;
}

const SCButton: FC<SCButtonProps> = ({
  id,
  btnName,
  btnAlt,
  imgSrc,
  className,
  imgStyle,
  btnNameStyle,
}) => {
  return (
    <>
      <Button
        id={id}
        className={cn(
          "h-10 w-fit cursor-pointer rounded-sm border border-gray-300 bg-gray-200",
          className,
        )}
        variant="outline"
        size="sm"
      >
        <img className={cn("h-8 w-8", imgStyle)} src={imgSrc} alt={btnAlt} />{" "}
        <p className={cn("font-semibold", btnNameStyle)}>{btnName}</p>
      </Button>
    </>
  );
};

export default SCButton;

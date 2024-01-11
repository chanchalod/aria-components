'use client'
import classNames from "classnames";
import React, { ReactNode } from "react";
import { Button } from "react-aria-components";
interface ButtonTypes {
  children: string | ReactNode;
  variant?: "primary" | "secondary" | "success" | "link";
  size?: "small" | "medium" | "large";
  onPress?: () => void;
}

const Buttons = ({ children, variant, size = 'small', onPress }: ButtonTypes) => {
  return (
    <Button onPress={onPress}
      className={classNames("px-4 py-2 border-none outline-none text-white rounded-md max-w-max flex-none", {
        "bg-sky-600 hover:bg-orange-500": variant === "primary",
        "bg-gray-700 hover:bg-gray-500": variant === "secondary",
        "bg-green-600 hover:bg-green-900": variant === "success",
        "!text-blue-900 hover:!text-amber-600": variant === "link",
        "text-sm h-10": size === "small",
        "text-lg h-12": size === "medium",
        "text-xl h-14": size === "large",
      })}
    >
      {children}
    </Button>
  );
};

export default Buttons;

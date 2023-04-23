import { PropsWithChildren, memo } from "react";
import { DEFAULT_TEXT_COLOR } from "src/constant/tailwindcss";
import { JsxElement } from "typescript";

interface P extends PropsWithChildren, ButtonProps {
  size?: ButtonSize;
  theme?: ButtonTheme;
  fullWidth?: boolean;
}

const getButtonHight = (size: ButtonSize) => {
  if (size === "small") {
    return "h-10"; // 40px
  }
  if (size === "medium") {
    return "h-12"; // 48px
  }
  if (size === "large") {
    return "h-14"; // 56px
  }

  return size;
};

const getButtonTheme = (theme?: ButtonTheme) => {
  if (theme === "primary") {
    return " bg-blue-600 text-white";
  }
  if (theme === "cancel") {
    return "bg-gray-600 text-white";
  }
  return DEFAULT_TEXT_COLOR;
};

const Button: React.FC<P> = ({
  children,
  size = "medium",
  theme,
  fullWidth,
  ...props
}) => {
  return (
    <button
      className={`${
        fullWidth ? "w-full" : "px-3"
      } h-13 rounded flex justify-center items-center ${getButtonHight(
        size
      )} ${getButtonTheme(theme)}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default memo(Button);

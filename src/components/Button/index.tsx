import { PropsWithChildren, memo } from "react";
<<<<<<< HEAD
import { DEFAULT_TEXT_COLOR } from "src/constant/tailwindcss";
import { JsxElement } from "typescript";

interface P extends PropsWithChildren, ButtonProps {
=======
import { DEFAULT_TEXT_COLOR } from "../../constant/tailwindcss";

interface ButtonProps
  extends PropsWithChildren,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
>>>>>>> origin/use-storybook
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
    return "bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-700";
  }
  if (theme === "cancel") {
    return "bg-gray-600 text-white hover:bg-gray-500 active:bg-gray-700";
  }
  return DEFAULT_TEXT_COLOR;
};

<<<<<<< HEAD
const Button: React.FC<P> = ({
=======
const Button: React.FC<ButtonProps> = ({
>>>>>>> origin/use-storybook
  children,
  size = "medium",
  theme,
  fullWidth,
  ...props
}) => {
  return (
    <button
      className={`
      h-13 rounded flex justify-center items-center
      ${fullWidth ? "w-full" : "px-3"}  
      ${getButtonHight(size)} 
      ${getButtonTheme(theme)}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default memo(Button);

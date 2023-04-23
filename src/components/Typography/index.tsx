import { PropsWithChildren } from "react";
import { DEFAULT_TEXT_COLOR } from "src/constant/tailwindcss";

interface P extends PropsWithChildren, TypographyProps {
  theme?: TypographyTheme;
  fontSize?: FontSize;
  align?: TypographyAlign;
  tailwindcss?: string;
}

const getTypographyTheme = (theme?: TypographyTheme) => {
  if (theme === "primary") {
    return "text-primary";
  }
  return DEFAULT_TEXT_COLOR;
};

const getFontSize = (fontSize: number) => {
  if (fontSize === 12) {
    return "text-xs";
  }
  if (fontSize === 14) {
    return "text-sm";
  }
  if (fontSize === 16) {
    return "text-base";
  }
  if (fontSize === 18) {
    return "text-lg";
  }
  if (fontSize === 32) {
    return "text-3xl";
  }
};

const getTextAlign = (align: TypographyAlign) => {
  if (align === "center") {
    return "text-center";
  }
  if (align === "justify") {
    return "text-justify";
  }
  if (align === "left") {
    return "text-left";
  }
  if (align === "right") {
    return "text-right";
  }
  return "text-inherit";
};

const Typography: React.FC<P> = ({
  children,
  theme,
  fontSize = 16,
  align = "inherit",
  tailwindcss,
  ...props
}) => {
  return (
    <p
      className={`
        
        ${getTypographyTheme(theme)} 
        ${getFontSize(fontSize)} 
        ${getTextAlign(align)}
      `}
      {...props}
    >
      {children}
    </p>
  );
};

export default Typography;

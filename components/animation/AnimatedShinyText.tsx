import { CSSProperties, FC, ReactNode } from "react";
import { useTheme } from "@/context/ThemeContext"; // Import the useTheme hook
import { cn } from "@/lib/utils";

interface AnimatedShinyTextProps {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
}

const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
}) => {
  const { theme } = useTheme(); // Get the theme from context

  // Define the gradient color based on the theme
  const gradientColor =
    theme === "light"
      ? "from-transparent via-[#564075]"
      : "from-transparent via-[#fcfcfc]";

  return (
    <p
      style={
        {
          "--shiny-width": `${shimmerWidth}px`,
          color: theme === "light" ? "#573CFF" : "#d3d3d3", // Set text color directly
        } as CSSProperties
      }
      className={cn(
        "w-max capitalize font-poppins font-normal text-xs text-center sm:text-sm", // Centered and auto width
        "animate-shiny-text bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",

        // Shine gradient (stronger effect for better visibility)
        `bg-gradient-to-r ${gradientColor} dark:via-[#fff]`, // Gradient effect for light and dark modes

        className
      )}
    >
      {children}
    </p>
  );
};

export default AnimatedShinyText;

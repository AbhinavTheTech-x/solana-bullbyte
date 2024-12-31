import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/animation/AnimatedShinyText";
import { useTheme } from "@/context/ThemeContext";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

export function TabHeader() {
  const { theme } = useTheme();
  return (
    <motion.div
      whileHover={{
        scale: 1.015,
      }}
      whileTap={{
        scale: 0.985,
      }}
      className={cn(
        `tabs relative   z-10 rounded-full py-1.5 px-2 flex justify-center items-center gap-1 sm:flex-col sm:rounded-xl sm:gap-4 sm:px-4 sm:py-2.5`,
        theme === "light" ? "bg-lightblueBG" : "bg-[#5B376A]"
      )}
    >
      <div
        className={cn(
          "group rounded-full transition-all flex justify-center items-center gap-1 sm:flex-col sm:rounded-xl ease-in hover:cursor-pointer "
        )}
      >
        <p
          className={`${
            theme === "light"
              ? "bg-white text-blueText"
              : "bg-[#6a4878] text-white"
          } rounded-full px-3 py-1 capitalize font-poppins font-normal text-xs text-center sm:text-sm `}
        >
          new
        </p>
        <AnimatedShinyText className="inline-flex items-center justify-center py-1 transition ease-out ">
          <span>
            ✨ Boost Your Token’s Potential—Fast, Efficient, Unstoppable.
          </span>
          <FaArrowRight
            className={`w-3.5 h-3.5 ml-1 sm:hidden transition-transform group-hover:-rotate-45 group-active:-rotate-12"  ${
              theme === "light" ? "text-blueText" : "text-white"
            }`}
          />
          {/* <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
        </AnimatedShinyText>
      </div>
    </motion.div>
  );
}

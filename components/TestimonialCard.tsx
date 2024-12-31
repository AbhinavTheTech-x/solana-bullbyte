import Marquee from "@/components/animation/Testimonial";
import { useTheme } from "@/context/ThemeContext";

const reviews = [
  {
    name: "Ethan W.",
    title: "Blockchain Developer",
    body: "As a developer working within the Solana ecosystem, I've used a variety of token creation tools. But nothing matches the simplicity and power of Bull Byte. Creating and airdropping tokens is incredibly efficient, and the integration with OpenBook has made it a breeze to ensure liquidity. Bull Byte is a game-changer for anyone looking to launch a project on Solana!",
    img: "./test-1.svg",
  },
  {
    name: "Lisa M.",
    title: "DeFi Project Manager",
    body: "Bull Byte's market-making bot has saved me countless hours. The automation is incredibly smooth, and the bot's algorithms are highly effective at maintaining liquidity on decentralized exchanges. It’s a must-have tool if you're serious about building a successful token on Solana.",
    img: "./test-2.svg",
  },
  {
    name: "Michael T.",
    title: "Community Manager",
    body: "Bull Byte has been the best tool for creating tokens and managing liquidity on Solana. The automation features, particularly the market-making bot, allow me to ensure liquidity stays strong while I focus on other aspects of my project. The whole platform is user-friendly, even for someone who isn't too technical.",
    img: "./test-3.svg",
  },
  {
    name: "Alisha R.",
    title: "DeFi Project Manager",
    body: "Bull Byte helped me automate market-making for my token, making it easy to keep the order books active 24/7. The flexibility of this tool has allowed me to focus on growing my project without worrying about liquidity issues.",
    img: "./test-4.svg",
  },
  {
    name: "Jonas L.",
    title: "Tokenomics Expert",
    body: "The token creation process with Bull Byte is seamless. What impressed me the most was how easy it was to manage airdrops and burn liquidity with just a few clicks. The integration makes it intuitive for both developers and non-tech users alike. It’s definitely an essential toolkit for any Solana-based project.",
    img: "./test-2.svg",
  },
  {
    name: "Aisha R.",
    title: "Blockchain Consultant",
    body: "I've worked with various token tools, but Bull Byte stands out for its versatility. From token creation to executing flawless airdrops, everything is well-designed. The real magic happens with their market-making bot—it's a critical component to making sure our token maintains liquidity. Bull Byte gives our project a competitive edge in the Solana ecosystem.",
    img: "./test-3.svg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  title,
  body,
}: {
  img: string;
  name: string;
  title: string;
  body: string;
}) => {
  const { theme } = useTheme();
  return (
    <figure
      className={`relative w-[320px] h-[250px] cursor-pointer overflow-hidden rounded-2xl border p-4 ${
        theme === "light"
          ? "bg-white shadow-normalShadow"
          : "bg-darkCard__1 shadow-darkCardShadow__1 border-darkCard__1"
      }`}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption
            className={`text-[12px]  font-poppins ${
              theme === "light" ? "text-lightBlack" : "text-white"
            } font-medium`}
          >
            {name}
          </figcaption>
          <p
            className={`text-[10px] font-normal font-poppins ${
              theme === "light" ? "text-[#5C5C5C]" : "text-white"
            }`}
          >
            {title}
          </p>
        </div>
      </div>
      <blockquote
        className={`mt-4 text-xs font-poppins font-normal  ${
          theme === "light" ? "text-lightBlack" : "text-white"
        }`}
      >
        {body}
      </blockquote>
    </figure>
  );
};

export default function MarqueeDemo() {
  const { theme } = useTheme();

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-2">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.title} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.title} {...review} />
        ))}
      </Marquee>
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 w-1/4 ${
          theme === "light"
            ? "bg-gradient-to-r from-white dark:from-background"
            : "bg-[linear-gradient(to right, white, #190C2F)]"
        }`}
      ></div>
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 w-1/4 ${
          theme === "light"
            ? "bg-gradient-to-l from-white dark:from-background"
            : "bg-[linear-gradient(to right, #fff, rgba(25, 12, 47, 0))]"
        }`}
      ></div>
    </div>
  );
}

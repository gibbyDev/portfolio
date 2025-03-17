"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: React.ReactNode;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope, animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {React.Children.map(words, (word, idx) => {
          if (typeof word === "string") {
            return word.split(" ").map((w, i) => (
              <motion.span
                key={`${w}-${i}`}
                className={` ${idx > 3 ? "text-purple" : "dark:text-white text-black"
                  } opacity-0`}
              >
                {w}{" "}
              </motion.span>
            ));
          } else {
            return (
              <motion.span
                key={`jsx-${idx}`}
                className="dark:text-white text-black opacity-0"
              >
                {word}
              </motion.span>
            );
          }
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

"use client";

import { motion } from "motion/react";

const ASCII_PATTERN = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠀⠀⠈⠉⠉⠛⠛⠷⢶⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⣴⣶⣶⣿⣿⣿⣿⣷⣶⣦⣤⣄⡀⠈⠙⠻⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣾⣿⣿⠿⠿⠛⠛⠛⠛⠻⠿⠿⣿⣿⣿⣿⣿⣷⣤⡀⠀⠙⢿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⣴⣾⠿⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠻⣿⣿⣿⣿⣷⡄⠀⠙⢿⣷⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⣴⡿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⣿⣿⣿⣦⠀⠈⢿⣿⡄⠀⠀⠀⠀⠀
⠀⠀⣠⡾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠒⠒⠒⠤⣄⣀⠀⠀⠀⠻⣿⣿⣿⣷⡀⠀⢿⣿⡀⠀⠀⠀⠀
⠀⣰⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣴⣶⣶⣶⣶⣶⣦⣤⡀⠉⠳⣦⡀⠀⠘⣿⣿⣿⣧⠀⠈⣿⣇⠀⠀⠀⠀
⢰⠏⠀⠀⠀⠀⠀⠀⢀⠔⠀⣠⣴⣿⣿⡿⠛⠋⠉⠉⠉⠉⠙⠻⣿⣷⡀⠈⢷⡀⠀⠸⣿⣿⣿⡄⠀⢹⣿⠀⠀⠀⠀
⠏⠀⠀⠀⠀⠀⢀⡴⠃⢀⣼⣿⣿⠟⠁⠀⠀⡀⠀⢀⣠⣤⡤⣤⡈⢻⣿⡀⠘⣇⠀⠀⣿⣿⣿⡇⠀⢸⣿⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢠⡞⠀⢠⣿⣿⡿⠁⠀⢀⡴⠊⣠⡾⠋⠉⠀⠀⠀⡟⢈⣿⡇⢠⡟⠀⠀⣿⣿⣿⠃⠀⣸⡏⠀⠀⠀⠀
⠀⠀⠀⠀⢠⡟⠀⢀⣿⣿⡿⠀⠀⢠⡏⢠⣾⠏⢀⡠⢲⡖⢀⡜⠁⣼⡿⠀⣼⠃⠀⢰⣿⣿⡿⠀⢀⡿⠁⠀⠀⠀⠀
⠀⠀⠀⠀⣿⠃⠀⣼⣿⣿⡇⠀⢠⡿⠀⣾⡏⢀⡎⠀⠈⠉⠁⢀⣼⠟⢁⡼⠁⠀⢀⣾⣿⡿⠁⠀⡾⠁⠀⠀⠀⠀⠀
⠀⠀⠀⢸⣿⠀⠀⣿⣿⣿⡇⠀⢸⡇⠀⣿⣧⠸⣧⣤⣤⣴⠾⠛⠁⠐⠁⠀⠀⣠⣾⣿⡟⠁⢀⡞⠁⠀⠀⠀⠀⠀⡄
⠀⠀⠀⢸⣿⠀⠀⣿⣿⣿⡇⠀⠈⣷⡀⠹⣿⣦⣀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣾⣿⡿⠋⢀⡴⠋⠀⠀⠀⠀⠀⠀⣰⠃
⠀⠀⠀⢸⣿⡄⠀⢹⣿⣿⣿⡀⠀⠘⢷⡄⠈⠻⢿⣿⣶⣶⣶⣶⣾⣿⣿⡿⠟⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠃⠀
⠀⠀⠀⠈⣿⣧⠀⠈⢿⣿⣿⣷⡄⠀⠀⠙⠳⠤⣀⣈⠉⠉⠙⠋⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⠃⠀⠀
⠀⠀⠀⠀⠘⣿⣧⠀⠈⢿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠈⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⡟⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠙⣿⣧⡀⠀⠻⣿⣿⣿⣿⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣾⡿⠋⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠻⣿⣆⠀⠈⠻⢿⣿⣿⣿⣿⣶⣤⣄⣀⡀⠀⠀⠀⠀⢀⣀⣀⣤⣶⣾⡿⠟⠉⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣷⣦⣀⠀⠉⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠷⣦⣤⣀⠀⠈⠉⠉⠙⠛⠛⠛⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠛⠛⠒⠒⠒⠒⠒⠒⠒⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`;

function getCharOpacity(char: string): number {
  if (char === " " || char === "⠀") return 0;
  return 1;
}

export function AsciiArt() {
  const lines = ASCII_PATTERN.split("\n").filter((l) => l.length > 0);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="select-none pointer-events-none"
      aria-hidden="true">
      <pre className="font-mono text-[6px] sm:text-[7px] md:text-[8px] leading-[1.1] tracking-tight">
        {lines.map((line, lineIdx) => {
          const totalLines = lines.length;
          const centerY = totalLines / 2;
          const distFromCenter = Math.abs(lineIdx - centerY) / centerY;

          return (
            <div key={lineIdx} className="whitespace-pre">
              {line.split("").map((char, charIdx) => {
                if (char === " ") {
                  return (
                    <span key={charIdx} className="inline-block w-[1ch]">
                      {" "}
                    </span>
                  );
                }

                const baseOpacity = getCharOpacity(char);
                const gradientMultiplier = 1 - distFromCenter * 0.6;
                const finalOpacity = baseOpacity * gradientMultiplier;

                return (
                  <span key={charIdx} style={{ opacity: finalOpacity }} className="text-mono-100">
                    {char}
                  </span>
                );
              })}
            </div>
          );
        })}
      </pre>
    </motion.div>
  );
}

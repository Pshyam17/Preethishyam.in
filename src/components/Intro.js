import React from "react";
import "../styles/Intro.css";
import { useTerminal, TermLine } from "./TerminalSection";

const LINES = [
  { type: "ascii",   text: "██████╗ ██████╗ ███████╗███████╗████████╗██╗  ██╗██╗", instant: true, pause: 20 },
  { type: "ascii",   text: "██╔══██╗██╔══██╗██╔════╝██╔════╝╚══██╔══╝██║  ██║██║", instant: true, pause: 20 },
  { type: "ascii",   text: "██████╔╝██████╔╝█████╗  █████╗     ██║   ███████║██║", instant: true, pause: 20 },
  { type: "ascii",   text: "██╔═══╝ ██╔══██╗██╔══╝  ██╔══╝     ██║   ██╔══██║██║", instant: true, pause: 20 },
  { type: "ascii",   text: "██║     ██║  ██║███████╗███████╗   ██║   ██║  ██║██║", instant: true, pause: 20 },
  { type: "ascii",   text: "╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝", instant: true, pause: 300 },
  { type: "blank",   text: "", instant: true, pause: 50 },
  { type: "output",  text: "MS in Artificial Intelligence · Northeastern University", pause: 80 },
  { type: "output",  text: "Research: Context engineering · Mathematical transforms for sales", pause: 80 },
  { type: "output",  text: "Previously: Nike (SWE) · Lead developer/founder @ PrismAI", pause: 200 },
  { type: "blank",   text: "", instant: true },
  { type: "success", text: "p.shyam.1701@gmail.com · github.com/Pshyam17", pause: 300 },
];

export default function Intro() {
  const { rendered, cursor, showCursor } = useTerminal(LINES, 300);
  return (
    <div id="intro">
      {rendered.map((line, i) => (
        <TermLine key={i} line={line}
          showCursor={showCursor && i === rendered.length - 1}
          cursor={cursor} />
      ))}
    </div>
  );
}

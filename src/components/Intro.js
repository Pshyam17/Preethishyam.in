import React from "react";
import "../styles/Intro.css";
import { useTerminal, TermLine } from "./TerminalSection";

const LINES = [
  { type: "command", text: "ssh preethi@portfolio.dev", pause: 600 },
  { type: "output",  text: "Connected · Northeastern · NeuraAI Lab · Builder", pause: 200 },
  { type: "blank",   text: "", instant: true, pause: 100 },
  { type: "command", text: "cat welcome.txt", pause: 400 },
  { type: "ascii",   text: "██████╗ ██████╗ ███████╗███████╗████████╗██╗  ██╗██╗", instant: true, pause: 20 },
  { type: "ascii",   text: "██╔══██╗██╔══██╗██╔════╝██╔════╝╚══██╔══╝██║  ██║██║", instant: true, pause: 20 },
  { type: "ascii",   text: "██████╔╝██████╔╝█████╗  █████╗     ██║   ███████║██║", instant: true, pause: 20 },
  { type: "ascii",   text: "██╔═══╝ ██╔══██╗██╔══╝  ██╔══╝     ██║   ██╔══██║██║", instant: true, pause: 20 },
  { type: "ascii",   text: "██║     ██║  ██║███████╗███████╗   ██║   ██║  ██║██║", instant: true, pause: 20 },
  { type: "ascii",   text: "╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝", instant: true, pause: 300 },
  { type: "blank",   text: "", instant: true, pause: 50 },
  { type: "output",  text: "MS in Artificial Intelligence · Northeastern University", pause: 80 },
  { type: "output",  text: "Research: NeuraAI Lab · ABIT · Time Series Pattern Detection", pause: 80 },
  { type: "output",  text: "Previously: Nike (MLE) · Co-founder @ PrismAI", pause: 200 },
  { type: "blank",   text: "", instant: true },
  { type: "command", text: "echo $CONTACT", pause: 300 },
  { type: "success", text: "p.shyam.1701@gmail.com · github.com/Pshyam17", pause: 300 },
  { type: "blank",   text: "", instant: true },
  { type: "command", text: "_", pause: 99999 },
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

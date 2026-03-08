import { useState, useEffect, useRef } from "react";

const font = "'Fira Code', 'JetBrains Mono', monospace";

export function useTerminal(lines, startDelay = 0) {
  const [rendered, setRendered] = useState([]);
  const [cursor, setCursor] = useState(true);
  const idx = useRef(0);
  const charIdx = useRef(0);
  const timer = useRef(null);

  useEffect(() => {
    const blink = setInterval(() => setCursor(c => !c), 530);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    const startTimer = setTimeout(tick, startDelay);
    function tick() {
      if (idx.current >= lines.length) return;
      const line = lines[idx.current];
      if (line.instant) {
        setRendered(prev => { const n=[...prev]; n[idx.current]={...line,done:true}; return n; });
        idx.current++; charIdx.current = 0;
        timer.current = setTimeout(tick, line.pause || 80);
        return;
      }
      if (charIdx.current === 0) {
        setRendered(prev => { const n=[...prev]; n[idx.current]={...line,text:"",done:false}; return n; });
      }
      const speed = line.speed || (line.type === "command" ? 60 : 12);
      if (charIdx.current < line.text.length) {
        charIdx.current++;
        setRendered(prev => { const n=[...prev]; n[idx.current]={...line,text:line.text.slice(0,charIdx.current),done:false}; return n; });
        timer.current = setTimeout(tick, speed);
      } else {
        setRendered(prev => { const n=[...prev]; n[idx.current]={...line,done:true}; return n; });
        idx.current++; charIdx.current = 0;
        timer.current = setTimeout(tick, line.pause || 120);
      }
    }
    return () => { clearTimeout(startTimer); clearTimeout(timer.current); };
  }, []);

  const lastLine = rendered[rendered.length - 1];
  return { rendered, cursor, showCursor: lastLine && !lastLine.done };
}

export function Prompt({ path = "~" }) {
  return (
    <span style={{ fontFamily: font }}>
      <span style={{ color: "var(--green)" }}>preethi</span>
      <span style={{ color: "var(--white)" }}>@</span>
      <span style={{ color: "var(--cyan)" }}>portfolio</span>
      <span style={{ color: "var(--white)" }}>:</span>
      <span style={{ color: "var(--prompt)" }}>{path}</span>
      <span style={{ color: "var(--white)" }}>$ </span>
    </span>
  );
}

export function TermLine({ line, showCursor, cursor }) {
  const colorMap = {
    command: "var(--white)", output: "var(--slate)", success: "var(--green)",
    error: "var(--red)", info: "var(--cyan)", comment: "#444c56",
    header: "var(--yellow)", ascii: "var(--green)", blank: "transparent",
  };
  return (
    <div style={{
      fontFamily: font, whiteSpace: "pre",
      fontSize: line.type === "ascii" ? 10 : 13,
      lineHeight: line.type === "ascii" ? 1.15 : 1.7,
      color: colorMap[line.type] || "var(--white)",
      minHeight: line.type === "blank" ? 8 : "auto",
    }}>
      {line.type === "command" && <Prompt path={line.path || "~"} />}
      {line.type === "comment" && <span style={{ color: "#444c56" }}>// </span>}
      <span>{line.text}</span>
      {showCursor && (
        <span style={{
          display: "inline-block", width: 8, height: "1em",
          background: cursor ? "var(--green)" : "transparent",
          marginLeft: 1, verticalAlign: "text-bottom",
        }} />
      )}
    </div>
  );
}

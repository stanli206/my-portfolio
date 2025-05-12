import React, { useState, useEffect } from "react";

function TypingEffect({
  text,
  speed = 100,
  eraseSpeed = 50,
  eraseDelay = 2000,
}) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    let timeout;

    if (isTyping) {
      if (displayText.length < text[currentLine].length) {
        timeout = setTimeout(() => {
          setDisplayText(
            text[currentLine].substring(0, displayText.length + 1)
          );
        }, speed);
      } else if (currentLine < text.length - 1) {
        timeout = setTimeout(() => {
          setCurrentLine(currentLine + 1);
          setDisplayText("");
        }, eraseDelay);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, eraseDelay);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(
            text[currentLine].substring(0, displayText.length - 1)
          );
        }, eraseSpeed);
      } else {
        setCurrentLine(0);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentLine, text, speed, eraseSpeed, eraseDelay]);
  return (
    <div>
      <div className="min-h-[120px] md:min-h-[150px]">
        {text.map((line, index) => (
          <div
            key={index}
            className={index <= currentLine ? "block" : "hidden"}
          >
            {index < currentLine ? (
              <span className="block">{line}</span>
            ) : (
              <span>
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TypingEffect;

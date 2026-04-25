import { useEffect, useMemo, useState } from "react";
import { timerMessages } from "../data/content";

const TOTAL_SECONDS = 120;

export function useToothbrushTimer(onComplete) {
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || secondsLeft <= 0) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setSecondsLeft((current) => {
        if (current <= 1) {
          window.clearInterval(interval);
          setIsRunning(false);
          onComplete?.();
          return 0;
        }

        return current - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [isRunning, secondsLeft, onComplete]);

  const progress = useMemo(
    () => ((TOTAL_SECONDS - secondsLeft) / TOTAL_SECONDS) * 100,
    [secondsLeft]
  );

  const currentMessage = useMemo(
    () =>
      timerMessages.find((message) => secondsLeft >= message.minSecondLeft)?.text ??
      timerMessages[timerMessages.length - 1].text,
    [secondsLeft]
  );

  const formattedTime = useMemo(() => {
    const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
    const seconds = String(secondsLeft % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  }, [secondsLeft]);

  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setSecondsLeft(TOTAL_SECONDS);
  };

  return {
    formattedTime,
    secondsLeft,
    progress,
    isRunning,
    currentMessage,
    start,
    pause,
    reset,
  };
}

import { useMemo } from "react";
import { brushingSteps, sortingGameInitial, stainSpots } from "../data/content";
import { shuffleArray } from "../utils/gameHelpers";
import { useLocalStorage } from "./useLocalStorage";

export function useAppProgress() {
  const [score, setScore] = useLocalStorage("sah-score", 0);
  const [unlockedBadges, setUnlockedBadges] = useLocalStorage("sah-unlocked-badges", []);
  const [currentStep, setCurrentStep] = useLocalStorage("sah-current-step", 0);
  const [foodSelections, setFoodSelections] = useLocalStorage("sah-food-selections", {});
  const [foodFeedback, setFoodFeedback] = useLocalStorage("sah-food-feedback", "");
  const [sortingItems, setSortingItems] = useLocalStorage(
    "sah-sorting-items",
    shuffleArray(sortingGameInitial)
  );
  const [sortingFeedback, setSortingFeedback] = useLocalStorage("sah-sorting-feedback", "");
  const [cleanedSpots, setCleanedSpots] = useLocalStorage("sah-cleaned-spots", []);

  const unlockBadge = (badgeName) => {
    setUnlockedBadges((current) => (current.includes(badgeName) ? current : [...current, badgeName]));
  };

  const moveToNextStep = () => {
    setCurrentStep((current) => {
      const next = Math.min(current + 1, brushingSteps.length - 1);
      if (next === brushingSteps.length - 1) {
        unlockBadge("Pahlawan Sikat Gigi");
      }
      return next;
    });
  };

  const resetSteps = () => setCurrentStep(0);

  const handleFoodChoice = (item) => {
    if (foodSelections[item.id]) {
      return;
    }

    const nextSelections = { ...foodSelections, [item.id]: item.isGood ? "good" : "bad" };
    setFoodSelections(nextSelections);

    if (item.isGood) {
      setScore((current) => current + 10);
      setFoodFeedback(`${item.name} benar! Makanan ini baik untuk gigi.`);
    } else {
      setFoodFeedback(`${item.name} sebaiknya dikurangi agar gigi tetap sehat.`);
    }

    const correctCount = Object.values(nextSelections).filter((value) => value === "good").length;
    if (correctCount >= 3) {
      unlockBadge("Sahabat Gigi Sehat");
    }
  };

  const moveSortingItem = (index, direction) => {
    setSortingItems((current) => {
      const targetIndex = direction === "up" ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex >= current.length) {
        return current;
      }

      const next = [...current];
      [next[index], next[targetIndex]] = [next[targetIndex], next[index]];
      return next;
    });
  };

  const checkSortingAnswer = () => {
    const isCorrect = sortingItems.every((item, index) => item === brushingSteps[index]);

    if (isCorrect) {
      setSortingFeedback("Urutannya benar! Kamu hebat mengikuti langkah sikat gigi.");
      setScore((current) => current + 25);
      unlockBadge("Pahlawan Sikat Gigi");
    } else {
      setSortingFeedback("Masih ada yang tertukar. Coba susun lagi pelan-pelan ya.");
    }
  };

  const resetSortingGame = () => {
    setSortingItems(shuffleArray(sortingGameInitial));
    setSortingFeedback("");
  };

  const handleCleanSpot = (spotId) => {
    if (cleanedSpots.includes(spotId)) {
      return;
    }

    const next = [...cleanedSpots, spotId];
    setCleanedSpots(next);
    setScore((current) => current + 5);

    if (next.length === stainSpots.length) {
      unlockBadge("Anti Monster Gula");
    }
  };

  const resetCleanGame = () => setCleanedSpots([]);

  const awardTimerCompletion = () => {
    setScore((current) => current + 20);
    unlockBadge("Juara Senyum Bersih");
  };

  const goodChoicesCount = useMemo(
    () => Object.values(foodSelections).filter((value) => value === "good").length,
    [foodSelections]
  );

  const cleanGameComplete = cleanedSpots.length === stainSpots.length;

  return {
    score,
    unlockedBadges,
    currentStep,
    foodSelections,
    foodFeedback,
    sortingItems,
    sortingFeedback,
    cleanedSpots,
    cleanGameComplete,
    goodChoicesCount,
    unlockBadge,
    moveToNextStep,
    resetSteps,
    handleFoodChoice,
    moveSortingItem,
    checkSortingAnswer,
    resetSortingGame,
    handleCleanSpot,
    resetCleanGame,
    awardTimerCompletion,
  };
}

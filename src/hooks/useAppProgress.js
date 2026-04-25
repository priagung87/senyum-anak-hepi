import { useMemo } from "react";
import { brushingSteps, sortingGameInitial, stainSpots } from "../data/content";
import { dailyMissionItems, funSessionActivities } from "../data/funActivities";
import { shuffleArray } from "../utils/gameHelpers";
import { useLocalStorage } from "./useLocalStorage";

const defaultDailyMission = dailyMissionItems.reduce((accumulator, item) => {
  accumulator[item.id] = false;
  return accumulator;
}, {});

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

  const [littleKidsScore, setLittleKidsScore] = useLocalStorage("sah-little-kids-score", 0);
  const [littleKidsBadges, setLittleKidsBadges] = useLocalStorage("sah-little-kids-badges", []);
  const [storyStars, setStoryStars] = useLocalStorage("sah-story-stars", 0);
  const [completedStories, setCompletedStories] = useLocalStorage("sah-completed-stories", []);
  const [activityStars, setActivityStars] = useLocalStorage("sah-activity-stars", 0);
  const [mouthQuizStars, setMouthQuizStars] = useLocalStorage("sah-mouth-quiz-stars", 0);
  const [dailyMission, setDailyMission] = useLocalStorage("sah-daily-mission", defaultDailyMission);
  const [funSessionCount, setFunSessionCount] = useLocalStorage("sah-fun-session-count", 0);

  const unlockBadge = (badgeName) => {
    setUnlockedBadges((current) => (current.includes(badgeName) ? current : [...current, badgeName]));
  };

  const addLittleKidsBadge = (badge) => {
    setLittleKidsBadges((current) => (current.includes(badge) ? current : [...current, badge]));
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

  const resetGameProgress = () => {
    setScore(0);
    setUnlockedBadges([]);
    setFoodSelections({});
    setFoodFeedback("");
    setSortingItems(shuffleArray(sortingGameInitial));
    setSortingFeedback("");
    setCleanedSpots([]);
  };

  const addLittleKidsScore = (amount) => {
    setLittleKidsScore((current) => current + amount);
  };

  const addScore = (amount) => {
    setScore((current) => current + amount);
  };

  const resetLittleKidsProgress = () => {
    setLittleKidsScore(0);
    setLittleKidsBadges([]);
  };

  const addStoryStars = (amount) => {
    setStoryStars((current) => current + amount);
  };

  const completeStory = (storyId) => {
    setCompletedStories((current) => (current.includes(storyId) ? current : [...current, storyId]));
  };

  const resetStoryProgress = () => {
    setStoryStars(0);
    setCompletedStories([]);
  };

  const toggleDailyMission = (itemId) => {
    setDailyMission((current) => {
      if (current[itemId]) {
        return current;
      }

      const nextValue = !current[itemId];
      const next = { ...current, [itemId]: nextValue };
      if (nextValue) {
        setActivityStars((stars) => stars + 1);
      }
      return next;
    });
  };

  const addActivityStars = (amount) => {
    setActivityStars((current) => current + amount);
  };

  const addMouthQuizStars = (amount) => {
    setMouthQuizStars((current) => current + amount);
  };

  const incrementFunSessionCount = () => {
    setFunSessionCount((current) => current + 1);
  };

  const resetActivityProgress = () => {
    setActivityStars(0);
    setDailyMission(defaultDailyMission);
    setFunSessionCount(0);
  };

  const resetProgress = () => {
    resetGameProgress();
    resetLittleKidsProgress();
    resetStoryProgress();
    resetActivityProgress();
    setMouthQuizStars(0);
  };

  const goodChoicesCount = useMemo(
    () => Object.values(foodSelections).filter((value) => value === "good").length,
    [foodSelections]
  );

  const cleanGameComplete = cleanedSpots.length === stainSpots.length;

  const completedMissionCount = useMemo(
    () => Object.values(dailyMission).filter(Boolean).length,
    [dailyMission]
  );

  const remainingFunActivities = useMemo(
    () => funSessionActivities.length,
    []
  );

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
    littleKidsScore,
    littleKidsBadges,
    storyStars,
    completedStories,
    activityStars,
    mouthQuizStars,
    dailyMission,
    funSessionCount,
    completedMissionCount,
    remainingFunActivities,
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
    resetGameProgress,
    addScore,
    addLittleKidsScore,
    addLittleKidsBadge,
    resetLittleKidsProgress,
    addStoryStars,
    completeStory,
    toggleDailyMission,
    addActivityStars,
    addMouthQuizStars,
    incrementFunSessionCount,
    resetStoryProgress,
    resetActivityProgress,
    resetProgress,
  };
}

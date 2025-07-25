"use client";
import React from "react";

function MainComponent() {
  const [currentExercise, setCurrentExercise] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [totalTaps, setTotalTaps] = React.useState(0);
  const [exerciseProgress, setExerciseProgress] = React.useState({});
  const [showTip, setShowTip] = React.useState(true);
  const [feedback, setFeedback] = React.useState("");
  const [isExerciseComplete, setIsExerciseComplete] = React.useState(false);

  const exercises = [
    {
      id: "basic-tap",
      title: "Basic Tap Practice",
      description: "Tap the big button 5 times",
      type: "counter",
      target: 5,
      buttonSize: "w-48 h-48",
      color: "bg-blue-500",
    },
    {
      id: "color-circles",
      title: "Tap All Colors",
      description: "Tap all the colored circles",
      type: "multiple-targets",
      targets: [
        { color: "bg-red-500", id: "red" },
        { color: "bg-green-500", id: "green" },
        { color: "bg-yellow-500", id: "yellow" },
        { color: "bg-purple-500", id: "purple" },
      ],
    },
    {
      id: "size-challenge",
      title: "Different Sizes",
      description: "Tap buttons from big to small",
      type: "size-sequence",
      sequence: ["large", "medium", "small"],
    },
    {
      id: "speed-tap",
      title: "Quick Taps",
      description: "Tap the button 10 times as fast as you can",
      type: "speed",
      target: 10,
      timeLimit: 10,
    },
    {
      id: "accuracy-test",
      title: "Accuracy Challenge",
      description: "Tap only the green circles",
      type: "accuracy",
      correctColor: "bg-green-500",
      distractors: ["bg-red-500", "bg-blue-500"],
    },
    {
      id: "light-reaction",
      title: "Reaction Time",
      description: "Tap when the light turns green",
      type: "reaction",
      phases: ["wait", "ready", "go"],
    },
  ];

  const [exerciseState, setExerciseState] = React.useState({
    counter: 0,
    tappedTargets: [],
    currentSequence: 0,
    startTime: null,
    reactionPhase: "wait",
    correctTaps: 0,
    incorrectTaps: 0,
  });

  const currentExerciseData = exercises[currentExercise];

  const showFeedback = (message, isPositive = true) => {
    setFeedback(message);
    setTimeout(() => setFeedback(""), 2000);
  };

  const completeExercise = () => {
    setIsExerciseComplete(true);
    const newProgress = { ...exerciseProgress };
    newProgress[currentExerciseData.id] = true;
    setExerciseProgress(newProgress);

    const completedCount = Object.keys(newProgress).length;
    const totalExercises = exercises.length;

    if (completedCount === totalExercises) {
      showFeedback("🎉 All exercises completed! You are a tap master!");
    } else {
      showFeedback("✅ Exercise completed! Great job!");
    }
  };

  const resetExercise = () => {
    setExerciseState({
      counter: 0,
      tappedTargets: [],
      currentSequence: 0,
      startTime: null,
      reactionPhase: "wait",
      correctTaps: 0,
      incorrectTaps: 0,
    });
    setIsExerciseComplete(false);
    setFeedback("");
  };

  const nextExercise = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      resetExercise();
    }
  };

  const handleTap = (targetId = null, isCorrect = true) => {
    setTotalTaps(totalTaps + 1);

    if (isCorrect) {
      setScore(score + 1);
    }

    const exercise = currentExerciseData;
    const newState = { ...exerciseState };

    switch (exercise.type) {
      case "counter":
        newState.counter += 1;
        if (newState.counter === exercise.target) {
          completeExercise();
          showFeedback(`Perfect! You tapped ${exercise.target} times!`);
        } else {
          showFeedback(`${newState.counter}/${exercise.target} taps`);
        }
        break;

      case "multiple-targets":
        if (!newState.tappedTargets.includes(targetId)) {
          newState.tappedTargets.push(targetId);
          if (newState.tappedTargets.length === exercise.targets.length) {
            completeExercise();
            showFeedback("Excellent! You tapped all the colors!");
          } else {
            showFeedback(
              `${newState.tappedTargets.length}/${exercise.targets.length} colors tapped`
            );
          }
        }
        break;

      case "size-sequence":
        const expectedSize = exercise.sequence[newState.currentSequence];
        if (targetId === expectedSize) {
          newState.currentSequence += 1;
          if (newState.currentSequence === exercise.sequence.length) {
            completeExercise();
            showFeedback("Amazing! You followed the sequence perfectly!");
          } else {
            showFeedback(
              `Great! Now tap the ${
                exercise.sequence[newState.currentSequence]
              } button`
            );
          }
        } else {
          showFeedback(
            "Try again! Follow the sequence from big to small",
            false
          );
        }
        break;

      case "speed":
        if (!newState.startTime) {
          newState.startTime = Date.now();
        }
        newState.counter += 1;
        if (newState.counter === exercise.target) {
          const timeTaken = (Date.now() - newState.startTime) / 1000;
          completeExercise();
          showFeedback(
            `Fantastic! ${exercise.target} taps in ${timeTaken.toFixed(
              1
            )} seconds!`
          );
        } else {
          showFeedback(`${newState.counter}/${exercise.target} - Keep going!`);
        }
        break;

      case "accuracy":
        if (isCorrect) {
          newState.correctTaps += 1;
          if (newState.correctTaps >= 5) {
            completeExercise();
            const accuracy =
              (newState.correctTaps /
                (newState.correctTaps + newState.incorrectTaps)) *
              100;
            showFeedback(
              `Excellent accuracy! ${accuracy.toFixed(0)}% correct!`
            );
          } else {
            showFeedback(`Correct! ${newState.correctTaps}/5 green circles`);
          }
        } else {
          newState.incorrectTaps += 1;
          showFeedback("Oops! Only tap the green circles", false);
        }
        break;

      case "reaction":
        if (newState.reactionPhase === "go") {
          const reactionTime = Date.now() - newState.startTime;
          completeExercise();
          showFeedback(`Great reflexes! ${reactionTime}ms reaction time!`);
        } else {
          showFeedback("Wait for green!", false);
        }
        break;
    }

    setExerciseState(newState);
  };

  React.useEffect(() => {
    if (currentExerciseData.type === "reaction" && !isExerciseComplete) {
      const timer = setTimeout(() => {
        if (exerciseState.reactionPhase === "wait") {
          setExerciseState((prev) => ({ ...prev, reactionPhase: "ready" }));
          setTimeout(() => {
            setExerciseState((prev) => ({
              ...prev,
              reactionPhase: "go",
              startTime: Date.now(),
            }));
          }, Math.random() * 3000 + 1000);
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [
    currentExerciseData.type,
    exerciseState.reactionPhase,
    isExerciseComplete,
  ]);

  const renderExercise = () => {
    const exercise = currentExerciseData;

    switch (exercise.type) {
      case "counter":
        return (
          <div className="flex flex-col items-center space-y-6">
            <button
              onClick={() => handleTap()}
              className={`${exercise.buttonSize} ${exercise.color} hover:opacity-80 text-white rounded-full text-4xl font-bold shadow-lg transform transition-transform active:scale-95`}
            >
              TAP ME
            </button>
            <div className="text-2xl font-bold text-gray-700">
              {exerciseState.counter}/{exercise.target} taps
            </div>
          </div>
        );

      case "multiple-targets":
        return (
          <div className="grid grid-cols-2 gap-6">
            {exercise.targets.map((target) => (
              <button
                key={target.id}
                onClick={() => handleTap(target.id)}
                disabled={exerciseState.tappedTargets.includes(target.id)}
                className={`w-32 h-32 ${target.color} ${
                  exerciseState.tappedTargets.includes(target.id)
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:opacity-80"
                } text-white rounded-full text-xl font-bold shadow-lg transform transition-transform active:scale-95`}
              >
                {exerciseState.tappedTargets.includes(target.id) ? "✓" : "TAP"}
              </button>
            ))}
          </div>
        );

      case "size-sequence":
        const sizes = {
          large: "w-40 h-40 text-3xl",
          medium: "w-28 h-28 text-2xl",
          small: "w-20 h-20 text-lg",
        };
        const expectedNext = exercise.sequence[exerciseState.currentSequence];

        return (
          <div className="flex flex-col items-center space-y-6">
            <div className="text-lg font-medium text-gray-600 mb-4">
              Next: Tap the{" "}
              <span className="font-bold text-blue-600">{expectedNext}</span>{" "}
              button
            </div>
            <div className="flex items-center justify-center space-x-8">
              {["large", "medium", "small"].map((size) => (
                <button
                  key={size}
                  onClick={() => handleTap(size)}
                  className={`${sizes[size]} ${
                    size === expectedNext ? "bg-green-500" : "bg-gray-400"
                  } hover:opacity-80 text-white rounded-full font-bold shadow-lg transform transition-transform active:scale-95`}
                >
                  {size.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        );

      case "speed":
        return (
          <div className="flex flex-col items-center space-y-6">
            <button
              onClick={() => handleTap()}
              className="w-40 h-40 bg-orange-500 hover:opacity-80 text-white rounded-full text-2xl font-bold shadow-lg transform transition-transform active:scale-95"
            >
              FAST TAP
            </button>
            <div className="text-2xl font-bold text-gray-700">
              {exerciseState.counter}/{exercise.target} taps
            </div>
            {exerciseState.startTime && (
              <div className="text-lg text-gray-600">
                Time:{" "}
                {((Date.now() - exerciseState.startTime) / 1000).toFixed(1)}s
              </div>
            )}
          </div>
        );

      case "accuracy":
        const circles = [];
        for (let i = 0; i < 8; i++) {
          const isCorrect = Math.random() > 0.6;
          const color = isCorrect
            ? exercise.correctColor
            : exercise.distractors[
                Math.floor(Math.random() * exercise.distractors.length)
              ];
          circles.push({ color, isCorrect, id: i });
        }

        return (
          <div className="grid grid-cols-4 gap-4">
            {circles.map((circle) => (
              <button
                key={circle.id}
                onClick={() => handleTap(circle.id, circle.isCorrect)}
                className={`w-20 h-20 ${circle.color} hover:opacity-80 rounded-full shadow-lg transform transition-transform active:scale-95`}
              />
            ))}
          </div>
        );

      case "reaction":
        const phaseColors = {
          wait: "bg-red-500",
          ready: "bg-yellow-500",
          go: "bg-green-500",
        };
        const phaseTexts = {
          wait: "WAIT...",
          ready: "GET READY...",
          go: "TAP NOW!",
        };

        return (
          <div className="flex flex-col items-center space-y-6">
            <button
              onClick={() => handleTap()}
              className={`w-48 h-48 ${
                phaseColors[exerciseState.reactionPhase]
              } text-white rounded-full text-2xl font-bold shadow-lg transform transition-all duration-300`}
            >
              {phaseTexts[exerciseState.reactionPhase]}
            </button>
            <div className="text-lg text-gray-600">
              {exerciseState.reactionPhase === "wait" &&
                "Wait for the green light..."}
              {exerciseState.reactionPhase === "ready" && "Get ready to tap!"}
              {exerciseState.reactionPhase === "go" &&
                "Tap as fast as you can!"}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const tappingTips = [
    "Use your index finger for the most accurate taps",
    "Tap gently but firmly - you don't need to press hard",
    "Keep your phone steady while tapping",
    "Tap in the center of buttons for best results",
    "Take breaks if your finger gets tired",
    "Practice makes perfect - don't worry about mistakes!",
  ];

  const encouragingMessages = [
    "You're doing great! Keep practicing!",
    "Every tap makes you better!",
    "Excellent finger control!",
    "You're becoming a tap expert!",
    "Perfect technique!",
    "Amazing progress!",
  ];

  const allExercisesCompleted =
    Object.keys(exerciseProgress).length === exercises.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="flex items-center p-4">
          <a
            href="/digital-skills-learning"
            className="mr-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-decoration-none"
          >
            ←
          </a>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">👆</span>
            <div>
              <h1 className="font-bold text-lg text-gray-800">
                Practice Basic Tap Gesture
              </h1>
              <p className="text-sm text-gray-500">
                Learn to tap accurately and confidently
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white px-4 py-2 border-b">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">
            Exercise {currentExercise + 1} of {exercises.length}
          </span>
          <span className="text-sm text-gray-600">
            Score: {score} | Total Taps: {totalTaps}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${((currentExercise + 1) / exercises.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 pb-24">
        {/* Current Exercise */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {currentExerciseData.title}
            </h2>
            <p className="text-gray-600 text-lg">
              {currentExerciseData.description}
            </p>
          </div>

          <div className="flex justify-center mb-6">{renderExercise()}</div>

          {/* Feedback */}
          {feedback && (
            <div
              className={`text-center p-3 rounded-lg mb-4 ${
                feedback.includes("Oops") || feedback.includes("Try again")
                  ? "bg-red-100 text-red-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              <p className="font-medium">{feedback}</p>
            </div>
          )}

          {/* Exercise Complete */}
          {isExerciseComplete && (
            <div className="text-center space-y-4">
              <div className="text-6xl">🎉</div>
              <p className="text-xl font-bold text-green-600">
                Exercise Complete!
              </p>
              <div className="flex justify-center space-x-3">
                <button
                  onClick={resetExercise}
                  className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
                >
                  Try Again
                </button>
                {currentExercise < exercises.length - 1 && (
                  <button
                    onClick={nextExercise}
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                  >
                    Next Exercise
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Tapping Tips */}
        {showTip && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className="text-blue-600 text-xl mr-2">💡</span>
                <span className="font-medium text-blue-800">Tapping Tips</span>
              </div>
              <button
                onClick={() => setShowTip(false)}
                className="text-blue-400 hover:text-blue-600"
              >
                ×
              </button>
            </div>
            <div className="space-y-1">
              {tappingTips.slice(0, 3).map((tip, index) => (
                <p key={index} className="text-blue-700 text-sm">
                  • {tip}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Exercise List */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center">
            <span className="text-xl mr-2">📋</span>
            All Exercises
          </h3>
          <div className="space-y-2">
            {exercises.map((exercise, index) => (
              <div
                key={exercise.id}
                className={`flex items-center justify-between p-3 rounded-lg ${
                  index === currentExercise
                    ? "bg-blue-100 border border-blue-300"
                    : exerciseProgress[exercise.id]
                    ? "bg-green-100 border border-green-300"
                    : "bg-gray-50 border border-gray-200"
                }`}
              >
                <div className="flex items-center">
                  <span className="text-lg mr-3">
                    {exerciseProgress[exercise.id]
                      ? "✅"
                      : index === currentExercise
                      ? "👆"
                      : "⭕"}
                  </span>
                  <div>
                    <p className="font-medium text-gray-800">
                      {exercise.title}
                    </p>
                    <p className="text-sm text-gray-600">
                      {exercise.description}
                    </p>
                  </div>
                </div>
                {index !== currentExercise && !isExerciseComplete && (
                  <button
                    onClick={() => {
                      setCurrentExercise(index);
                      resetExercise();
                    }}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Try
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Encouragement */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
          <div className="flex items-center mb-2">
            <span className="text-green-600 text-xl mr-2">🌟</span>
            <span className="font-medium text-green-800">Keep Going!</span>
          </div>
          <p className="text-green-700 text-sm">
            {
              encouragingMessages[
                Math.floor(Math.random() * encouragingMessages.length)
              ]
            }
          </p>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="flex space-x-3">
          <a
            href="/digital-skills-learning"
            className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg text-center font-medium hover:bg-gray-200 text-decoration-none"
          >
            Back to Lessons
          </a>
          {allExercisesCompleted ? (
            <a
              href="/lessons/whatsapp/install"
              className="flex-1 bg-green-500 text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-green-600 text-decoration-none"
            >
              Next: WhatsApp Installation →
            </a>
          ) : (
            <button
              onClick={() => setShowTip(true)}
              className="bg-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-600"
            >
              Show Tips
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
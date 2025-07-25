"use client";
import React from "react";

function MainComponent() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [practiceMode, setPracticeMode] = React.useState(false);
  const [currentPractice, setCurrentPractice] = React.useState(null);
  const [practiceSuccess, setPracticeSuccess] = React.useState(false);
  const [showTips, setShowTips] = React.useState(false);
  const [tapCount, setTapCount] = React.useState(0);
  const [swipeDirection, setSwipeDirection] = React.useState(null);
  const [zoomLevel, setZoomLevel] = React.useState(1);
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const steps = [
    {
      title: "What is a Touch Screen?",
      icon: "👆",
      content:
        "A touch screen responds to your finger touches. You don't need to press hard - just gentle touches work best.",
      visual: "📱",
      tip: "Think of it like touching water - be gentle and light with your fingers.",
      gesture: "none",
    },
    {
      title: "Basic Tap Gesture",
      icon: "👆",
      content:
        "Tap means touching the screen quickly with one finger and lifting it up immediately. Like knocking on a door gently.",
      visual: "🎯",
      tip: "Don't press hard or hold your finger down. Just a quick, light touch.",
      gesture: "tap",
    },
    {
      title: "Swipe Gesture",
      icon: "👈",
      content:
        "Swipe means putting your finger on the screen and sliding it in one direction. Like wiping dust off a table.",
      visual: "↔️",
      tip: "Keep your finger on the screen while moving. Lift only when you reach where you want to stop.",
      gesture: "swipe",
    },
    {
      title: "Scroll Gesture",
      icon: "📜",
      content:
        "Scrolling is like swiping but used to move up and down on a page. Swipe up to see content below, swipe down to see content above.",
      visual: "↕️",
      tip: "Imagine you're moving a piece of paper up or down to read different parts.",
      gesture: "scroll",
    },
    {
      title: "Pinch to Zoom",
      icon: "🤏",
      content:
        "Use two fingers to make things bigger or smaller. Spread fingers apart to zoom in (make bigger), bring them together to zoom out (make smaller).",
      visual: "🔍",
      tip: "Start with two fingers close together, then spread them apart like opening a book.",
      gesture: "pinch",
    },
    {
      title: "Practice All Gestures",
      icon: "🎯",
      content:
        "Now let's practice all the gestures together. Take your time and remember - gentle touches work best!",
      visual: "✨",
      tip: "Don't worry if it takes a few tries. Everyone learns at their own pace.",
      gesture: "all",
    },
  ];

  const practiceExercises = [
    {
      type: "tap",
      title: "Tap Practice",
      instruction: "Tap the big button below 3 times",
      target: 3,
      icon: "🎯",
    },
    {
      type: "swipe",
      title: "Swipe Practice",
      instruction: "Swipe left and right on the box below",
      target: "both",
      icon: "👈",
    },
    {
      type: "scroll",
      title: "Scroll Practice",
      instruction: "Scroll up and down to see all the text",
      target: "scroll",
      icon: "📜",
    },
    {
      type: "pinch",
      title: "Zoom Practice",
      instruction: "Make the image bigger and smaller",
      target: "zoom",
      icon: "🔍",
    },
  ];

  const touchTips = [
    "Clean hands work better - wash off any oil or dirt from your fingers",
    "Remove gloves - touch screens don't work well through most gloves",
    "Use the tip of your finger, not your nail or knuckle",
    "Don't press too hard - light touches are better",
    "If the screen doesn't respond, try cleaning it with a soft cloth",
    "Take breaks if your fingers get tired - this is normal when learning",
  ];

  const commonMistakes = [
    {
      mistake: "Pressing too hard",
      solution: "Touch gently like you're touching a soap bubble",
      icon: "💪",
    },
    {
      mistake: "Moving finger too fast",
      solution: "Slow, steady movements work better than quick ones",
      icon: "⚡",
    },
    {
      mistake: "Using fingernails",
      solution: "Use the soft tip of your finger, not the nail",
      icon: "💅",
    },
    {
      mistake: "Dirty or wet fingers",
      solution: "Clean and dry your hands before using the phone",
      icon: "🧼",
    },
  ];

  const handleTapPractice = () => {
    const newCount = tapCount + 1;
    setTapCount(newCount);
    if (newCount >= 3) {
      setPracticeSuccess(true);
      setTimeout(() => {
        setPracticeSuccess(false);
        setTapCount(0);
      }, 2000);
    }
  };

  const handleSwipeStart = (e) => {
    const startX = e.touches ? e.touches[0].clientX : e.clientX;
    const startY = e.touches ? e.touches[0].clientY : e.clientY;

    const handleSwipeEnd = (endEvent) => {
      const endX = endEvent.changedTouches
        ? endEvent.changedTouches[0].clientX
        : endEvent.clientX;
      const endY = endEvent.changedTouches
        ? endEvent.changedTouches[0].clientY
        : endEvent.clientY;

      const deltaX = endX - startX;
      const deltaY = endY - startY;

      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        const direction = deltaX > 0 ? "right" : "left";
        setSwipeDirection(direction);
        setTimeout(() => setSwipeDirection(null), 1000);
      }
    };

    document.addEventListener("touchend", handleSwipeEnd, { once: true });
    document.addEventListener("mouseup", handleSwipeEnd, { once: true });
  };

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    setScrollPosition(scrollTop);
  };

  const handleZoom = (direction) => {
    if (direction === "in" && zoomLevel < 2) {
      setZoomLevel(zoomLevel + 0.2);
    } else if (direction === "out" && zoomLevel > 0.5) {
      setZoomLevel(zoomLevel - 0.2);
    }
  };

  const startPractice = (exerciseType) => {
    setCurrentPractice(exerciseType);
    setPracticeMode(true);
    setPracticeSuccess(false);
    setTapCount(0);
    setSwipeDirection(null);
    setZoomLevel(1);
    setScrollPosition(0);
  };

  const renderPracticeArea = () => {
    if (!practiceMode || !currentPractice) return null;

    const exercise = practiceExercises.find(
      (ex) => ex.type === currentPractice
    );

    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="text-center mb-4">
          <div className="text-4xl mb-2">{exercise.icon}</div>
          <h3 className="text-lg font-bold text-gray-800">{exercise.title}</h3>
          <p className="text-gray-600 text-sm">{exercise.instruction}</p>
        </div>

        {currentPractice === "tap" && (
          <div className="text-center">
            <button
              onClick={handleTapPractice}
              className="w-32 h-32 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-xl font-bold shadow-lg transform transition-transform active:scale-95"
            >
              TAP ME
            </button>
            <p className="mt-4 text-gray-600">Taps: {tapCount}/3</p>
            {practiceSuccess && (
              <div className="mt-4 text-green-600 font-bold">
                🎉 Great job! You've mastered tapping!
              </div>
            )}
          </div>
        )}

        {currentPractice === "swipe" && (
          <div className="text-center">
            <div
              className="w-full h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center text-white font-bold text-lg cursor-pointer"
              onTouchStart={handleSwipeStart}
              onMouseDown={handleSwipeStart}
            >
              Swipe me left or right
            </div>
            {swipeDirection && (
              <div className="mt-4 text-green-600 font-bold">
                🎉 You swiped {swipeDirection}! Try swiping the other way too!
              </div>
            )}
          </div>
        )}

        {currentPractice === "scroll" && (
          <div className="text-center">
            <div
              className="w-full h-48 bg-gray-100 rounded-lg overflow-y-scroll border-2 border-dashed border-gray-300"
              onScroll={handleScroll}
            >
              <div className="p-4 space-y-4">
                <p className="text-gray-700">
                  📱 This is the top of the content
                </p>
                <p className="text-gray-700">👆 Swipe up to scroll down</p>
                <p className="text-gray-700">📖 Keep scrolling to see more</p>
                <p className="text-gray-700">🌟 You're doing great!</p>
                <p className="text-gray-700">📜 More content here</p>
                <p className="text-gray-700">⬇️ Keep going down</p>
                <p className="text-gray-700">🎯 Almost there!</p>
                <p className="text-gray-700">👇 Swipe down to go back up</p>
                <p className="text-gray-700">🏁 This is the bottom!</p>
              </div>
            </div>
            <p className="mt-2 text-gray-600 text-sm">
              Scroll position: {Math.round(scrollPosition)}px
            </p>
          </div>
        )}

        {currentPractice === "pinch" && (
          <div className="text-center">
            <div className="mb-4">
              <div
                className="inline-block transition-transform duration-300"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl">
                  🌟
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => handleZoom("in")}
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold"
              >
                Zoom In (+)
              </button>
              <button
                onClick={() => handleZoom("out")}
                className="bg-red-500 text-white px-6 py-3 rounded-lg font-bold"
              >
                Zoom Out (-)
              </button>
            </div>
            <p className="mt-2 text-gray-600 text-sm">
              Zoom level: {Math.round(zoomLevel * 100)}%
            </p>
          </div>
        )}

        <div className="text-center mt-6">
          <button
            onClick={() => {
              setPracticeMode(false);
              setCurrentPractice(null);
            }}
            className="bg-gray-500 text-white px-6 py-2 rounded-lg"
          >
            Done Practicing
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
                Touch Screen Basics
              </h1>
              <p className="text-sm text-gray-500">
                Learn to use touch gestures
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white px-4 py-2 border-b">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">
            Step {currentStep + 1} of {steps.length}
          </span>
          <span className="text-sm text-gray-600">
            {Math.round(((currentStep + 1) / steps.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 pb-24">
        {/* Practice Area */}
        {renderPracticeArea()}

        {/* Current Step */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">{steps[currentStep].icon}</div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {steps[currentStep].title}
            </h2>
          </div>

          <div className="text-center mb-6">
            <div className="text-8xl mb-4 opacity-60">
              {steps[currentStep].visual}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              {steps[currentStep].content}
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start">
                <span className="text-blue-600 text-xl mr-2">💡</span>
                <div>
                  <span className="font-medium text-blue-800">
                    Helpful Tip:
                  </span>
                  <p className="text-blue-700 text-sm mt-1">
                    {steps[currentStep].tip}
                  </p>
                </div>
              </div>
            </div>

            {/* Practice Button for Current Gesture */}
            {steps[currentStep].gesture !== "none" &&
              steps[currentStep].gesture !== "all" && (
                <div className="text-center mt-4">
                  <button
                    onClick={() => startPractice(steps[currentStep].gesture)}
                    className="bg-green-500 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-600"
                  >
                    Practice {steps[currentStep].title}
                  </button>
                </div>
              )}

            {/* All Practice Buttons for Final Step */}
            {steps[currentStep].gesture === "all" && (
              <div className="grid grid-cols-2 gap-4 mt-6">
                {practiceExercises.map((exercise, index) => (
                  <button
                    key={index}
                    onClick={() => startPractice(exercise.type)}
                    className="bg-green-500 text-white p-4 rounded-lg font-medium hover:bg-green-600 flex flex-col items-center"
                  >
                    <span className="text-2xl mb-2">{exercise.icon}</span>
                    <span className="text-sm">{exercise.title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mb-6">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className={`px-6 py-3 rounded-lg font-medium ${
              currentStep === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            ← Previous
          </button>

          <button
            onClick={() =>
              setCurrentStep(Math.min(steps.length - 1, currentStep + 1))
            }
            disabled={currentStep === steps.length - 1}
            className={`px-6 py-3 rounded-lg font-medium ${
              currentStep === steps.length - 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Next →
          </button>
        </div>

        {/* Additional Help Sections */}
        <div className="space-y-4">
          {/* Touch Tips */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <button
              onClick={() => setShowTips(!showTips)}
              className="w-full p-4 text-left flex items-center justify-between"
            >
              <div className="flex items-center">
                <span className="text-xl mr-3">💡</span>
                <span className="font-medium text-gray-800">
                  Tips for Better Touch Screen Use
                </span>
              </div>
              <span className="text-gray-400">{showTips ? "−" : "+"}</span>
            </button>

            {showTips && (
              <div className="px-4 pb-4 space-y-2">
                {touchTips.map((tip, index) => (
                  <div
                    key={index}
                    className="flex items-start bg-blue-50 rounded-lg p-3"
                  >
                    <span className="text-blue-600 mr-2 text-sm">•</span>
                    <p className="text-blue-700 text-sm">{tip}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Common Mistakes */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-xl mr-2">⚠️</span>
              Common Mistakes to Avoid
            </h3>
            <div className="space-y-3">
              {commonMistakes.map((mistake, index) => (
                <div key={index} className="bg-yellow-50 rounded-lg p-3">
                  <div className="flex items-start">
                    <span className="text-lg mr-2">{mistake.icon}</span>
                    <div>
                      <p className="font-medium text-yellow-800 text-sm mb-1">
                        ❌ {mistake.mistake}
                      </p>
                      <p className="text-yellow-700 text-sm">
                        ✅ {mistake.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Encouragement */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <span className="text-green-600 text-xl mr-2">🌟</span>
              <span className="font-medium text-green-800">
                You're Doing Great!
              </span>
            </div>
            <p className="text-green-700 text-sm">
              Learning touch gestures takes practice. Don't worry if it feels
              awkward at first - everyone starts as a beginner. The more you
              practice, the more natural it will become. Take your time and be
              patient with yourself!
            </p>
          </div>
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
          <a
            href="/lessons/smartphone/calls"
            className="flex-1 bg-blue-500 text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-blue-600 text-decoration-none"
          >
            Next: Making Calls
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
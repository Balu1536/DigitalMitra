"use client";
import React from "react";

function MainComponent() {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [selectedAnswers, setSelectedAnswers] = React.useState({});
  const [showFeedback, setShowFeedback] = React.useState(false);
  const [quizCompleted, setQuizCompleted] = React.useState(false);
  const [score, setScore] = React.useState(0);

  const questions = [
    {
      id: 1,
      category: "Phone Operations",
      question: "How do you turn on your smartphone?",
      options: [
        "Press and hold the power button for 2-3 seconds",
        "Tap the screen multiple times",
        "Shake the phone vigorously",
        "Press the home button",
      ],
      correct: 0,
      explanation:
        "To turn on your phone, press and hold the power button (usually on the side) for 2-3 seconds until you see the screen light up.",
    },
    {
      id: 2,
      category: "Touch Gestures",
      question: "What does 'pinch to zoom' mean?",
      options: [
        "Press the screen with one finger",
        "Use two fingers to pinch together or spread apart",
        "Tap the screen twice quickly",
        "Swipe left or right",
      ],
      correct: 1,
      explanation:
        "Pinch to zoom means using two fingers - pinch them together to zoom out (make things smaller) or spread them apart to zoom in (make things bigger).",
    },
    {
      id: 3,
      category: "Calling",
      question: "How do you answer an incoming phone call?",
      options: [
        "Press the power button",
        "Swipe or tap the green phone icon",
        "Shake the phone",
        "Press the volume button",
      ],
      correct: 1,
      explanation:
        "To answer a call, swipe or tap the green phone icon that appears on your screen when someone calls you.",
    },
    {
      id: 4,
      category: "Touch Gestures",
      question: "What happens when you swipe down from the top of the screen?",
      options: [
        "The phone turns off",
        "You open the camera",
        "You see notifications and quick settings",
        "You make a phone call",
      ],
      correct: 2,
      explanation:
        "Swiping down from the top shows your notifications (messages, missed calls) and quick settings like WiFi, brightness, and volume.",
    },
    {
      id: 5,
      category: "Messaging",
      question: "How do you send a text message (SMS)?",
      options: [
        "Open Messages app, select contact, type message, tap send",
        "Call the person and speak",
        "Take a photo and show it",
        "Write on paper and mail it",
      ],
      correct: 0,
      explanation:
        "To send SMS: Open your Messages app, choose a contact or enter phone number, type your message, then tap the send button (usually an arrow).",
    },
    {
      id: 6,
      category: "Contacts",
      question: "How do you save a new contact in your phone?",
      options: [
        "Write it on paper",
        "Remember the number in your head",
        "Open Contacts app and tap 'Add' or '+' button",
        "Call the number first",
      ],
      correct: 2,
      explanation:
        "To save a contact: Open your Contacts or Phone app, look for 'Add' or '+' button, enter the person's name and phone number, then save.",
    },
    {
      id: 7,
      category: "Camera",
      question: "How do you take a photo with your smartphone?",
      options: [
        "Shake the phone",
        "Open Camera app and tap the round button",
        "Press the power button twice",
        "Speak to the phone",
      ],
      correct: 1,
      explanation:
        "To take a photo: Open your Camera app, point the phone at what you want to photograph, then tap the large round button (usually white or blue).",
    },
    {
      id: 8,
      category: "Phone Operations",
      question: "What should you do if your phone screen becomes unresponsive?",
      options: [
        "Throw the phone away",
        "Pour water on it",
        "Restart the phone by holding power button",
        "Hit it with your hand",
      ],
      correct: 2,
      explanation:
        "If your phone stops responding, restart it by pressing and holding the power button for about 10 seconds until it turns off, then turn it back on.",
    },
    {
      id: 9,
      category: "Touch Gestures",
      question: "How do you scroll down to see more content on your screen?",
      options: [
        "Turn the phone upside down",
        "Swipe up with your finger",
        "Press the power button",
        "Tap the screen repeatedly",
      ],
      correct: 1,
      explanation:
        "To scroll down and see more content, swipe up with your finger. To scroll up, swipe down. Think of it like moving a piece of paper.",
    },
    {
      id: 10,
      category: "Calling",
      question: "How do you end a phone call?",
      options: [
        "Close the phone (if it's a flip phone)",
        "Tap the red phone icon",
        "Wait for the other person to hang up",
        "Turn off the phone",
      ],
      correct: 1,
      explanation:
        "To end a call, tap the red phone icon on your screen. This hangs up the call for both you and the other person.",
    },
  ];

  const handleAnswerSelect = (answerIndex) => {
    if (showFeedback) return;

    const newAnswers = { ...selectedAnswers };
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowFeedback(false);
    } else {
      completeQuiz();
    }
  };

  const completeQuiz = () => {
    let correctCount = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setQuizCompleted(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowFeedback(false);
    setQuizCompleted(false);
    setScore(0);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return "Excellent! You're a smartphone expert! 🌟";
    if (percentage >= 80) return "Great job! You know your smartphone well! 👏";
    if (percentage >= 70) return "Good work! You're getting the hang of it! 👍";
    if (percentage >= 60)
      return "Not bad! Keep practicing and you'll improve! 💪";
    return "Don't worry! Practice makes perfect. Try again! 🤗";
  };

  const getScoreColor = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  if (quizCompleted) {
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
              <span className="text-2xl">🎯</span>
              <div>
                <h1 className="font-bold text-lg text-gray-800">
                  Quiz Complete!
                </h1>
                <p className="text-sm text-gray-500">
                  Smartphone Basics Results
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="p-6">
          {/* Score Display */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6 text-center">
            <div className="text-6xl mb-4">
              {score >= 8 ? "🏆" : score >= 6 ? "🎉" : "📚"}
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Your Score
            </h2>
            <div className={`text-4xl font-bold mb-2 ${getScoreColor()}`}>
              {score}/{questions.length}
            </div>
            <div className={`text-lg font-medium mb-4 ${getScoreColor()}`}>
              {Math.round((score / questions.length) * 100)}%
            </div>
            <p className="text-gray-600 text-lg">{getScoreMessage()}</p>
          </div>

          {/* Detailed Results */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-xl mr-2">📊</span>
              Question Review
            </h3>
            <div className="space-y-4">
              {questions.map((question, index) => {
                const userAnswer = selectedAnswers[index];
                const isCorrect = userAnswer === question.correct;
                return (
                  <div
                    key={question.id}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">
                        Question {index + 1} - {question.category}
                      </span>
                      <span
                        className={`text-lg ${
                          isCorrect ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {isCorrect ? "✅" : "❌"}
                      </span>
                    </div>
                    <p className="text-gray-800 font-medium mb-2">
                      {question.question}
                    </p>
                    <div className="space-y-1">
                      <p
                        className={`text-sm ${
                          isCorrect ? "text-green-700" : "text-red-700"
                        }`}
                      >
                        Your answer: {question.options[userAnswer]}
                      </p>
                      {!isCorrect && (
                        <p className="text-sm text-green-700">
                          Correct answer: {question.options[question.correct]}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-xl mr-2">📈</span>
              Performance by Category
            </h3>
            <div className="space-y-3">
              {[
                "Phone Operations",
                "Touch Gestures",
                "Calling",
                "Messaging",
                "Contacts",
                "Camera",
              ].map((category) => {
                const categoryQuestions = questions.filter(
                  (q) => q.category === category
                );
                const categoryCorrect = categoryQuestions.filter((q, idx) => {
                  const questionIndex = questions.findIndex(
                    (quest) => quest.id === q.id
                  );
                  return selectedAnswers[questionIndex] === q.correct;
                }).length;
                const categoryPercentage = Math.round(
                  (categoryCorrect / categoryQuestions.length) * 100
                );

                return (
                  <div
                    key={category}
                    className="flex items-center justify-between"
                  >
                    <span className="text-gray-700 font-medium">
                      {category}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">
                        {categoryCorrect}/{categoryQuestions.length}
                      </span>
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            categoryPercentage >= 80
                              ? "bg-green-500"
                              : categoryPercentage >= 60
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          }`}
                          style={{ width: `${categoryPercentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700 w-10">
                        {categoryPercentage}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={resetQuiz}
              className="w-full bg-blue-500 text-white py-4 px-6 rounded-lg font-medium hover:bg-blue-600 text-lg"
            >
              🔄 Take Quiz Again
            </button>
            <a
              href="/quiz/whatsapp"
              className="block w-full bg-green-500 text-white py-4 px-6 rounded-lg font-medium hover:bg-green-600 text-center text-decoration-none text-lg"
            >
              ➡️ Next: WhatsApp Quiz
            </a>
            <a
              href="/digital-skills-learning"
              className="block w-full bg-gray-100 text-gray-700 py-4 px-6 rounded-lg font-medium hover:bg-gray-200 text-center text-decoration-none text-lg"
            >
              🏠 Back to Lessons
            </a>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

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
            <span className="text-2xl">📝</span>
            <div>
              <h1 className="font-bold text-lg text-gray-800">
                Smartphone Basics Quiz
              </h1>
              <p className="text-sm text-gray-500">
                Test your smartphone knowledge
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white px-4 py-3 border-b">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm text-gray-600">
            {Math.round(progressPercentage)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-blue-500 h-3 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Question Content */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
            {currentQ.category}
          </span>
        </div>

        {/* Question */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6 leading-relaxed">
            {currentQ.question}
          </h2>

          {/* Answer Options */}
          <div className="space-y-3">
            {currentQ.options.map((option, index) => {
              const isSelected = selectedAnswers[currentQuestion] === index;
              const isCorrect = index === currentQ.correct;
              const isWrong = showFeedback && isSelected && !isCorrect;
              const showAsCorrect = showFeedback && isCorrect;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showFeedback}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                    showAsCorrect
                      ? "border-green-500 bg-green-50 text-green-800"
                      : isWrong
                      ? "border-red-500 bg-red-50 text-red-800"
                      : isSelected
                      ? "border-blue-500 bg-blue-50 text-blue-800"
                      : "border-gray-200 bg-white text-gray-800 hover:border-blue-300 hover:bg-blue-50"
                  } ${showFeedback ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-lg">{option}</span>
                    <div className="flex items-center space-x-2">
                      {showAsCorrect && (
                        <span className="text-green-600 text-xl">✅</span>
                      )}
                      {isWrong && (
                        <span className="text-red-600 text-xl">❌</span>
                      )}
                      {isSelected && !showFeedback && (
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <div
              className={`flex items-start space-x-3 mb-4 ${
                selectedAnswers[currentQuestion] === currentQ.correct
                  ? "text-green-800"
                  : "text-red-800"
              }`}
            >
              <span className="text-2xl">
                {selectedAnswers[currentQuestion] === currentQ.correct
                  ? "🎉"
                  : "💡"}
              </span>
              <div>
                <h3 className="font-bold text-lg mb-2">
                  {selectedAnswers[currentQuestion] === currentQ.correct
                    ? "Correct! Well done!"
                    : "Not quite right, but that's okay!"}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {currentQ.explanation}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        {showFeedback && (
          <button
            onClick={handleNextQuestion}
            className="w-full bg-blue-500 text-white py-4 px-6 rounded-lg font-medium hover:bg-blue-600 text-lg"
          >
            {currentQuestion < questions.length - 1
              ? "Next Question →"
              : "See Results 🎯"}
          </button>
        )}

        {/* Encouragement Message */}
        {!showFeedback && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center">
              <span className="text-blue-600 text-xl mr-2">💪</span>
              <p className="text-blue-800 text-sm">
                Take your time and choose the answer that seems most correct to
                you. You're doing great!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainComponent;
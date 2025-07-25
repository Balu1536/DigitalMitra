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
      category: "Installation",
      question: "What do you need to install WhatsApp on your phone?",
      options: [
        "Only your phone number",
        "Phone number and internet connection",
        "Email address and password",
        "Aadhaar card details",
      ],
      correct: 1,
      explanation:
        "WhatsApp requires your phone number for verification and an internet connection to download and set up the app. No email or Aadhaar details are needed.",
    },
    {
      id: 2,
      category: "Installation",
      question: "Where can you safely download WhatsApp?",
      options: [
        "Any website on Google",
        "From friends via Bluetooth",
        "Google Play Store only",
        "WhatsApp website only",
      ],
      correct: 2,
      explanation:
        "Always download WhatsApp from the official Google Play Store to ensure you get the genuine, safe version of the app.",
    },
    {
      id: 3,
      category: "Messaging",
      question: "What does a single gray tick (✓) next to your message mean?",
      options: [
        "Message was read",
        "Message was sent",
        "Message was delivered",
        "Message failed to send",
      ],
      correct: 1,
      explanation:
        "A single gray tick means your message was sent from your phone. Two gray ticks mean delivered, and two blue ticks mean read.",
    },
    {
      id: 4,
      category: "Messaging",
      question: "How can you delete a message you sent by mistake?",
      options: [
        "Shake your phone",
        "Press and hold the message, then select 'Delete for everyone'",
        "Turn off your internet",
        "It's not possible to delete sent messages",
      ],
      correct: 1,
      explanation:
        "Press and hold the message you want to delete, then tap 'Delete for everyone'. This works only within a few minutes of sending.",
    },
    {
      id: 5,
      category: "Voice Messages",
      question: "How do you send a voice message on WhatsApp?",
      options: [
        "Type your message and press send",
        "Press and hold the microphone button while speaking",
        "Go to settings and enable voice mode",
        "Call the person instead",
      ],
      correct: 1,
      explanation:
        "Press and hold the microphone button (next to the text box) while speaking. Release when done. The voice message will be sent automatically.",
    },
    {
      id: 6,
      category: "Photo Sharing",
      question: "What's the safest way to share photos on WhatsApp?",
      options: [
        "Share all photos publicly",
        "Only share photos you're comfortable with others seeing",
        "Share photos of important documents",
        "Share photos with everyone in your contact list",
      ],
      correct: 1,
      explanation:
        "Only share photos you're comfortable with others seeing. Never share photos of important documents, and be mindful of what's visible in the background.",
    },
    {
      id: 7,
      category: "Photo Sharing",
      question: "How can you send multiple photos at once?",
      options: [
        "Send them one by one only",
        "Select the camera icon, then select multiple photos before sending",
        "It's not possible",
        "Use copy and paste",
      ],
      correct: 1,
      explanation:
        "Tap the camera/attachment icon, select 'Gallery', then tap multiple photos to select them. You can send up to 30 photos at once.",
    },
    {
      id: 8,
      category: "Group Chats",
      question:
        "What should you do before sharing information in a group chat?",
      options: [
        "Share immediately",
        "Check if the information is true and appropriate for the group",
        "Forward it to all your groups",
        "Add more people to the group first",
      ],
      correct: 1,
      explanation:
        "Always verify information before sharing in groups. Avoid spreading fake news or inappropriate content. Think about whether the information is useful for that specific group.",
    },
    {
      id: 9,
      category: "Group Chats",
      question: "How can you stop getting notifications from a noisy group?",
      options: [
        "Leave the group immediately",
        "Turn off your phone",
        "Mute the group notifications",
        "Block all group members",
      ],
      correct: 2,
      explanation:
        "Open the group, tap the group name at the top, then select 'Mute notifications'. You can mute for 8 hours, 1 week, or 1 year.",
    },
    {
      id: 10,
      category: "Video Calls",
      question: "What do you need for a good WhatsApp video call?",
      options: [
        "Only a phone",
        "Good internet connection and sufficient battery",
        "Special video calling app",
        "Permission from WhatsApp",
      ],
      correct: 1,
      explanation:
        "For good video calls, you need a stable internet connection (WiFi is best) and sufficient battery. Poor internet will cause choppy video and audio.",
    },
  ];

  const categories = [
    "Installation",
    "Messaging",
    "Voice Messages",
    "Photo Sharing",
    "Group Chats",
    "Video Calls",
  ];

  const handleAnswerSelect = (answerIndex) => {
    if (showFeedback) return;

    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answerIndex,
    });
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowFeedback(false);
    } else {
      completeQuiz();
    }
  };

  const completeQuiz = () => {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setQuizCompleted(true);
  };

  const getCategoryScore = (category) => {
    const categoryQuestions = questions.filter((q) => q.category === category);
    const correctInCategory = categoryQuestions.filter((q, index) => {
      const questionIndex = questions.findIndex(
        (question) => question.id === q.id
      );
      return selectedAnswers[questionIndex] === q.correct;
    }).length;

    return {
      correct: correctInCategory,
      total: categoryQuestions.length,
      percentage: Math.round(
        (correctInCategory / categoryQuestions.length) * 100
      ),
    };
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowFeedback(false);
    setQuizCompleted(false);
    setScore(0);
  };

  const getScoreColor = (percentage) => {
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreMessage = (score, total) => {
    const percentage = (score / total) * 100;
    if (percentage >= 90) return "Excellent! You're a WhatsApp expert! 🌟";
    if (percentage >= 80) return "Great job! You know WhatsApp very well! 👏";
    if (percentage >= 70)
      return "Good work! You have solid WhatsApp skills! 👍";
    if (percentage >= 60) return "Not bad! Keep practicing to improve! 📚";
    return "Keep learning! Practice more to build your WhatsApp skills! 💪";
  };

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100);

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
              <span className="text-2xl">💬</span>
              <div>
                <h1 className="font-bold text-lg text-gray-800">
                  WhatsApp Skills Quiz
                </h1>
                <p className="text-sm text-gray-500">Quiz completed!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="p-6 space-y-6">
          {/* Overall Score */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-6xl mb-4">
              {percentage >= 80 ? "🎉" : percentage >= 60 ? "👍" : "📚"}
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Quiz Complete!
            </h2>
            <div className="text-4xl font-bold mb-2">
              <span className={getScoreColor(percentage)}>
                {score}/{questions.length}
              </span>
            </div>
            <div className="text-lg text-gray-600 mb-4">
              {percentage}% Correct
            </div>
            <p className="text-gray-700">
              {getScoreMessage(score, questions.length)}
            </p>
          </div>

          {/* Category Breakdown */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-xl mr-2">📊</span>
              Performance by Category
            </h3>
            <div className="space-y-4">
              {categories.map((category) => {
                const categoryScore = getCategoryScore(category);
                if (categoryScore.total === 0) return null;

                return (
                  <div
                    key={category}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-800">
                        {category}
                      </span>
                      <span
                        className={`font-bold ${getScoreColor(
                          categoryScore.percentage
                        )}`}
                      >
                        {categoryScore.correct}/{categoryScore.total}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          categoryScore.percentage >= 80
                            ? "bg-green-500"
                            : categoryScore.percentage >= 60
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                        style={{ width: `${categoryScore.percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {categoryScore.percentage}% correct
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <span className="text-blue-600 text-xl mr-2">💡</span>
              <span className="font-medium text-blue-800">What's Next?</span>
            </div>
            {percentage >= 80 ? (
              <p className="text-blue-700 text-sm">
                Excellent work! You're ready to help others learn WhatsApp.
                Consider taking the Digital Payments Quiz next.
              </p>
            ) : percentage >= 60 ? (
              <p className="text-blue-700 text-sm">
                Good progress! Review the WhatsApp lessons for topics you
                missed, then try the quiz again.
              </p>
            ) : (
              <p className="text-blue-700 text-sm">
                Keep practicing! Go back to the WhatsApp lessons and practice
                more before retaking this quiz.
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={resetQuiz}
              className="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-600"
            >
              Retake Quiz
            </button>
            <a
              href="/quiz/payments"
              className="block w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-600 text-center text-decoration-none"
            >
              Next: Digital Payments Quiz
            </a>
            <a
              href="/digital-skills-learning"
              className="block w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 text-center text-decoration-none"
            >
              Back to Lessons
            </a>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const isAnswered = selectedAnswers.hasOwnProperty(currentQuestion);
  const selectedAnswer = selectedAnswers[currentQuestion];

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
            <span className="text-2xl">💬</span>
            <div>
              <h1 className="font-bold text-lg text-gray-800">
                WhatsApp Skills Quiz
              </h1>
              <p className="text-sm text-gray-500">
                Test your WhatsApp knowledge
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white px-4 py-2 border-b">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm text-gray-600">
            {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="p-6 pb-24">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          {/* Category Badge */}
          <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
            {currentQ.category}
          </div>

          {/* Question */}
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            {currentQ.question}
          </h2>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {currentQ.options.map((option, index) => {
              let buttonClass =
                "w-full p-4 text-left border-2 rounded-lg transition-colors ";

              if (!showFeedback) {
                buttonClass +=
                  selectedAnswer === index
                    ? "border-green-500 bg-green-50 text-green-800"
                    : "border-gray-200 bg-white text-gray-800 hover:border-gray-300";
              } else {
                if (index === currentQ.correct) {
                  buttonClass += "border-green-500 bg-green-50 text-green-800";
                } else if (
                  selectedAnswer === index &&
                  index !== currentQ.correct
                ) {
                  buttonClass += "border-red-500 bg-red-50 text-red-800";
                } else {
                  buttonClass += "border-gray-200 bg-gray-50 text-gray-600";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={buttonClass}
                  disabled={showFeedback}
                >
                  <div className="flex items-center">
                    <span className="font-medium mr-3">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    <span>{option}</span>
                    {showFeedback && index === currentQ.correct && (
                      <span className="ml-auto text-green-600">✓</span>
                    )}
                    {showFeedback &&
                      selectedAnswer === index &&
                      index !== currentQ.correct && (
                        <span className="ml-auto text-red-600">✗</span>
                      )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {showFeedback && (
            <div
              className={`border rounded-lg p-4 ${
                selectedAnswer === currentQ.correct
                  ? "border-green-200 bg-green-50"
                  : "border-red-200 bg-red-50"
              }`}
            >
              <div className="flex items-center mb-2">
                <span className="text-xl mr-2">
                  {selectedAnswer === currentQ.correct ? "✅" : "❌"}
                </span>
                <span
                  className={`font-medium ${
                    selectedAnswer === currentQ.correct
                      ? "text-green-800"
                      : "text-red-800"
                  }`}
                >
                  {selectedAnswer === currentQ.correct
                    ? "Correct!"
                    : "Incorrect"}
                </span>
              </div>
              <p
                className={`text-sm ${
                  selectedAnswer === currentQ.correct
                    ? "text-green-700"
                    : "text-red-700"
                }`}
              >
                {currentQ.explanation}
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        {showFeedback && (
          <button
            onClick={handleNext}
            className="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-600"
          >
            {currentQuestion < questions.length - 1
              ? "Next Question →"
              : "See Results"}
          </button>
        )}

        {/* Instructions */}
        {!isAnswered && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center">
              <span className="text-blue-600 text-xl mr-2">💡</span>
              <p className="text-blue-700 text-sm">
                Select the best answer. You'll get immediate feedback and
                explanation.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainComponent;
"use client";
import React from "react";

function MainComponent() {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [selectedAnswers, setSelectedAnswers] = React.useState({});
  const [showResults, setShowResults] = React.useState(false);
  const [showExplanation, setShowExplanation] = React.useState(false);
  const [quizStarted, setQuizStarted] = React.useState(false);

  const questions = [
    {
      id: 1,
      category: "UPI Basics",
      question: "What does UPI stand for?",
      options: [
        "Universal Payment Interface",
        "Unified Payment Interface",
        "United Payment Interface",
        "Unique Payment Interface",
      ],
      correct: 1,
      explanation:
        "UPI stands for Unified Payment Interface. It's a system that allows you to transfer money between bank accounts instantly using your mobile phone.",
    },
    {
      id: 2,
      category: "Payment Safety",
      question: "What should you NEVER share with anyone?",
      options: [
        "Your name",
        "Your city name",
        "Your UPI PIN",
        "Your phone number",
      ],
      correct: 2,
      explanation:
        "Never share your UPI PIN with anyone. Banks and payment apps will never ask for your PIN over phone calls or messages. Your PIN is like the key to your money.",
    },
    {
      id: 3,
      category: "Making Payments",
      question: "To pay a shopkeeper using UPI, what do you need to scan?",
      options: [
        "Barcode on products",
        "QR code displayed by merchant",
        "Your own phone screen",
        "The shopkeeper's Aadhaar card",
      ],
      correct: 1,
      explanation:
        "You scan the merchant's QR code to make payment. The QR code contains the merchant's payment details, making it easy and safe to pay the right person.",
    },
    {
      id: 4,
      category: "UPI Basics",
      question:
        "What information do you need to send money to someone using their phone number?",
      options: [
        "Their full name and address",
        "Their bank account number",
        "Just their registered mobile number",
        "Their Aadhaar number",
      ],
      correct: 2,
      explanation:
        "You only need the person's mobile number that is registered with their bank for UPI. The UPI system will find their bank account automatically.",
    },
    {
      id: 5,
      category: "Payment Safety",
      question:
        "Someone calls saying your account is blocked and asks for OTP to unblock it. What should you do?",
      options: [
        "Give them the OTP immediately",
        "Ask them to wait and give OTP later",
        "Hang up and call your bank directly",
        "Ask for their employee ID first",
      ],
      correct: 2,
      explanation:
        "Hang up immediately and call your bank's official number. Banks never ask for OTP over phone. This is a common scam to steal your money.",
    },
    {
      id: 6,
      category: "Receiving Money",
      question:
        "When someone sends you money via UPI, what do you need to do to receive it?",
      options: [
        "Share your bank account details",
        "Give them your UPI PIN",
        "Nothing - money comes automatically",
        "Go to bank to collect it",
      ],
      correct: 2,
      explanation:
        "You don't need to do anything to receive UPI money. Once someone sends money to your UPI ID or phone number, it automatically comes to your bank account.",
    },
    {
      id: 7,
      category: "Bill Payments",
      question: "Which of these bills can you pay using UPI apps?",
      options: [
        "Only electricity bills",
        "Only mobile recharge",
        "Electricity, mobile, gas, water bills",
        "Only government bills",
      ],
      correct: 2,
      explanation:
        "UPI apps allow you to pay almost all types of bills - electricity, mobile recharge, gas cylinder booking, water bills, DTH recharge, and many more services.",
    },
    {
      id: 8,
      category: "Fraud Prevention",
      question:
        "You receive a message saying you won ₹50,000 lottery and need to pay ₹500 as processing fee. What should you do?",
      options: [
        "Pay ₹500 to claim the prize",
        "Ask them to deduct from prize money",
        "Ignore and delete the message",
        "Forward to friends and family",
      ],
      correct: 2,
      explanation:
        "This is a lottery scam. You cannot win a lottery you never entered. Real lotteries never ask for money upfront. Always ignore such messages.",
    },
    {
      id: 9,
      category: "Making Payments",
      question:
        "After making a UPI payment, what confirms that payment was successful?",
      options: [
        "The shopkeeper says 'thank you'",
        "Money disappears from your account",
        "You get SMS and app notification",
        "The QR code disappears",
      ],
      correct: 2,
      explanation:
        "You will receive SMS from your bank and notification in the UPI app confirming successful payment. Always wait for this confirmation before leaving.",
    },
    {
      id: 10,
      category: "Fraud Prevention",
      question:
        "What should you do if you accidentally send money to wrong person?",
      options: [
        "Forget about it - money is lost",
        "Call police immediately",
        "Contact your bank and UPI app support",
        "Send more money to get it back",
      ],
      correct: 2,
      explanation:
        "Contact your bank and UPI app customer support immediately. They can help track the transaction and may be able to reverse it if reported quickly.",
    },
  ];

  const categories = [
    "UPI Basics",
    "Payment Safety",
    "Making Payments",
    "Receiving Money",
    "Bill Payments",
    "Fraud Prevention",
  ];

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answerIndex,
    });
  };

  const handleNext = () => {
    if (showExplanation) {
      setShowExplanation(false);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    } else {
      setShowExplanation(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(false);
    }
  };

  const calculateResults = () => {
    let correct = 0;
    let categoryScores = {};

    categories.forEach((cat) => {
      categoryScores[cat] = { correct: 0, total: 0 };
    });

    questions.forEach((question, index) => {
      const isCorrect = selectedAnswers[index] === question.correct;
      if (isCorrect) correct++;

      categoryScores[question.category].total++;
      if (isCorrect) categoryScores[question.category].correct++;
    });

    return {
      score: correct,
      total: questions.length,
      percentage: Math.round((correct / questions.length) * 100),
      categoryScores,
    };
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setShowExplanation(false);
    setQuizStarted(false);
  };

  const results = showResults ? calculateResults() : null;

  if (!quizStarted) {
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
              <span className="text-2xl">💳</span>
              <div>
                <h1 className="font-bold text-lg text-gray-800">
                  Digital Payments Quiz
                </h1>
                <p className="text-sm text-gray-500">
                  Test your knowledge of UPI and digital payments
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quiz Introduction */}
        <div className="p-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">💳</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Digital Payments Quiz
              </h2>
              <p className="text-gray-600">
                Test your understanding of UPI, payment safety, and digital
                transactions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <span className="text-blue-600 text-xl mr-2">📊</span>
                  <span className="font-medium text-blue-800">
                    Quiz Details
                  </span>
                </div>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• 10 multiple choice questions</li>
                  <li>• Covers all payment topics</li>
                  <li>• Immediate feedback provided</li>
                  <li>• Performance tracking by category</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <span className="text-green-600 text-xl mr-2">🎯</span>
                  <span className="font-medium text-green-800">
                    Topics Covered
                  </span>
                </div>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• UPI basics and setup</li>
                  <li>• Payment safety rules</li>
                  <li>• Making and receiving payments</li>
                  <li>• Fraud prevention</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex items-center mb-2">
                <span className="text-yellow-600 text-xl mr-2">💡</span>
                <span className="font-medium text-yellow-800">
                  Tips for Success
                </span>
              </div>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Read each question carefully</li>
                <li>• Think about real-life payment situations</li>
                <li>• Remember safety rules we learned</li>
                <li>• Don't rush - take your time</li>
              </ul>
            </div>

            <button
              onClick={() => setQuizStarted(true)}
              className="w-full bg-blue-500 text-white py-4 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const getPerformanceColor = (percentage) => {
      if (percentage >= 80) return "text-green-600";
      if (percentage >= 60) return "text-yellow-600";
      return "text-red-600";
    };

    const getPerformanceMessage = (percentage) => {
      if (percentage >= 80)
        return "Excellent! You understand digital payments very well.";
      if (percentage >= 60)
        return "Good job! Review the areas where you missed questions.";
      return "Keep learning! Practice more with digital payments to improve.";
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
              <span className="text-2xl">📊</span>
              <div>
                <h1 className="font-bold text-lg text-gray-800">
                  Quiz Results
                </h1>
                <p className="text-sm text-gray-500">
                  Your digital payments knowledge
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 pb-24">
          {/* Overall Score */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">
                {results.percentage >= 80
                  ? "🎉"
                  : results.percentage >= 60
                  ? "👍"
                  : "📚"}
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Quiz Complete!
              </h2>
              <div
                className={`text-4xl font-bold mb-2 ${getPerformanceColor(
                  results.percentage
                )}`}
              >
                {results.score}/{results.total}
              </div>
              <div
                className={`text-xl font-medium mb-4 ${getPerformanceColor(
                  results.percentage
                )}`}
              >
                {results.percentage}% Correct
              </div>
              <p className="text-gray-600">
                {getPerformanceMessage(results.percentage)}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div
                className={`h-3 rounded-full transition-all duration-500 ${
                  results.percentage >= 80
                    ? "bg-green-500"
                    : results.percentage >= 60
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
                style={{ width: `${results.percentage}%` }}
              ></div>
            </div>
          </div>

          {/* Category Performance */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-xl mr-2">📈</span>
              Performance by Category
            </h3>
            <div className="space-y-4">
              {categories.map((category) => {
                const categoryData = results.categoryScores[category];
                if (categoryData.total === 0) return null;

                const percentage = Math.round(
                  (categoryData.correct / categoryData.total) * 100
                );
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
                        className={`font-bold ${getPerformanceColor(
                          percentage
                        )}`}
                      >
                        {categoryData.correct}/{categoryData.total}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          percentage >= 80
                            ? "bg-green-500"
                            : percentage >= 60
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {percentage}% correct
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-center mb-3">
              <span className="text-blue-600 text-xl mr-2">💡</span>
              <span className="font-medium text-blue-800">What to do next</span>
            </div>
            <div className="space-y-2">
              {results.percentage < 80 && (
                <p className="text-blue-700 text-sm">
                  • Review the digital payments lessons to strengthen your
                  understanding
                </p>
              )}
              <p className="text-blue-700 text-sm">
                • Practice making small payments with family members
              </p>
              <p className="text-blue-700 text-sm">
                • Try other quizzes to test your overall digital skills
              </p>
              <p className="text-blue-700 text-sm">
                • Share your knowledge with friends and family
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={restartQuiz}
              className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-600"
            >
              Take Quiz Again
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <a
                href="/lessons/payments/intro"
                className="bg-gray-100 text-gray-700 py-3 px-4 rounded-lg text-center font-medium hover:bg-gray-200 text-decoration-none"
              >
                Review Lessons
              </a>
              <a
                href="/quiz/smartphone"
                className="bg-green-500 text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-green-600 text-decoration-none"
              >
                Try Another Quiz
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const selectedAnswer = selectedAnswers[currentQuestion];
  const isAnswered = selectedAnswer !== undefined;

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
            <span className="text-2xl">💳</span>
            <div>
              <h1 className="font-bold text-lg text-gray-800">
                Digital Payments Quiz
              </h1>
              <p className="text-sm text-gray-500">
                Question {currentQuestion + 1} of {questions.length}
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
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      <div className="p-6 pb-24">
        {/* Question */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full mb-3">
              {question.category}
            </span>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              {question.question}
            </h2>
          </div>

          {/* Answer Options */}
          <div className="space-y-3 mb-6">
            {question.options.map((option, index) => {
              let buttonClass =
                "w-full p-4 text-left border-2 rounded-lg transition-colors ";

              if (showExplanation) {
                if (index === question.correct) {
                  buttonClass += "border-green-500 bg-green-50 text-green-800";
                } else if (
                  index === selectedAnswer &&
                  index !== question.correct
                ) {
                  buttonClass += "border-red-500 bg-red-50 text-red-800";
                } else {
                  buttonClass += "border-gray-200 bg-gray-50 text-gray-600";
                }
              } else if (selectedAnswer === index) {
                buttonClass += "border-blue-500 bg-blue-50 text-blue-800";
              } else {
                buttonClass +=
                  "border-gray-200 hover:border-gray-300 text-gray-800";
              }

              return (
                <button
                  key={index}
                  onClick={() => !showExplanation && handleAnswerSelect(index)}
                  disabled={showExplanation}
                  className={buttonClass}
                >
                  <div className="flex items-center">
                    <span className="font-medium mr-3">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    <span>{option}</span>
                    {showExplanation && index === question.correct && (
                      <span className="ml-auto text-green-600">✓</span>
                    )}
                    {showExplanation &&
                      index === selectedAnswer &&
                      index !== question.correct && (
                        <span className="ml-auto text-red-600">✗</span>
                      )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div
              className={`rounded-lg p-4 ${
                selectedAnswer === question.correct
                  ? "bg-green-50 border border-green-200"
                  : "bg-red-50 border border-red-200"
              }`}
            >
              <div className="flex items-center mb-2">
                <span
                  className={`text-xl mr-2 ${
                    selectedAnswer === question.correct
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {selectedAnswer === question.correct ? "✅" : "❌"}
                </span>
                <span
                  className={`font-medium ${
                    selectedAnswer === question.correct
                      ? "text-green-800"
                      : "text-red-800"
                  }`}
                >
                  {selectedAnswer === question.correct
                    ? "Correct!"
                    : "Incorrect"}
                </span>
              </div>
              <p
                className={`text-sm ${
                  selectedAnswer === question.correct
                    ? "text-green-700"
                    : "text-red-700"
                }`}
              >
                {question.explanation}
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={`px-6 py-3 rounded-lg font-medium ${
              currentQuestion === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            ← Previous
          </button>

          <button
            onClick={handleNext}
            disabled={!isAnswered}
            className={`px-6 py-3 rounded-lg font-medium ${
              !isAnswered
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            {showExplanation
              ? currentQuestion === questions.length - 1
                ? "See Results"
                : "Next →"
              : "Continue"}
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="flex justify-center space-x-4">
          <a
            href="/quiz/smartphone"
            className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-200 text-decoration-none"
          >
            Smartphone Quiz
          </a>
          <a
            href="/quiz/whatsapp"
            className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-200 text-decoration-none"
          >
            WhatsApp Quiz
          </a>
          <a
            href="/quiz/safety"
            className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-200 text-decoration-none"
          >
            Safety Quiz
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
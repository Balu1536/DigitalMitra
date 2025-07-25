"use client";
import React from "react";

function MainComponent() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [showExamples, setShowExamples] = React.useState(false);
  const [showComparisons, setShowComparisons] = React.useState(false);

  const steps = [
    {
      title: "What is Google?",
      icon: "🔍",
      content:
        "Google is like a very smart person who knows everything about the world. When you ask Google a question, it quickly finds the best answers from millions of books, newspapers, and websites.",
      visual: "🌐",
      tip: "Think of Google as the most knowledgeable person in your village, but who knows about the entire world and can answer any question instantly.",
    },
    {
      title: "How Does Google Work?",
      icon: "🧠",
      content:
        "Google reads and remembers information from websites all over the world. When you search, it looks through all this information and shows you the most helpful answers.",
      visual: "📚",
      tip: "It's like having a librarian who has read every book in the world and can instantly tell you which book has the answer to your question.",
    },
    {
      title: "Why is Google Useful?",
      icon: "✨",
      content:
        "Google helps you find information about anything - weather, news, health, government services, or how to do something. It's like having an expert available 24 hours a day.",
      visual: "🎯",
      tip: "Instead of traveling to different offices or asking many people, you can get answers immediately from your phone.",
    },
    {
      title: "What Can You Search For?",
      icon: "❓",
      content:
        "You can search for anything - today's weather, news about your area, how to cook something, government schemes, hospital locations, or answers to any question you have.",
      visual: "🔎",
      tip: "If you can think of a question, Google probably has an answer. Don't be afraid to ask anything!",
    },
    {
      title: "Understanding Search Results",
      icon: "📋",
      content:
        "When Google shows results, the most helpful answers appear at the top. Each result shows a title, some text, and where the information comes from.",
      visual: "📄",
      tip: "Look for results from trusted sources like government websites, well-known news sites, or official organizations.",
    },
    {
      title: "Google is Free and Always Available",
      icon: "🆓",
      content:
        "Google doesn't cost any money to use. It works day and night, whenever you need information. You just need internet connection on your phone.",
      visual: "⏰",
      tip: "Unlike offices that close or people who might be busy, Google is always ready to help you find information.",
    },
  ];

  const familiarComparisons = [
    {
      concept: "Village Knowledge Keeper",
      traditional: "Ask the most knowledgeable elder in your village",
      google:
        "Google knows information from the entire world, not just your village",
      icon: "👴",
    },
    {
      concept: "Library Visit",
      traditional:
        "Go to library, search through many books to find information",
      google:
        "Google searches through millions of books instantly and shows you the best parts",
      icon: "📚",
    },
    {
      concept: "Asking Multiple People",
      traditional: "Ask different people until someone knows the answer",
      google:
        "Google asks thousands of sources at once and gives you the best answers",
      icon: "👥",
    },
    {
      concept: "Government Office Visit",
      traditional:
        "Travel to government office to get information about schemes",
      google:
        "Google shows you government information without leaving your home",
      icon: "🏛️",
    },
    {
      concept: "Market Price Inquiry",
      traditional: "Visit different shops to compare prices",
      google: "Google shows you prices from many places without visiting them",
      icon: "🏪",
    },
    {
      concept: "Weather Prediction",
      traditional: "Look at sky, ask farmers about weather signs",
      google: "Google gives you accurate weather forecast for next 7 days",
      icon: "🌤️",
    },
  ];

  const searchExamples = [
    {
      category: "Daily Life",
      searches: [
        "Today weather in [your city]",
        "Vegetable prices in market",
        "Bus timings to [destination]",
        "Recipe for [dish name]",
      ],
      icon: "🏠",
    },
    {
      category: "Health Information",
      searches: [
        "Symptoms of fever",
        "Nearest hospital location",
        "Government health schemes",
        "Home remedies for cold",
      ],
      icon: "🏥",
    },
    {
      category: "Government Services",
      searches: [
        "How to apply for Aadhaar card",
        "Ration card online application",
        "PM Kisan scheme benefits",
        "Voter ID card status",
      ],
      icon: "🏛️",
    },
    {
      category: "Education & Learning",
      searches: [
        "How to use smartphone",
        "Learn English words",
        "Children school admission",
        "Government job notifications",
      ],
      icon: "🎓",
    },
    {
      category: "Agriculture & Farming",
      searches: [
        "Best time to plant crops",
        "Weather forecast for farming",
        "Government schemes for farmers",
        "Crop disease treatment",
      ],
      icon: "🌾",
    },
    {
      category: "Local Information",
      searches: [
        "Bank branch near me",
        "ATM locations nearby",
        "Local news today",
        "Festival dates this year",
      ],
      icon: "📍",
    },
  ];

  const searchResultExample = {
    query: "weather today in Mumbai",
    results: [
      {
        title: "Mumbai Weather Today - Temperature & Forecast",
        snippet:
          "Today in Mumbai: 28°C, partly cloudy with light rain expected in evening. Humidity 75%...",
        source: "weather.com",
        type: "weather",
      },
      {
        title: "Mumbai Weather Forecast - India Meteorological Department",
        snippet:
          "Official weather forecast for Mumbai. Current temperature 28°C, maximum 32°C...",
        source: "imd.gov.in",
        type: "government",
      },
      {
        title: "Mumbai Weather Live Updates - Times of India",
        snippet:
          "Live weather updates from Mumbai. Light showers expected, carry umbrella...",
        source: "timesofindia.com",
        type: "news",
      },
    ],
  };

  const googleBenefits = [
    {
      benefit: "Instant Answers",
      description: "Get information in seconds, no waiting or traveling",
      icon: "⚡",
    },
    {
      benefit: "Always Available",
      description: "Works 24/7, even when offices are closed",
      icon: "🕐",
    },
    {
      benefit: "Free to Use",
      description: "No charges for searching, only internet data used",
      icon: "💰",
    },
    {
      benefit: "Multiple Languages",
      description: "Search in Hindi, English, or your local language",
      icon: "🗣️",
    },
    {
      benefit: "Trusted Information",
      description: "Shows results from reliable sources and official websites",
      icon: "✅",
    },
    {
      benefit: "Local Results",
      description: "Finds information specific to your area and location",
      icon: "📍",
    },
    {
      benefit: "Voice Search",
      description: "Speak your question instead of typing",
      icon: "🎤",
    },
    {
      benefit: "Image Search",
      description: "Search using photos or find images of anything",
      icon: "📸",
    },
  ];

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
            <span className="text-2xl">🔍</span>
            <div>
              <h1 className="font-bold text-lg text-gray-800">
                What is Google?
              </h1>
              <p className="text-sm text-gray-500">
                Learn about Google and how search works
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
                    Simple Explanation:
                  </span>
                  <p className="text-blue-700 text-sm mt-1">
                    {steps[currentStep].tip}
                  </p>
                </div>
              </div>
            </div>
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

        {/* Search Result Example */}
        {currentStep === 4 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-xl mr-2">📋</span>
              Example: How Search Results Look
            </h3>

            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-2">🔍</span>
                <span className="font-medium text-gray-800">
                  You searched for: "{searchResultExample.query}"
                </span>
              </div>
            </div>

            <div className="space-y-3">
              {searchResultExample.results.map((result, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 bg-white"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-blue-600 font-medium text-sm hover:underline cursor-pointer">
                      {result.title}
                    </h4>
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        result.type === "government"
                          ? "bg-green-100 text-green-800"
                          : result.type === "weather"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {result.type === "government"
                        ? "Official"
                        : result.type === "weather"
                        ? "Weather"
                        : "News"}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{result.snippet}</p>
                  <p className="text-green-700 text-xs">{result.source}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Information Sections */}
        <div className="space-y-4">
          {/* Familiar Comparisons */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <button
              onClick={() => setShowComparisons(!showComparisons)}
              className="w-full p-4 text-left flex items-center justify-between"
            >
              <div className="flex items-center">
                <span className="text-xl mr-3">🤝</span>
                <span className="font-medium text-gray-800">
                  Google vs Traditional Ways of Finding Information
                </span>
              </div>
              <span className="text-gray-400">
                {showComparisons ? "−" : "+"}
              </span>
            </button>

            {showComparisons && (
              <div className="px-4 pb-4 space-y-4">
                {familiarComparisons.map((comparison, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{comparison.icon}</span>
                      <h4 className="font-medium text-gray-800">
                        {comparison.concept}
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                        <div className="flex items-center mb-2">
                          <span className="text-yellow-600 text-lg mr-2">
                            🏘️
                          </span>
                          <span className="font-medium text-yellow-800">
                            Traditional Way
                          </span>
                        </div>
                        <p className="text-yellow-700 text-sm">
                          {comparison.traditional}
                        </p>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <div className="flex items-center mb-2">
                          <span className="text-blue-600 text-lg mr-2">🔍</span>
                          <span className="font-medium text-blue-800">
                            With Google
                          </span>
                        </div>
                        <p className="text-blue-700 text-sm">
                          {comparison.google}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Search Examples */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <button
              onClick={() => setShowExamples(!showExamples)}
              className="w-full p-4 text-left flex items-center justify-between"
            >
              <div className="flex items-center">
                <span className="text-xl mr-3">💡</span>
                <span className="font-medium text-gray-800">
                  What Can You Search For? - Practical Examples
                </span>
              </div>
              <span className="text-gray-400">{showExamples ? "−" : "+"}</span>
            </button>

            {showExamples && (
              <div className="px-4 pb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {searchExamples.map((category, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl mr-3">{category.icon}</span>
                        <h4 className="font-medium text-gray-800">
                          {category.category}
                        </h4>
                      </div>
                      <div className="space-y-2">
                        {category.searches.map((search, searchIndex) => (
                          <div
                            key={searchIndex}
                            className="bg-white rounded p-2 border border-gray-200"
                          >
                            <p className="text-gray-700 text-sm">"{search}"</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Google Benefits */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <span className="text-green-600 text-xl mr-2">✨</span>
              <span className="font-medium text-green-800">
                Why Google Makes Life Easier
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {googleBenefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg p-3">
                  <div className="flex items-start">
                    <span className="text-lg mr-2">{benefit.icon}</span>
                    <div>
                      <p className="font-medium text-green-800 text-sm mb-1">
                        {benefit.benefit}
                      </p>
                      <p className="text-green-700 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Getting Started */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <span className="text-blue-600 text-xl mr-2">🚀</span>
              <span className="font-medium text-blue-800">
                Ready to Start Using Google?
              </span>
            </div>
            <p className="text-blue-700 text-sm mb-3">
              Now that you understand what Google is and how it works, you're
              ready to start searching! Remember, Google is like having the
              world's smartest helper in your pocket.
            </p>
            <p className="text-blue-700 text-sm">
              Next, we'll learn how to actually search for things using Google -
              typing questions, using voice search, and finding exactly what you
              need.
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
            href="/lessons/google/search"
            className="flex-1 bg-blue-500 text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-blue-600 text-decoration-none"
          >
            Next: Learn to Search
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
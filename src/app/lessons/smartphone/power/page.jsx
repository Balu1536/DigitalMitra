"use client";
import React from "react";

function MainComponent() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [showTips, setShowTips] = React.useState(false);

  const steps = [
    {
      title: "Finding the Power Button",
      icon: "🔍",
      content:
        "Look for the power button on the side of your phone. It's usually a small button that feels different from volume buttons.",
      visual: "📱",
      tip: "The power button is often on the right side, but some phones have it on the left or top.",
    },
    {
      title: "Turning Your Phone ON",
      icon: "⚡",
      content:
        "Press and hold the power button for 3-5 seconds until you see the phone logo or screen lights up.",
      visual: "👆",
      tip: "Don't just tap it quickly - you need to hold it down until something happens on the screen.",
    },
    {
      title: "Phone is Starting Up",
      icon: "🔄",
      content:
        "Wait patiently as your phone starts. You'll see the company logo and then your home screen will appear.",
      visual: "⏳",
      tip: "This can take 30 seconds to 2 minutes. Don't press any buttons while it's starting.",
    },
    {
      title: "Turning Your Phone OFF",
      icon: "🔴",
      content:
        "Press and hold the power button for 3-5 seconds. A menu will appear asking if you want to turn off the phone.",
      visual: "📴",
      tip: "Some phones show 'Power Off' option, others show a slider. Follow what appears on your screen.",
    },
    {
      title: "Understanding Battery Level",
      icon: "🔋",
      content:
        "Look at the top of your screen for the battery icon. When it's green or full, battery is good. When red or nearly empty, charge your phone.",
      visual: "📊",
      tip: "Charge your phone when battery shows 20% or less to keep it healthy.",
    },
    {
      title: "Charging Your Phone",
      icon: "🔌",
      content:
        "Connect the charging cable to your phone and plug the other end into a wall socket or power source.",
      visual: "⚡",
      tip: "Use only the charger that came with your phone or a trusted replacement.",
    },
  ];

  const troubleshootingTips = [
    {
      problem: "Phone won't turn on",
      solution:
        "Try charging for 30 minutes first, then press and hold power button for 10 seconds.",
      icon: "❌",
    },
    {
      problem: "Screen stays black",
      solution:
        "Make sure battery isn't completely dead. Charge for at least 15 minutes before trying again.",
      icon: "⚫",
    },
    {
      problem: "Phone turns off by itself",
      solution:
        "Battery might be very low or damaged. Keep it charged above 20% and avoid extreme heat.",
      icon: "🔄",
    },
  ];

  const batteryCareTips = [
    "Don't let battery go to 0% often - charge when it reaches 20%",
    "Avoid charging overnight every day - unplug when it reaches 100%",
    "Keep phone away from very hot places like direct sunlight",
    "Use original charger or good quality replacement",
    "Turn off phone completely once a week to refresh it",
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
            <span className="text-2xl">📱</span>
            <div>
              <h1 className="font-bold text-lg text-gray-800">
                Phone Power Basics
              </h1>
              <p className="text-sm text-gray-500">
                Learn to turn your phone on/off
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
          {/* Troubleshooting */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <button
              onClick={() => setShowTips(!showTips)}
              className="w-full p-4 text-left flex items-center justify-between"
            >
              <div className="flex items-center">
                <span className="text-xl mr-3">🔧</span>
                <span className="font-medium text-gray-800">
                  What if my phone won't work?
                </span>
              </div>
              <span className="text-gray-400">{showTips ? "−" : "+"}</span>
            </button>

            {showTips && (
              <div className="px-4 pb-4 space-y-3">
                {troubleshootingTips.map((tip, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-start">
                      <span className="text-lg mr-2">{tip.icon}</span>
                      <div>
                        <p className="font-medium text-gray-800 text-sm mb-1">
                          {tip.problem}
                        </p>
                        <p className="text-gray-600 text-sm">{tip.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Battery Care Tips */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <span className="text-green-600 text-xl mr-2">🔋</span>
              <span className="font-medium text-green-800">
                Keep Your Battery Healthy
              </span>
            </div>
            <div className="space-y-2">
              {batteryCareTips.map((tip, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-green-600 mr-2 text-sm">•</span>
                  <p className="text-green-700 text-sm">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Info */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <span className="text-red-600 text-xl mr-2">🚨</span>
              <span className="font-medium text-red-800">
                Emergency Situations
              </span>
            </div>
            <p className="text-red-700 text-sm">
              Even if your phone battery is very low, you can usually still make
              emergency calls to 100 (Police), 101 (Fire), or 108 (Ambulance).
              The phone saves some power for emergencies.
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
            href="/lessons/smartphone/touchscreen"
            className="flex-1 bg-blue-500 text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-blue-600 text-decoration-none"
          >
            Next: Touch Screen
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
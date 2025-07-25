"use client";
import React from "react";

function MainComponent() {
  const [settings, setSettings] = React.useState({
    language: "english",
    notifications: {
      lessonReminders: true,
      progressUpdates: true,
      dailyGoals: false,
      weeklyReports: true,
    },
    display: {
      textSize: "medium",
      darkMode: false,
      highContrast: false,
      animations: true,
    },
    audio: {
      volume: 80,
      speechSpeed: "normal",
      voiceGender: "female",
    },
    download: {
      autoDownload: true,
      wifiOnly: true,
      storageLimit: "2GB",
    },
    privacy: {
      dataSharing: false,
      analytics: true,
      crashReports: true,
    },
    account: {
      name: "User",
      learningGoal: "basic",
      dailyTarget: 30,
    },
    accessibility: {
      screenReader: false,
      gestureSensitivity: "medium",
      largeButtons: false,
      voiceNavigation: false,
    },
  });

  const [activeSection, setActiveSection] = React.useState(null);
  const [showResetConfirm, setShowResetConfirm] = React.useState(false);

  const languages = [
    { code: "english", name: "English", flag: "🇺🇸" },
    { code: "hindi", name: "हिंदी", flag: "🇮🇳" },
    { code: "bengali", name: "বাংলা", flag: "🇧🇩" },
    { code: "tamil", name: "தமிழ்", flag: "🇮🇳" },
    { code: "telugu", name: "తెలుగు", flag: "🇮🇳" },
    { code: "marathi", name: "मराठी", flag: "🇮🇳" },
    { code: "gujarati", name: "ગુજરાતી", flag: "🇮🇳" },
    { code: "kannada", name: "ಕನ್ನಡ", flag: "🇮🇳" },
    { code: "malayalam", name: "മലയാളം", flag: "🇮🇳" },
    { code: "punjabi", name: "ਪੰਜਾਬੀ", flag: "🇮🇳" },
  ];

  const updateSetting = (section, key, value) => {
    setSettings((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }));
  };

  const updateTopLevelSetting = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const resetAllSettings = () => {
    setSettings({
      language: "english",
      notifications: {
        lessonReminders: true,
        progressUpdates: true,
        dailyGoals: false,
        weeklyReports: true,
      },
      display: {
        textSize: "medium",
        darkMode: false,
        highContrast: false,
        animations: true,
      },
      audio: {
        volume: 80,
        speechSpeed: "normal",
        voiceGender: "female",
      },
      download: {
        autoDownload: true,
        wifiOnly: true,
        storageLimit: "2GB",
      },
      privacy: {
        dataSharing: false,
        analytics: true,
        crashReports: true,
      },
      account: {
        name: "User",
        learningGoal: "basic",
        dailyTarget: 30,
      },
      accessibility: {
        screenReader: false,
        gestureSensitivity: "medium",
        largeButtons: false,
        voiceNavigation: false,
      },
    });
    setShowResetConfirm(false);
  };

  const ToggleSwitch = ({ enabled, onChange, label }) => (
    <div className="flex items-center justify-between py-2">
      <span className="text-gray-700 text-sm">{label}</span>
      <button
        onClick={() => onChange(!enabled)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          enabled ? "bg-blue-500" : "bg-gray-300"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            enabled ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );

  const SettingSection = ({ title, icon, children, sectionKey }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="w-full p-4 text-left flex items-center justify-between"
      >
        <div className="flex items-center">
          <span className="text-xl mr-3">{icon}</span>
          <span className="font-medium text-gray-800">{title}</span>
        </div>
        <span className="text-gray-400">
          {activeSection === sectionKey ? "−" : "+"}
        </span>
      </button>
      {activeSection === sectionKey && (
        <div className="px-4 pb-4 border-t border-gray-100">{children}</div>
      )}
    </div>
  );

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
            <span className="text-2xl">⚙️</span>
            <div>
              <h1 className="font-bold text-lg text-gray-800">Settings</h1>
              <p className="text-sm text-gray-500">
                Customize your learning experience
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 pb-24">
        {/* Language Preferences */}
        <SettingSection
          title="Language Preferences"
          icon="🌐"
          sectionKey="language"
        >
          <div className="space-y-3 mt-4">
            <p className="text-gray-600 text-sm mb-3">
              Choose your preferred language for lessons and interface
            </p>
            <div className="grid grid-cols-1 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => updateTopLevelSetting("language", lang.code)}
                  className={`flex items-center p-3 rounded-lg border transition-colors ${
                    settings.language === lang.code
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 bg-white hover:bg-gray-50"
                  }`}
                >
                  <span className="text-2xl mr-3">{lang.flag}</span>
                  <span className="font-medium text-gray-800">{lang.name}</span>
                  {settings.language === lang.code && (
                    <span className="ml-auto text-blue-500">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </SettingSection>

        {/* Notification Settings */}
        <SettingSection
          title="Notification Settings"
          icon="🔔"
          sectionKey="notifications"
        >
          <div className="space-y-3 mt-4">
            <p className="text-gray-600 text-sm mb-3">
              Control when and how you receive notifications
            </p>
            <ToggleSwitch
              enabled={settings.notifications.lessonReminders}
              onChange={(value) =>
                updateSetting("notifications", "lessonReminders", value)
              }
              label="Lesson Reminders"
            />
            <ToggleSwitch
              enabled={settings.notifications.progressUpdates}
              onChange={(value) =>
                updateSetting("notifications", "progressUpdates", value)
              }
              label="Progress Updates"
            />
            <ToggleSwitch
              enabled={settings.notifications.dailyGoals}
              onChange={(value) =>
                updateSetting("notifications", "dailyGoals", value)
              }
              label="Daily Goal Reminders"
            />
            <ToggleSwitch
              enabled={settings.notifications.weeklyReports}
              onChange={(value) =>
                updateSetting("notifications", "weeklyReports", value)
              }
              label="Weekly Progress Reports"
            />
          </div>
        </SettingSection>

        {/* Display Settings */}
        <SettingSection title="Display Settings" icon="🖥️" sectionKey="display">
          <div className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Text Size
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["small", "medium", "large"].map((size) => (
                  <button
                    key={size}
                    onClick={() => updateSetting("display", "textSize", size)}
                    className={`p-2 rounded-lg border text-sm capitalize ${
                      settings.display.textSize === size
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-200 bg-white text-gray-700"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <ToggleSwitch
              enabled={settings.display.darkMode}
              onChange={(value) => updateSetting("display", "darkMode", value)}
              label="Dark Mode"
            />
            <ToggleSwitch
              enabled={settings.display.highContrast}
              onChange={(value) =>
                updateSetting("display", "highContrast", value)
              }
              label="High Contrast"
            />
            <ToggleSwitch
              enabled={settings.display.animations}
              onChange={(value) =>
                updateSetting("display", "animations", value)
              }
              label="Animations"
            />
          </div>
        </SettingSection>

        {/* Audio Settings */}
        <SettingSection title="Audio Settings" icon="🔊" sectionKey="audio">
          <div className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Volume: {settings.audio.volume}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={settings.audio.volume}
                onChange={(e) =>
                  updateSetting("audio", "volume", parseInt(e.target.value))
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Speech Speed
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["slow", "normal", "fast"].map((speed) => (
                  <button
                    key={speed}
                    onClick={() => updateSetting("audio", "speechSpeed", speed)}
                    className={`p-2 rounded-lg border text-sm capitalize ${
                      settings.audio.speechSpeed === speed
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-200 bg-white text-gray-700"
                    }`}
                  >
                    {speed}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Voice Gender
              </label>
              <div className="grid grid-cols-2 gap-2">
                {["female", "male"].map((gender) => (
                  <button
                    key={gender}
                    onClick={() =>
                      updateSetting("audio", "voiceGender", gender)
                    }
                    className={`p-2 rounded-lg border text-sm capitalize ${
                      settings.audio.voiceGender === gender
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-200 bg-white text-gray-700"
                    }`}
                  >
                    {gender}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </SettingSection>

        {/* Download Preferences */}
        <SettingSection
          title="Download Preferences"
          icon="📥"
          sectionKey="download"
        >
          <div className="space-y-4 mt-4">
            <ToggleSwitch
              enabled={settings.download.autoDownload}
              onChange={(value) =>
                updateSetting("download", "autoDownload", value)
              }
              label="Auto-download new lessons"
            />
            <ToggleSwitch
              enabled={settings.download.wifiOnly}
              onChange={(value) => updateSetting("download", "wifiOnly", value)}
              label="Download only on WiFi"
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Storage Limit
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["1GB", "2GB", "5GB"].map((limit) => (
                  <button
                    key={limit}
                    onClick={() =>
                      updateSetting("download", "storageLimit", limit)
                    }
                    className={`p-2 rounded-lg border text-sm ${
                      settings.download.storageLimit === limit
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-200 bg-white text-gray-700"
                    }`}
                  >
                    {limit}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Current Usage:</span>
                <span className="font-medium text-gray-800">1.2 GB</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          </div>
        </SettingSection>

        {/* Privacy Settings */}
        <SettingSection title="Privacy Settings" icon="🔒" sectionKey="privacy">
          <div className="space-y-3 mt-4">
            <p className="text-gray-600 text-sm mb-3">
              Control how your data is used and shared
            </p>
            <ToggleSwitch
              enabled={settings.privacy.dataSharing}
              onChange={(value) =>
                updateSetting("privacy", "dataSharing", value)
              }
              label="Share usage data to improve app"
            />
            <ToggleSwitch
              enabled={settings.privacy.analytics}
              onChange={(value) => updateSetting("privacy", "analytics", value)}
              label="Allow analytics collection"
            />
            <ToggleSwitch
              enabled={settings.privacy.crashReports}
              onChange={(value) =>
                updateSetting("privacy", "crashReports", value)
              }
              label="Send crash reports"
            />
          </div>
        </SettingSection>

        {/* Account Settings */}
        <SettingSection title="Account Settings" icon="👤" sectionKey="account">
          <div className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Display Name
              </label>
              <input
                type="text"
                value={settings.account.name}
                onChange={(e) =>
                  updateSetting("account", "name", e.target.value)
                }
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Learning Goal
              </label>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { value: "basic", label: "Basic Skills (Beginner)" },
                  { value: "intermediate", label: "Intermediate Skills" },
                  { value: "advanced", label: "Advanced Skills" },
                ].map((goal) => (
                  <button
                    key={goal.value}
                    onClick={() =>
                      updateSetting("account", "learningGoal", goal.value)
                    }
                    className={`p-2 rounded-lg border text-sm text-left ${
                      settings.account.learningGoal === goal.value
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-200 bg-white text-gray-700"
                    }`}
                  >
                    {goal.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Daily Learning Target: {settings.account.dailyTarget} minutes
              </label>
              <input
                type="range"
                min="15"
                max="120"
                step="15"
                value={settings.account.dailyTarget}
                onChange={(e) =>
                  updateSetting(
                    "account",
                    "dailyTarget",
                    parseInt(e.target.value)
                  )
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </SettingSection>

        {/* Accessibility Options */}
        <SettingSection
          title="Accessibility Options"
          icon="♿"
          sectionKey="accessibility"
        >
          <div className="space-y-4 mt-4">
            <ToggleSwitch
              enabled={settings.accessibility.screenReader}
              onChange={(value) =>
                updateSetting("accessibility", "screenReader", value)
              }
              label="Screen Reader Support"
            />
            <ToggleSwitch
              enabled={settings.accessibility.largeButtons}
              onChange={(value) =>
                updateSetting("accessibility", "largeButtons", value)
              }
              label="Large Buttons"
            />
            <ToggleSwitch
              enabled={settings.accessibility.voiceNavigation}
              onChange={(value) =>
                updateSetting("accessibility", "voiceNavigation", value)
              }
              label="Voice Navigation"
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gesture Sensitivity
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["low", "medium", "high"].map((sensitivity) => (
                  <button
                    key={sensitivity}
                    onClick={() =>
                      updateSetting(
                        "accessibility",
                        "gestureSensitivity",
                        sensitivity
                      )
                    }
                    className={`p-2 rounded-lg border text-sm capitalize ${
                      settings.accessibility.gestureSensitivity === sensitivity
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-200 bg-white text-gray-700"
                    }`}
                  >
                    {sensitivity}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </SettingSection>

        {/* Help & Support */}
        <SettingSection title="Help & Support" icon="❓" sectionKey="help">
          <div className="space-y-3 mt-4">
            <a
              href="/help/faq"
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 text-decoration-none"
            >
              <div className="flex items-center">
                <span className="text-lg mr-3">📋</span>
                <span className="text-gray-800">
                  Frequently Asked Questions
                </span>
              </div>
              <span className="text-gray-400">→</span>
            </a>

            <a
              href="/help/tutorials"
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 text-decoration-none"
            >
              <div className="flex items-center">
                <span className="text-lg mr-3">🎥</span>
                <span className="text-gray-800">Video Tutorials</span>
              </div>
              <span className="text-gray-400">→</span>
            </a>

            <a
              href="/help/contact"
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 text-decoration-none"
            >
              <div className="flex items-center">
                <span className="text-lg mr-3">📞</span>
                <span className="text-gray-800">Contact Support</span>
              </div>
              <span className="text-gray-400">→</span>
            </a>

            <a
              href="/help/feedback"
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 text-decoration-none"
            >
              <div className="flex items-center">
                <span className="text-lg mr-3">💬</span>
                <span className="text-gray-800">Send Feedback</span>
              </div>
              <span className="text-gray-400">→</span>
            </a>
          </div>
        </SettingSection>

        {/* App Information */}
        <SettingSection title="App Information" icon="ℹ️" sectionKey="info">
          <div className="space-y-4 mt-4">
            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 text-sm">App Version:</span>
                <span className="text-gray-800 text-sm font-medium">2.1.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 text-sm">Storage Used:</span>
                <span className="text-gray-800 text-sm font-medium">
                  1.2 GB
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 text-sm">Last Updated:</span>
                <span className="text-gray-800 text-sm font-medium">
                  July 20, 2025
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 text-sm">
                  Lessons Completed:
                </span>
                <span className="text-gray-800 text-sm font-medium">
                  12 of 48
                </span>
              </div>
            </div>

            <button
              onClick={() => setShowResetConfirm(true)}
              className="w-full p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 font-medium hover:bg-red-100"
            >
              Reset All Settings
            </button>

            <div className="text-center pt-4">
              <p className="text-gray-500 text-xs">
                DigitalMitra - Learn technology in your language
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Made with ❤️ for digital inclusion
              </p>
            </div>
          </div>
        </SettingSection>
      </div>

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <div className="text-center mb-4">
              <span className="text-4xl">⚠️</span>
              <h3 className="text-lg font-bold text-gray-800 mt-2">
                Reset All Settings?
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                This will restore all settings to their default values. Your
                learning progress will not be affected.
              </p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={resetAllSettings}
                className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around">
          <a
            href="/digital-skills-learning"
            className="flex flex-col items-center py-2 px-3 rounded-lg text-gray-600 text-decoration-none"
          >
            <span className="text-xl mb-1">🏠</span>
            <span className="text-xs">Home</span>
          </a>
          <a
            href="/progress"
            className="flex flex-col items-center py-2 px-3 rounded-lg text-gray-600 text-decoration-none"
          >
            <span className="text-xl mb-1">📊</span>
            <span className="text-xs">Progress</span>
          </a>
          <a
            href="/library"
            className="flex flex-col items-center py-2 px-3 rounded-lg text-gray-600 text-decoration-none"
          >
            <span className="text-xl mb-1">📖</span>
            <span className="text-xs">Library</span>
          </a>
          <button className="flex flex-col items-center py-2 px-3 rounded-lg bg-blue-100 text-blue-600">
            <span className="text-xl mb-1">⚙️</span>
            <span className="text-xs">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
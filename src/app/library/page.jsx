"use client";
import React from "react";

function MainComponent() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = React.useState("all");
  const [selectedType, setSelectedType] = React.useState("all");
  const [activeTab, setActiveTab] = React.useState("all");

  const categories = [
    { id: "all", name: "All Categories", icon: "📚" },
    { id: "smartphone", name: "Smartphone Basics", icon: "📱" },
    { id: "whatsapp", name: "WhatsApp", icon: "💬" },
    { id: "google", name: "Google Search", icon: "🔍" },
    { id: "payments", name: "Digital Payments", icon: "💳" },
    { id: "safety", name: "Internet Safety", icon: "🛡️" },
    { id: "government", name: "Government Services", icon: "🏛️" },
  ];

  const difficulties = [
    { id: "all", name: "All Levels" },
    { id: "beginner", name: "Beginner" },
    { id: "intermediate", name: "Intermediate" },
    { id: "advanced", name: "Advanced" },
  ];

  const types = [
    { id: "all", name: "All Types" },
    { id: "video", name: "Video" },
    { id: "interactive", name: "Interactive" },
    { id: "practice", name: "Practice" },
    { id: "quiz", name: "Quiz" },
  ];

  const allLessons = [
    {
      id: 1,
      title: "Turning On/Off Your Phone",
      category: "smartphone",
      type: "video",
      difficulty: "beginner",
      duration: "3 min",
      progress: 100,
      thumbnail: "📱",
      description: "Learn basic phone power operations",
      link: "/lessons/smartphone/power",
      isBookmarked: true,
      isDownloaded: true,
      lastAccessed: "2 hours ago",
    },
    {
      id: 2,
      title: "Using Touch Screen",
      category: "smartphone",
      type: "interactive",
      difficulty: "beginner",
      duration: "5 min",
      progress: 75,
      thumbnail: "👆",
      description: "Master touch gestures and navigation",
      link: "/lessons/smartphone/touchscreen",
      isBookmarked: false,
      isDownloaded: true,
      lastAccessed: "1 day ago",
    },
    {
      id: 3,
      title: "What is Google?",
      category: "google",
      type: "video",
      difficulty: "beginner",
      duration: "3 min",
      progress: 100,
      thumbnail: "🔍",
      description: "Introduction to Google search",
      link: "/lessons/google/intro",
      isBookmarked: true,
      isDownloaded: false,
      lastAccessed: "3 hours ago",
    },
    {
      id: 4,
      title: "Basic Text Search",
      category: "google",
      type: "practice",
      difficulty: "intermediate",
      duration: "8 min",
      progress: 50,
      thumbnail: "🔎",
      description: "Learn to search effectively",
      link: "/lessons/google/search",
      isBookmarked: false,
      isDownloaded: true,
      lastAccessed: "5 days ago",
    },
    {
      id: 5,
      title: "Installing WhatsApp",
      category: "whatsapp",
      type: "video",
      difficulty: "beginner",
      duration: "4 min",
      progress: 0,
      thumbnail: "💬",
      description: "Download and set up WhatsApp",
      link: "/lessons/whatsapp/install",
      isBookmarked: false,
      isDownloaded: false,
      lastAccessed: null,
    },
    {
      id: 6,
      title: "What are Digital Payments?",
      category: "payments",
      type: "video",
      difficulty: "beginner",
      duration: "5 min",
      progress: 100,
      thumbnail: "💳",
      description: "Introduction to digital money",
      link: "/lessons/payments/intro",
      isBookmarked: true,
      isDownloaded: true,
      lastAccessed: "1 hour ago",
    },
    {
      id: 7,
      title: "UPI and Payment Apps",
      category: "payments",
      type: "interactive",
      difficulty: "intermediate",
      duration: "10 min",
      progress: 25,
      thumbnail: "📲",
      description: "Learn about UPI payments",
      link: "/lessons/payments/upi",
      isBookmarked: false,
      isDownloaded: false,
      lastAccessed: "2 days ago",
    },
    {
      id: 8,
      title: "Protecting Personal Information",
      category: "safety",
      type: "video",
      difficulty: "beginner",
      duration: "6 min",
      progress: 100,
      thumbnail: "🔒",
      description: "Keep your data safe",
      link: "/lessons/safety/privacy",
      isBookmarked: true,
      isDownloaded: true,
      lastAccessed: "30 minutes ago",
    },
    {
      id: 9,
      title: "Smartphone Basics Quiz",
      category: "smartphone",
      type: "quiz",
      difficulty: "beginner",
      duration: "5 min",
      progress: 0,
      thumbnail: "❓",
      description: "Test your smartphone knowledge",
      link: "/quiz/smartphone",
      isBookmarked: false,
      isDownloaded: true,
      lastAccessed: null,
    },
    {
      id: 10,
      title: "Aadhaar Services Online",
      category: "government",
      type: "practice",
      difficulty: "intermediate",
      duration: "8 min",
      progress: 0,
      thumbnail: "🆔",
      description: "Access Aadhaar services digitally",
      link: "/lessons/government/aadhaar",
      isBookmarked: false,
      isDownloaded: false,
      lastAccessed: null,
    },
  ];

  const resources = [
    {
      id: 1,
      title: "Digital Skills Quick Reference Guide",
      type: "PDF",
      size: "2.5 MB",
      description: "Complete guide with all lessons summarized",
      downloadUrl: "/downloads/quick-reference.pdf",
      icon: "📄",
    },
    {
      id: 2,
      title: "Safety Checklist",
      type: "PDF",
      size: "1.2 MB",
      description: "Internet safety rules and tips",
      downloadUrl: "/downloads/safety-checklist.pdf",
      icon: "🛡️",
    },
    {
      id: 3,
      title: "Payment Apps Setup Guide",
      type: "PDF",
      size: "3.1 MB",
      description: "Step-by-step UPI setup instructions",
      downloadUrl: "/downloads/payment-setup.pdf",
      icon: "💳",
    },
    {
      id: 4,
      title: "Government Services Directory",
      type: "PDF",
      size: "1.8 MB",
      description: "List of online government services",
      downloadUrl: "/downloads/govt-services.pdf",
      icon: "🏛️",
    },
  ];

  const achievements = [
    {
      id: 1,
      title: "Smartphone Master",
      description: "Completed all smartphone lessons",
      earned: true,
      date: "2 days ago",
      icon: "🏆",
    },
    {
      id: 2,
      title: "Search Expert",
      description: "Mastered Google search techniques",
      earned: true,
      date: "1 week ago",
      icon: "🥇",
    },
    {
      id: 3,
      title: "Safety Champion",
      description: "Completed internet safety course",
      earned: true,
      date: "3 days ago",
      icon: "🛡️",
    },
    {
      id: 4,
      title: "Digital Payment Pro",
      description: "Expert in digital payments",
      earned: false,
      date: null,
      icon: "💎",
    },
  ];

  const filteredLessons = allLessons.filter((lesson) => {
    const matchesSearch =
      lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || lesson.category === selectedCategory;
    const matchesDifficulty =
      selectedDifficulty === "all" || lesson.difficulty === selectedDifficulty;
    const matchesType = selectedType === "all" || lesson.type === selectedType;

    return matchesSearch && matchesCategory && matchesDifficulty && matchesType;
  });

  const getTabLessons = (tab) => {
    switch (tab) {
      case "recent":
        return filteredLessons
          .filter((lesson) => lesson.lastAccessed)
          .sort((a, b) => {
            const timeMap = {
              "30 minutes ago": 0.5,
              "1 hour ago": 1,
              "2 hours ago": 2,
              "3 hours ago": 3,
              "1 day ago": 24,
              "2 days ago": 48,
              "5 days ago": 120,
            };
            return (
              (timeMap[a.lastAccessed] || 999) -
              (timeMap[b.lastAccessed] || 999)
            );
          });
      case "bookmarked":
        return filteredLessons.filter((lesson) => lesson.isBookmarked);
      case "downloaded":
        return filteredLessons.filter((lesson) => lesson.isDownloaded);
      case "completed":
        return filteredLessons.filter((lesson) => lesson.progress === 100);
      case "in-progress":
        return filteredLessons.filter(
          (lesson) => lesson.progress > 0 && lesson.progress < 100
        );
      default:
        return filteredLessons;
    }
  };

  const displayLessons = getTabLessons(activeTab);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "video":
        return "🎥";
      case "interactive":
        return "🎯";
      case "practice":
        return "✋";
      case "quiz":
        return "❓";
      default:
        return "📚";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">📖</span>
            <div>
              <h1 className="font-bold text-lg text-gray-800">
                Learning Library
              </h1>
              <p className="text-sm text-gray-500">
                All your lessons and resources
              </p>
            </div>
          </div>
          <a
            href="/digital-skills-learning"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-decoration-none text-sm"
          >
            Back to Home
          </a>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white border-b p-4 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search lessons, topics, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Filter Dropdowns */}
        <div className="flex flex-wrap gap-3">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.icon} {cat.name}
              </option>
            ))}
          </select>

          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
          >
            {difficulties.map((diff) => (
              <option key={diff.id} value={diff.id}>
                {diff.name}
              </option>
            ))}
          </select>

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
          >
            {types.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b">
        <div className="flex overflow-x-auto">
          {[
            { id: "all", name: "All Lessons", icon: "📚" },
            { id: "recent", name: "Recently Accessed", icon: "🕒" },
            { id: "bookmarked", name: "Bookmarked", icon: "⭐" },
            { id: "downloaded", name: "Downloaded", icon: "📥" },
            { id: "completed", name: "Completed", icon: "✅" },
            { id: "in-progress", name: "In Progress", icon: "⏳" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-3 border-b-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600 bg-blue-50"
                  : "border-transparent text-gray-600 hover:text-gray-800"
              }`}
            >
              <span>{tab.icon}</span>
              <span className="text-sm font-medium">{tab.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 pb-24">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-2xl mb-1">📚</div>
            <div className="text-lg font-bold text-gray-800">
              {allLessons.length}
            </div>
            <div className="text-sm text-gray-600">Total Lessons</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-2xl mb-1">✅</div>
            <div className="text-lg font-bold text-green-600">
              {allLessons.filter((l) => l.progress === 100).length}
            </div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-2xl mb-1">📥</div>
            <div className="text-lg font-bold text-blue-600">
              {allLessons.filter((l) => l.isDownloaded).length}
            </div>
            <div className="text-sm text-gray-600">Downloaded</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-2xl mb-1">⭐</div>
            <div className="text-lg font-bold text-yellow-600">
              {allLessons.filter((l) => l.isBookmarked).length}
            </div>
            <div className="text-sm text-gray-600">Bookmarked</div>
          </div>
        </div>

        {/* Featured Content */}
        {activeTab === "all" && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-xl mr-2">⭐</span>
              Featured & Recommended
            </h2>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    🎯 Complete Your Digital Journey
                  </h3>
                  <p className="text-blue-100 mb-3">
                    You're 75% done! Finish the remaining lessons to earn your
                    certificate.
                  </p>
                  <div className="w-full bg-blue-400 rounded-full h-2 mb-3">
                    <div
                      className="bg-white h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div className="text-4xl">🏆</div>
              </div>
            </div>
          </div>
        )}

        {/* Lessons Grid */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800">
              {activeTab === "all"
                ? "All Lessons"
                : activeTab === "recent"
                ? "Recently Accessed"
                : activeTab === "bookmarked"
                ? "Bookmarked Lessons"
                : activeTab === "downloaded"
                ? "Downloaded Lessons"
                : activeTab === "completed"
                ? "Completed Lessons"
                : "In Progress Lessons"}{" "}
              ({displayLessons.length})
            </h2>
          </div>

          {displayLessons.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                No lessons found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filters
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {displayLessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                >
                  {/* Lesson Thumbnail */}
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 text-center relative">
                    <div className="text-4xl mb-2">{lesson.thumbnail}</div>
                    <div className="absolute top-2 right-2 flex space-x-1">
                      {lesson.isBookmarked && (
                        <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                          ⭐
                        </span>
                      )}
                      {lesson.isDownloaded && (
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                          📥
                        </span>
                      )}
                    </div>
                    <div className="absolute top-2 left-2">
                      <span className="text-lg">
                        {getTypeIcon(lesson.type)}
                      </span>
                    </div>
                  </div>

                  {/* Lesson Content */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(
                          lesson.difficulty
                        )}`}
                      >
                        {lesson.difficulty}
                      </span>
                      <span className="text-xs text-gray-500">
                        {lesson.duration}
                      </span>
                    </div>

                    <h3 className="font-medium text-gray-800 mb-2 line-clamp-2">
                      {lesson.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {lesson.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-500">Progress</span>
                        <span className="text-xs text-gray-500">
                          {lesson.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            lesson.progress === 100
                              ? "bg-green-500"
                              : lesson.progress > 0
                              ? "bg-blue-500"
                              : "bg-gray-300"
                          }`}
                          style={{ width: `${lesson.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Last Accessed */}
                    {lesson.lastAccessed && (
                      <p className="text-xs text-gray-500 mb-3">
                        Last accessed: {lesson.lastAccessed}
                      </p>
                    )}

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <a
                        href={lesson.link}
                        className="flex-1 bg-blue-500 text-white py-2 px-3 rounded-lg text-center text-sm font-medium hover:bg-blue-600 text-decoration-none"
                      >
                        {lesson.progress === 0
                          ? "Start"
                          : lesson.progress === 100
                          ? "Review"
                          : "Continue"}
                      </a>
                      <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                        {lesson.isDownloaded ? "📥" : "⬇️"}
                      </button>
                      <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                        {lesson.isBookmarked ? "⭐" : "☆"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Achievements Section */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
            <span className="text-xl mr-2">🏆</span>
            Certificates & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`rounded-lg p-4 border ${
                  achievement.earned
                    ? "bg-yellow-50 border-yellow-200"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span
                      className={`text-2xl ${
                        achievement.earned ? "" : "grayscale opacity-50"
                      }`}
                    >
                      {achievement.icon}
                    </span>
                    <div>
                      <h3
                        className={`font-medium ${
                          achievement.earned
                            ? "text-yellow-800"
                            : "text-gray-600"
                        }`}
                      >
                        {achievement.title}
                      </h3>
                      <p
                        className={`text-sm ${
                          achievement.earned
                            ? "text-yellow-700"
                            : "text-gray-500"
                        }`}
                      >
                        {achievement.description}
                      </p>
                      {achievement.earned && achievement.date && (
                        <p className="text-xs text-yellow-600 mt-1">
                          Earned {achievement.date}
                        </p>
                      )}
                    </div>
                  </div>
                  {achievement.earned && (
                    <button className="bg-yellow-500 text-white px-3 py-1 rounded text-xs hover:bg-yellow-600">
                      Download
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
            <span className="text-xl mr-2">📄</span>
            Resource Downloads
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white rounded-lg border border-gray-200 p-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <span className="text-2xl">{resource.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800 mb-1">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {resource.description}
                      </p>
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        <span>{resource.type}</span>
                        <span>•</span>
                        <span>{resource.size}</span>
                      </div>
                    </div>
                  </div>
                  <a
                    href={resource.downloadUrl}
                    className="bg-green-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-green-600 text-decoration-none"
                    download
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
            className="flex flex-col items-center py-2 px-3 rounded-lg bg-blue-100 text-blue-600 text-decoration-none"
          >
            <span className="text-xl mb-1">📖</span>
            <span className="text-xs">Library</span>
          </a>
          <a
            href="/settings"
            className="flex flex-col items-center py-2 px-3 rounded-lg text-gray-600 text-decoration-none"
          >
            <span className="text-xl mb-1">⚙️</span>
            <span className="text-xs">Settings</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
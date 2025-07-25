"use client";
import React from "react";



export default function Index() {
  return (function MainComponent({ icon, size }) {
  return (
    <span className={`text-${size}`}>{icon}</span>
  );
}

function StoryComponent() {
  return (
    <div>
      <MainComponent icon="📚" size="2xl" />
    </div>
  );
});
}
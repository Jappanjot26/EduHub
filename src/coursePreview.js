import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";

const CoursePreview = () => {
  const opts = {
    height: "500",
    width: "900",
  };

  const sampleTexts = [
    "01 | Introduction",
    "02 | Why should you choose",
    "03 | My Journey",
    "04 | How important is it?",
    "05 | What is Hierarchy?",
    "06 | 7 Principles of Visual Hierarchy",
    "07 | How to use colors Part 1",
    "08 | How to use colors Part 2",
    "09 | Learn all about Typography",
    "10 | Photoshop vs Illustrator",
    "11 | 5 Habits",
    "12 | Photoshop Interface & Important Shortcuts",
    "13 | Concept of Layers in Photoshop",
    "14 | Creating New Documents in Photoshop",
    "15 | How to create thumbnails like me?",
    "16 | Things you must know before designing",
    "17 | 3 Choices Every Graphic Designer Must Make",
    "18 | Studying Graphic Design vs Self Learning?",
  ];
  const youtubeIds = [
    "U9DDxPBtJNA",
    "oyCbsrlIdR4",
    "GJjCmAhF-VY",
    "NT3f8qn0FwE",
    "Xh7Xp3CJ4Ik",
    "UkHLneqW3Ho",
    "gU2nF0rhJi4",
    "thdjsabtAeo",
    "hrCzD1gYF5o",
    "b2TK6NJ86x0",
    "0-xVtq1XgLM",
    "sljQkenTW3U",
    "knBWAjSVmak",
    "eSjnS0bHa9Y",
    "OhmkVs6-zdM",
    "1rFkigqo6_g",
    "QW6JKiyCv6E",
    "ku_o3qDKJis",
  ];

  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  const handleButtonClick = (index) => {
    setSelectedVideoIndex(index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedVideoIndex]);

  return (
    <div className="course-preview">
      <div className="flex">
        <div className="sidebar">
          {sampleTexts.map((text, index) => (
            <button
              key={index}
              className="side-bar-btns"
              onClick={() => handleButtonClick(index)}
            >
              {text}
            </button>
          ))}
        </div>
        <div className="video-player">
          <div>
            <YouTube videoId={youtubeIds[selectedVideoIndex]} opts={opts} />
            <h2>{sampleTexts[selectedVideoIndex]}</h2>
          </div>
        </div>
      </div>
      <div className="footer">@2024 copyright</div>
    </div>
  );
};

export default CoursePreview;

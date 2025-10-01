// RetroComputerChangelog.jsx
import React, { useState, useEffect } from "react";
import { Window, WindowHeader, WindowContent, ScrollView } from "react95";

export default function RetroComputerChangelog() {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/repos/abdessalamzarrouk/95-Portfolio/commits")
      .then(res => res.json())
      .then(data => setCommits(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "30px"
      }}
    >
      {/* "Computer" Frame */}
      <div
        style={{
          border: "8px solid #999",
          borderRadius: "12px",
          background: "#ccc",
          width: "400px",
          height: "350px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "inset 0 0 10px #555",
        }}
      >
        {/* Screen */}
        <div
          style={{
            flex: 1,
            width: "90%",
            margin: "10px",
            background: "#222",
            padding: "6px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "4px inset #666"
          }}
        >
          <Window style={{ width: "100%", height: "100%" }}>
            <WindowHeader>CHANGELOG.TXT</WindowHeader>
            <WindowContent style={{ padding: 0 }}>
              <ScrollView style={{ height: "230px", background: "white", padding: "6px" }}>
                {commits.slice(0, 8).map(commit => (
                  <div key={commit.sha} style={{ marginBottom: "8px" }}>
                    <b>{commit.commit.author.name}</b>: {commit.commit.message}
                    <br />
                    <small>{new Date(commit.commit.author.date).toLocaleString()}</small>
                  </div>
                ))}
              </ScrollView>
            </WindowContent>
          </Window>
        </div>
        
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { doc, getDoc, updateDoc, onSnapshot } from "firebase/firestore";
import { Window, WindowHeader, WindowContent, Button, ScrollView } from "react95";

export default function Poll() {
  const [votes, setVotes] = useState({});
  const [voted, setVoted] = useState(false); // track if user already voted

  const pollDocRef = doc(db, "polls", "best_os");

  useEffect(() => {
    // Real-time updates
    const unsubscribe = onSnapshot(pollDocRef, snapshot => {
      if (snapshot.exists()) {
        setVotes(snapshot.data());
      }
    });

    return () => unsubscribe();
  }, []);

  const handleVote = async (option) => {
    if (voted) return; // prevent multiple votes

    const currentCount = votes[option] || 0;
    await updateDoc(pollDocRef, { [option]: currentCount + 1 });
    setVoted(true);
  };

  return (
    <Window resizable className="w-full max-w-sm">
      <WindowHeader>
        <span>Best OS Poll</span>
      </WindowHeader>
      <WindowContent>
        <p className="mb-2">Vote for the best OS of all time:</p>
        <div className="flex flex-col gap-2 mb-4">
          {["Windows 95", "Windows XP", "Windows 7"].map(option => (
            <Button
              key={option}
              onClick={() => handleVote(option)}
              disabled={voted}
            >
              {option} ({votes[option] || 0} votes)
            </Button>
          ))}
        </div>

        {voted && (
          <ScrollView style={{ height: 100, background: "#fff", padding: 4 }}>
            <p>Current standings:</p>
            {Object.entries(votes).map(([os, count]) => (
              <p key={os}>
                <b>{os}:</b> {count} votes
              </p>
            ))}
          </ScrollView>
        )}
      </WindowContent>
    </Window>
  );
}

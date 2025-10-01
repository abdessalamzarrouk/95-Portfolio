import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  Timestamp,
} from "firebase/firestore";
import { db } from "./firebase";
import {
  Window,
  WindowHeader,
  WindowContent,
  TextInput,
  Button,
  ScrollView,
  Frame,
} from "react95";

export default function Guestbook() {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); // optional
  const [message, setMessage] = useState("");

  // Fetch entries
  useEffect(() => {
    const q = query(collection(db, "guestbook"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setEntries(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    try {
      await addDoc(collection(db, "guestbook"), {
        name,
        email: email || null,
        message,
        createdAt: Timestamp.now(),
      });
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Error adding entry:", err);
    }
  };

  return (
    <Window className="w-full max-w-md mx-auto">
      <WindowHeader>
        <span>Guestbook.exe</span>
      </WindowHeader>
      <WindowContent>
        {/* Input form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-3">
          <TextInput
            value={name}
            placeholder="Your name..."
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <TextInput
            value={email}
            placeholder="Your email (optional)..."
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <TextInput
            value={message}
            placeholder="Leave a message..."
            onChange={(e) => setMessage(e.target.value)}
            fullWidth
          />
          <Button type="submit">Sign</Button>
        </form>

        {/* Scrollable log */}
        <ScrollView
  style={{
    height: "300px",
    background: "white",
    padding: "4px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  }}
>
  {entries.length === 0 ? (
    <p>No signatures yet.</p>
  ) : (
    entries.map((entry) => (
      <Frame
        key={entry.id}
        variant="outside"
        shadow
        style={{ padding: "0.5rem", width: "100%", boxSizing: "border-box" }}
      >
        <p style={{ margin: 0, fontWeight: "bold", wordBreak: "break-word" }}>
          [{new Date(entry.createdAt?.seconds * 1000).toLocaleString()}]{" "}
          {entry.name} signed the guestbook:
        </p>
        <Frame
          variant="inside"
          style={{
            marginTop: "0.5rem",
            padding: "0.5rem",
            wordBreak: "break-word",
            whiteSpace: "pre-wrap",
          }}
        >
          {entry.message}
          {entry.email && (
            <p
              style={{
                fontSize: "0.8rem",
                color: "gray",
                marginTop: "0.3rem",
                wordBreak: "break-word",
              }}
            >
              Email: {entry.email}
            </p>
          )}
        </Frame>
      </Frame>
    ))
  )}
</ScrollView>

      </WindowContent>
    </Window>
  );
}

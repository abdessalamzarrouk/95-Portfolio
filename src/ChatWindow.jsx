import React, { useState, useEffect, useRef } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  getDocs,
  serverTimestamp,
  updateDoc,
  doc,
  limit,
} from "firebase/firestore";
import { db } from "./firebase";
import {Filter} from "bad-words";
import {
  Window,
  WindowHeader,
  WindowContent,
  Button,
  TextInput,
} from "react95";
import messengerprofile from "./assets/messengerprofile.png";

const MAX_MESSAGES = 50;
const filter = new Filter();

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState(
    () => localStorage.getItem("username") || ""
  );
  const [usernameInput, setUsernameInput] = useState(username);
  const scrollRef = useRef(null);

  // Fetch latest messages
  const fetchMessages = async () => {
    const q = query(
      collection(db, "messages"),
      orderBy("timestamp", "desc"),
      limit(MAX_MESSAGES)
    );
    const snapshot = await getDocs(q);
    const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setMessages(docs.reverse());

    setTimeout(() => {
      if (scrollRef.current)
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, 50);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || !username.trim()) return;

    // Clean message using bad-words
    const cleaned = filter.clean(input);

    await addDoc(collection(db, "messages"), {
      username,
      text: cleaned,
      timestamp: serverTimestamp()
    });

    setInput("");
    fetchMessages();
  };

  const likeMessage = async (id, currentLikes) => {
    const ref = doc(db, "messages", id);
    await updateDoc(ref, { likes: currentLikes + 1 });
    fetchMessages();
  };

  const handleSaveUsername = () => {
    if (usernameInput.trim()) {
      setUsername(usernameInput.trim());
      localStorage.setItem("username", usernameInput.trim());
    }
  };

  const handleChangeName = () => {
    setUsername("");
    setUsernameInput("");
    localStorage.removeItem("username");
  };

  return (
    <Window style={{ width: 400, margin: "20px auto" }}>
      <WindowHeader style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <img
          src={messengerprofile}
          alt="profile"
          style={{ height: 16, width: 16, objectFit: "contain" }}
        />
        MSN Messenger.exe
      </WindowHeader>
      <WindowContent>
        {!username ? (
          <div>
            <p>Enter a username to join chat:</p>
            <TextInput
              value={usernameInput}
              onChange={(e) => setUsernameInput(e.target.value)}
              placeholder="Your name..."
              fullWidth
            />
            <Button
              onClick={handleSaveUsername}
              style={{ marginTop: 5 }}
              disabled={!usernameInput.trim()}
            >
              Save
            </Button>
          </div>
        ) : (
          <>
            <div
              style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}
            >
              <span>
                <b>Logged in as:</b> {username}
              </span>
              <Button size="sm" onClick={handleChangeName}>
                Change Name
              </Button>
            </div>

            {/* Scrollable chat area with Windows 95–style scrollbar */}
            {/* Scrollable chat area */}
<div
  ref={scrollRef}
  style={{
    height: 300,
    background: "white",
    padding: 4,
    overflowY: "auto",
    border: "2px solid #c3c7cb",
    boxShadow: "inset 1px 1px #fff, inset -1px -1px #808080",
  }}
  className="win95-scrollbar"
>
  {messages.map((msg) => (
    <div
      key={msg.id}
      style={{
        display: "flex",
        justifyContent: "flex-start",
        marginBottom: 2,
      }}
    >
      <p
        style={{
          fontSize: 12,
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
          maxWidth: "100%",
        }}
      >
        <b>{msg.username}:</b> {msg.text}
      </p>
    </div>
  ))}
</div>


            <div style={{ display: "flex", gap: 5, marginTop: 5 }}>
              <TextInput
                    value={input}
                    onChange={(e) => {
                    if (e.target.value.length <= 100) {  // limit to 200 chars
                    setInput(e.target.value);
                        }
                    }}
                    placeholder="Type a message..."
                    fullWidth
                />
              <Button onClick={sendMessage} disabled={!input.trim()}>
                    Send    
            </Button>
            </div>
          </>
        )}
      </WindowContent>

      {/* Windows 95 scrollbar styling */}
      <style>
        {`
          /* Webkit browsers */
          .win95-scrollbar::-webkit-scrollbar {
            width: 16px;
          }
          .win95-scrollbar::-webkit-scrollbar-track {
            background: #c3c7cb;
            box-shadow: inset 1px 1px #fff, inset -1px -1px #808080;
          }
          .win95-scrollbar::-webkit-scrollbar-thumb {
            background: #808080;
            border: 2px solid #c3c7cb;
            box-shadow: inset 1px 1px #fff, inset -1px -1px #404040;
          }
          /* Firefox */
          .win95-scrollbar {
            scrollbar-color: #808080 #c3c7cb;
            scrollbar-width: auto;
          }
        `}
      </style>
    </Window>
  );
}

// src/pages/HomePage.jsx
import React from 'react';
import { Window, WindowContent, WindowHeader, Panel } from 'react-windows-xp';

function HomePage() {
  return (
    <Window style={{ width: 600, height: 400, margin: '50px auto' }}>
      <WindowHeader>
        <span role='img' aria-label='🏠'>🏠</span> My Portfolio - Home
      </WindowHeader>
      <WindowContent>
        <h2>Welcome to my XP-themed Portfolio!</h2>
        <p>Hello! I'm [Your Name], a passionate React developer.</p>
        <Panel variant="well" style={{ padding: '10px', marginTop: '20px' }}>
          <p>This section acts as your desktop, ready to launch applications.</p>
        </Panel>
        <p style={{ marginTop: '20px' }}>Use the Start Menu to navigate.</p>
      </WindowContent>
    </Window>
  );
}
export default HomePage;

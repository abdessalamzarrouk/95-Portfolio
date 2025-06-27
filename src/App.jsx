import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import {
  AppBar,
  MenuList,
  MenuListItem,
  Separator,
  styleReset,
  Button,
  TextInput,
  Toolbar,
  Window,
  WindowHeader,
  WindowContent,
  ScrollView,
  Tab,
  Tabs
} from 'react95';

import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import blue from 'react95/dist/themes/blue';

import logo from './assets/winxp.png';
import psx_graphics from './assets/psx_graphics.gif';
import user_icon from './assets/address_book_user.png';
import computer_explorer from './assets/computer_explorer.png'


const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal;
  }
  body {
    font-family: 'ms_sans_serif';
    background-color: rgb(127, 179, 235);
    margin: 0;
    padding-top: 150px; /* increased */
    box-sizing: border-box;
  }
`;

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={blue}>
        {/* Fixed AppBar */}
        <AppBar className="fixed top-0 left-0 w-full z-50">
          <Toolbar className="flex justify-between px-4">
            <div className="relative inline-block">
              <Button
                onClick={() => setOpen(!open)}
                active={open}
                style={{ fontWeight: 'bold' }}
              >
                <img src={logo} alt="win xp logo" className="h-5 mr-1" />
                Start
              </Button>

              {open && (
                <MenuList
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '100%',
                    zIndex: 999,
                    minWidth: '200px',
                  }}
                  onClick={() => setOpen(false)}
                >
                  <MenuListItem className="flex items-center gap-2" onClick={() => window.open('https://github.com/abdessalamzarrouk')}>
                     GitHub Profile
                  </MenuListItem>
                  <MenuListItem>My Account</MenuListItem>
                  <Separator />
                  <MenuListItem disabled>Logout</MenuListItem>
                </MenuList>
              )}
            </div>
            <TextInput placeholder="Search..." width={150} />
          </Toolbar>
        </AppBar>

        {/* Main content */}
        <main className="w-full min-h-screen px-4 flex flex-col items-center bg-[rgb(127, 179, 235)]">
          {/* Hero Section */}
          <section className="mb-10 max-w-2xl w-full text-center pt-5">

            <h1 className="text-4xl font-bold underline mb-4">
             Hi, I’m Abdessalam Zarrouk!
             </h1>
             <h2 className="text-3xl font-bold mb-4">
           <img src={user_icon} alt="user logo" className="h-5 mr-1" size='50px' /> A passionate software engineer and lifelong learner
             </h2>
             <p className="text-lg text-gray-700">
            <img src={computer_explorer} alt="user logo" className="h-5 mr-1" size='50px' /> I enjoy building creative projects, solving problems, and exploring new technologies.  
              This portfolio showcases some of my work and interests.
             </p>
          </section>

          <Separator size='1200px' className="flex justify-center" />

          {/* Grid Windows Layout */}
          <section className="w-full flex justify-center mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-4 max-w-screen-xl w-full">
              {/* About Window */}
              <Window className="w-full max-w-sm overflow-hidden">
                <WindowHeader>
                  <span>About.txt</span>
                </WindowHeader>
                <WindowContent>
                  <ScrollView style={{ width: '100%', height: 200 }}>
                    <p>React95 is the best UI library ever created.</p>
                    <p>Styled with Tailwind, your layout stays responsive.</p>
                    <p>Try resizing your browser to see it in action!</p>
                    <p>You can even use the Start menu above.</p>
                  </ScrollView>
                </WindowContent>
              </Window>

              {/* PSX Graphics Window */}
              <Window className="w-full max-w-sm overflow-hidden">
                <WindowHeader>
                  <span>psx_graphics.gif</span>
                </WindowHeader>
                <WindowContent>
                  <img src={psx_graphics} alt="PSX Graphics" className="w-full" />
                </WindowContent>
              </Window>

              {/* Funny GIF Window */}
              <Window className="w-full max-w-sm overflow-hidden">
                <WindowHeader>
                  <span>funny.gif</span>
                </WindowHeader>
                <WindowContent>
                  <img
                    src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDBhcnBtNW1lZ2lyOTY4bnM0Z2J4OGVidnB1OTJlbHRwYnJwZmw1aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VKdoCR31r5EYM/giphy.webp"
                    alt="Funny GIF"
                    className="w-full"
                  />
                </WindowContent>
              </Window>
            </div>
          </section>
        </main>
      </ThemeProvider>
    </>
  );
}

import React, { useState, useEffect } from 'react';
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
  Tabs,
  ProgressBar,
  Handle,
  Tooltip
} from 'react95';

import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import blue from 'react95/dist/themes/blue';

import logo from './assets/winxp.png';
import psx_graphics from './assets/psx_graphics.gif';
import user_icon from './assets/address_book_user.png';
import computer_explorer from './assets/computer_explorer.png';
import clippy_gif from "./assets/clippynew.gif";
import clippy from "./assets/clippy.png"

import mySound from './assets/audio.mp3';

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
    padding-top: 150px;
    box-sizing: border-box;
  }
`;

function LoaderScreen({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [dots, setDots] = useState('');


  useEffect(() => {
    const timer = setInterval(() => {
      setPercent(prev => {
        const next = Math.min(prev + Math.random() * 15, 100);
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
        }
        return next;
      });
    }, 300);
    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const dotTimer = setInterval(() => {
      setDots(prev => (prev.length < 3 ? prev + '.' : ''));
    }, 500);
    return () => clearInterval(dotTimer);
  }, []);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgb(127, 179, 235)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'ms_sans_serif, sans-serif',
        color: 'black',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transform: 'translateY(-20%)', 
        }}
      >
        <div style={{ fontSize: '18px', marginBottom: '16px' }}>Loading{dots}</div>
        <ProgressBar variant="tile" value={Math.floor(percent)} style={{ width: 300 }} />
      </div>
    </div>
  );
}
function HoverSwap(){
            const [hovered, setHovered] = React.useState(false);
            return(
              <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
              {hovered ? <img src={clippy_gif}/> : <img src={clippy}/>}
              </div>
            );
          }


export default function App() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  
  return (
    <>
      <GlobalStyles /> 
      {loading ? (
        <LoaderScreen onComplete={() => setLoading(false)} />
      ) : (
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
                  <MenuListItem
                    className="flex items-center gap-2"
                    onClick={() => window.open('https://github.com/abdessalamzarrouk', '_blank')}
                  >
                    GitHub Profile
                  </MenuListItem>
                  <MenuListItem>My Account</MenuListItem>
                  <Separator />
                  <MenuListItem>
                    <Tooltip text='You are stuck here 🤷‍' enterDelay={100} leaveDelay={500}>
                      Logout   
                    </Tooltip>
                  </MenuListItem>
   
                </MenuList>
              )}
            </div>
            <a href="#Projects">
              <Button variant="menu">Current Projects</Button>
            </a>  
            <Handle size={38} />
            <Button variant='menu'>About Me</Button>
            <Handle size={38} />
            <Button variant='menu'>Skills</Button>
            <Handle size={38} />
            <Button variant='menu'>Contact info</Button>
            <TextInput placeholder="Search..." width={150} />


          </Toolbar>
        </AppBar>
        <audio src={mySound} autoPlay loop />
        {/* Main content */}
        <main className="w-full min-h-screen px-4 flex flex-col items-center bg-[rgb(127,179,235)]">
          {/* Hero Section */}
          <section className="mb-10 max-w-2xl w-full text-center pt-5">
            <h1 className="text-4xl font-bold underline mb-4">
              Hi, I’m Abdessalam Zarrouk!
            </h1>
            <h2 className="text-3xl font-bold mb-4 flex justify-center items-center gap-2">
              <Tooltip text="Yes that's me." enterDelay={100} leaveDelay={100}>
                      <img src={user_icon} alt="user logo" className="h-8 "/> 
              </Tooltip>
              A passionate software engineer and lifelong learner
            </h2>
            <p className="text-lg text-gray-700 flex justify-center items-center gap-2">
              <img src={computer_explorer} alt="computer icon" className="h-7" />
              I enjoy building creative projects, solving problems, and exploring new technologies.
              This portfolio showcases some of my work and interests.
            </p>
          </section>

          <Separator size="1200px" className="flex justify-center mb-4" />

          <h1 className="text-4xl font-bold mt-10">
              Current Projects :
            </h1>

          {/* Grid Windows Layout */}
          <section className="w-full flex justify-center mt-10 mb-14" id="Projects">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-4 max-w-screen-xl w-full">
              
              <Window className="w-full max-w-sm overflow-hidden transition-transform duration-300 hover:scale-110">
                <a href="https://github.com/abdessalamzarrouk/ShieldOps">
                <WindowHeader>
                  <span>ShieldOps.txt</span>
                </WindowHeader>
                <WindowContent>     
                    <p>Progress : Under Construction  </p> <ProgressBar variant='tile' value={Math.floor(30)} />
                </WindowContent>
                <WindowContent>
                  <ScrollView style={{ width: '100%', height: 150 }}>
                    <p>This is an <span className='font-bold'>academic project</span> that is dedicated to learning how to set up a CI/CD pipeline that will include some
                      <span className='font-bold'> cybersecurity</span> features like code and dependency vulnerabilities detection and prevention.
                    </p>
                  </ScrollView>
                </WindowContent>
                <WindowContent>
                  <ScrollView style={{ width: '100%', height: 66 }}>
                    <p>
                      <span className="text-[#00AC9F] font-bold">Tools used : </span> Docker, Jenkins, OWASP ZAP, Snyk, Trivy, SonarQube.
                    </p>
                  </ScrollView>
                </WindowContent>
                </a>
              </Window>
             

              <Window className="w-full max-w-md overflow-hidden transition-transform duration-300 hover:scale-110">
                <a href="https://github.com/abdessalamzarrouk/PSX_GRAPHICS">
                <WindowHeader>
                  <span>psx_graphics.txt</span>
                </WindowHeader>
                <WindowContent>
                  <img src={psx_graphics} alt="PSX Graphics" className="w-full mb-5" />
                    <p>This is a <span className="text-[#DF0024] font-bold">Play</span><span className="text-[#f3c300] font-bold">Station</span> <span className='font-bold'>1</span> game development project where i 
                    showcase some of the demonstrations i made using the infamous <span className='font-bold'>Psygnosis Source Development Kit</span> (Psy-Q).</p>
                    <p><span className="text-[#00AC9F] font-bold">Tools used :</span>  Psy-Q SDK, ARMIPS, Make, mkpsxiso.</p>
                </WindowContent>
                </a>
              </Window>


              <Window className="w-full max-w-sm overflow-hidden transition-transform duration-300 hover:scale-110">
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

        <Separator size="1200px" className="flex justify-center mb-4" />






        </main>
      </ThemeProvider>)}; 
    </>
  );
}

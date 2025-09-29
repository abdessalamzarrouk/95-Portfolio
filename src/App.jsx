import React, { useState, useEffect,useRef } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import FallingStars from './FallingStars';
import {
  AppBar,
  MenuList,
  MenuListItem,
  Frame,
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
  Tooltip,
  Select
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
import granturismo from './assets/granturismo.gif';

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
  .close-icon {
  display: block;
  width: 16px;
  height: 16px;
  position: relative;
}

.close-icon::before,
.close-icon::after {
  content: '';
  position: absolute;
  background-color: black; /* the X color */
  top: 50%;
  left: 50%;
  transform-origin: center;
}

.close-icon::before {
  width: 2px;
  height: 100%;
  transform: translate(-50%, -50%) rotate(45deg);
}

.close-icon::after {
  width: 2px;
  height: 100%;
  transform: translate(-50%, -50%) rotate(-45deg);
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

  const [starsEnabled, setStarsEnabled] = React.useState(true);

  const [windowSize, setWindowSize] = useState({ width: 700, height: 550});
  const WindowX = (visualViewport.width - windowSize.width) / 2;
  const WindowY = (visualViewport.height - windowSize.height) / 2;
  const [windowPos, setWindowPos] = useState({ x: WindowX, y: WindowY });
  
  const [activeTab, setActiveTab] = useState('p1');

  const dragRef = useRef({ isDragging: false, startX: 0, startY: 0 });

  const [audioOn, setAudioOn] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (audioOn) {
        audioRef.current.muted = false;
        audioRef.current
          .play()
          .catch(() => {
            // Ignore autoplay block errors
          });
      } else {
        audioRef.current.pause();
      }
    }
  }, [audioOn]);

  useEffect(() => {
  const onMouseMove = e => {
    // Dragging
    if (dragRef.current.isDragging) {
      const dx = e.clientX - dragRef.current.startX;
      const dy = e.clientY - dragRef.current.startY;
      setWindowPos(prev => ({ x: prev.x + dx, y: prev.y + dy }));
      dragRef.current.startX = e.clientX;
      dragRef.current.startY = e.clientY;
    }
  };

  const onMouseUp = () => {
    dragRef.current.isDragging = false;
    resizeRef.current.isResizing = false;
  };

  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
  return () => {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };
}, []);


  const options = [
  { label: 'Me', value: 'p1' },
  { label: 'Hobbies', value: 'p2' }
  ];

  const onChange = (selectedOption) => {
    setActiveTab(selectedOption.value)
  };
  
  return (
    <>
      <GlobalStyles /> 
      {loading ? (
        <ThemeProvider theme={blue}>
        <LoaderScreen onComplete={() => setLoading(false)} />
        </ThemeProvider>
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
                  <MenuListItem
                  className="flex items-center gap-2"
                    onClick={() => window.open('https://www.linkedin.com/in/abdessalam-zarrouk/', '_blank')}
                    >
                      LinkedIn Profile
                  </MenuListItem>
                  <MenuListItem
                    onClick={() => setStarsEnabled(prev => !prev)}
                  >
                    {starsEnabled ? 'Remove Stars' : 'Show Stars'}
                  </MenuListItem>
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
            <a href="#About">
            <Button variant='menu'>About Me</Button>
            </a>
            <Handle size={38} />
            <a href="#Skills">
            <Button variant='menu'>Skills</Button>
            </a>
            <Handle size={38} />
            <Button variant='menu'>Contact info</Button>
            <Handle size={38} />
            <Button
              variant="menu"
              onClick={() => setAudioOn(prev => !prev)}
              style={{ minWidth: 110 }}
              title={audioOn ? 'Click to mute' : 'Enable background music'}
            >
              {audioOn ? 'Sound: On' : 'Sound: Off'}
            </Button>
            <TextInput placeholder="Search..." width={150} />


          </Toolbar>
        </AppBar>
        <FallingStars enabled={starsEnabled} />
        <audio ref={audioRef} src={mySound} loop muted={!audioOn} />
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

          <h1 className="text-4xl font-bold mt-10"  id="Projects">
              Current Projects :
            </h1>

          {/* Grid Windows Layout */}
          <section className="w-full flex justify-center mt-10 mb-14">
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
                  <span>ThreadTalk.txt</span>
                </WindowHeader>
                <WindowContent>     
                    <p>Progress : Under Construction  </p> <ProgressBar variant='tile' value={Math.floor(0)} />
                </WindowContent>
                <WindowContent>
                  <ScrollView style={{ width: '100%', height: 115 }}>
                    <p>This is an idea that I had in mind. It's basically an inspiration from <span className="font-bold">Reddit</span> that involves users discussing about <span className="font-bold">topics</span> that they are interested in and <span className="font-bold">sharing opinions</span>.</p>
                  </ScrollView>
                </WindowContent>
              </Window>
            </div>
          </section>

        <Separator size="1200px" className="mt-14 flex justify-center mb-4" />

          <section className="mb-10 w-full text-center pt-5 mt-10 h-full min-h-[85vh]" id="About">
            <div className="relative flex justify-center w-full items-center">
    
            <div className="absolute left-0 flex items-center h-full">
              <HoverSwap />
            </div>

              
            <div className="max-w-2xl text-center">
              <h1 className="text-4xl font-bold mb-4">
                About Me
              </h1>
              <Select      
              formatDisplay={opt => `${opt.label ? opt.label : "CANNOT RETRIEVE VALUES"}`}      
              onChange={onChange}
              options={options}      
              width={220}
              />

              {activeTab === 'p1' && ( 
              <Window
                resizable
                className='window mb-4'
                style={{
                  position: 'absolute',
                  left: windowPos.x,
                  top: windowPos.y,
                  width: windowSize.width,
                  height: windowSize.height,
                }}
              >
                <WindowHeader
                  className="window-title flex justify-between items-center"
                  style={{ paddingRight: '4px', cursor: 'move' }}
                  onMouseDown={e => {
                    dragRef.current.isDragging = true;
                    dragRef.current.startX = e.clientX;
                    dragRef.current.startY = e.clientY;
                  }}
                >
                  <span>Me.exe</span>
                  <Button size="sm" style={{ padding: 0, width: '23px', height: '23px' }}>
                    <span className="close-icon" />
                  </Button>
                </WindowHeader>
                
                <Toolbar>
                  <Button variant='menu' size='sm'>File</Button>
                  <Button variant='menu' size='sm'>Edit</Button>
                  <Button variant='menu' size='sm' disabled>Save</Button>
                </Toolbar>
                
                <WindowContent>
                  <p>
                   From <span className="font-bold">tinkering with computers as a kid</span> to <span className="font-bold">building complex software projects</span> today, I’ve always been fascinated by how <span className="font-bold">technology</span> can solve real problems. I’m <span className="font-bold">Abdessalam Zarrouk</span>, and I love <span className="font-bold">learning</span>, <span className="font-bold">experimenting</span>, and <span className="font-bold">sharing my journey</span> through the projects I build.
                  </p>
                  <br />
                  <p>
                   My experience with computers first started with an <span className="font-bold">old Dell Optiplex</span>, where I first learned about <span className="font-bold">Windows XP</span>. Then I moved on to an <span className="font-bold">HP Compaq DC7600</span>, which was an upgrade from the Dell (mostly good and bad). It was then that I learned that desktop computers get dusty and need some RAM cleaning from time to time, which was frustrating. This was the first computer where I experienced <span className="font-bold">online gaming</span> with the surge of modems and broadband connections. I remember playing games like <span className="font-bold">Counter-Strike 1.6</span> and <span className="font-bold">Minecraft</span> when they first blew up.
                  </p>
                  <br />
                  <p>
                    Fast forward about 13 years, I purchased my first laptop, a <span className="font-bold">Dell Latitude E5450</span>, which was a beast when coupled with a good <span className="font-bold">SSD</span>. It was then that I started learning <span className="font-bold">programming</span> with languages like <span className="font-bold">Python, C, C++, and Java</span>. I also learned about <span className="font-bold">web development</span> and how the <span className="font-bold">internet</span> works. I started building <span className="font-bold">small projects</span> and <span className="font-bold">experimenting with different technologies</span>. Even today, I cherish those moments with that Dell and HP desktop—those were the <span className="font-bold">foundations of my passion</span>.
                  </p>
                </WindowContent>
                
                {/* Resize handle */}
                <Frame
                  variant="well"
                  style={{
                    width: '16px',
                    height: '16px',
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                    cursor: 'se-resize',
                  }}
                />
              </Window>
              )}

              {activeTab === 'p2' && (
                <Window
                resizable
                className='window mb-4'
                style={{
                  position: 'absolute',
                  left: windowPos.x,
                  top: windowPos.y,
                  width: windowSize.width,
                  height: windowSize.height,
                }}
              >
                <WindowHeader
                  className="window-title flex justify-between items-center"
                  style={{ paddingRight: '4px', cursor: 'move' }}
                  onMouseDown={e => {
                    dragRef.current.isDragging = true;
                    dragRef.current.startX = e.clientX;
                    dragRef.current.startY = e.clientY;
                  }}
                >
                  <span>Hobbies.exe</span>
                  <Button size="sm" style={{ padding: 0, width: '23px', height: '23px' }}>
                    <span className="close-icon" />
                  </Button>
                </WindowHeader>
                
                <Toolbar>
                  <Button variant='menu' size='sm'>File</Button>
                  <Button variant='menu' size='sm'>Edit</Button>
                  <Button variant='menu' size='sm' disabled>Save</Button>
                </Toolbar>
                
                <WindowContent>
                  <p>
                    Not a car expert, but the 
                    <span className="font-bold text-sky-700"> BMW M3 E92 </span>
                    and 
                    <span className="font-bold text-indigo-700"> M3 GTR </span>
                    grabbed me—the high‑revving V8 and that 
                    <span className="font-semibold text-rose-600"> whining gear‑change sound </span>
                    just hits the right mix of character.
                  </p>
                  <br />
                  <p>
                    I enjoy <span className="font-semibold text-emerald-600">GT3 sim racing</span> in 
                    <span className="font-bold text-red-600"> Assetto Corsa</span>, dialing in pacing, braking points, and smooth inputs. That tweak → test → repeat loop feels like refactoring code.
                  </p>
                  <br />
                  <p>
                    I also make beats—mainly 
                    <span className="font-bold text-amber-600"> Hip Hop</span> and 
                    <span className="font-bold text-fuchsia-600"> 90s House</span>. Chopping samples, shaping 
                    <span className="font-semibold text-slate-800"> drums</span>, and balancing 
                    <span className="font-semibold text-teal-600"> basslines</span> sharpen timing, pattern recognition, and iteration.
                  </p>
                  <br />
                  <p className="font-semibold">
                    A few games that shaped how I think:
                  </p>
                  <ul className="mt-1 mb-3 pl-5 list-disc">
                    <li>
                      <b className="text-red-600">Assetto Corsa:</b> Precision & discipline.
                    </li>
                    <li>
                      <b className="text-yellow-600">Counter-Strike 1.6:</b> Fast decisions & teamwork.
                    </li>
                    <li>
                      <b className="text-green-600">Minecraft:</b> Open-ended building & experimentation.
                    </li>
                  </ul>
                  <p>
                    These hobbies keep me 
                    <span className="font-semibold text-blue-700"> curious</span>, 
                    <span className="font-semibold text-purple-700"> patient</span>, and comfortable 
                    <span className="font-semibold text-emerald-700"> iterating</span>.
                  </p>
                  <br />
                  <ScrollView style={{
                      width: 250,
                      height: 115,
                      margin: '0 auto',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                   <img src={granturismo} alt="granturismo.gif" />
                  </ScrollView>
                </WindowContent>
                
                {/* Resize handle */}
                <Frame
                  variant="well"
                  style={{
                    width: '16px',
                    height: '16px',
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                    cursor: 'se-resize',
                  }}
                />
              </Window>)}

            </div>

          </div>
        </section>

        <Separator size="1200px" className="mt-14 flex justify-center mb-4" />
                  
          <section className="mb-10 w-full text-center pt-5 mt-10 h-full" id="Skills">
            <div className="relative flex justify-center w-full items-center">
                  
              <div className="max-w-2xl text-center">
                <h1 className="text-4xl font-bold mb-4">
                  Skills 
                </h1>


              </div>

          </div>
        </section>
                  

        </main>
      </ThemeProvider>)}
    </>
  );
}

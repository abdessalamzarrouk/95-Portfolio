import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useState} from 'react';
import { AppBar, MenuList, MenuListItem, Separator, styleReset } from 'react95';
// original Windows95 font (optionally)
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import logo from "./assets/winxp.png";
import psx_graphics from "./assets/psx_graphics.gif";
import github_logo from "./assets/github-mark.svg"
import {Button, TextInput, Toolbar,Window,WindowHeader,WindowContent,Tooltip,ScrollView} from "react95";
import blue from 'react95/dist/themes/blue';
import close_icon from 'react95/dist/'


const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
    background-color : white;
  }
`;
export default function App(){
const [open, setOpen] = useState(false)


return (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={blue}> 
     <AppBar>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: 'bold' }}
          >
            <img
              src={logo}
              alt='react95 logo'
              style={{ height: '20px', marginRight: 4 }}
            />
            Start
          </Button>
          {open && (
            <MenuList
              style={{
                position: 'absolute',
                left: '0',
                top: '100%'
              }}
              onClick={() => setOpen(false)}
            >
              <MenuListItem>
                <span role='img' aria-label='👨‍💻'>
                  <img src={github_logo} style={{ height: '29px',paddingTop:'10px' }}/>
                </span>
                Profile
              </MenuListItem>
              <MenuListItem>
                <span role='img' aria-label='📁'>
                  📁
                </span>
                My account
              </MenuListItem>
              <Separator />
              <MenuListItem disabled>
                <span role='img' aria-label='🔙'>
                  🔙
                </span>
                Logout
              </MenuListItem>
              <MenuListItem>
              <Tooltip text='I see you! 🤷‍' enterDelay={100} leaveDelay={500}>
                <Button>Hover me</Button>
              </Tooltip>
              </MenuListItem>
            </MenuList>
          )}
        </div>

        <TextInput placeholder='Search...' width={150} />
      </Toolbar>
    </AppBar>

    <Window>
      <WindowContent>
        <ScrollView style={{ width: '300px', height: '200px' }}>
          <div>
            <p style={{ width: 600 }}>
              React95 is the best UI library ever created
            </p>
            <p>React95 is the best UI library ever created</p>
            <p>React95 is the best UI library ever created</p>
            <p>React95 is the best UI library ever created</p>
            <p>React95 is the best UI library ever created</p>
            <p>React95 is the best UI library ever created</p>
            <p>React95 is the best UI library ever created</p>
            <p>React95 is the best UI library ever created</p>
            <p>React95 is the best UI library ever created</p>
          </div>
        </ScrollView>
      </WindowContent>
    </Window>

 <Window className='window' style={{marginLeft : '200px'}}>
       <WindowHeader className='window-title'>
         <span>PSX_GRAPHICS</span>
       </WindowHeader>
       
       <WindowContent>
         <img src={psx_graphics}
         width="300px"></img>
       </WindowContent>
      </Window>

      <Window  className='window'>
       <WindowHeader className='window-title'>
         <span>PSX_GRAPHICS</span>
       </WindowHeader>
       
       <WindowContent>
         <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDBhcnBtNW1lZ2lyOTY4bnM0Z2J4OGVidnB1OTJlbHRwYnJwZmw1aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VKdoCR31r5EYM/giphy.webp"
         width="300px"></img>
       </WindowContent>


  </Window>



    </ThemeProvider>
  </div>
);
}


import React, { useState, useEffect } from 'react';

export default function BSOD({ onReboot }) {
  const [dumpProgress, setDumpProgress] = useState(0);

  useEffect(() => {
    // Animate the memory dump progress
    const dumpTimer = setInterval(() => {
      setDumpProgress(prev => {
        if (prev >= 100) {
          clearInterval(dumpTimer);
          // Start the reboot timer only after the dump is complete
          setTimeout(onReboot, 1500); 
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Adjust speed of the dump here

    return () => {
      clearInterval(dumpTimer);
    };
  }, [onReboot]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#0000AA',
        color: 'white',
        fontFamily: 'monospace',
        padding: '20px',
        zIndex: 9999,
        lineHeight: '1.2',
      }}
    >
      <p>A problem has been detected and Windows has been shut down to prevent damage to your computer.</p>
      <br />
      <p>PORTFOLIO_CRASH_LOL</p>
      <br />
      <p>If this is the first time you've seen this stop error screen, restart your computer. If this screen appears again, follow these steps:</p>
      <br />
      <p>Check to be sure you have adequate disk space. If a driver is identified in the stop message, disable the driver or check with the manufacturer for driver updates. Try changing video adapters.</p>
      <br />
      <p>Check with your hardware vendor for any BIOS updates. Disable BIOS memory options such as caching or shadowing. If you need to use Safe Mode to remove or disable components, restart your computer, press F8 to select Advanced Startup Options, and then select Safe Mode.</p>
      <br />
      <p>Technical information:</p>
      <br />
      <p>*** STOP: 0x000000FE (0x00000008, 0x00000006, 0x00000009, 0x84C6657C)</p>
      <br />
      <p>***   just_kidding.sys - Address 84C6657C base at 84C66000, DateStamp 48025c27</p>
      <br />
      <p>Beginning dump of physical memory...</p>
      <p>Physical memory dump: {dumpProgress}</p>
      {dumpProgress === 100 && (
        <>
          <p>Physical memory dump complete.</p>
          <p>Contact your system administrator or technical support group for further assistance. Just kidding, rebooting now...</p>
        </>
      )}
    </div>
  );
}
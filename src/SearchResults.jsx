import React from 'react';
import { Window, WindowHeader, WindowContent, Button, ScrollView } from 'react95';

const scrollToElement = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function SearchResults({ searchTerm, results, onClose }) {
  return (
    <Window
      style={{
        width: 400,
        position: 'fixed',
        top: '15%',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 101,
      }}
    >
      <WindowHeader className="flex justify-between items-center">
        <span>Results for "{searchTerm}"</span>
        <Button size="sm" onClick={onClose} style={{ marginRight: '-6px', marginTop: '-5px' }}>
          <span className="close-icon" />
        </Button>
      </WindowHeader>
      <WindowContent>
        {results.length > 0 ? (
          <ScrollView style={{ height: '150px' }}>
            <ul>
              {results.map((result) => (
                <li key={result.sectionId} style={{ marginBottom: '8px' }}>
                  <Button
                    onClick={() => {
                      scrollToElement(result.sectionId);
                      onClose();
                    }}
                    fullWidth
                  >
                    Found in: <strong>{result.sectionTitle}</strong>
                  </Button>
                </li>
              ))}
            </ul>
          </ScrollView>
        ) : (
          <p>No results found.</p>
        )}
      </WindowContent>
    </Window>
  );
}


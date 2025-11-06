import { useState, useEffect } from 'react';
import type { JournalEntry } from './types'; 
import EntryForm from './components/EntryForm';
import EntryList from './components/EntryList';
import './App.css';
import EntryModal from './components/EntryModal';
import ThemeToggle from './components/ThemeToggle';

const getInitialTheme = (): string => {
  const savedTheme = localStorage.getItem("journalTheme");
  return savedTheme ? savedTheme : 'light';
};

function App() {
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    const savedEntries = localStorage.getItem("journalEntries");
    if (savedEntries) {
      return JSON.parse(savedEntries);
    } else {
      return [];
    }
  });

  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);
  
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem("journalTheme", theme);
    document.body.className = theme + '-theme';
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("journalEntries", JSON.stringify(entries));
  }, [entries]);


  const handleAddEntry = (text: string) => {
    const newEntry: JournalEntry = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      text: text,
    };
    setEntries([newEntry, ...entries]);
  };

  const handleDeleteEntry = (id: string) => {
    const updatedEntries = entries.filter(entry => entry.id !== id);
    setEntries(updatedEntries);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <h1 style={{textAlign: 'left'}}>LOG</h1>
      
      <div className="home-container">
        <div className="form-box">
          <h2>New Entry</h2>
          <EntryForm onAddEntry={handleAddEntry} />
        </div>

        <div className="list-box">
          <h2>Your Entries</h2>
          <EntryList entries={entries} onDeleteEntry={handleDeleteEntry} onViewEntry={setSelectedEntry}/>
        </div>
      </div>

      {selectedEntry && (
        <EntryModal 
          entry={selectedEntry} 
          onClose={() => setSelectedEntry(null)} 
        />
      )}
    </div>
  );
}

export default App;

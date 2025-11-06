import { useState } from 'react';

// Define the props this component expects
interface EntryFormProps {
  onAddEntry: (text: string) => void; // It expects a function
}

function EntryForm({ onAddEntry }: EntryFormProps) {
  // Its own local state for the input
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Stop the page from reloading
    if (!text.trim()) return; // Don't add empty entries

    onAddEntry(text); // Call the function passed from App
    setText("");      // Clear the textarea
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's on your mind?"
        rows={5}
        style={{ width: '100%', display: 'block', boxSizing: 'border-box' }}
      />
      <button type="submit" style={{ width: '100%' }}>Save Entry</button>
    </form>
  );
}

export default EntryForm;
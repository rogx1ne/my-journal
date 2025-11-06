import type { JournalEntry } from '../types';

interface EntryModalProps {
  entry: JournalEntry;
  onClose: () => void; 
}

function EntryModal({ entry, onClose }: EntryModalProps) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        <h3>{new Date(entry.date).toLocaleString()}</h3>
        
        <p className="modal-text">{entry.text}</p>
        
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default EntryModal;
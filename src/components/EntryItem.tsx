import type { JournalEntry } from '../types';

interface EntryItemProps {
  entry: JournalEntry;
  onDelete: (id: string) => void;
  onView: (entry: JournalEntry) => void; 
}

function EntryItem({ entry, onDelete, onView }: EntryItemProps) {
  return (
    <div 
      className="entry-item" 
      style={{ border: '1px solid gray', padding: '10px', margin: '10px 0', cursor: 'pointer' }}
      onClick={() => onView(entry)} 
    >
      <small>{new Date(entry.date).toLocaleString()}</small>
      <p style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {entry.text}
      </p>
      
      <button onClick={(e) => {
        e.stopPropagation(); 
        onDelete(entry.id);
      }}>
        Delete
      </button>
    </div>
  );
}

export default EntryItem;
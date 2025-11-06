import type { JournalEntry } from '../types';
import EntryItem from './EntryItem';

interface EntryListProps {
  entries: JournalEntry[];
  onDeleteEntry: (id: string) => void;
  onViewEntry: (entry: JournalEntry) => void; 
}

function EntryList({ entries, onDeleteEntry, onViewEntry }: EntryListProps) {
  if (entries.length === 0) {
    return <p>No entries yet. Write one!</p>;
  }

  return (
    <div className="entry-list">
      {entries.map((entry) => (
        <EntryItem
          key={entry.id}
          entry={entry}
          onDelete={onDeleteEntry}
          onView={onViewEntry} 
        />
      ))}
    </div>
  );
}

export default EntryList;
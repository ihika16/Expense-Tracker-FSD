import { FaInbox } from 'react-icons/fa';

export default function EmptyState({ message }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-gray-500">
      <FaInbox className="text-6xl mb-4 text-gray-400" />
      <p className="text-xl font-medium">{message}</p>
    </div>
  );
}

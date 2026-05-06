import { useState } from "react";
import { Input } from "../../input/Input";

export default function AddServiceModal() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, date, location });
  };

  return (
    <form id="title-form" className="space-y-4 mb-5" onSubmit={handleSubmit}>
      <h1 className="text-2xl sm:text-3xl font-bold text-black">
        Create New Service
      </h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <select
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="px-4 py-2 rounded-lg border border-black font-secondary w-full"
          >
            <option value="">Select a title</option>
            <option value="Service">Service</option>
            <option value="Meeting">Meeting</option>
            <option value="Event">Event</option>
            <option value="Celebration">Celebration</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="px-4 py-2 rounded-lg border border-black font-secondary w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Dropdown
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="px-4 py-2 rounded-lg border border-black font-secondary w-full"
          >
            <option value="">Select location</option>
            <option value="Main Hall">Main Hall</option>
            <option value="Conference Room">Conference Room</option>
            <option value="Auditorium">Auditorium</option>
            <option value="Prayer Room">Prayer Room</option>
          </select>
        </div>
      </div>
    </form>
  );
}

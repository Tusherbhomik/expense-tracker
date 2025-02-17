"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CustomDatePicker({ onChange }: { onChange: (date: Date) => void }) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      onChange(date);
    }
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      className="p-2 border rounded w-full"
      dateFormat="yyyy-MM-dd"
      placeholderText="Select a date"
    />
  );
}

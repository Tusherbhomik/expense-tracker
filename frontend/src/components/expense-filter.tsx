"use client";

import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import CustomDatePicker from "@/components/ui/date-picker";
import { format } from "date-fns";

export default function ExpenseFilter({
  onFilterChange,
}: {
  onFilterChange: (filters: { category: string; startDate: string; endDate: string }) => void;
}) {
  const [category, setCategory] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleFilter = () => {
    onFilterChange({
      category,
      startDate: startDate ? format(startDate, "yyyy-MM-dd") : "",
      endDate: endDate ? format(endDate, "yyyy-MM-dd") : "",
    });
  };

  return (
    <div className="flex flex-wrap gap-4 items-center bg-white p-4 shadow rounded-md">
      {/* Category Filter */}
      <div>
        <label className="block text-sm mb-1">Category</label>
        <Select onValueChange={setCategory}>
          <SelectTrigger>
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
          <SelectItem value="All">All Categories</SelectItem>
            <SelectItem value="Food">Food</SelectItem>
            <SelectItem value="Transport">Transport</SelectItem>
            <SelectItem value="Entertainment">Entertainment</SelectItem>
            <SelectItem value="Shopping">Shopping</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Start Date */}
      <div>
        <label className="block text-sm mb-1">Start Date</label>
        <CustomDatePicker onChange={setStartDate} />
      </div>

      {/* End Date */}
      <div>
        <label className="block text-sm mb-1">End Date</label>
        <CustomDatePicker onChange={setEndDate} />
      </div>

      {/* Apply Filter Button */}
      <Button onClick={handleFilter} className="mt-6">Apply Filter</Button>
    </div>
  );
}

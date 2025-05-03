import { Button } from "@/components/ui/button";
import { CPUPart } from "@/lib/types";
import React, { useEffect, useState } from "react";


interface CPUSearchProps {
  cpus: CPUPart[];
  onResults: (results: CPUPart[]) => void;
}

const CPUPicker: React.FC<CPUSearchProps> = ({cpus, onResults}) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResult, setsearchResult]  = useState<CPUPart[]>(cpus)

  const performSearch = (query: string) => {
    if (!query.trim()) {
      setsearchResult(cpus)
      onResults(cpus)
      return
    }
    const results = cpus.filter(cpu => cpu.name.toLowerCase().includes(query.toLowerCase()));
    setsearchResult(results)
    onResults(results)

  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query)
    performSearch(query)
  }

  const clearSearch = () => {
    setSearchQuery('')
    setsearchResult(cpus)
    onResults(cpus)
  }

  useEffect(() => {
    setsearchResult(cpus)
  }, [cpus])

  return (
    <section className="w-50 h-50 bg-gradient-to-b from-blue-500 to-teal-400 rounded-md">
      <label htmlFor="cpu-picker">CPU</label>
      <input
        name="cpu-picker"
        type="text"
        placeholder="Search CPU by title"
        value={searchQuery}
        onChange={handleSearchChange}
        className="bg-sky-400/80 rounded-md"
      />
      {searchQuery && (
        <Button variant={"ghost"} size={"icon"} className="" onClick={clearSearch}>Clear</Button>
      )}

      <div className="">
        <p className="text-sm text-purple-900">
          {searchResult.length}
          {searchResult.length === 1 ? 'Result:': 'Results:'} Found

          {searchQuery && `For "${searchQuery}"`}
        </p>
      </div>
    </section>
  );
};

export default CPUPicker;

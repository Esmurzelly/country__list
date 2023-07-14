import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {
  search: string;
  setSearch: (value: string) => void;
}

const Search = ({ search, setSearch }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  return (
    <label className='bg-primary_dark dark:bg-secondary_dark py-3 px-8 flex items-center rounded-lg shadow-3xl w-full mb-0 sm:mb-6 sm:w-[280px] dark:shadow-3xl_dark'>
      <MagnifyingGlassIcon className="w-3.5 h-3.5 mr-3 dark:text-primary_dark" />
      <input
        type="text"
        className="focus:outline-none text-primary w-full text-sm dark:bg-secondary_dark dark:text-primary_dark"
        placeholder="Search for a country"
        value={search}
        onChange={handleChange}
      />
    </label>
  )
}

export default Search
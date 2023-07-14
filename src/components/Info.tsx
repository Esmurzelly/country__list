import { useState, useEffect } from "react";
import axios from "axios";
import { filterByCode } from '@/config';
import { Country } from "@/models/models";

const Info = ({
  name,
  nativeName,
  flag,
  capital,
  population,
  region,
  subregion,
  topLevelDomain,
  currencies,
  languages,
  borders = [],
  navigate }: Country) => {
  const [neighbours, setNeighbours] = useState([]);

  useEffect(() => {
    if (borders.length) {
      axios.get(filterByCode(borders)).then(
        ({ data }) => setNeighbours(data.map((c: { name: string; }) => c.name))
      )
    }
  }, [borders]);

  return (
    <div
      className="flex flex-col gap-8 mt-8 w-full sm:flex-row sm:items-center sm:gap-20 dark:text-primary_dark"
    >
      <img className="max-w-[600px] object-contain" src={flag} alt="flag" />

      <div>
        <h1 className="m-0 font-medium text-3xl">{name}</h1>
        <div className="flex flex-col gap-8 mt-1 md:flex-row md:gap-16">
          <ul className="list-none m-0 p-0">
            <li className="leading-7"><b className="font-bold">Native Name:</b> {nativeName}</li>
            <li className="leading-7"><b className="font-bold">Population:</b> {population.toLocaleString()}</li>
            <li className="leading-7"><b className="font-bold">Region:</b> {region}</li>
            <li className="leading-7"><b className="font-bold">Subregion:</b> {subregion}</li>
            <li className="leading-7"><b className="font-bold">Capital:</b> {capital}</li>
          </ul>

          <ul className="list-none m-0 p-0">
            <li className="leading-7"><b className="font-bold">Top Level Domain:</b> {topLevelDomain.map(d => (<span key={d}>{d}</span>))}</li>
            <li>
              <b>Currency: </b>
              {currencies.map((c) => (
                <span key={c.code}>{c.name} </span>
              ))}
            </li>
            <li className="leading-7"><b className="font-bold">Languages:</b> {languages.map(l => (<span key={l.name}>{l.name} </span>))}</li>
          </ul>
        </div>

        <div className="flex flex-col items-start gap-6 mt-12 sm:flex-row sm:items-center">
          <b className="font-bold">Border Countries</b>
          {!borders.length ? (
            <span>There is no border countries</span>
          ) : (
            <div className="flex flex-wrap gap-4">
              {neighbours.map(b => (
                <span className="px-4 bg-secondary shadow-md leading-6 cursor-pointer rounded-md dark:bg-secondary_dark dark:text-primary_dark dark:shadow-3xl" key={b} onClick={() => navigate(`/country/${b}`)}>{b} </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Info
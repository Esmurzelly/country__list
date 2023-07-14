import { useState, useEffect } from 'react'
import { Region } from '@/models/models';
import { Options } from '@/models/models';
import Search from './Search';
import CustomSelect from './CustomSelect';

type Props = {
  onSearh: (search: string, regionValue: any) => void;
}

const options:Array<Options> = [
  {value: 'Africa', label: 'Africa'},
  {value: 'America', label: 'America'},
  {value: 'Asia', label: 'Asia'},
  {value: 'Europe', label: 'Europe'},
  {value: 'Oceania', label: 'Oceania'},
];

const Controls = ({ onSearh }: Props) => {
  const [search, setSearch] = useState<string>('');
  const [region, setRegion] = useState<Region>();

  useEffect(() => {
    const regionValue = region?.value || '';
    onSearh(search, regionValue);
  }, [search, region]);

  const handleChange = (selectedOption: Options) => {
    setRegion(selectedOption);
  };

  return (
    <div className='flex flex-col justify-between items-start sm:flex-row sm:items-center sm:justify-between'>
      <Search search={search} setSearch={setSearch} />
      <div className='mt-6 border-none bg-secondary shadow-3xl sm:mt-0 dark:bg-secondary_dark dark:text-primary_dark dark:shadow-3xl_dark'>
        <CustomSelect options={options} onChange={handleChange} />
      </div>   
    </div>
  )
}

export default Controls
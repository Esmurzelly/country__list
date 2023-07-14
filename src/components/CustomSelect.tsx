import { useContext } from 'react';
import Select, { components } from 'react-select';
import { Options, SelectOptions } from '@/models/models';
import { ThemeContext } from './ThemeProvider';

interface CustomSelectProps {
    options: SelectOptions[];
    onChange: (selectedOption: Options) => void;
}

const CustomSelect = ({ options, onChange }: CustomSelectProps) => {
    const { theme } = useContext(ThemeContext);
    const { ClearIndicator } = components;

    const handleChange = (selectedOption: any) => {
        onChange(selectedOption)
    }

    const selectStyles = {
        control: (provided: any) => ({
            ...provided,
            backgroundColor: theme === 'dark' ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
            color: theme === 'dark' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)',
            border: 'none',
            borderRadius: '5px',
            outline: 'none',
            height: '50px',
            boxShadow: theme === 'dark' ? '0 0 0 2px hsl(209, 23%, 22%)' : '0 0 0 2px hsl(0, 0%, 100%)',

        }),
        option: (provided: any) => ({
            ...provided,
            backgroundColor: theme === 'dark' ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
            color: theme === 'dark' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)',
            cursor: 'pointer',
        }),
        singleValue: (provided: any) => ({
            ...provided,
            color: theme === 'dark' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)',
        }),
        clearIndicator: (provided: any) => ({
            ...provided,
            color: theme === 'dark' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)', // Изменяем цвет крестика в зависимости от темы
        }),
    }

    return (
        <div className={`text-primary w-[180px]`}>
            <Select
                styles={selectStyles}
                options={options}
                onChange={handleChange}
                components={{ ClearIndicator }}
                isClearable
                placeholder="Filter by Region"
            />
        </div>
    )
}

export default CustomSelect
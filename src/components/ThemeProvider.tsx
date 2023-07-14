import { useEffect, useState, createContext } from 'react';
import { MoonIcon } from '@heroicons/react/24/solid';
export const ThemeContext = createContext<any>(null);

type Props = {
    children: React.ReactNode
}


const ThemeProvider = ({ children }: Props) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme]);

    const handleSwitchTeme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <ThemeContext.Provider value={{ theme, handleSwitchTeme }}>
            <div className='flex px-11 bg-secondary shadow-3xl dark:bg-secondary_dark dark:shadow-3xl_dark'>
                <div className='w-full max-w-[1240px] mx-auto py-8'>
                    <div className='mx-auto flex justify-between items-center text-sm'>
                        <h2 className='text-primary dark:text-primary_dark font-bold'>Where is the world?</h2>

                        <div onClick={handleSwitchTeme} className='flex gap-3 items-center cursor-pointer'>
                            <MoonIcon className='w-5 h-5' color={theme === 'dark' ? "#fff" : "#000"} />

                            <span className='text-primary dark:text-primary_dark'>{theme.charAt(0).toUpperCase() + theme.slice(1)} Theme</span>
                        </div>
                    </div>
                </div>
            </div>
            {children}
        </ThemeContext.Provider>

    )
}

export default ThemeProvider
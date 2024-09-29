import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define theme types
export type ThemeType = 'light' | 'dark';

// Define the store state type
interface ThemeStore {
    theme: ThemeType;
    toggleTheme: () => void;
}

// Create the theme store with Zustand and TypeScript
const useThemeStore = create<ThemeStore>()(
    persist(
        (set) => ({
            theme: 'light', // Default theme
            toggleTheme: () =>
                set((state) => ({
                    theme: state.theme === 'light' ? 'dark' : 'light',
                })),
        }),
        {
            name: 'theme', // Name of the storage key
        }
    )
);

export default useThemeStore;

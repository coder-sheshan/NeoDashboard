import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ThemeType = 'light' | 'dark';

interface ThemeStore {
    theme: ThemeType;
    toggleTheme: () => void;
}

const useThemeStore = create<ThemeStore>()(
    persist(
        (set) => ({
            theme: 'light',
            toggleTheme: () =>
                set((state) => ({
                    theme: state.theme === 'light' ? 'dark' : 'light',
                })),
        }),
        {
            name: 'theme',
        }
    )
);

export default useThemeStore;

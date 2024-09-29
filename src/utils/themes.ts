export const THEME_TYPES = {
    THEME_DARK: 'dark',
    THEME_LIGHT: 'light',
};
export const applyThemePreference = (theme: string) => {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
    } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
    }
};

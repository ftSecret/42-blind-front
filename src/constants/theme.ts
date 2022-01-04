export const DARK_THEME = 'dark' as const;
export const LIGHT_THEME = 'light' as const;

export type ThemeType = {
  value: typeof DARK_THEME | typeof LIGHT_THEME;
};

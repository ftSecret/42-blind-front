export const DARK_THEME = 'dark' as const;
export const LIGHT_THEME = 'light' as const;

export interface ThemeType {
  value: typeof DARK_THEME | typeof LIGHT_THEME;
}

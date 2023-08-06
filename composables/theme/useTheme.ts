import { useThemeStore } from '@/pinia/theme/useThemeStore';
export function useTheme() {
  const { theme } = useThemeStore();

  return {
    theme,
  };
}


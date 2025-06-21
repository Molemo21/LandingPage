'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ 
  children, 
  attribute = "class", 
  defaultTheme = "system", 
  enableSystem = true,
  disableTransitionOnChange = false
}: ThemeProviderProps) {
  return (
    <NextThemesProvider 
      attribute={attribute} 
      defaultTheme={defaultTheme} 
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
    >
      {children}
    </NextThemesProvider>
  );
}

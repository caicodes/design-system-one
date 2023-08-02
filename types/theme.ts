export interface Theme {
  // colorMode and themeName from current state...
  colorMode: any
  themeName: any
  // setup basics for theme...
  color: {
    modes: {
      light: {}
      dark: {}
    }
  }
  // access to base objects of all providers...
  colors: {} // for max access via js/scss
  spacing: {}
  typography: {}
}


const themeContext = React.createContext()

 const ThemeProvider = themeContext.Provider;
  const ThemeConsumer = themeContext.Consumer;

const themeObject = {
  light: {
    color: "black",
    backgroundColor: "white",
  },
  dark: {
    color: "white",
    backgroundColor: "black",
  }
}

 const useTheme = () => {
  return React.useContext(themeContext)
}
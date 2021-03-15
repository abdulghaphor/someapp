import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globals";
import darkModeStore from "./darkModeStore";
import { observer } from "mobx-react";
import { Route, Switch } from "react-router";
import Navigation from "./components/Navigation";
import routes from "./assets/routes";
function App() {
  const theme = {
    dark: {
      backgroundColor: "black",
      color: "white",
    },
    light: {
      backgroundColor: "white",
      color: "black",
    },
  };

  return (
    <ThemeProvider
      theme={darkModeStore.isDarkMode === true ? theme.dark : theme.light}
    >
      <GlobalStyle />
      <Navigation routes={routes} />
      <Switch>
        {routes.map((cv) => (
          <Route path={cv.path} exact={cv.exact ? true : false}>
            {cv.component}
          </Route>
        ))}
      </Switch>
    </ThemeProvider>
  );
}

export default observer(App);

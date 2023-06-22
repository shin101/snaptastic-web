import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  createHttpLink,
  makeVar,
} from "@apollo/client";
import routes from "./screens/routes";
import { setContext } from "@apollo/client/link/context";

const TOKEN = "TOKEN";
const DARK_MODE = "DARK_MODE";

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));
export const logUserIn = (token) => {
  localStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
};
export const LogUserOut = (navigate) => {
  localStorage.removeItem(TOKEN);
  isLoggedInVar(false);
  navigate(routes.home, { replace: true });
};
export const darkModeVar = makeVar(
  Boolean(localStorage.getItem(DARK_MODE) === "enabled")
);

export const enableDarkMode = () => {
  localStorage.setItem(DARK_MODE, "enabled");
  darkModeVar(true);
};

export const disableDarkMode = () => {
  localStorage.removeItem(DARK_MODE);
  darkModeVar(false);
};

const httpLink = createHttpLink({
  uri:
    process.env.NODE_ENV === "production"
      ? "https://snaptastic.onrender.com"
      : "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  // we return previous headers + new token in the local storage
  return { headers: { ...headers, token: localStorage.getItem(TOKEN) } };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

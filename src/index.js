import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Character from "./components/character/character";
import Episode from "./components/episode/episode";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<h2>Failure is inevitable, don't be down try again later..</h2>
  },
  {
    path: "character/:id",
    element: <Character/>,
    errorElement:<h2>Failure is inevitable, don't be down try again later..</h2>
  },
  {
    path: "episode/:id",
    element: <Episode/>,
    errorElement:<h2>Failure is inevitable!, don't be down try again later..</h2>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();

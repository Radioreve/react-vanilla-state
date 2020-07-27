import React from "react";
import "./styles.css";

interface AppProps {
  name?: string;
}

export const App: React.FC<AppProps> = ({ name }) => (
  <p>Hello {name || "Léo"}</p>
);

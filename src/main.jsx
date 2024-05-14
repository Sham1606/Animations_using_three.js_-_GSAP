import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import * as Sentry from "@sentry/react";
import { Integrations,BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://9df2464f530c787220f3395ce7cb1a2d@o4506942478286848.ingest.us.sentry.io/4506949900500992",
  integrations: [
    new Integrations.BrowserTracing(),
    new Sentry.Integrations.GlobalHandlers({
      onerror: false,
      onunhandledrejection: true,
    }),
  ],
  tracesSampleRate: 1.0,
  debug: true,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

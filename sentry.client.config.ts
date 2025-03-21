// // This file configures the initialization of Sentry on the client.
// // The config you add here will be used whenever a users loads a page in their browser.
// // https://docs.sentry.io/platforms/javascript/guides/nextjs/

// "use client";
// import * as Sentry from "@sentry/nextjs";

// Sentry.init({
//   dsn: "https://4481b2dc930720c2956d3b711ea32cc7@o4508909049413632.ingest.us.sentry.io/4508909056622592",

//   // Add optional integrations for additional features
//   integrations: [
//     Sentry.replayIntegration(),
//     Sentry.feedbackIntegration({
//       // Additional SDK configuration goes in here, for example:
//       colorScheme: "dark",
//     }),
//   ],

//   // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
//   tracesSampleRate: 1,

//   // Define how likely Replay events are sampled.
//   // This sets the sample rate to be 10%. You may want this to be 100% while
//   // in development and sample at a lower rate in production
//   replaysSessionSampleRate: 0.1,

//   // Define how likely Replay events are sampled when an error occurs.
//   replaysOnErrorSampleRate: 1.0,

//   // Setting this option to true will print useful information to the console while you're setting up Sentry.
//   debug: false,
// });

// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
"use client";
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://7b883d075caa19b41fd9b00ae313a1c6@o4506813739368448.ingest.us.sentry.io/4507222371729408",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  replaysOnErrorSampleRate: 1.0,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // You can remove this option if you're not planning to use the Sentry Session Replay feature:
  integrations: [
    Sentry.replayIntegration({
      // Additional Replay configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
});

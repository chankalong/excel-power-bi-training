import { defineAppSetup } from '@slidev/types'
import { inject } from "@vercel/analytics"
import { injectSpeedInsights } from '@vercel/speed-insights';

export default defineAppSetup(({ app, router }) => {
  // Vue App
  app.use(inject)
  app.use(injectSpeedInsights)
})





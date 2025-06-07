# MyRentRange

A responsive web app to estimate affordable rent based on your net income and U.S. state taxes.

## Features
- Input gross salary (hourly/monthly/annual toggle)
- Select U.S. state
- Estimate monthly take-home after tax (static data)
- Show rent ranges based on 20%, 30%, and 40% of net income
- Optional toggles: "Own a car?", "Living alone?"
- Clean, responsive UI

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure
- `/src/pages` - Next.js pages
- `/src/components` - React components
- `/data/taxRates.json` - Static U.S. state tax rates

## Deployment
This project is configured for easy deployment on Vercel. Simply connect your GitHub repository to Vercel and deploy.

## License
MIT 
# AI Tasks Demo

A simple task management application built with Next.js, Prisma, SQLite, and shadcn/ui.

## Features

- Create, read, update, and delete tasks
- Set task priorities (Low, Medium, High)
- Clean and modern UI with shadcn/ui components
- End-to-end testing with Cypress

## Tech Stack

- Next.js (App Router)
- TypeScript
- Prisma ORM
- SQLite (local database)
- shadcn/ui (Radix UI)
- Tailwind CSS
- Cypress (E2E testing)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Running Tests

To run the Cypress E2E tests:

```bash
npm run cypress
```

## Project Structure

```
ai-tasks-demo/
├─ app/                    # Next.js App Router pages
├─ prisma/                 # Database schema and migrations
├─ lib/                    # Utility functions and Prisma client
├─ pages/                  # API routes
├─ cypress/               # E2E tests
├─ public/                # Static assets
└─ styles/               # Global styles
```

## License

MIT

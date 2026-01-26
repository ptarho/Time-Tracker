# Viso Tracker

A full-stack time tracking application built with Next.js, Express, and PostgreSQL.

## Features

- Time entry form with date, project, hours, and description
- Entry history grouped by date with daily totals
- Validation: maximum 24 hours per day, all fields required

## Tech Stack

- **Frontend**: Next.js 14+ (App Router), TypeScript, Shadcn/ui, Tailwind CSS
- **Backend**: Express.js, TypeScript, Prisma ORM
- **Database**: PostgreSQL

## Data Flow

![Data Flow Diagram](assets/data-flow.png)

## Setup

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database

### Installation

1. Install dependencies:

```bash
npm run install:all
```

2. Set up the database:

   - Create a PostgreSQL database
   - Copy `backend/.env.example` to `backend/.env`
   - Update the `DATABASE_URL` in `backend/.env`
   - Run migrations:

   ```bash
   cd backend
   npx prisma migrate dev
   ```

3. Run the development servers:

```bash
npm run dev
```

This will start:

- Backend server on `http://localhost:3001`
- Frontend server on `http://localhost:3000`

## Project Structure

```
VisoTracker/
├── frontend/          # Next.js application
├── backend/           # Express API server
├── package.json       # Root workspace configuration
└── README.md
```

## API Endpoints

- `POST /api/entries` - Create a new time entry

  - Body: `{ date: string, project: string, hours: number, description: string }`
  - Returns: Created time entry object

- `GET /api/entries` - Get all time entries
  - Returns: Array of time entries ordered by date (descending)

## Environment Variables

### Backend (`backend/.env`)

```
DATABASE_URL="postgresql://user:password@localhost:5432/viso_tracker"
PORT=3001
```

### Frontend (optional `frontend/.env.local`)

```
NEXT_PUBLIC_API_URL="http://localhost:3001"
```

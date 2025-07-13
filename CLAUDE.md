# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production (includes Prisma generation)
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run seed` - Seed database using prisma/seed.ts.bak
- `npm run db:test` - Test database connection using prisma/db-test.ts.bak

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Better Auth with email/password and social providers (Google, GitHub)
- **Styling**: Tailwind CSS with Radix UI components
- **UI Components**: Custom components based on shadcn/ui

## Architecture Overview

### Database Schema
The application uses Prisma with PostgreSQL. Key models include:
- **User**: Core user entity with game-related fields (points, level, experience, money)
- **Auth models**: Account, Session, Authenticator for Better Auth integration
- **Game entities**: Drug, DrugType, Task, Hideout models for game mechanics

### Authentication
Uses Better Auth with Prisma adapter configured in `src/lib/auth.ts`. Supports:
- Email/password authentication
- Google and GitHub OAuth
- Session management with 7-day expiry

### Project Structure
- `src/app/` - Next.js App Router pages and API routes
- `src/components/` - Reusable UI components and theme provider
- `src/lib/` - Utility functions, auth configuration, and shared logic
- `prisma/` - Database schema and seed files

### Environment Requirements
Required environment variables:
- `DATABASE_URL` - PostgreSQL connection string
- `BETTER_AUTH_SECRET` - Auth secret key
- `BETTER_AUTH_URL` - Base URL for auth
- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` - Google OAuth
- `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET` - GitHub OAuth

## Development Guidelines

From Cursor rules:
- Use regular functions for React components (not arrow functions)
- Follow clean code and SOLID principles
- Maintain clean architecture patterns
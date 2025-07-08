# Bharat Yatra - Sacred Temple Tour Platform

## Overview

Bharat Yatra is a full-stack web application designed for discovering and booking spiritual temple tours and cultural destinations across India. The platform provides an immersive experience for users to explore sacred temples, cultural sites, and book personalized pilgrimage packages.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: TailwindCSS with custom Indian-themed color palette (saffron, deep-green, royal-blue)
- **UI Components**: Radix UI primitives with shadcn/ui design system
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite with custom configuration for development and production

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API endpoints under `/api` namespace
- **Storage**: In-memory storage with interface for future database integration
- **Development**: Hot module replacement with Vite middleware integration

### Database Schema (Drizzle ORM)
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` for type sharing between client and server
- **Tables**: users, temples, destinations, bookings, contactInquiries
- **Migration Strategy**: Drizzle Kit for schema migrations

## Key Components

### Data Models
1. **Temples**: Sacred sites with pricing, features, categories, and location data
2. **Destinations**: Cultural and natural attractions with highlights and types
3. **Bookings**: User inquiries for tour packages with traveler details and requirements
4. **Contact Inquiries**: General customer support and information requests
5. **Users**: Authentication system (prepared but not fully implemented)

### UI Components
1. **Navigation**: Responsive navigation with mobile menu support
2. **Hero Section**: Full-screen landing with call-to-action buttons
3. **Card Components**: Reusable temple and destination display cards
4. **Forms**: Booking and contact forms with validation
5. **Footer**: Social links and quick navigation

### API Endpoints
- `GET /api/temples` - Retrieve all temples
- `GET /api/temples/:id` - Get specific temple details
- `GET /api/destinations` - Retrieve all destinations
- `GET /api/destinations/:id` - Get specific destination details
- `POST /api/bookings` - Submit booking inquiry
- `POST /api/contact` - Submit contact inquiry

## Data Flow

1. **Client Request**: User interactions trigger API calls through TanStack Query
2. **Server Processing**: Express routes handle requests and interact with storage layer
3. **Data Validation**: Zod schemas validate incoming data against shared types
4. **Response**: JSON responses sent back to client with appropriate HTTP status codes
5. **UI Updates**: React components re-render based on query state changes

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, Wouter for routing
- **UI Components**: Radix UI primitives, Lucide React icons
- **Styling**: TailwindCSS, class-variance-authority for component variants
- **Forms**: React Hook Form with Hookform resolvers
- **State**: TanStack Query for server state management

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM, @neondatabase/serverless for PostgreSQL
- **Validation**: Zod for schema validation
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Build**: Vite with React plugin and runtime error overlay
- **TypeScript**: Strict configuration with path mapping
- **CSS**: PostCSS with TailwindCSS and Autoprefixer

## Deployment Strategy

### Development Environment
- **Dev Server**: Vite development server with HMR
- **API Integration**: Express middleware serves Vite in development
- **Database**: Configured for Neon PostgreSQL with environment variables

### Production Build
- **Frontend**: Vite builds optimized React bundle to `dist/public`
- **Backend**: esbuild bundles Express server to `dist/index.js`
- **Deployment**: Single artifact deployment with static file serving

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Build Process**: Separate client and server build steps
- **Static Assets**: Served from Express in production mode

## Changelog
```
Changelog:
- July 08, 2025. Initial setup
```

## User Preferences
```
Preferred communication style: Simple, everyday language.
```
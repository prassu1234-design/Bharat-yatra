# Bharat Yatra - Sacred Temple Tour Platform

An Indian tourism management system website featuring Hindu temples, cultural destinations, and booking functionality.

## 🕉️ Overview

Bharat Yatra is a full-stack web application designed for discovering and booking spiritual temple tours and cultural destinations across India. The platform provides an immersive experience for users to explore sacred temples, cultural sites, and book personalized pilgrimage packages.

## ✨ Features

- **Sacred Temples Showcase**: Browse through famous Hindu temples across India
- **Cultural Destinations**: Explore natural and heritage sites
- **Tour Booking System**: Complete booking form for personalized packages  
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Search & Filters**: Find temples by state, category, and location
- **Contact System**: Get in touch for inquiries and support

## 🏛️ Featured Destinations

### Temples
- Golden Temple (Punjab)
- Meenakshi Temple (Tamil Nadu)
- Tirupati Temple (Andhra Pradesh)
- Vaishno Devi (Jammu & Kashmir)
- Kedarnath & Badrinath (Uttarakhand)
- Jagannath Temple (Odisha)
- Somnath Temple (Gujarat)
- Kashi Vishwanath (Uttar Pradesh)

### Cultural Sites
- Kerala Backwaters
- Rajasthan Palaces
- Goa Beaches
- Kashmir Valleys
- Rishikesh (Yoga Capital)
- Haridwar (Sacred Ghats)
- Hampi (Ancient Ruins)

## 🚀 Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter
- **Styling**: TailwindCSS with Indian-themed colors (saffron, deep-green, royal-blue)
- **UI Components**: Radix UI with shadcn/ui
- **State Management**: TanStack Query
- **Build Tool**: Vite

### Backend
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Storage**: In-memory storage (easily replaceable with database)
- **API**: RESTful endpoints

### Database Schema
- **ORM**: Drizzle ORM (PostgreSQL ready)
- **Tables**: Users, Temples, Destinations, Bookings, Contact Inquiries

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/bharat-yatra.git
cd bharat-yatra
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5000`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## 📱 API Endpoints

- `GET /api/temples` - Get all temples
- `GET /api/temples/:id` - Get temple by ID
- `GET /api/destinations` - Get all destinations  
- `GET /api/destinations/:id` - Get destination by ID
- `POST /api/bookings` - Create booking inquiry
- `POST /api/contact` - Submit contact form

## 🎨 Design Features

- **Indian Color Palette**: Saffron, deep green, and royal blue theme
- **Responsive Design**: Mobile-first approach
- **Custom Fonts**: Playfair Display for headings, Inter for body text
- **Sacred Imagery**: Authentic temple and cultural site photos
- **Smooth Animations**: Hover effects and transitions

## 🔮 Future Enhancements

- User authentication system
- Payment gateway integration
- Real-time booking management
- Multi-language support (Hindi, Sanskrit)
- Interactive maps
- Review and rating system
- Admin dashboard

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Images sourced from Unsplash
- Built with modern web technologies
- Inspired by India's rich spiritual heritage

---

**Made with devotion for spiritual journeys** 🕉️
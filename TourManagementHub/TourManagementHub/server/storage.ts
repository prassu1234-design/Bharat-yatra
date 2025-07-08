import { 
  users, temples, destinations, bookings, contactInquiries,
  type User, type InsertUser,
  type Temple, type InsertTemple,
  type Destination, type InsertDestination,
  type Booking, type InsertBooking,
  type ContactInquiry, type InsertContactInquiry
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Temple methods
  getAllTemples(): Promise<Temple[]>;
  getTemple(id: number): Promise<Temple | undefined>;
  createTemple(temple: InsertTemple): Promise<Temple>;

  // Destination methods
  getAllDestinations(): Promise<Destination[]>;
  getDestination(id: number): Promise<Destination | undefined>;
  createDestination(destination: InsertDestination): Promise<Destination>;

  // Booking methods
  getAllBookings(): Promise<Booking[]>;
  getBooking(id: number): Promise<Booking | undefined>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  updateBookingStatus(id: number, status: string): Promise<Booking | undefined>;

  // Contact inquiry methods
  getAllContactInquiries(): Promise<ContactInquiry[]>;
  getContactInquiry(id: number): Promise<ContactInquiry | undefined>;
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  updateContactInquiryStatus(id: number, status: string): Promise<ContactInquiry | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private temples: Map<number, Temple>;
  private destinations: Map<number, Destination>;
  private bookings: Map<number, Booking>;
  private contactInquiries: Map<number, ContactInquiry>;
  private currentUserId: number;
  private currentTempleId: number;
  private currentDestinationId: number;
  private currentBookingId: number;
  private currentContactInquiryId: number;

  constructor() {
    this.users = new Map();
    this.temples = new Map();
    this.destinations = new Map();
    this.bookings = new Map();
    this.contactInquiries = new Map();
    this.currentUserId = 1;
    this.currentTempleId = 1;
    this.currentDestinationId = 1;
    this.currentBookingId = 1;
    this.currentContactInquiryId = 1;

    // Initialize with sample temples and destinations
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample temples
    const sampleTemples: InsertTemple[] = [
      {
        name: "Golden Temple",
        location: "Amritsar, Punjab",
        state: "Punjab",
        description: "The holiest shrine of Sikhism with stunning golden architecture and sacred pool",
        price: 15999,
        imageUrl: "https://images.unsplash.com/photo-1605649487212-47bdab064c6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "Sikh Temple",
        features: ["Golden Architecture", "Sacred Pool", "Langar Hall", "Spiritual Experience"]
      },
      {
        name: "Meenakshi Temple",
        location: "Madurai, Tamil Nadu",
        state: "Tamil Nadu",
        description: "Ancient temple with stunning Dravidian architecture and colorful gopuram towers",
        price: 18999,
        imageUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "Hindu Temple",
        features: ["Dravidian Architecture", "Colorful Gopurams", "Ancient History", "Cultural Significance"]
      },
      {
        name: "Tirupati Temple",
        location: "Tirupati, Andhra Pradesh",
        state: "Andhra Pradesh",
        description: "Lord Venkateshwara's sacred abode atop the hills, one of the richest temples in the world",
        price: 22999,
        imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "Hindu Temple",
        features: ["Hilltop Location", "Divine Darshan", "Prasadam", "Spiritual Journey"]
      },
      {
        name: "Vaishno Devi",
        location: "Katra, Jammu & Kashmir",
        state: "Jammu & Kashmir",
        description: "Sacred cave shrine of Mata Vaishno Devi nestled in the Trikuta Mountains",
        price: 25999,
        imageUrl: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "Hindu Temple",
        features: ["Cave Shrine", "Mountain Trek", "Divine Mother", "Pilgrimage Experience"]
      },
      {
        name: "Kedarnath",
        location: "Kedarnath, Uttarakhand",
        state: "Uttarakhand",
        description: "Lord Shiva's abode in the Himalayas, one of the twelve Jyotirlingas",
        price: 35999,
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "Hindu Temple",
        features: ["Himalayan Location", "Jyotirlinga", "Char Dham", "Spiritual Significance"]
      },
      {
        name: "Badrinath",
        location: "Badrinath, Uttarakhand",
        state: "Uttarakhand",
        description: "Lord Vishnu's sacred Char Dham pilgrimage site in the Himalayas",
        price: 32999,
        imageUrl: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "Hindu Temple",
        features: ["Char Dham", "Himalayan Valley", "Lord Vishnu", "Sacred Pilgrimage"]
      },
      {
        name: "Jagannath Temple",
        location: "Puri, Odisha",
        state: "Odisha",
        description: "Sacred temple of Lord Jagannath, famous for the annual Rath Yatra festival",
        price: 19999,
        imageUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "Hindu Temple",
        features: ["Rath Yatra", "Ancient Architecture", "Sacred Prasadam", "Ocean View"]
      },
      {
        name: "Somnath Temple",
        location: "Somnath, Gujarat",
        state: "Gujarat",
        description: "First among the twelve Jyotirlinga shrines of Lord Shiva by the Arabian Sea",
        price: 16999,
        imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "Hindu Temple",
        features: ["Jyotirlinga", "Coastal Location", "Historical Significance", "Sunset Views"]
      },
      {
        name: "Kashi Vishwanath",
        location: "Varanasi, Uttar Pradesh",
        state: "Uttar Pradesh",
        description: "Most sacred Jyotirlinga temple on the banks of holy Ganga in the spiritual capital",
        price: 18999,
        imageUrl: "https://images.unsplash.com/photo-1566552958781-44d4a1aa9e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "Hindu Temple",
        features: ["Jyotirlinga", "Ganga Aarti", "Ancient City", "Spiritual Capital"]
      }
    ];

    sampleTemples.forEach(temple => this.createTemple(temple));

    // Sample destinations
    const sampleDestinations: InsertDestination[] = [
      {
        name: "Kerala Backwaters",
        location: "Alleppey, Kerala",
        state: "Kerala",
        description: "Serene network of canals, rivers, and lakes with traditional houseboats",
        type: "Natural",
        imageUrl: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        highlights: ["Houseboat Experience", "Palm-lined Canals", "Traditional Villages", "Ayurvedic Spas"]
      },
      {
        name: "Rajasthan Palaces",
        location: "Jaipur, Rajasthan",
        state: "Rajasthan",
        description: "Magnificent palaces showcasing royal heritage and Rajputana architecture",
        type: "Cultural",
        imageUrl: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        highlights: ["Royal Architecture", "Cultural Heritage", "Desert Landscapes", "Traditional Crafts"]
      },
      {
        name: "Goa Beaches",
        location: "Goa",
        state: "Goa",
        description: "Beautiful coastal paradise with golden beaches and Portuguese heritage",
        type: "Coastal",
        imageUrl: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        highlights: ["Golden Beaches", "Portuguese Architecture", "Vibrant Nightlife", "Seafood Cuisine"]
      },
      {
        name: "Kashmir Valleys",
        location: "Srinagar, Kashmir",
        state: "Jammu & Kashmir",
        description: "Paradise on earth with pristine lakes, gardens, and snow-capped mountains",
        type: "Natural",
        imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        highlights: ["Dal Lake", "Mughal Gardens", "Snow Mountains", "Shikara Rides"]
      },
      {
        name: "Rishikesh",
        location: "Rishikesh, Uttarakhand",
        state: "Uttarakhand",
        description: "World capital of yoga and meditation on the banks of sacred Ganga river",
        type: "Spiritual",
        imageUrl: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        highlights: ["Yoga Capital", "Ganga River", "Adventure Sports", "Spiritual Retreats"]
      },
      {
        name: "Haridwar",
        location: "Haridwar, Uttarakhand", 
        state: "Uttarakhand",
        description: "Gateway to the gods where Ganga descends from the Himalayas to the plains",
        type: "Spiritual",
        imageUrl: "https://images.unsplash.com/photo-1566552958781-44d4a1aa9e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        highlights: ["Har Ki Pauri", "Ganga Aarti", "Kumbh Mela", "Sacred Ghats"]
      },
      {
        name: "Hampi",
        location: "Hampi, Karnataka",
        state: "Karnataka", 
        description: "Ancient Vijayanagara Empire ruins with magnificent temples and boulder landscapes",
        type: "Heritage",
        imageUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        highlights: ["Vijayanagara Ruins", "Ancient Temples", "Boulder Landscape", "UNESCO Heritage"]
      }
    ];

    sampleDestinations.forEach(destination => this.createDestination(destination));
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Temple methods
  async getAllTemples(): Promise<Temple[]> {
    return Array.from(this.temples.values());
  }

  async getTemple(id: number): Promise<Temple | undefined> {
    return this.temples.get(id);
  }

  async createTemple(insertTemple: InsertTemple): Promise<Temple> {
    const id = this.currentTempleId++;
    const temple: Temple = { ...insertTemple, id };
    this.temples.set(id, temple);
    return temple;
  }

  // Destination methods
  async getAllDestinations(): Promise<Destination[]> {
    return Array.from(this.destinations.values());
  }

  async getDestination(id: number): Promise<Destination | undefined> {
    return this.destinations.get(id);
  }

  async createDestination(insertDestination: InsertDestination): Promise<Destination> {
    const id = this.currentDestinationId++;
    const destination: Destination = { ...insertDestination, id };
    this.destinations.set(id, destination);
    return destination;
  }

  // Booking methods
  async getAllBookings(): Promise<Booking[]> {
    return Array.from(this.bookings.values());
  }

  async getBooking(id: number): Promise<Booking | undefined> {
    return this.bookings.get(id);
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const id = this.currentBookingId++;
    const booking: Booking = { 
      ...insertBooking, 
      id, 
      status: "pending",
      travelDate: insertBooking.travelDate || null,
      requirements: insertBooking.requirements || null,
      createdAt: new Date()
    };
    this.bookings.set(id, booking);
    return booking;
  }

  async updateBookingStatus(id: number, status: string): Promise<Booking | undefined> {
    const booking = this.bookings.get(id);
    if (booking) {
      const updatedBooking = { ...booking, status };
      this.bookings.set(id, updatedBooking);
      return updatedBooking;
    }
    return undefined;
  }

  // Contact inquiry methods
  async getAllContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values());
  }

  async getContactInquiry(id: number): Promise<ContactInquiry | undefined> {
    return this.contactInquiries.get(id);
  }

  async createContactInquiry(insertContactInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = this.currentContactInquiryId++;
    const inquiry: ContactInquiry = { 
      ...insertContactInquiry, 
      id, 
      status: "new",
      createdAt: new Date()
    };
    this.contactInquiries.set(id, inquiry);
    return inquiry;
  }

  async updateContactInquiryStatus(id: number, status: string): Promise<ContactInquiry | undefined> {
    const inquiry = this.contactInquiries.get(id);
    if (inquiry) {
      const updatedInquiry = { ...inquiry, status };
      this.contactInquiries.set(id, updatedInquiry);
      return updatedInquiry;
    }
    return undefined;
  }
}

export const storage = new MemStorage();

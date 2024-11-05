# SafeMax Security - Cybersecurity Services Platform

A full-stack web application for SafeMax Security, offering VAPT services and cybersecurity solutions. Built with React, Node.js, Express, and MongoDB.

![SafeMax Security](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000)

## Features

- 🔒 Modern, responsive landing page
- 📅 Appointment scheduling system
- 👤 Admin dashboard for appointment management
- 🔐 Secure authentication system
- 📱 Mobile-friendly design
- 🎯 Real-time status updates
- 🔄 Interactive UI with toast notifications

## Tech Stack

- **Frontend:**
  - React 18
  - TypeScript
  - Tailwind CSS
  - React Router DOM
  - Axios
  - React Hot Toast
  - Lucide React Icons
  - Date-fns

- **Backend:**
  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - JWT Authentication
  - Bcrypt
  - CORS

## Prerequisites

Before you begin, ensure you have installed:

- Node.js (v16 or higher)
- MongoDB (local or Atlas connection)
- Git

## Local Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd safemax-security
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/safemax
   JWT_SECRET=your_jwt_secret_key_here
   PORT=5000
   ```

4. **MongoDB Setup**

   **Option 1: Local MongoDB**
   - Install MongoDB Community Edition
   - Start MongoDB service:
     ```bash
     # Windows
     net start MongoDB

     # macOS
     brew services start mongodb-community

     # Linux
     sudo systemctl start mongod
     ```

   **Option 2: MongoDB Atlas**
   - Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create new cluster
   - Get connection string
   - Replace MONGODB_URI in .env with Atlas connection string

5. **Create Admin User**
   ```bash
   node server/scripts/createAdmin.js
   ```
   Default admin credentials:
   - Email: admin@safemax.com
   - Password: Admin@123

6. **Start Development Servers**
   ```bash
   # Start both frontend and backend
   npm run dev
   ```

   The application will be available at:
   - Frontend: http://localhost:5173
   - Backend: http://localhost:5000

## Project Structure

```
safemax-security/
├── src/                    # Frontend source files
│   ├── components/         # React components
│   ├── pages/             # Page components
│   └── main.tsx           # Entry point
├── server/                 # Backend source files
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   └── index.js           # Server entry point
└── public/                # Static files
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login

### Appointments
- `POST /api/appointments` - Create appointment
- `GET /api/appointments` - Get all appointments (protected)
- `PATCH /api/appointments/:id` - Update appointment status (protected)

## Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Protected API routes
- CORS enabled
- Environment variables for sensitive data

## Production Deployment

1. Build the frontend:
   ```bash
   npm run build
   ```

2. Set production environment variables
3. Deploy to your preferred hosting service
4. Ensure MongoDB connection is properly configured
5. Update CORS settings if necessary

## Troubleshooting

### Common Issues

1. **MongoDB Connection Failed**
   - Check if MongoDB is running
   - Verify connection string
   - Ensure network connectivity
   - Check MongoDB Atlas IP whitelist

2. **Admin Login Issues**
   - Run createAdmin.js script
   - Check MongoDB for user existence
   - Verify correct credentials

3. **API Errors**
   - Check server logs
   - Verify JWT_SECRET is set
   - Ensure all environment variables are configured

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
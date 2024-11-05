import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';

dotenv.config();

const createAdminUser = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/safemax');
    
    const adminUser = {
      email: 'admin@safemax.com',
      password: 'Admin@123',
      role: 'admin'
    };

    const existingAdmin = await User.findOne({ email: adminUser.email });
    
    if (existingAdmin) {
      console.log('Admin user already exists');
      process.exit(0);
    }

    const user = new User(adminUser);
    await user.save();
    
    console.log('Admin user created successfully');
    console.log('Email:', adminUser.email);
    console.log('Password:', 'Admin@123');
    
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    await mongoose.connection.close();
  }
};

createAdminUser();
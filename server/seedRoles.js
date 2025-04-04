const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { User } = require('./models/User');
require("dotenv").config()

// Connect to the database
// Make sure MONGODB_URL is set in your .env file
mongoose.connect(process.env.MONGODB_URL, {
  // useNewUrlParser and useUnifiedTopology are deprecated but kept for compatibility if needed
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
}).then(() => {
  console.log('Database connected successfully.');
  createDummyUsers(); // Call the function to create users
}).catch(err => {
  console.error('Database connection error:', err);
  process.exit(1); // Exit if connection fails
});

async function createDummyUsers() {
  try {
    const saltRounds = 10; // Standard salt rounds for bcrypt

    // Define the users to be created
    const usersToCreate = [
      { username: 'admin', email: 'admin@example.com', password: 'password123', roles: ['Admin'] },
      { username: 'publisher', email: 'publisher@example.com', password: 'password123', roles: ['Publisher'] },
      { username: 'simpleuser', email: 'user@example.com', password: 'password123', roles: ['User'] } // Default role is ['User'] anyway, but explicit here
    ];

    console.log('Starting dummy user creation...');

    for (const userData of usersToCreate) {
      // Check if user already exists by username or email
      const existingUser = await User.findOne({ $or: [{ username: userData.username }, { email: userData.email }] });

      if (existingUser) {
        console.log(`User '${userData.username}' (or email '${userData.email}') already exists. Skipping.`);
        continue; // Skip to the next user
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

      // Generate slug from username (ensure it's unique if necessary, basic version here)
      const slug = userData.username.toLowerCase().replace(/\s+/g, '-');

      // Create the user
      await User.create({
        username: userData.username,
        email: userData.email,
        password: hashedPassword,
        roles: userData.roles,
        slug: slug,
        // profile: 'default_profile_url_if_needed' // Add default profile if needed/different from model default
      });
      console.log(`Successfully created user: '${userData.username}' with roles: ${userData.roles.join(', ')}. Remember the password is 'password123'.`);
    }

    console.log('Dummy user creation process finished.');

  } catch (error) {
    console.error('Error during dummy user creation:', error);
  } finally {
    // Close the database connection
    await mongoose.connection.close();
    console.log('Database connection closed.');
  }
} 
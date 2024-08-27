
# EduHub - Innovative Learning Platform

**EduHub** is a cutting-edge learning platform developed as part of a college project. It features a course purchasing system, user authentication, a student dashboard, and integrates sample YouTube courses using the React library for seamless video playback.

## Features

- **Course Menu**: Explore and purchase a variety of courses tailored to different subjects.
- **Student Dashboard**: Track your progress, view purchased courses, and manage your learning experience.
- **YouTube Integration**: Sample courses are connected via YouTube for easy access and demonstration.
- **User Authentication**: Secure login and signup system powered by MongoDB to manage user accounts and sessions.
- **React-Powered**: The entire platform leverages the React library to provide a smooth, responsive user experience.

### Prerequisites
- Node.js installed on your machine.
- MongoDB setup (locally or via a cloud service like MongoDB Atlas).

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Jappanjot26/EduHub
   cd EduHub
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up MongoDB:
   - If you're using MongoDB locally, ensure MongoDB is running on your machine.
   - If you're using MongoDB Atlas, create a `.env` file and add your MongoDB connection string:
     ```
     MONGO_URI=your-mongodb-connection-string
     ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000`.


## How to Use

1. **Register/Login**: Use the secure authentication system to create an account or log in to an existing one.
2. **Browse Courses**: Visit the Course Menu to view a selection of courses.
3. **Purchase Courses**: Select and purchase courses that interest you.
4. **Access Dashboard**: Access your Dashboard from top right corner.
5. **Watch Videos**: Play the sample courses directly via embedded YouTube players.

## Technologies Used

- **Frontend**: React.js
- **Database**: MongoDB (with Mongoose)
- **Video Integration**: YouTube library of React

## Future Improvements

- Additional backend features for real-time course management and purchases.
- Integration of secure payment methods.
- Expanding the course catalog with more providers and content.

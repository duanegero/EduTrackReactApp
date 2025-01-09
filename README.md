# EduTrack Frontend React App

This is a web application built with react. It will allow users to send requests to backend API and GET, POST, PUT and DELETE.

- [Features](#features)
- [Installation](#installation)
- [Backend Repository](#backend)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- User-friendly interface for managing data
- Integration with the EduTrack API for seamless data synchronization
- Real-time updates and responsive design

## Installation

1. Clone Repository:<br>
   `git clone https://github.com/duanegero/EduTrackReactApp.git`
2. Navigate to the Project Directory
3. Install Dependencies:<br>
   `npm install`
4. Start Server<br>
   `npm start`
5. Open app in browser<br>
   `http://localhost:3000`

## Backend

### EduTrack API

https://github.com/duanegero/EduTrackAPI.git

## API Endpoints

The application intteracts with endpoints hosted by the backend api.

- GET `/students` - Get all students
- GET `/students/:grade` - Get all students in grade level
- POST `/students` - Create new student
- PUT `/students/:id` - Update student by ID
- DELETE `/students/:id` - Delete student by ID

- GET `/grades/:id` - Get student grades by ID
- PUT `/grades/:id` - Update student grades by ID

Visit the [EduTrack API Docs](https://github.com/duanegero/EduTrackAPI.git) for more details.

## License

This project is licensed under the MIT License.

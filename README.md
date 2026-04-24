# User-Base CRUD Application

This is a professional User Management application built with Next.js (App Router) and React. It provides a clean, responsive interface for viewing and managing user data from the JSONPlaceholder API.

## Core Features

1. Fetch All Users
The application retrieves a list of users on the main page, displaying their essential information (name and email) in a structured grid layout.

2. User Details
Each user has a dedicated dynamic route (/users/[id]) where you can view their full profile, including company details, contact information, and address.

3. Optimistic Updates
To ensure a fast and snappy user experience, the application uses optimistic UI updates. When you edit a user, the interface updates immediately while the API request processes in the background. If the request fails, the changes are automatically reverted to keep the data consistent.

4. Optimistic Deletions
Similarly, when a user is deleted, the application immediately redirects you back to the main list while the server-side deletion processes asynchronously.

## Technical Implementation

- Next.js (App Router): Leverages the latest Next.js features for routing and layout management.
- Axios with Interceptors: All API calls are handled via a centralized Axios instance. I've implemented request and response interceptors to handle outgoing requests and global error logging.

## Project Structure

The project follows a clean, professional architecture:
- /app: Contains the routing logic and page layouts.
- /components: Reusable UI components.
- /lib: Centralized API and utility logic.
- /styles: Modular CSS files for the entire application.
- /public: Static assets and the custom favicon.


JSONPlaceholder is a mock API. While the application simulates successful update and delete operations, changes are not persistent on the server and will reset after a page refresh.

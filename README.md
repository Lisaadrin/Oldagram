Oldagram
A mobile-responsive Instagram-style feed featuring historical artists as "influencers." This project focuses on dynamic content rendering with JavaScript and adaptive layout design using CSS.

🚀 What I Learned
This project was a great exercise in combining functional programming with responsive design principles.

1. Dynamic UI Rendering
DOM Manipulation: I learned how to use JavaScript to iterate through an array of objects (posts) and dynamically inject HTML into the main container using template literals.

Interactive Elements: Implemented a "Like" system where clicking a heart icon updates the like count for each specific post in real-time.

2. Responsive Layout & CSS
Fixed-Width Container Strategy: I practiced creating a centered, readable feed by setting a consistent max-width (600px) for the header and main elements, ensuring the content remains focused on larger screens.

Flexbox Mastery: I heavily used display: flex to align navigation items (logo vs. avatar) and to structure the user info sections (avatar next to username/location).

Relative Sizing: I used percentage widths and flexible margins to ensure the images and UI components scale properly within their containers.

3. Clean CSS Structure
Resetting Defaults: I learned the importance of resetting margins and paddings for typography to have full control over the spacing of comments and likes.

Border & Box Model: Practiced using borders and border-radii (e.g., border-radius: 100% for avatars) to mimic modern social media UI patterns.

📂 Project Components
index.html: The basic skeleton with a navigation bar and an empty <main> tag ready for content injection.

styles.css: Contains the layout logic, focusing on Flexbox and a clean, centered aesthetic.

index.js: The engine of the project. It holds the data for the posts and handles the logic for rendering the feed and managing the "Like" functionality.

🛠️ Technologies Used
HTML5: Structural markup.

CSS3: Flexbox, layout centering, and UI styling.

JavaScript (ES6+): Template literals, array loops, and event listeners.

# Cowboy runner 1.0
### Overview
Cowboy runner 1.0 is a fun and simple runner. Gun down your enemies and run to the end! Compete with your friends for the top space on the leaderboard, in best time and highest score. 

### Features and Technologies
- **Login** - Registers and logs in users, displays their name on the screen.
- **HTML** - Uses 4 HTML pages, the leaderboard, the game, about, and home.
- **CSS** - Applies cool retro and western styling
- **DB** - Stores your highests scores in the database
- **Web socket** - Broadcasts announcements about leaderboard changes and PRs to other players .
  
### Design

![IMG_5547](https://github.com/weenusdingus/cs_start_up/assets/118499164/12ee3270-1565-4cda-8e98-6f69724a361d)

### HTML Deliverable
- **HTML pages** - 4 HTML pages. A home page, leaderboard, play page, and about .
- **Links** - Every page has navigation to all other pages. Also a link to my github.
- **Text** - Minimal information and placeholder text for now.
- **Images** - Placeholder image on about page. Placeholder image where game is played.
- **Login** - Input box and submit button for login.
- **Database** - Leaderboard placeholders represent the database.
- **WebSocket** - Realtime leaderboard updates.

### CSS deliverable

- **Header, footer, and main content body**
- **Navigation elements** - Changed color and font for navigation elements.
- **Responsive to window resizing** - Resizes to all devices properly.
- **Application elements** - Used a generated color palette so the colors blend well and provide good contrast.
- **Application text content** - Consistent fonts.
- **Application images** - Images are placeholders but still look nice.

### Login deliverable

- **User registration** - Supports creating an account in the future.
- **existing user** - Stores the username to the data base for future use.
- **Web socket** - Supports future websocket funcionality by giving live updates.
- **Interaction logic and design** - The game is clean and funcional and allows for future upgrades.

### Service Deliverable

The scores get stored and now we have a proper leaderboard!

- **Node.js/Express HTTP service** - done
- **Static middleware for frontend** - done
- **Calls to third party endpoints** - done
- **Backend service endpoints** - Placeholders for loging in 
- **Frontend calls service endpoints** - done

### DB deliverable

- **MongoDB Atlas database created** - done
- **Endpoints for data** - sends data to mongo
- **Stores data in MongoDB** - done

### Login deliverable

Users can log in

- **User registration** - Creates a new account in the database.
- **existing user** - Stores the scores under the same name
- **Use MongoDB to store credentials** - Stores both user and their votes.
- **Restricts functionality** - You cannot vote until you have logged in. This is restricted on the frontend only. 😔

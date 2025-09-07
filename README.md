

# <img width="48" height="48" alt="image" src="https://github.com/user-attachments/assets/5c23dbe0-e95a-48c7-9e07-4b573acae728" />  MuSync

MuSync is a real-time collaborative music-sharing platform that enables users to upload songs, create or join themed music rooms, and enjoy synchronized playback experiences with others. The application leverages Firebase for authentication, real-time database, and cloud storage to deliver a seamless and interactive musical environment.


**Live Demo**: [Click here](https://play-musync.netlify.app/)

---

## 📝 Table of Contents

* [About](#-about)
* [Development Team](#-development-team)
* [Key Features](#-key-features)
* [Technology Stack](#-technology-stack)
* [System Requirements](#-system-requirements)
* [Project Structure](#-project-structure)
* [App Navigation Guide](#-app-navigation-guide)

---

## 📖 About

MuSync is designed for music enthusiasts who wish to share and listen to music together, in real-time. The platform supports room-based sessions, where users can take turns being the DJ, manage playlists collaboratively, and enjoy synchronized music playback. It also includes a secure user authentication system and song upload functionality.

---

## 👨‍💻 Development Team

| Name    | GitHub                                                     | Contributions                              |
| ------- | ---------------------------------------------------------- | ------------------------------------------ |
| Benji   | [@SebastianBenjamin](https://github.com/SebastianBenjamin) | Core functionality, player synchronization |
| Shravya | [@salianShravya](https://github.com/salianShravya)         | Authentication system, UI components       |

---

## 🚀 Key Features

* User authentication (login & register)
* Upload and manage personal music tracks
* Create and join music rooms with genre tagging
* Real-time song synchronization across members
* Role-based controls (Player vs Listener)
* Shuffle and repeat modes
* Secure room sharing via URL
* Genre-based filtering

---

## 🧰 Technology Stack

* **Frontend**: HTML, CSS, JavaScript
* **Backend**: Firebase (Authentication, Realtime Database, Storage)
* **Deployment**: Netlify

---

## 💻 System Requirements

* Modern web browser (Chrome, Firefox, Edge, Safari)
* Internet connection
* Audio support (HTML5 Audio API compatibility)

---

## 🗂 Project Structure

```
/
├── index.html        # Main entry point with authentication & navigation
├── upload.html       # Page for uploading and managing songs
├── player.html       # Page for music room creation and synchronized playback
└── firebase-config   # Firebase SDK configurations (inline in HTML)
```

---

## 🧭 App Navigation Guide

1. **Login / Register**
   Users authenticate via the landing page (`index.html`).

2. **Main Menu**
   After logging in, users choose between:

   * **Upload Music** – Manage their tracks (`upload.html`)
   * **Listen Music** – Enter music rooms (`player.html`)

3. **Upload Page**

   * Upload songs with title, genre, and artist info
   * Preview songs before submission
   * Edit or delete previously uploaded songs

4. **Room Creation / Join**

   * Create rooms with passwords and genre tags
   * Join existing rooms securely

5. **Player Room**

   * Displays current track, player controls (play, pause, skip)
   * Members can be promoted to player
   * Real-time updates via Firebase


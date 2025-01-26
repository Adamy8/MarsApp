# MarsApp 🪐 (coding assessment)

[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/license/MIT)

### Live link: https://adamye.dev

## 🚀 Project Description
- Fully responsive frontend built with Next.js + React.
- Backend API powered by Node.js.
- Deployed using Vercel (frontend) and Render (backend).
- RESTful API integration between frontend and backend.
- Store applications in MongoDB.

## ✨ Current Features
- `Apply now`: Multi-stage form for application (able to go back-and-forth)
- `All Applications`(top right corner): fetch from MongoDB, display all applications
- `Delete`: Delete applications if not wanted
- `Show more`: show the full content of the application

## 🚧 Work in Progress
- 🥴 When just finishing applying, clicking `All applications` will lead to a client side error. ***Need to refresh page before proceeding.***
- 🎏 Better UIUX for /board page, reveal all applications with better style.
- 📈 Current structure uses a seperate server. May combine them for easy deployment in the future.
- 🔑 Authentication for visiting the all applicaitons page.
- 📮 Integrate Email Notification API to send confirmation email to the user after applying.

## 🛠️ Tech stack:
- **Frontend**: Nextjs, React, ShadCN, Tailwind CSS, Lucide React Icon, Zustand, TypeScript
- **Backend**: Nodejs, Express
- **Database**: MongoDB
- **Deploy**:
  - Backend: Render 
  - Frontend: Vercel 

## 🏃‍♂️ Running this project
#### 1. Clone the repo:
 ```
git clone https://github.com/Adamy8/MarsApp.git
cd MarsApp
```
#### 2. Set up environment variables:
- create a ```.env``` file (under `/MarsApp`):
- ```
  MONGO_URI=your_mongodb_connection_string
  PORT=4000
  ```
- create a ```.env``` file (under `/MarsApp/frontend/mars-front`)
  - This is only needed when deploy(production), not necessay for local dev!
- ```
  NODE_PUBLIC_API_URL=Your_backend_deployed_url
  ``` 
#### 3. Build the project (run under /MarsApp)
```bash
npm run build
cd frontend/mars-front
npm run build
```
#### 4. Start (run under /MarsApp)
```bash
npm run start
cd frontend/mars-front
npm run start
```
#### 5. Open a browser and navigate to ```http://localhost:3000```

<br>

> [!Note]
> You need ***Node.js*** installed to start. Download at https://nodejs.org/. <br>
> Also ***MongoDB*** at https://www.mongodb.com/try/download/community.


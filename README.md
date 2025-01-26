# MarsApp 🪐 (coding assessment)

### Live link: https://adamye.dev

## 🚀 Project Description
- Fully responsive frontend built with Next.js + React.
- Backend API powered by Node.js.
- Deployed using Vercel (frontend) and Render (backend).
- RESTful API integration between frontend and backend.

## ✨ Current Features
- `Apply now`: Multi-stage form for application (able to go back-and-forth)
- `All applications`(top right corner): fetch from MongoDB, display all applications
- `Delete`: Delete applications if not wanted
- `Show more`: show the full content of the application

## 🚧 Work in Progress
- 🎇 Better UIUX for /board page, reveal all application with better style
- 📈 Current structure uses a seperate server. May combine them for easy deployment in the future.
- 🥴 When just finishing applying, clicking `All applications` will lead to a client side error. ***Need to refresh page before proceeding.***


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
git clone https://github.com/Adamy8/StackStage.git
cd StackStage
```
#### 2. Set up environment variables:
- create a ```.env``` file containing two line (under /StackStage):
- ```
  MONGO_URI=your_mongodb_connection_string
  PORT=5010
  ```
#### 3. Build the project
```bash
npm run build
```
#### 4. Start (Localy)
```bash
npm run start
```
#### 5. Open a browser and navigate to ```http://localhost:5010```


> [!Note]
> You need ***Node.js*** installed to start. Download at https://nodejs.org/.


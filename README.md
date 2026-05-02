# Modern Full-Stack To-Do Application

A secure, visually stunning, and highly performant Full-Stack application built with a **FastAPI** backend and a **React (TypeScript)** frontend. This project demonstrates modern development practices including JWT authentication, password hashing, and glassmorphic UI design.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

---

## ✨ Features

- **🔒 Secure Authentication**: JWT-based stateless authentication with password hashing using `bcrypt`.
- **🎨 Premium UI/UX**: Custom glassmorphic design system built with Vanilla CSS for maximum performance and unique aesthetics.
- **🛡️ Protected Routes**: Client-side and server-side verification of authentication tokens.
- **⚡ High Performance**: Asynchronous API handling with FastAPI and fast build times with Vite.
- **📝 Robust Logging**: Server-side request and error logging to `app.log`.
- **📱 Responsive Design**: Fully responsive layout that works across mobile, tablet, and desktop.

---

## 🛠️ Tech Stack

### Backend
- **FastAPI**: Modern, high-performance Python web framework.
- **Passlib & Bcrypt**: Secure password storage and verification.
- **Python-Jose**: JWT token generation and validation.
- **Uvicorn**: Lightning-fast ASGI server.

### Frontend
- **React 18**: The gold standard for modern UI development.
- **TypeScript**: Strict typing for fewer bugs and better developer experience.
- **Axios**: Promised-based HTTP client for API communication.
- **React Router 6**: Dynamic routing for the Single Page Application.
- **Lucide Icons**: Clean and consistent iconography.

---

## 🚀 Getting Started

### Prerequisites
- Python 3.8+
- Node.js 18+
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/Eliot3886/fastapi-react-todo-app.git
cd fastapi-react-todo-app
```

### 2. Backend Setup
```bash
cd Backend
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate
pip install -r requirements.txt
python main.py
```
*The API will be available at http://localhost:8000*

### 3. Frontend Setup
```bash
cd ../Frontend
npm install
npm run dev
```
*The App will be available at http://localhost:5173*

---

## 📡 API Documentation

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/register` | Create a new user account | No |
| `POST` | `/login` | Authenticate user & return JWT | No |
| `GET` | `/protected` | Access secure user data | Yes |

---

## 📂 Project Structure

```text
├── Backend/
│   ├── main.py         # FastAPI application entry point
│   ├── requirements.txt# Backend dependencies
│   └── app.log         # Server-side logs
├── Frontend/
│   ├── src/
│   │   ├── components/ # React UI components
│   │   ├── App.tsx     # Main routing & application logic
│   │   └── index.css   # Custom design system
│   └── package.json    # Frontend dependencies
└── PROJECT_DOCUMENTATION.md # Detailed technical docs
```

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).

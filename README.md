# Personalized Learning Platform with AI

This project is a personalized learning platform that uses AI to adapt educational content based on user performance. The platform features a dynamic frontend built with Next.js, TypeScript, Redux, and Tailwind CSS, and a powerful backend implemented with Django and Python. Machine learning models personalize the user experience, optimizing the learning process.

---

## Features

- **Dynamic Difficulty Adjustment**: AI evaluates user performance and adjusts question difficulty.
- **Personalized Recommendations**: Offers tailored exercises based on performance metrics.
- **Responsive Design**: Optimized for all devices with Tailwind CSS.

---

## Tech Stack

### Frontend:
- **Framework**: Next.js
- **Languages**: TypeScript, JavaScript
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit

### Backend:
- **Framework**: Django, Django REST Framework (DRF)
- **Languages**: Python
- **AI/ML**: scikit-learn, pandas, numpy

---

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- Python 3.9 or higher
- Yarn
- Virtual environment (optional)

### Backend Setup
1. Clone the repository:
   git clone https://github.com/your-repo/personalized-learning-platform.git
Navigate to the backend directory:
Create and activate a virtual environment:
python -m venv venv
source venv/bin/activate  # For Linux/macOS
venv\Scripts\activate     # For Windows
Install dependencies:
pip install -r requirements.txt
Set up environment variables by creating a .env file:
plaintext
SECRET_KEY=your_secret_key
DATABASE_URL=your_postgres_connection_string
Apply migrations and run the server:
python manage.py migrate
python manage.py runserver
Frontend Setup
Navigate to the frontend directory:
cd frontend
Install dependencies:
yarn install
Set up environment variables by creating a .env.local file:
plaintext
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000/api
Start the development server:
yarn dev
Usage
Register and log in to the platform.
Solve exercises provided by the platform.
View personalized recommendations and track your progress on the dashboard.
Experience dynamic adjustments to the difficulty of problems.
Machine Learning
The platform uses an AI model trained on user performance data to recommend appropriate difficulty levels and learning paths. The model can be retrained with new data as needed.

Contributing
Fork the repository.
Create a new feature branch:

git checkout -b feature-name
Commit your changes:

git commit -m "Add feature"
Push to your branch:

git push origin feature-name
Create a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.


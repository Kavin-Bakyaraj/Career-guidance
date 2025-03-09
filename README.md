## NextStep AI: Career Progression Platform

## Project Overview
Career Compass is a comprehensive tech career guidance platform built with React and Django, designed to help users navigate their career paths in the Indian tech industry. The platform offers personalized roadmaps, job matching, resume analysis, learning resources, and industry insights.

---

## Features

### 🗺️ Career Roadmap Generator
- Generates personalized learning paths based on career goals and existing skills.
- Supports multiple career paths including tech, design, art, and data science.
- Adapts to user experience level (beginner, intermediate, advanced).
- Provides phase-by-phase guidance with estimated completion times.
- Recommends learning resources for each skill.

### 🔍 Job Search
- Finds India-specific tech job opportunities based on skills.
- Filters by location (Bangalore, Hyderabad, Chennai, Mumbai, Delhi, Pune).
- Filters by experience level (fresher, junior, mid, senior).
- Shows salary ranges in Indian Rupee (₹) format.
- Provides company information and job descriptions.

### 📊 Career Insights
- Displays Indian tech industry trends and statistics.
- Shows job growth rates by industry sector.
- Presents average salary information in Indian Rupees (₹).
- Features in-demand skills visualization.
- Shows hiring trends across major Indian tech hubs.
- Offers customizable views by industry (IT, Data Science, Design, etc.).

### 📄 Resume Analyzer
- Provides AI-powered resume feedback.
- Identifies technical and soft skills from resume content.
- Calculates ATS compatibility score.
- Offers improvement recommendations.
- Supports multiple file formats (PDF, DOCX, TXT).

### 🎓 Learning Hub
- Curates learning resources for different skills.
- Includes video tutorials, courses, and repositories.
- Organizes content by resource type.
- Allows search by specific skills or technologies.

---

## Technology Stack

### **Frontend**
- **React (v18.3.1):** Main frontend framework
- **TypeScript:** Type-safe JavaScript development
- **React Router (v6.22.3):** Client-side routing
- **Tailwind CSS:** Utility-first CSS framework
- **Recharts (v2.12.2):** React-based charting library
- **Axios (v1.6.7):** HTTP client for API requests
- **Lucide React:** Icon components

### **Backend**
- **Django:** Python web framework
- **Django CORS Headers:** Cross-Origin Resource Sharing support
- **python-dotenv:** Environment variable management

---

## API Integration

### **External APIs Used**

#### **YouTube Data API v3**
- **Used in:** `fetch_youtube_resources()`
- **Purpose:** Fetches relevant educational videos for skills.
- **Key in .env:** `YOUTUBE_API_KEY`
- **Endpoint:** `https://www.googleapis.com/youtube/v3/search`
- **Parameters:** query, video type, max results, language, API key

#### **GitHub API**
- **Used in:** `fetch_github_resources()`, `fetch_career_trends()`
- **Purpose:** Fetches trending repositories and learning resources.
- **No authentication required for basic searches.**
- **Endpoints:** `https://api.github.com/search/repositories`
- **Parameters:** query, sort, per_page

#### **Remotive API**
- **Used in:** `fetch_github_jobs()`
- **Purpose:** Alternative job listing API (GitHub Jobs API is deprecated).
- **Endpoint:** `https://remotive.io/api/remote-jobs`
- **Parameters:** search, limit

#### **Reed API (UK Job Listings)**
- **Used in:** `fetch_reed_jobs()` (configured but unused)
- **Key in .env:** `REED_API_KEY`
- **Endpoint:** `https://www.reed.co.uk/api/1.0/search`

#### **Adzuna API (International Job Listings)**
- **Used in:** `fetch_adzuna_jobs()` (configured but unused)
- **Keys in .env:** `ADZUNA_APP_ID`, `ADZUNA_API_KEY`
- **Endpoint:** `https://api.adzuna.com/v1/api/jobs/{country_code}/search/1`

---

## Internal API Endpoints

| Endpoint | Method | Description | Function |
|----------|--------|-------------|----------|
| `/api/generate-roadmap/` | POST | Generate career roadmap based on skills, goals & experience | `generate_roadmap()` |
| `/api/learning-resources/` | POST | Search for tutorials, courses & resources | `get_learning_resources()` |
| `/api/job-matches/` | POST | Find jobs matching user skills | `match_jobs()` |
| `/api/analyze-resume/` | POST | Analyze resume for skills & improvements | `analyze_resume()` |
| `/api/career-trends/` | GET | Get industry trends & statistics | `get_career_trends()` |

---

## Key Data Structures

### **TECH_DOMAINS Dictionary**
Comprehensive mapping of career domains to relevant skills, including:
- Web development
- Data science
- DevOps
- Mobile development
- Cybersecurity
- Graphic design
- UI/UX design
- Digital & traditional art
- Animation

### **India-specific Data**
- **Indian Companies by City:** Mapping of major tech companies in key Indian tech hubs.
- **Experience Levels:** Fresher, junior, mid, senior with corresponding salary ranges in ₹.
- **Salary Formatting:** Conversion to Indian format (lakhs) when necessary.

---

## Fallback Mechanisms
The system implements robust fallback mechanisms when API calls fail:
- `generate_mock_youtube_data()`: Creates sample tutorial data.
- `generate_mock_github_data()`: Provides placeholder repository information.
- `generate_mock_jobs()`: Produces India-specific job listings.
- `generate_mock_trends()`: Creates mock industry trend data.

---

## File Structure

### **Frontend**
- **Pages:** CareerRoadmap, JobSearch, LearningHub, ResumeAnalyzer, CareerInsights
- **Components:** Navbar and common UI elements
- **Utilities:** API integration, data formatting

### **Backend**
- **views.py:** Core logic for all features
- **urls.py:** API routing configuration
- **settings.py:** Django configuration with API keys and CORS setup

---

## Setup and Installation

### **Clone the Repository**
```sh
$ git clone <repo_url>
$ cd career-compass
```

### **Backend Setup**
```sh
$ cd backend
$ python -m venv venv
$ source venv/bin/activate  # For Windows: venv\Scripts\activate
$ pip install -r requirements.txt
$ python manage.py migrate
$ python manage.py runserver
```

### **Environment Variables**
Create a `.env` file in the backend directory and add your API keys.

### **Frontend Setup**
```sh
$ cd frontend
$ npm install
$ npm run dev
```

### **Access the Application**
- Open `http://localhost:5173` in your browser.

---

## Future Enhancements
- Integration with Indian job portals (Naukri, LinkedIn India)
- Real-time data from industry publications
- Enhanced AI-powered career guidance
- Additional career domains beyond tech
- Community features for networking

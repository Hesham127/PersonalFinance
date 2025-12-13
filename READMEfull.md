# Personal Finance Tracker

## 📌 Project Goals
The Personal Finance Tracker is designed to help users manage their financial activity with clarity and ease.  
Our goals are to:
- Record expenses, income, and transfers
- Keep account balances accurate and up-to-date
- Allow editing and deletion of transactions to correct mistakes
- Provide filtering and search to quickly find transactions
- Categorize expenses for organized spending insights

---

## 🚀 Features (Prototype Scope)
- **US-09:** Record financial transactions (type, amount, date, category, notes)
- **US-10:** Edit or delete transactions with balance updates
- **US-12:** Filter and search transactions by date, category, type, notes, or amount
- **US-16:** Categorize expenses with stored categories and UI display

---

## 🛠️ Tech Stack
- **Backend:** Spring Boot (Java)
- **Frontend:** React (JavaScript)
- **Database:** PostgreSQL (or MySQL)
- **Version Control:** Git + GitHub

---

## 📂 Repository Structure
/backend 
└── src (Spring Boot services, controllers, models) 
/frontend 
└── src (React components, pages, styles) 
/docs 
└── requirements.md (user stories, acceptance criteria) 
/README.md


---

## ✅ Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/personal-finance-tracker.git
   ```
2. Navigate to backend and run Spring Boot:
```
cd backend
./mvnw spring-boot:run
```
3. Navigate to frontend and start React:
```
cd frontend
npm install
npm start
```
4. Access the app at http://localhost:3000

📖 Next Steps
- Implement transaction creation and balance updates (Sprint 1)
- Add edit/delete functionality (Sprint 1–2)
- Build filtering, search, and categorization (Sprint 2)
- Write unit tests and integration tests
- Document APIs with Postman or Swagger


---

## 🖥️ Git Commands to Create Repo and Add README

Run these step by step in your terminal:

```bash
# 1. Create a new folder for your project
mkdir personal-finance-tracker
cd personal-finance-tracker

# 2. Initialize Git
git init

# 3. Create README.md file
echo "# Personal Finance Tracker" > README.md

# (Or paste the full README content above into README.md manually)

# 4. Stage and commit the README
git add README.md
git commit -m "Initial commit: add baseline README with project goals"

# 5. Create a new repo on GitHub (via website or GitHub CLI)
# If using GitHub CLI:
gh repo create personal-finance-tracker --public --source=. --remote=origin --push

# 6. If you created the repo manually on GitHub, link it:
git remote add origin https://github.com/your-username/personal-finance-tracker.git

# 7. Push your commit to GitHub
git branch -M main
git push -u origin main










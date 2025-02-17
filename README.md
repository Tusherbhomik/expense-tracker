# Expense Tracker

A full-stack expense tracking application built with Spring Boot (backend) and Next.js (frontend). This application allows users to track their expenses, filter them by category and date range, and view summaries like total income, total expenses, and balance.

## Features
- **Add Expenses**: Add new expenses with details like category, amount, description, and date.
- **View Expenses**: View all expenses in a table with filtering options.
- **Filter Expenses**: Filter expenses by category and date range.
- **Expense Summary**: View total income, total expenses, and balance.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.

---

## Technologies Used

### Backend
- **Spring Boot**: Java-based framework for building the backend.
- **PostgreSQL**: Relational database for storing expenses. [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- **Neon PostgreSQL**: Serverless PostgreSQL database. [Neon Documentation](https://neon.tech/docs)
- **Hibernate**: ORM for database interactions.
- **REST API**: Exposes endpoints for CRUD operations.

### Frontend
- **Next.js**: React-based framework for building the frontend.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **shadcn/ui**: Reusable and customizable UI components.
- **React Hook Form**: For form management and validation.
- **Zod**: Schema validation for forms.
- **Clerk**: Authentication and user management. [Clerk Documentation](https://clerk.dev/docs)

---

## Project Structure

### Backend
```
backend/
├── src/
│   ├── main/
│   │   ├── java/com/expense/
│   │   │   ├── controllers/
│   │   │   ├── models/
│   │   │   ├── repositories/
│   │   │   ├── services/
│   │   │   └── ExpenseApplication.java
│   │   └── resources/
│   │       └── application.properties
│   └── test/
├── pom.xml
└── .gitignore
```

### Frontend
```
frontend/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   └── ...
│   ├── components/
│   │   ├── add-expense-form.tsx
│   │   ├── expense-table.tsx
│   │   ├── expense-filter.tsx
│   │   └── ...
│   ├── types/
│   │   └── expense.ts
│   └── ...
├── package.json
├── next.config.js
└── .gitignore
```

---

## Getting Started

### Prerequisites
- **Java 17+**: For running the Spring Boot backend.
- **Node.js 18+**: For running the Next.js frontend.
- **PostgreSQL**: For the database.

### Installation

#### Clone the Repository:
```bash
git clone https://github.com/Tusherbhomik/expense-tracker.git
cd expense-tracker
```

#### Backend Setup:
Navigate to the backend folder:
```bash
cd backend
```

Update the `application.properties` file with your PostgreSQL credentials:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/your-database
spring.datasource.username=your-username
spring.datasource.password=your-password
```

Build and run the backend:
```bash
./mvnw spring-boot:run
```

#### Frontend Setup:
Navigate to the frontend folder:
```bash
cd ../frontend
```

Install dependencies:
```bash
npm install
```

Run the frontend:
```bash
npm run dev
```

#### Access the Application:
Open your browser and go to [http://localhost:3000](http://localhost:3000).

---

## API Endpoints

### Backend (Spring Boot)
- `GET /api/expenses` - Fetch all expenses.
- `POST /api/expenses` - Add a new expense.
- `GET /api/expenses/category/{category}` - Fetch expenses by category.
- `GET /api/expenses/date-range?startDate=&endDate=` - Fetch expenses by date range.

---

## Screenshots

### Dashboard
*Dashboard Screenshot*

### Add Expense Form
*Add Expense Screenshot*

### Expense Table
*Expense Table Screenshot*

---

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch** (`git checkout -b feature/YourFeatureName`).
3. **Commit your changes** (`git commit -m 'Add some feature'`).
4. **Push to the branch** (`git push origin feature/YourFeatureName`).
5. **Open a pull request.**

---

## License

This project is licensed under the **MIT License**. See the LICENSE file for details.

---

## Acknowledgments

- **Spring Boot**: For providing a robust backend framework.
- **Next.js**: For enabling server-side rendering and a seamless frontend experience.
- **Tailwind CSS**: For making styling effortless.
- **shadcn/ui**: For providing beautiful and reusable UI components.
- **Clerk**: Authentication and user management.
- **Neon PostgreSQL**: Serverless PostgreSQL database.

---

## Contact

For any questions or feedback, feel free to reach out:

- **Tusher Bhomik**: 2005046@ugrad.cse.nuet.ac.bd
- **GitHub**: [Tusher Bhoimik](https://github.com/Tusherbhomik)

---

Happy coding! 🚀

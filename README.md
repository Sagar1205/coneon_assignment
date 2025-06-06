# REST APIS Implementation for CONEON Assignment

## Overview
This document summarizes the implementation of the Coneon Assignment.

## 1. Technologies Used
* **Backend:** Node.js, Express.js, Sequelize ORM, MySQL
* **Deployment:** Render (backend), https://www.freesqldatabase.com (db)

## 2. Run Locally

### Setup .env file
```
PORT=...
DB_HOST=...
DB=...
DB_USER=...
DB_PWD=...
DB_PORT=...
```

### Build the app & Install dependencies
```
npm install
```

### Start the app
```
npm run dev
```
### 3. API Endpoints

* **Add new Order**
  - POST - (https://coneon-assignment.onrender.com/api/orders)
* **Retrieve All Orders including Order Items**
  - GET - (https://coneon-assignment.onrender.com/api/getOrders)
* **Retrieve an Order including Order Items By Order Id**
  - GET - (https://coneon-assignment.onrender.com/api/getOrderById/:id)
* **Retrieve all Order Items By Id of that order**
  - GET - (https://coneon-assignment.onrender.com/api/getOrderItemsByOrderId/:order_id)

## 4. Conclusion.
* Successful deployment of the application.
* Achieved CRUD operations using Sequelize ORM.

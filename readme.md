# **E-Auction System**

The **E-Auction System** is designed to facilitate seamless online auctions by automating key processes such as item listing, bidding, and user management. It provides an efficient and user-friendly platform for both bidders and administrators to manage auctions effectively.

This project is a Java-based E-Auction System that utilizes a MySQL database for data storage and management. The project consists of the following key files:

---

## **Files**

### **E-Auction.sql**
This SQL file contains the database schema required for the E-Auction System. It includes:
- Table definitions for storing auction item details, bid records, user information, and other critical entities.
- Sample data to test the system and facilitate initial setup.
- SQL queries that initialize the tables, relationships, and constraints required for the system's functioning.

### **JDBC Conn.java**
This Java file establishes a connection between the Java application and the MySQL database using JDBC (Java Database Connectivity). It includes:
- Configuration for database URL, username, and password.
- Methods to perform CRUD (Create, Read, Update, Delete) operations on the database.
- Functions for handling user inputs and interactions with the database, enabling seamless integration between the frontend interface and backend database.

---

## **Getting Started**

To set up the E-Auction System on your local environment:

1. **Import the SQL Database**:  
   - Use the provided `E-Auction.sql` file to create the required database and tables in MySQL.

2. **Update Database Credentials**:  
   - Open the `Conn.java` file and update the database credentials (`username`, `password`, and `URL`) to match your local setup.

3. **Run the Application**:  
   - Compile and execute the Java application to start managing auctions, users, and bids.

---

## **Technologies Used**

- **Java**: For the core application logic.
- **MySQL**: For the database backend.
- **JDBC**: For connecting the Java application to the MySQL database.

---

This system provides a robust and scalable solution for managing online auctions efficiently. Happy bidding! 🎉

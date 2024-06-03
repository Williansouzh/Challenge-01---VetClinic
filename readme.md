# VetClinic Microservice API

## 📝 Description

Compass was entrusted by a client to craft a new microservice for its veterinary franchise, dedicated to managing internal client data and attendances across all their clinics. This task involves building the proof-of-concept foundations for this microservice, providing the sales and management team with a primary technical overview of the client's needs.

## 🚀 Features

The REST API adheres to the specified patterns:

- **GET /tutors**: Retrieves all tutors.
- **POST /tutor**: Creates a new tutor.
- **PUT /tutor/:id**: Updates a tutor.
- **DELETE /tutor/:id**: Deletes a tutor.
- **POST /pet/:tutorId**: Creates a pet and associates it with a tutor.
- **PUT /pet/:petId/tutor/:tutorId**: Updates a pet's information.
- **DELETE /pet/:petId/tutor/:tutorId**: Deletes a pet from a tutor.

## 📋 Mandatory Requirements

- **Readability**: Ensure code readability for maintainability.
- **Private Repository**: Share repository access with class monitors for evaluation.
- **Commit Pattern**: Utilize small and meaningful commits.
- **TypeScript**: Implement the API using TypeScript.
- **Express**: Use Express as the web application framework.
- **Readme.md**: Provide clear instructions on how to run the application locally.

## 🛠️ Optional Requirements

- **Eslint**: Consider using Eslint for code linting.
- **Prettier**: Optionally, include Prettier for code formatting.
- **Testing**: Implement testing using Chai/Mocha, Jest/Supertest.
- **Swagger**: Optionally, integrate Swagger for API documentation.
- **MongoDB**: Consider using MongoDB for data storage.

## 🚦 Routes

### 🚨 GET: Tutors and Pets Route

Get all tutors and pets (`/tutors`) - Example Response:

### 🚀 POST: Tutors Route

Post a new tutor (`/tutor`) - Example Request Body:

### 🐾 POST: Pets Route

Post a new pet (`/pet`) - Example Request Body:

### 🔄 PUT: Tutors and Pets Route

Put tutor or pet info - Example Request Body:

- Tutor Put Example: (`/tutor/:id`)
- Pet Put Example: (`/pet/:petId/tutor/:tutorId`)

### 🗑️ DELETE: Tutors and Pets Route

Delete an animal or owner from the database - Example Request Body:

- Return status code `200 - OK` if deletion is successful.
- Return status code `400 - Bad Request` if deletion fails.

## ⚙️ Environment Variables

Make sure to set up the following environment variables:

```env
MONGODB_USER
MONGODB_PASSWORD
MONGODB_CLUSTER
MONGODB_DATABASE
MONGODB_URI
PORT
```

## 🚀 How to Run Locally

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up a MongoDB instance (if applicable).
4. Configure environment variables.
5. Run the application using `npm start`.
6. Access the API at `http://localhost:your-port`.

Feel free to explore additional features and improvements based on the optional requirements! 🚀

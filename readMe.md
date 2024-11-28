# Car Rental Project

This application was developed for Web Application module, as coursework portfolio project @ WIUT by student ID: 00016395.

## Matching with web-app theme.

```bash
Student ID: 00016395
```

### Calculation:

```bash
16395/20 = 819.75
as 16300 is dividable by 20 so I took 95
95/20 = 4 (15 reminder)
```

### Topic number 15 is Car Rental System!

## Project Overview

This project is a Car Rental Project, aimed at demonstrating a comprehensive web application development process. It integrates ASP.Net Core for the backend and Angular for the frontend, showcasing software design patterns, responsive design, and CRUD operations.

## GitHub Repository

[Car Rental Project](https://github.com/shakhbozmn/CarRentalProject.git)

### Backend (`back` Directory)

The backend uses **ASP.Net Core** and follows a standard .NET solution structure:

- **Solution Folder**: Contains the primary solution file (`.sln`) that manages the backend structure.
- **Configuration Files**: Includes global settings like `.json` files for SDK and environment configuration.
- **Source Code**: Houses the core backend logic, services, controllers, and database connections.

### Frontend (`front` Directory)

The frontend is built with **Angular** and organized to manage client-side behavior:

- **Source (`src`)**: The main source code for the Angular application, containing components, services, types and other dependency files
- **Public Assets**: Houses static files like images, fonts, and other assets.
- **Configuration**: Contains configuration files for Angular, Tailwind CSS, and TypeScript.

## How to Open and Run the Project

### Prerequisites

To run this project, ensure the following tools and environments are set up on your machine:

#### **Global Requirements:**

- **Node.js** (v18 or higher): Required to run the Angular development environment.
- **Angular CLI** (v18 or higher): A command-line interface for Angular projects.
  - Verify Angular CLI installation with:
    ```bash
    ng version
    ```
- **Docker**: Used to run SQL Server on macOS and other containerized environments.
- **Visual Studio** (for Windows users) or **Visual Studio Code** (cross-platform): Recommended IDEs for development.
- **SQL Server**: Required for database operations. Use Docker to set up SQL Server on macOS.

#### **Backend Requirements:**

- **.NET SDK** (6.0 or higher): Required to build and run the ASP.NET Core backend.
- **Entity Framework Core Tools** (`dotnet-ef`): Used for managing database migrations.
  - Install Entity Framework tools with:
    ```bash
    dotnet tool install --global dotnet-ef
    ```
- **JetBrains Rider** (Optional for macOS users): A robust IDE for developing ASP.NET Core applications.

#### **Frontend Requirements:**

- **Angular Installed Globally**: Angular must be installed on your system to manage the frontend.
  - Check if Angular is installed:
    ```bash
    ng version
    ```
  - If not installed, install Angular CLI:
    ```bash
    npm install -g @angular/cli
    ```
- **Any Modern Browser**: Recommended browsers include Google Chrome, Mozilla Firefox, or Microsoft Edge.

## Step-by-Step Guide to Run the Project

### Running the Backend

The backend is built using ASP.Net Core and can be run on any compatible system. For macOS users, since SQL Server is unavailable natively, Docker is utilized to set up a SQL Server instance. Follow the steps below to configure and run the backend:

#### Setting Up SQL Server on macOS using Docker:

**1. Install Docker:** If not already installed, download and install Docker from Docker's official site.

**2. Pull SQL Server Image:**

```bash
docker pull mcr.microsoft.com/mssql/server:2022-latest
```

**3. Run SQL Server Container:**

```bash
docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=YourStrongPassword123!' -p 1433:1433 --name sqlserver -d mcr.microsoft.com/mssql/server:2022-latest
```

Replace YourStrongPassword123! with a strong password of your choice. This will create and run an SQL Server instance on port 1433.

**4. Verify SQL Server Container: To check if the container is running:**

```bash
docker ps
```

**5. Connect to SQL Server:** Use a SQL client like Azure Data Studio or any supported tool to connect to localhost:1433. Use the following credentials:
**• Username:** `sa`
**• Password:** Your defined password.

#### Configuring the Backend

**1. Clone the Repository:**

```bash
git clone https://github.com/shakhbozmn/CarRentalProject.git
```

**2. Navigate to the Backend Directory:**

```bash
cd CarRentalProject/back
```

**3. Restore NuGet Packages:**

```bash
dotnet restore
```

**4. Update Connection String:** Update the connection string in the `appsettings.json` file to match your SQL Server configuration. For Docker users:

```json
"ConnectionStrings": {
    "DefaultConnection": "Server=localhost,1433;Database=CarRentalSystem_00016395;User=sa;Password=YourStrongPassword123!;"
}
```

**5. Apply Database Migrations:**

```bash
dotnet ef migrations add InitialMigrations --output-dir Data/Migrations
```

and

```bash
dotnet ef database update
```

**6. Run Backend**

```bash
dotnet run
```

The backend will be available at `https://localhost:7167/swagger/index.html`

### Running the Frontend:

The frontend is built using Angular. Follow the steps below to set it up and run:

**1. Navigate to the Frontend Directory:**

```bash
cd CarRentalProject/front
```

**2. Install Dependencies:**

```bash
npm install

```

**3. Run the Frontend:**

```bash
ng serve
```

By default, the frontend will run at `http://localhost:4200` Ensure the backend is running for the frontend to function correctly.

## Reference

### Packages and Libraries Used

Below are the packages that have been utilized for the CarRentalSystem_00016395 backend, along with their purpose:

#### Frontend (Angular)

1. **Angular Material** - A UI component library that provides pre-built, customizable components for a consistent and modern user experience.
2. **Tailwind CSS** - A utility-first CSS framework used for building custom designs efficiently with minimal CSS code.
3. **Bootstrap** - A CSS framework that provides pre-styled components and grid systems to ensure responsive design.
4. **RxJS** - A library for reactive programming used in Angular for handling asynchronous data streams.
5. **Angular CLI** - A command-line tool used for managing Angular projects, generating components, and building the application.
6. **TypeScript** - A typed superset of JavaScript that enhances code maintainability and readability.
7. **Angular Forms** - Used to build and manage form controls in the application for both template-driven and reactive forms.

#### Backend (ASP.NET Core)

1. **Microsoft.EntityFrameworkCore** - ORM for interacting with the database using the code-first approach.
2. **Swashbuckle.AspNetCore** - Enables Swagger/OpenAPI documentation for the ASP.NET Core API.
3. **Microsoft.EntityFrameworkCore.Tools** - Used for migratons adn database management.
4. **Microsoft.EntityFrameworkCore.SqlServer** - Utilized for supporting Sql Server to Core Framework.

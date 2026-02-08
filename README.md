# 👔 Closset

**Closset** is your intelligent digital wardrobe. A modern web application designed to organize, visualize, and manage your clothing inventory efficiently. Upload photos, categorize your style, and keep track of your outfits.

![Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

## 🚀 Tech Stack

Built with performance and user experience in mind using the latest web standards:

* **[Next.js 16](https://nextjs.org/)**: React Framework (App Router).
* **[TypeScript](https://www.typescriptlang.org/)**: For type-safe code.
* **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for styling.
* **[Cloudinary](https://cloudinary.com/)**: Cloud-based image management and optimization.
* **PostgreSQL**: Relational database system.

---

## 🛠️ Getting Started

Follow these steps to set up the project locally on your machine.

## 1. Clone the repository
```bash
git clone https://github.com/ngarciafle/Closset.git
cd Closset
```
## 2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```
## 3. Create environment variables on .env
### Database connection (local Postgres)
DATABASE_URL="postgresql://user:password@localhost:5432/closset"

### Database configuration (local)
#### Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/)

#### How to run

1. Clone this repository.
2. Run the following command in your terminal:

```bash
docker-compose up -d
```

### Cloudinary Configuration (For image uploads)
```text
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"
```
### 4. RRUN IT!
```bash
npm run dev
```

## 📂 Project Structure (on construction🚧)
```text
Closset/
├── app/
│   ├── actions/           # Server actions & DB interactions (POST)
│   ├── data/              # Server actions & DB interactions (GET)
│   ├── lib/               # Utilities and configurations
│   ├── ui/                # UI Components
│   ├── (auth)             # Auth 
│   ├── (dashboard)        # Basic UI
│   ├── (navegation)       # Different pages
│   └── layout.tsx         # Main layout (Navbar, Footer)
├── globals.css            # Tailwind directives
├── .env                   # Environment variables
└── public/                # Static assets
```

## 🗺Roadmap
1. Build a basic UI 🚧
2. Have a strong backend 🚧
3. Build functionality with AI using the clothing 🛑
4. Make UI responsive (not a priority) 🚧
5. Implement more security 🛑
6. Make an animation in / 🛑
7. ...

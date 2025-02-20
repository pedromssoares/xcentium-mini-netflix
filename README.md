🎬 Mini Netflix - XCentium Code Challenge

A simple movie search and details app built with **Next.js**, **Tailwind CSS**, and **OMDb API**.

## 🚀 Features
✅ **Movie Search** - Find movies dynamically using the OMDb API  
✅ **Movie Details** - View details including title, poster, description, rating, and release date  
✅ **Responsive UI** - Works seamlessly on desktop and mobile  
✅ **Pagination** - Navigate through search results with next/previous buttons  
✅ **Accessibility (A11Y)** - WCAG-compliant for screen readers and keyboard navigation  
✅ **Optimized Performance** - Uses caching and optimized API calls  
✅ **SEO Friendly** - Dynamic routing and semantic HTML  

## 📦 Installation
Follow these steps to set up and run the project locally:

### **1️⃣ Clone the repository**
```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/mini-netflix.git
cd mini-netflix
```

### **2️⃣ Install dependencies**
```sh
npm install
```

### **3️⃣ Create a `.env.local` file and add your OMDb API key**
```sh
NEXT_PUBLIC_OMDB_API_KEY=your_api_key_here
```
(You can get your API key from [OMDb API](https://www.omdbapi.com/apikey.aspx))

### **4️⃣ Start the development server**
```sh
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### **5️⃣ Build and Run the Production Version**
To test the production build:
```sh
npm run build
npm start
```

## 🎥 Screenshots

- **Desktop Views**
![Initial Screen Desktop](</public/screenshots/initial screen desktop.png>)
![Screen after Search Desktop](</public/screenshots/initial screen after search desktop.png>)
![Details Screen Desktop](</public/screenshots/details screen desktop.png>)

- **Mobile Views**
![Initial Screen Mobile](</public/screenshots/initial screen mobile.png>)
![Screen after Search Mobile](</public/screenshots/initial screen after search mobile.png>)
![Details Screen Mobile](</public/screenshots/details screen mobile.png>)

## 🛠 Technologies Used
- **Next.js** - React framework for SSR and SEO
- **Tailwind CSS** - Utility-first styling
- **OMDb API** - Fetching movie data
- **TypeScript** - Type safety and better developer experience
- **ES6+ JavaScript** - Modern coding standards
- **Webpack (built-in)** - Bundling and optimization

## 🏗 Folder Structure
```
📂 mini-netflix
 ┣ 📂 components
 ┃ ┣ 📜 Header.tsx
 ┃ ┣ 📜 MovieCard.tsx
 ┃ ┣ 📜 Pagination.tsx
 ┃ ┣ 📜 SearchBar.tsx
 ┃ ┗ 📜 Loading.tsx
 ┣ 📂 pages
 ┃ ┣ 📜 index.tsx    # Homepage (Movie Search)
 ┃ ┣ 📜 [id].tsx     # Movie Details Page
 ┣ 📂 styles
 ┃ ┗ 📜 globals.css
 ┣ 📂 utils
 ┃ ┗ 📜 api.ts      # API Functions
 ┣ 📜 tailwind.config.js
 ┣ 📜 tsconfig.json
 ┣ 📜 next.config.js
 ┣ 📜 package.json
 ┣ 📜 .env.local (ignored)
 ┗ 📜 README.md
```

## ✅ Accessibility (A11Y) Improvements
- **Screen Reader Support**: Proper `aria-live`, `role="list"`, and `alt` attributes  
- **Keyboard Navigation**: Full support for `Tab` and `Enter` key navigation  
- **Color Contrast**: Ensures readable text against dark backgrounds  
- **Semantic HTML**: Uses `<main>`, `<h1>`, and proper landmarks  

## 🛠 API Usage
The application uses **OMDb API** to fetch movie data. It makes requests using:
- **Search movies**: `http://www.omdbapi.com/?s=movieTitle&apikey=YOUR_API_KEY`
- **Get movie details**: `http://www.omdbapi.com/?i=movieID&apikey=YOUR_API_KEY`

## 📝 License
This project is licensed under the **MIT License**.
# Mrunal Raundale — Portfolio

A professional developer portfolio built with **React**, showcasing MERN stack projects and skills.

## 📁 Project Structure

```
mrunal-portfolio/
├── public/
│   └── index.html            # Root HTML file
├── src/
│   ├── components/
│   │   ├── Navbar.js         # Sticky top navigation
│   │   ├── Hero.js           # Hero / landing section
│   │   ├── About.js          # About me + stat cards
│   │   ├── Projects.js       # Filterable projects grid
│   │   ├── Skills.js         # Animated skill bars
│   │   ├── Contact.js        # Contact form + links
│   │   └── Footer.js         # Footer with social links
│   ├── data/
│   │   ├── projects.js       # All project data — edit here
│   │   └── skills.js         # All skills data — edit here
│   ├── styles/
│   │   ├── global.css        # CSS variables & shared styles
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Projects.css
│   │   ├── Skills.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── App.js                # Root component
│   └── index.js              # React entry point
└── package.json
```

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm start
```
Opens at [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
```
Output goes to the `build/` folder — ready to deploy.

## ✏️ How to Customise

### Add / edit projects
Open `src/data/projects.js` and update the array. Each project has:
- `name`, `cat` (Backend / Frontend / Full Stack), `desc`
- `features` — bullet points shown on the card
- `tags` — tech stack badges
- `emoji`, `color` (CSS gradient), `label`
- `github` — link to your repo

### Add / edit skills
Open `src/data/skills.js`. Each group has:
- `group` name, `icon` (Tabler icon class)
- `items` — array of `{ name, color, width }` (width = percentage 0–100)

### Update personal details
- **Name / bio** → `src/components/About.js` and `src/components/Hero.js`
- **Contact links** → `src/components/Contact.js` (`contactLinks` array)
- **Footer socials** → `src/components/Footer.js` (`socials` array)

### Connect the contact form
In `src/components/Contact.js`, find the `handleSubmit` function and replace
the `console.log` with your preferred service:
- [EmailJS](https://www.emailjs.com/) — free, no backend needed
- [Formspree](https://formspree.io/) — just change the form action URL
- Your own Express backend endpoint

## 🌐 Deploy to GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://Mrunal-Raundale.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Then run:
```bash
npm run deploy
```

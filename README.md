# Software Engineering Learning Hub

Premium React + Vite EduTech website for unit-wise Software Engineering study.

## Tech Stack
- React + Vite
- Tailwind CSS
- Framer Motion
- Three.js + @react-three/fiber + @react-three/drei
- React Router DOM
- Lucide React

## Run Locally
```bash
npm install
npm run dev
```

## Production Build
```bash
npm run build
npm run preview
```

## Project Structure
```text
src/
  components/
    ui/
  data/
    units.js
  pages/
  sections/
  styles/
```

## Edit Content Later
Update `src/data/units.js`:
- `units[].description`
- `units[].completeQuiz`
- `units[].pyqQuiz`
- `units[].cheatSheet`

All unit and section screens automatically update from this central data file.

## Deploy to Vercel
1. Push this project to GitHub.
2. Import repository in Vercel.
3. Framework preset: `Vite`.
4. Build command: `npm run build`
5. Output directory: `dist`

# EduTech Diploma Learning Hub

Premium React + Vite EduTech website for diploma exam preparation, project development services, and career support across Software Engineering, IoT, full-stack, data, ML, and AI domains.

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
    subjects.js
    services.js
    softwareEngineeringUnits.js
    iotUnits.js
    units.js
  pages/
  sections/
  styles/
```

## Edit Content Later
Update subject content in `src/data/subjects.js`, `src/data/iotUnits.js`, and `src/data/units.js`:
- `units[].description`
- `units[].completeQuiz`
- `units[].pyqQuiz`
- `units[].cheatSheet`

Subject grids, services, and unit screens automatically update from these data files.

## Deploy to Vercel
1. Push this project to GitHub.
2. Import repository in Vercel.
3. Framework preset: `Vite`.
4. Build command: `npm run build`
5. Output directory: `dist`

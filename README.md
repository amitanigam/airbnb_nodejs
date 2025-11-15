Project: Node.js Express (Routers + Static + 404)
Overview

Express app with modular routers.

Form body parse using express.urlencoded().

Static files served from /public (URL prefix /public/...).

404 page fallback.

Runs on http://localhost:3008
.

Tech Stack

Node.js, Express

Core: path

View/static: plain HTML/CSS (Tailwind optional below)

Features

Routing split

userRouter → ./routes/userRouter

hostRouter mounted at /host → ./routes/hostRouter

Body parsing for application/x-www-form-urlencoded forms.

Static hosting: app.use('/public', express.static(path.join(rootDit,'public')))

Example: /public/style.css, /public/js/app.js

Error handling: custom 404 → views/404.html


Project Structure (suggested)
.
├─ app.js
├─ routes/
│  ├─ userRouter.js
│  └─ hostRouter.js
├─ utils/
│  └─ pathUtil.js
├─ views/
│  └─ 404.html
└─ public/
   ├─ style.css
   └─ js/


How to Run
npm install
npm start            # or: node app.js / nodemon app.js
# Server: http://localhost:3008

Add Tailwind CSS (best-practice build)
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

1️⃣ Ek extra package install karo
Install concurrently (ye ek hi command me dono run karega):
npm install concurrently --save-dev
2️⃣ package.json me scripts section update karo

Replace your current scripts with this 👇
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "tailwind": "tailwindcss -i ./views/input.css -o ./public/output.css --watch",
  "start": "concurrently \"npm run tailwind\" \"nodemon app.js\""
}
3️⃣ Run command
npm start
✅ Ab dono ek sath chalenge:

tailwindcss → continuously CSS generate karega

nodemon → app.js ko auto-restart karega

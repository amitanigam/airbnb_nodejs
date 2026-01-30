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

storeRouter → ./routes/storeRouter

hostRouter mounted at /host → ./routes/hostRouter

Body parsing for application/x-www-form-urlencoded forms.

Static hosting: app.use('/public', express.static(path.join(rootDit,'public')))

Example: /public/style.css, /public/js/app.js

Error handling: custom 404 → views/404.html


Project Structure (suggested)
.
├─ app.js
├─ routes/
│  ├─ storeRouter.js
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


==================

📌 Installing & Setting Up EJS

EJS (Embedded JavaScript Templates) allows us to render dynamic HTML from Express.

1️⃣ Install EJS
npm install ejs


या अगर आप इसे devDependencies में चाहते हो:

npm install --save ejs

2️⃣ Enable EJS in Express

In app.js:

app.set('view engine', 'ejs');
app.set('views', 'views');   // folder where .ejs files are stored

3️⃣ Create the Views Directory

Your project must contain a folder:

/views
    home.ejs
    about.ejs
    contact.ejs


Example file: views/home.ejs

<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
</head>
<body>
    <h1><%= title %></h1>
</body>
</html>

4️⃣ Render an EJS Page from Express
app.get("/", (req, res) => {
    res.render("home", { title: "Welcome to Airbnb!" });
});

5️⃣ Passing Data to EJS

You can send values from backend to frontend:

res.render("home", {
  username: "Amita",
  isLoggedIn: true
});


In the .ejs file:

<h2>Welcome <%= username %></h2>

<% if (isLoggedIn) { %>
  <p>You are logged in.</p>
<% } else { %>
  <p>Please login.</p>
<% } %>

✅ 1. EJS में Partial Include करने का तरीका

सबसे basic और सबसे ज़्यादा इस्तेमाल वाला तरीका:

<%- include("filename") %>


✔ ये दूसरी EJS file को current page में embed कर देता है
✔ Layout / Navbar / Footer के लिए perfect

📌 Example: Navbar include करना
👉 Step 1: views/partials/navbar.ejs
<nav class="bg-red-500 text-white p-4">
  <a href="/">Home</a> |
  <a href="/add-home">Add Home</a>
</nav>

👉 Step 2: koi bhi page me include karo

views/home.ejs:

<%- include("partials/navbar") %>

<h1>Welcome to Airbnb</h1>

✅ 2. Include with Path

Always path views folder ke base se likhna है.

views/
   partials/
      navbar.ejs
      footer.ejs
   pages/
      home.ejs


Example:

<%- include("partials/footer") %>

✅ 3. Include with Data (Variables pass karna)

मान लो तुम्हें include file में data भेजना हो:

🔹 Pass data:
<%- include("partials/navbar", { username: "Amita" }) %>

🔹 Receive data inside navbar.ejs:
<p>Welcome, <%= username %></p>

✅ 4. Layout System (Header + Footer include)

ये सबसे common pattern है:

views/partials/header.ejs
<!DOCTYPE html>
<html>
<head>
    <title><%= title %></title>
</head>
<body>

views/partials/footer.ejs
</body>
</html>

views/home.ejs
<%- include("partials/header", { title: "Home" }) %>

<h1>Hello from Home Page</h1>

<%- include("partials/footer") %>


✔ अब हर page में code repeat नहीं होगा
✔ Professional EJS code structure बन जाएगा


Date : 15:11:2025
## Assignment – Airbnb Home Listing

This assignment reuses the previous Airbnb Node + Express app and adds new features:

1. **Extended "Add Home" form**
   - Added more fields: `price per night`, `location`, `rating`, and `photo URL`.
   - All fields are captured on submit and stored along with the home name.

2. **Designed a Home Card layout**
   - Each home is displayed as a card instead of a plain list item.
   - Card shows: house name, price per night, location, rating and image (photo).
   - Used Tailwind CSS for spacing, borders, shadows and hover effects.
   - Responsive grid layout for multiple homes (1/2/3 columns based on screen size).

3. **Active tab highlighting in the navbar**
   - Top navigation has two tabs: **Go to Home** and **Add Home**.
   - The currently selected page/tab is styled as “active” (different background/text style).
   - Active tab is handled via EJS condition / variable in the template.
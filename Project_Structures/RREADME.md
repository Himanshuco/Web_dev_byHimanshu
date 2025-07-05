# MERN Stack 

mern-app/<br/>
├── .gitignore<br/>
├── README.md<br/>
├── package.json  (optional, for shared tools)<br/>
├── client/       (React frontend)<br/>
└── server/       (Node + Express backend)<br/>


client/ <br/>
├── public/              # static assets like index.html, images, favicon <br/>
└── src/<br/>
.&nbsp;├── components/      # reusable UI parts (buttons, cards, modals) <br/>
.&nbsp;├── pages/           # route-level components (Home, Login, Dashboard) <br/>
.&nbsp;├── services/        # API calls (via fetch/axios) <br/>
.&nbsp;├── hooks/           # custom React hooks <br/>
.&nbsp;├── utils/           # shared helper functions <br/>
.&nbsp;├── App.js           # main component with routing <br/>
.&nbsp;└── index.js         # renders React tree into DOM <br/>

server/<br/>
├── config/             # DB setup, environment variables <br/>
├── controllers/        # handlers for each route (business logic) <br/>
├── middlewares/        # e.g. authentication, error handling <br/>
├── models/             # Mongoose schemas (User, Booking, etc.) <br/>
├── routes/             # Express routers mapping endpoints to controllers <br/>
├── utils/              # shared helpers (e.g. response formatting) <br/>
├── index.js (or server.js)  # entry point: middleware, routes, DB connect <br/>
└── package.json <br/>

## Quick Tips
<ul>
  <li>Use environment variables (.env in server/config) for sensitive data.</li>
  <li>Keep logic for routes separate from controllers.</li>
  <li>Put authentication in its own middleware.</li>
  <li>Store shared helper functions in utils/.</li>
  <li>Name components/files clearly: UserController.js, bookingModel.js, LoginPage.jsx, etc.</li>
  <li>Add scripts in package.json for starting backend (npm run dev) and frontend (npm start).</li>
</ul>



```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactLayout/>}>
          <Route index element={<ContactList />} />
          <Route path=":contactId" element={<ContactDetails />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }

function ContactLayout() { return <div><h2>Contact</h2><Outlet /></div>; }
function ContactList() { return <p>Contact List</p>; }
function ContactDetails() { return <p>Contact Details</p>; }
```
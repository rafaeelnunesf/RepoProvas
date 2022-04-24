import { Instructor, SignIn, SignUp, Subjects } from "../src/pages/";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/instructor" element={<Instructor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

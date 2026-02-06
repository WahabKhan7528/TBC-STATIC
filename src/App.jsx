import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
// import Colleges from "./pages/Colleges";
import Admissions from "./pages/Admissions";
import Faculty from "./pages/Faculty";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NewsAndEvents from "./pages/NewsAndEvents";

// Import layouts
import CampusLayout from "./layouts/CampusLayout";

// Import campus pages
import MainCampus from "./pages/campuses/MainCampus";
import LawCollege from "./pages/campuses/LawCollege";
import HalaCampus from "./pages/campuses/HalaCampus";

// Import common campus pages
import AcademicsPage from "./pages/campuses/common/AcademicsPage";
import LegalPage from "./pages/campuses/common/LegalPage";
import FacultyPage from "./pages/campuses/common/FacultyPage";
import ResearchPage from "./pages/campuses/common/ResearchPage";
import StudentLifePage from "./pages/campuses/common/StudentLifePage";
import FacilitiesPage from "./pages/campuses/common/FacilitiesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="admissions" element={<Admissions />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="faculty-info" element={<Faculty />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="news-events" element={<NewsAndEvents />} />
          <Route path="contact" element={<Contact />} />

          {/* Campus Routes */}
          <Route path="campuses" element={<CampusLayout />}>
            {/* Main Campus Routes */}
            <Route path="main" element={<MainCampus />} />
            <Route path="main/academics" element={<AcademicsPage />} />
            <Route path="main/legal" element={<LegalPage />} />
            <Route path="main/faculty" element={<FacultyPage />} />
            <Route path="main/research" element={<ResearchPage />} />
            <Route path="main/student-life" element={<StudentLifePage />} />
            <Route path="main/facilities" element={<FacilitiesPage />} />

            {/* Law Campus Routes */}
            <Route path="law" element={<LawCollege />} />
            <Route path="law/academics" element={<AcademicsPage />} />
            <Route path="law/legal" element={<LegalPage />} />
            <Route path="law/faculty" element={<FacultyPage />} />
            <Route path="law/research" element={<ResearchPage />} />
            <Route path="law/student-life" element={<StudentLifePage />} />
            <Route path="law/facilities" element={<FacilitiesPage />} />

            {/* Hala Campus Routes */}
            <Route path="hala" element={<HalaCampus />} />
            <Route path="hala/academics" element={<AcademicsPage />} />
            <Route path="hala/legal" element={<LegalPage />} />
            <Route path="hala/faculty" element={<FacultyPage />} />
            <Route path="hala/research" element={<ResearchPage />} />
            <Route path="hala/student-life" element={<StudentLifePage />} />
            <Route path="hala/facilities" element={<FacilitiesPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import FindJobs from "./pages/FindJobs";
import Bye from "./pages/Bye";
import Navbar from "./components/Layout/Navbar";
import JobDetailSection from "./components/Find-Jobs/JobDetailSection";
import ConnectUs from "./pages/ConnectUs";
import ApplyJobForm from "./components/Find-Jobs/apply-component/ApplyJobForm";
import Success from "./pages/Success";
import Dashboard from "./pages/Dashboard";
import AppliedJobs from "./components/User-Dashboard/apply-jobs/Applied-Jobs";
import JobList from "./components/User-Dashboard/apply-jobs/JobList";
import CreateCompany from "./pages/CreateCompany";
import PostJobsForm from "./pages/PostJobsForm";
import Register from "./pages/Register"
import Login from "./pages/Login"
function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/findjobs" component={FindJobs} />
          <Route exact path="/jobdetail" component={JobDetailSection} />
          <Route exact path="/applyjob" component={ApplyJobForm} />
          <Route exact path="/bye" component={Bye} />
          <Route exact path="/connectus" component={ConnectUs} />
          <Route exact path="/success" component={Success} />
          <Route exact path="/user-dashboard" component={Dashboard} />
          <Route exact path="/applied-jobs" component={AppliedJobs} />
          <Route exact path="/applied-joblist" component={JobList} />
          <Route exact path="/create-company" component={CreateCompany} />
          <Route exact path="/post-jobs" component={PostJobsForm} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

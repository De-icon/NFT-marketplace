
import Footer from "./components/footer"
import Nav from "./components/Nav"
import Homepage from "./screens/homepage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoutes from "./utils/PrivateRoutes";
import Profile from "./screens/profilePage";
import Login from "./screens/login";
import Register from "./screens/register";
import MarketPlace from "./screens/marketplacePage";
import Ranking from "./screens/ranking";
import ConnectWallet from "./screens/connectWallet";
import { AuthProvider } from "./utils/AuthContext";
import UserProfilePage from "./screens/userProfilePage";
import NFTprofile from "./screens/NFTprofile";



function App() {
  

  return (
    <>
    <Router>
      <AuthProvider>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<Homepage/>}/>
        <Route element={<PrivateRoutes />}>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/marketplace" element={<MarketPlace/>}/>
            <Route path="/ranking" element={<Ranking/>}/>
            <Route path="/connectWallet" element={<ConnectWallet/>}/>
            <Route path="/userProfilePage" element={<UserProfilePage/>}/>
            <Route path="/NFTprofile" element={<NFTprofile/>}/>
            
        </Route>

      </Routes>
      <Footer />
      </AuthProvider>
    </Router>
    </>
  )
}

export default App

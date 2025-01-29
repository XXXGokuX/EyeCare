import Announcement from "./components/home/Announcement"
import Footer from "./components/home/Footer"
import MainNav from "./components/menu/main-nav"
import Navigation from "./routes/Navigation"

function App() {

  return (
    <>
      <Announcement />
      <MainNav />
      <Navigation />
      <Footer/>
    </>
  )
}

export default App

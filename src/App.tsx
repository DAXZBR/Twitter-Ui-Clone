import { GridLayout } from "./layouts/GridLayout"
import { SideBar } from "./components/sidebar/SideBar"
import { TweetsHome } from "./pages/tweets-homes/TweetsHome"

function App() {
  return (
    <GridLayout>
      <SideBar />
      <TweetsHome />
    </GridLayout>
  )
}

export default App

import { useIsMobile } from 'src/hooks'
import { DesktopLayout, MobileLayout } from 'src/layouts'

const App: React.FC = () => {
  const isMobile = useIsMobile()

  return <main>{!isMobile ? <DesktopLayout /> : <MobileLayout />}</main>
}

export default App

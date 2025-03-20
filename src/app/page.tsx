/**
 * @name App
 * @description
 * @author darcrand
 */

import FirstScreen from '@/components/FirstScreen'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import PhotoFlow from '@/components/PhotoFlow'

export default function App() {
  return (
    <>
      <Header />
      <FirstScreen />
      <PhotoFlow />
      <Footer />
    </>
  )
}

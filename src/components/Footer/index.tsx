/**
 * @name Footer
 * @description
 * @author darcrand
 */

import { faComment, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <footer className='h-screen'>
      <p>
        A symphony of shadows and silvers, this series explores the enigmatic allure of women under the twilight&apos;s
        embrace. Each frame whispers of secrets kept and stories yet untold—where the softness of moonlight meets the
        resilience of stardust.
      </p>

      <p>
        <FontAwesomeIcon icon={faEnvelope} width={16} />
        <FontAwesomeIcon icon={faComment} width={16} />
      </p>
    </footer>
  )
}

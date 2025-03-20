/**
 * @name Footer
 * @description
 * @author darcrand
 */

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <footer className='h-screen flex flex-col items-center justify-center'>
      <div className='flex-1 flex items-center justify-center'>
        <p className='w-1/2 text-center text-2xl italic'>
          &quot; A symphony of shadows and silvers, this series explores the enigmatic allure of women under the
          twilight&apos;s embrace. Each frame whispers of secrets kept and stories yet untold—where the softness of
          moonlight meets the resilience of stardust. &quot;
        </p>
      </div>

      <p className='flex gap-4 m-10'>
        <a href='mailto: darcrandex@gmail.com' className='inline-flex items-center gap-1'>
          <FontAwesomeIcon icon={faEnvelope} width={16} />
        </a>

        <a href='https://github.com/Darcrandex/luminous' className='inline-flex items-center gap-1'>
          <FontAwesomeIcon icon={faGithub} width={16} />
        </a>
      </p>
    </footer>
  )
}

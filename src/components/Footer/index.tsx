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
      <div className='flex-1 flex flex-col items-center justify-center'>
        <p className='text-2xl italic'>Every petal carries a unique vein</p>

        <p className='text-2xl italic mt-10'>
          &quot;Her smile rivals the bloom of spring, her complexion the dawn&apos;s blush&quot;
        </p>
      </div>

      <p className='flex gap-4 m-10'>
        <a href='mailto: darcrandex@gmail.com' className='inline-flex items-center gap-1'>
          <FontAwesomeIcon icon={faEnvelope} width={16} />
        </a>

        <a href='https://github.com/Darcrandex/petales' className='inline-flex items-center gap-1'>
          <FontAwesomeIcon icon={faGithub} width={16} />
        </a>
      </p>
    </footer>
  )
}

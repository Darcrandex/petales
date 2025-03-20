/**
 * @name FirstScreen
 * @description
 * @author darcrand
 */

export default function FirstScreen() {
  return (
    <section className='h-screen flex flex-col'>
      <header className='m-4'>logo</header>

      <div className='flex-1 flex flex-col items-center justify-center'>
        <h1 className='font-extrabold text-9xl tracking-wider'>Petales</h1>

        <p className=' mt-4 text-2xl italic'>Eternal Bloom in Light and Shadow</p>
      </div>
    </section>
  )
}

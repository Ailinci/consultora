import './Hero.css'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='text'>
        <h1 className='title'>Lo que es importante que se destaque en las busquedas</h1>
        <p className='description'>una descripción corta del proyecto para que la pipol entienda de qué va esto</p>
      </div>
      <div className='imageContainer'>
      <Image
      src="/next.svg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
      </div>
    </section>
  )
}
export default Hero;
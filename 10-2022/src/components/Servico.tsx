import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './Servico.module.css'

export function Servico() {
  return (
    <section className={styles.bodyServico}>
        <div className={styles.mainImage}>
          <video src="./src/img/video-servico.mp4" autoPlay loop muted preload='./src/img/arkhi-design.png'></video>
        </div>
        <div className={styles.carousel}>
            <Carousel pause="hover">
                <Carousel.Item interval={1500}>
                    <img 
                        className='d-block w-100' 
                        src="./src/img/carrossel/pacotes-01.jpg" 
                        alt="Image One" 
                    />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img 
                        className='d-block w-100'
                        src="./src/img/carrossel/pacotes-02.jpg" 
                        alt="Image Two" 
                    />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img 
                        className='d-block w-100' 
                        src="./src/img/carrossel/pacotes-03.jpg" 
                        alt="Image One" 
                    />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img 
                        className='d-block w-100' 
                        src="./src/img/carrossel/pacotes-04.jpg" 
                        alt="Image One" 
                    />
                </Carousel.Item>
            </Carousel>
        </div>
  </section>
  )
}


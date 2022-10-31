import 'bootstrap/dist/css/bootstrap.css'
import { Carousel } from 'react-bootstrap'
import styles from './Page01.module.css'


export function Page01() {
    return (
        <div className={styles.bodyPage01}>
            <div className={styles.mainImage}>
                <video src="./src/img/main-video.mp4" autoPlay loop muted preload='./src/img/main-img.jpg'/>
                <p>Experiencias visuais</p> 
                <h1>Para o seu empreendimento</h1>
            </div>
            <div className={styles.picture}>
                <picture>
                    <img src="./src/img/02.png" alt="" />
                    <img src="./src/img/01.jpg" alt="" />
                    <img src="./src/img/03.jpg" alt="" />
                </picture>
                <picture>
                    <img src="./src/img/08.png" alt="" />
                    <img src="./src/img/04.jpg" alt="" />
                    <img src="./src/img/06.png" alt="" />
                </picture>
                <picture>
                    <img src="./src/img/05.jpg" alt="" />
                    <img src="./src/img/07.png" alt="" />
                </picture>
            </div>
            <div className={styles.carousel}>
                <Carousel pause="hover">
                    <Carousel.Item interval={1000}>
                        <img 
                            className='d-block w-100' 
                            src="./src/img/carrossel/pacotes-01.jpg" 
                            alt="Image One" 
                        />
                        <Carousel.Caption>
                            <h3></h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img 
                            className='d-block w-100'
                            src="./src/img/carrossel/pacotes-02.jpg" 
                            alt="Image Two" 
                        />
                        <Carousel.Caption>
                            <h3></h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img 
                            className='d-block w-100' 
                            src="./src/img/carrossel/pacotes-03.jpg" 
                            alt="Image One" 
                        />
                        <Carousel.Caption>
                            <h3></h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img 
                            className='d-block w-100' 
                            src="./src/img/carrossel/pacotes-04.jpg" 
                            alt="Image One" 
                        />
                        <Carousel.Caption>
                            <h3></h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <p>
                Onde entrar em contato?
                Nosso atendimento é 100% online. Em caso de dúvidas e interesses, basta nos mandar mensagem pelo e-mail, que está em nosso perfil, ou pelo direct do Instagram.
            </p>
        </div>
    )
}
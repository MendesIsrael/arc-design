import 'bootstrap/dist/css/bootstrap.css'
import { Carousel } from 'react-bootstrap'
import styles from './Page01.module.css'



export function Page01() {
    return (
        <div className={styles.bodyPage01}>
            <div>
                <nav>
                    <ul>
                        <li><a href="#">home</a></li>
                        <li><a href="#">serviço</a></li>
                        <li><a href="#">sobre</a></li>
                        <li><a href="#">departamento</a></li>
                        <li><a href="#">contato</a></li>
                    </ul>
                </nav>
            </div>
            <div className={styles.mainImage}>
                <h1>Para o seu Empreendimento</h1>
                <h3>Experiencias visuais</h3>
            </div>
            <div>
                <h1>
                    Sobre nós:
                </h1>
                <p>
                    Somos a equipe RC Arkhi Design, uma empresa voltada em projetos de design de interiores, podendo elaborar móveis planejados, iluminação e decoração de ambientes.
                    Nosso time é composto por dois fundadores e integrantes: Christian Figueiredo, formado no curso Técnico de Edificações – que, inclusive, dá aula de Sketchup e Vray - e Raíssa de Sá, também formada em Edificações.
                </p>
            </div>
            <div className={styles.carousel}>
                <h4>React-Bootstrap Carousel Component</h4>
                <Carousel pause="hover">
                    <Carousel.Item interval={1000}>
                        <img 
                            className='d-block w-100' 
                            src="./src/img/carrossel/pacotes-1.jpg" 
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
                            src="./src/img/carrossel/pacotes-2.jpg" 
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
                            src="./src/img/carrossel/pacotes-3.jpg" 
                            alt="Image One" 
                        />
                        <Carousel.Caption>
                            <h3></h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}
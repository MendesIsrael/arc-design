import 'bootstrap/dist/css/bootstrap.css'
import { Carousel } from 'react-bootstrap'
import styles from './Page01.module.css'


export function Page01() {
    return (
        <div className={styles.bodyPage01}>
            <nav>
                    <li><a href="#">home</a></li>
                    <li><a href="#">serviço</a></li>
                    <li><a href="#">sobre</a></li>
                    <li><a href="https://linkr.bio/rcarkhidesign" target="_blank">contato</a></li>
            </nav>
            <div className={styles.mainImage}>
                <img src="./src/img/arkhi-design.png" alt="arkhi design" />
                <video src="./src/img/main-video.mp4" autoPlay loop muted preload='./src/img/main-img.jpg'/>
                <p>Experiencias visuais</p> 
                <h1>Para o seu empreendimento</h1>
            </div>
            <div className={styles.text}>
                <p>
                    Somos a equipe RC Arkhi Design, uma empresa voltada em projetos de design de interiores, podendo elaborar móveis planejados, iluminação e decoração de ambientes.
                    Nosso time é composto por dois fundadores e integrantes: Christian Figueiredo, formado no curso Técnico de Edificações – que, inclusive, dá aula de Sketchup e Vray - e Raíssa de Sá, também formada em Edificações.
                </p>
                <p>
                    Como realizamos nossos projetos?
                    Com conhecimentos adequados de materiais, fornecedores e de todo sistema necessário, iremos assegurar o bom gerenciamento de seu projeto, tendo espaços usados de forma pensada para trazerem o bom aproveitamento e a funcionabilidade, portanto não esquecendo da beleza do ambiente. Ah, e vale ressaltar que tudo isso será planejado, executado e devolvido dentro do prazo prometido.
                    Existem 4 pilares para a confecção dos projetos:
                    1° Reunião com o Cliente - Para que os profissionais entendam seus desejos e necessidades;
                    2° Início do desenvolvimento do projeto – Onde mostra ideias de acordo com o que foi proposto na reunião;
                    3° Projeto Executivo – Onde os profissionais dão início a todo detalhamento que foi proposto e frisado, como o estilo de ambiente do cliente, móveis, revestimentos, iluminação etc.
                    4° Devolução do projeto – É a ultima etapa, na qual os clientes recebem todo o projeto, que pode compor: Plantas, planilhas, memoriais descritivos, imagens e vídeos do projeto 3d.
                </p>
                <p>
                    Onde entrar em contato?
                    Nosso atendimento é 100% online. Em caso de dúvidas e interesses, basta nos mandar mensagem pelo e-mail, que está em nosso perfil, ou pelo direct do Instagram.
                </p>
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
        </div>
    )
}
import styles from './Sobre.module.css'

export default function Sobre() {
  return (
    <section>
      <div className={styles.mainImage}>
        <video src="./src/img/video.mp4" autoPlay loop muted preload='./src/img/arkhi-design.png'></video>
      </div>
      <div className={styles.text}>
        <h1>
          Quem é RC Arkhi Design?
        </h1>
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
  </section>
  )
}

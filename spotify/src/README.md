O ReactJS é uma biblioteca do javascript, que tem o poder de componentizar as estruturas de forma escalável, rápida e simples. Ademais, para quem é familiarizado com HTML, vai ter
facilidade de construir páginas web´s com essa ferramenta, já que a sintaxe é praticamente idêntica. Esse projeto corresponde a página de Login do Spotify, logo, está fielmente 
correspondente a página de acordo com a época em que foi feito. A estrutura do ReactJS é feita a partir de uma constante em javascript wue vai retornar uma linguagem em jsx, ou seja,
HTML embutido ao javascript.

    const Login = () => {
      return(
          <div className="contaneir-principal">
            <div className="first-contaneir">
                <div className="logo">
                    <img src={Logo} alt="Spotify" />
                </div>
            </div>
            <div className="segund-contaneir">
                <main>
                    <div className="texto-sobre">
                        <p>Para continuar, faça login no Spotify.</p>
                        <div className="btns">...
      )
   }
   
   Sendo que, arquivos de extensão CSS ou de imagem(png, jpeg, icon etc) são adicionados pelo comando "import", veja a seguir:
   
      import './style.css'
      import Logo from '../assets/spotifyslogan.png'
      import logofacebook from '../assets/facebook.png'
      import logogoogle from '../assets/google.png'
      import logoapple from '../assets/apple.png'
      import {FiAlertCircle} from 'react-icons/fi'
      
  Todas as imagens, componentes e css do projeto estão contidos nessas importações. Portanto, essas são as pequenas diferenças e muitas vantagens de usar ReactJS
  no projeto.

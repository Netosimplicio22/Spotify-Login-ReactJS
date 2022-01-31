import './style.css'
import Logo from '../assets/spotifyslogan.png'
import logofacebook from '../assets/facebook.png'
import logogoogle from '../assets/google.png'
import logoapple from '../assets/apple.png'
import {FiAlertCircle} from 'react-icons/fi'

export const Login = () => {

    function crescer(){
        var btn = document.getElementById("btn-entrar")

        btn.style.width = "136px"
        btn.style.height = "49px"
        btn.style.fontSize = "15px"
    }

    function diminuir(){
        var btn2 = document.getElementById("btn-entrar")

        btn2.style.width = "131.16px"
        btn2.style.height = "48px"
        btn2.style.fontSize = "14px"

    }

    function outline(){
        var inputtext = document.getElementById("user")
        var inputpass = document.getElementById("password")

        inputtext.style.outline = "2px solid black"
        inputpass.style.outline = "none"
    }

    function outline2(){
        var inputtext = document.getElementById("user")
        var inputpass = document.getElementById("password")

        inputpass.style.outline = "2px solid black"
        inputtext.style.outline = "none"
    }

    function enterspan(){
        var alert1 = document.getElementById("alert1")
        var input1 = document.getElementById("user")

        if(input1.value.length >= 1){
            alert1.style.display = "none"
            input1.style.border = "1px solid black"
            input1.style.outline = "2px solid black"

        }
    }

    function outspan(){
        var alert1 = document.getElementById("alert1")
        var input1 = document.getElementById("user")

        if(input1.value.length <= 0){
            alert1.style.display = "flex"
            input1.style.border = "1px solid #D31225"
            input1.style.outline = "2px solid #D31225"
        }
    }

    function enterspan2(){
        var alert2 = document.getElementById("alert2")
        var input2 = document.getElementById("password")

        if(input2.value.length >= 1){
            alert2.style.display = "none"
            input2.style.border = "1px solid black"
            input2.style.outline = "2px solid black"
        }
    }

    function outspan2(){
        var alert2 = document.getElementById("alert2")
        var input2 = document.getElementById("password")

        if(input2.value.length <= 0){
            alert2.style.display = "flex"
            input2.style.border = "1px solid #D31225"
            input2.style.outline = "2px solid #D31225"
        }
    }

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
                        <div className="btns">
                            <button id='facebook'><img src={logofacebook} alt="facebook" /> CONTINUAR COM O FACEBOOK</button>
                            <button id='apple'><img src={logoapple} alt="apple" /> CONTINUAR COM A APPLE</button>
                            <button id='google'><img src={logogoogle} alt="google" /> CONTINUAR COM O GOOGLE</button>
                            <button id='telefone'>CONTINUAR COM UM NÚMERO DE TELEFONE</button>
                        </div>
                    </div>
                    <div className="or">
                        <hr />
                        <span>ou</span>
                        <hr />
                    </div>
                    <form className="form-login">
                        <div className="input-block">
                            <label htmlFor="user">Endereço de e-mail ou nome de usuário</label>
                            <input type="text" name="user" id="user" placeholder='Endreço de -mail ou nome de usuário' maxLength={200} autoComplete='email or nome' onClick={outline} onKeyDown={enterspan} onKeyUp={outspan}/>
                            <div className="alert-user" id='alert1'>
                                <FiAlertCircle/>
                                <p>Insira seu nome de usuário ou endereço de e-mail do Spotify.</p>
                            </div>
                        </div>
                        <div className="input-block">
                            <label htmlFor="password">Senha</label>
                            <input type="password" name="password" id="password" placeholder='Senha' autoComplete='current-password' maxLength={100} onClick={outline2} onKeyDown={enterspan2} onKeyUp={outspan2}/>
                            <div className="alert-pass" id='alert2'>
                                <FiAlertCircle/> 
                                <p>Por favor, insira sua senha.</p>
                            </div>
                            <div className="forgot-password">
                                <a href="#">Esqueceu sua senha?</a>
                            </div>
                        </div>
                        <div className="dados">
                            <div className="input-group">
                                <input type="checkbox" name="check" id="check" />
                                <label htmlFor="check">Lembrar de mim</label>
                            </div>
                            <div className="btn-entrar">
                                <button id="btn-entrar" onMouseOver={crescer} onMouseOut={diminuir}>
                                    ENTRAR
                                </button>
                            </div>
                        </div>
                        <hr />
                        <div className="finish">
                            <span>Não tem uma conta?</span>
                            <button >
                                INSCREVER-SE NO SPOTIFY
                            </button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    )
}
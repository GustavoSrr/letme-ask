import { useAuth } from "../hooks/useAuth";
import { useHistory } from "react-router-dom";

import Illustration from "../assets/images/illustration.svg";
import Logo from "../assets/images/logo.svg";
import GoogleLogo from "../assets/images/google-icon.svg";

import { Button } from "../components/Button";

import "../style/auth.scss";

export function Home() {
  const history = useHistory();
  const { user, signInGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInGoogle();
    }
    history.push("/rooms/new");
  }
  return (
    <div id="AuthPage">
      <aside>
        <img src={Illustration} alt="Ilustração da home" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire suas dúvidas da sua audiência em tempo real.</p>
      </aside>
      <main>
        <div className="MainContent">
          <img src={Logo} alt="Logo do LetmeAsk"></img>
          <button className="CreateRoom" onClick={handleCreateRoom}>
            <img src={GoogleLogo} alt="Logo do Google"></img>
            Criar sua sala com Google
          </button>
          <div className="Separator">ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código de uma sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}

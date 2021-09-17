//import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

import Illustration from "../assets/images/illustration.svg";
import Logo from "../assets/images/logo.svg";

import { Button } from "../components/Button";

import "../style/auth.scss";

export function NewRoom() {
  //const { user } = useAuth();
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
          <h2>Criar uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui.</Link>
          </p>
        </div>
      </main>
    </div>
  );
}

import { ItemLista, Lista, Navegador } from "../pages/styles";

export const Menu = () => {
    return (
      <Navegador>
            <Lista>
                <li>
                    <ItemLista to="/">Home</ItemLista>
                </li>

                <li>
                    <ItemLista to="/cursos">Cursos</ItemLista>
                </li>

                <li>
                    <ItemLista to="/contato">Contato</ItemLista>
                </li>
            </Lista>
        </Navegador>
    );
  }
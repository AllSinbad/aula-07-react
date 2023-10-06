import { ItemListaCursos, ListaCursos, Titulo } from "./styles";

export const Cursos = () => {
    return (
      <>
           <Titulo>Lista de cursos: </Titulo>
            <ListaCursos>
                <li>
                    <ItemListaCursos to="/detalhes/programacao">Programação Fullstack</ItemListaCursos>
                </li>
                <li>
                    <ItemListaCursos to="/detalhes/data">Data Science</ItemListaCursos>
                </li>
                <li>
                    <ItemListaCursos to="/detalhes/marketing">Marketing Digital</ItemListaCursos>
                </li>
                <li>
                    <ItemListaCursos to="/detalhes/design">Design Fullstack</ItemListaCursos>
                </li>

                <li>
                    <ItemListaCursos to="/detalhes/art">Art Design</ItemListaCursos>
                </li>
                <li>
                    <ItemListaCursos to="/detalhes/film">Film Design</ItemListaCursos>
                </li>
                <li>
                    <ItemListaCursos to="/detalhes/fotografia">Fotografia Design</ItemListaCursos>
                </li>
            </ListaCursos>
        </>
    );
  }
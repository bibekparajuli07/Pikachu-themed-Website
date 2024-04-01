import React, { useContext } from "react";
import FavoriteContext from "../../contexts/favoritesContext";
import { Container } from "./styled";

export default function Navbar() {
  const { favoritePokemons } = useContext(FavoriteContext);
  const logoImg =
    "p1.jpg";
    ;
  return (
    <Container>
      <div>
        <img alt="pokeapi-logo" src={logoImg} className="navbar-img" />
      </div>
      <div >❤️ / {favoritePokemons.length}</div>
    </Container>
  );
}

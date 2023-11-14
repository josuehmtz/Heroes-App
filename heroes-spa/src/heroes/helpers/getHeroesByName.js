import { heroes } from "../data/heroes";

export const getHeroesByName = (name = '') => {
    name.toLowerCase().trim();
    if(name.length === 0) return [];
    return heroes.filter(
        hero => hero.superhero.toLowerCase().includes(name)
    );
}
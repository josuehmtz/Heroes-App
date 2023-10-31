import { heroes } from "../data/heroes"

export const getHeroByid = (id) => {
    return heroes.find(heroe => id === heroe.id);
}
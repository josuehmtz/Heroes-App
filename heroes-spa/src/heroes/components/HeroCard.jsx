import {Link} from 'react-router-dom'
export const HeroCard = ({id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,}) => {
        
    const heroImage = `/assets/heroes/${id}.jpg`;
    const charactersByhero = (<p className="card-text">{characters}</p>);
  return (
    <div className="col">
        <div className="card p-3">
            <div className="row g-0">
                <div className="col-4 animate__bounce">
                    <img width='80%' src={heroImage} alt={superhero} className="card-image"/>
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        {
                            (alter_ego != characters) && charactersByhero
                        }
                        <p className="text-muted ">{first_appearance}</p>
                        <Link to={`/hero/${id}`}>
                            More information...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

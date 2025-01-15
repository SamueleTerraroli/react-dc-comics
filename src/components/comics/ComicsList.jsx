import ComicCard from "./comicCard"
import comics from "../../data/comics"

const ComicsList = () => {
    return (
        <section id="comicList" className="container card-container">

            <div className="interactBtn absoluteBtn">
                <a href="#">CURRENT SERIES</a>
            </div>

            {comics.map(comic => (
                <ComicCard key={comic.id} comicData={comic} />
            ))}

            <div className="interactBtn">
                <a href="#">LOAD MORE</a>
            </div>

        </section>
    )
}

export default ComicsList
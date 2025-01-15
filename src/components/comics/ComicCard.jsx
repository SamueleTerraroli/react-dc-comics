const ComicCard = (props) => {
    const { thumb, series } = props.comicData
    return (
        <div className="comicCard">
            <img src={thumb} alt={series} />
            <h3>{series}</h3>
        </div>
    )
}

export default ComicCard
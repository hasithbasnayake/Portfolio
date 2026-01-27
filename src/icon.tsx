export default function Icon ( {name, link, icon} : {name: any, link: any, icon: any}) {
    return (
        <a href={link} className="icon-link" target="_blank" rel="noopener noreferrer">
            <img src={icon} className="icon-image" alt={`${name}`}></img>
        </a>
    )
}

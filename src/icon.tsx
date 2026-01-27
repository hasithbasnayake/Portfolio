export default function Icon ( {name, link, icon} : {name: any, link: any, icon: any}) {
    return (
        <a href={link} className="icon-link">
            <img src={icon} className="icon-image" alt={`${name}`}></img>
        </a>
    )
}

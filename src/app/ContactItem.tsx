
interface Props {
    name: string;
    image: string;
    link: string;
}
export default function ContactItem(props: Props) {
    return (
        <div className="contact-item" onClick={e => window.open(props.link, '__self')}>
            <img className="contact-icon" src={props.image} alt={props.name} />
        </div>
    )
}
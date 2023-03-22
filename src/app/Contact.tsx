import '../style/Contact.css';

interface Props {
    click: () => void;
    open: boolean;
}

export default function Contact(props: Props) {
    return (
        <div className="contact" onClick={props.click}>
            <h2>{props.open? '[-contact]' : '[+contact]'}</h2>
        </div>
    );
}
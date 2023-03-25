import '../style/Contact.css';

interface Props {
    click: () => void;
    open: boolean;
    hidden: boolean;
}

export default function Contact(props: Props) {
    return (
        <>
            <h2 className={'contact-btn ' + (props.hidden ? 'hidden' : '')} onClick={props.click}>
                {props.open ? '[-Contact]' : '[+Contact]'}
            </h2>
            <div className={'contact ' + (props.open ? '' : 'hidden')}>
                u can't find me
            </div>
        </>
    );
}
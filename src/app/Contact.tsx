import '../style/Contact.css';
import ContactItem from './ContactItem';
import data from '../data/data.json';

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
                {
                    data.contacts.map((item) =>
                        <ContactItem name={item.name} image={item.image} link={item.link} />
                    )
                }
            </div>
        </>
    );
}
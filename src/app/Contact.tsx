import { useNavigate } from 'react-router-dom';
import data from '../data/data.json';
import '../style/Contact.css';
import ContactItem from './ContactItem';

interface Props {
    click: () => void;
    open: boolean;
    hidden: boolean;
}

export default function Contact(props: Props) {
    // TODO: Maybe contact in about?

    const navigate = useNavigate();
    const click = () => {
        if (props.open) navigate('/');
        else navigate('/contact');
        props.click();
    }
    return (
        <>
            <h2 className={'btn contact-btn ' + (props.hidden ? 'hidden' : '')} onMouseDown={click}>
                {props.open ? '[-Contact]' : '[+Contact]'}
            </h2>
            <div className={'contact maximized ' + (props.open ? '' : 'hidden')}>
                {
                    data.contacts.map((item) =>
                        <ContactItem name={item.name} image={item.image} link={item.link} />
                    )
                }
            </div>
        </>
    );
}
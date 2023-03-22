import '../style/Projects.css';

interface Props {
    click: () => void;
    open: boolean;
}

export default function Projects(props: Props) {
    return (
        <div className="projects" onClick={props.click}>
            <h2>{props.open ? '[-Projects]' : '[+Projects]'}</h2>
        </div>
    );
}
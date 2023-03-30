interface Props {
    name: string;
    selected: boolean;
    url: string;
    hover: () => void;
}

export default function ProjectItem(props: Props) {
    const classes = ['project-item'];
    if (props.selected) classes.push('selected');

    const nav = () => {
        window.open(props.url);
    }

    return (
        <div className={classes.join(' ')} onMouseOver={props.hover} onTouchStart={props.hover}>
            <div className='project-name'>
                {props.name}
            </div>
        </div>
    );
}
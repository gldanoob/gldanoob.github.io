interface Props {
    name: string;
    selected: boolean;
    hover: () => void;
}

export default function ProjectItem(props: Props) {
    const classes = ['project-item'];
    if (props.selected) classes.push('selected');
    return (
        <div className={classes.join(' ')} onMouseOver={props.hover} >
            <div className='project-name'>
                {props.name}
            </div>
        </div>
    );
}
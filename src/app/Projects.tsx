import { useState } from 'react';
import data from '../data/data.json';
import '../style/Projects.css';
import ProjectItem from './ProjectItem';

interface Props {
    click: () => void;
    open: boolean;
    hidden: boolean;
}

export default function Projects(props: Props) {
    const [selected, setSelected] = useState(0);
    const select = (index: number) => {
        setSelected(index);
    }

    const nav = () => {
        window.open(data.projects[selected].url);
    }

    return (
        <>
            <h2 className={'btn projects-btn ' + (props.hidden ? 'hidden' : '')} onClick={props.click}>
                {props.open ? '[-Projects]' : '[+Projects]'}
            </h2>
            <div className={'projects ' + (props.open ? '' : 'hidden')}>
                {/* TODO: Fix Dumb way to add images */}
                <img src={data.projects[selected].image} className='project-image' onMouseDown={nav}/>
                <div className='project-list'>
                    {
                        data.projects.map((item, index) =>
                            <ProjectItem name={item.name} url={item.url} selected={selected == index} hover={() => select(index)} />
                        )
                    }
                </div>
            </div>
        </>
    );
}
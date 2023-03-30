import '../style/About.css';

interface Props {
    visible: boolean;
}

export default function About(props: Props) {
    return (
        <div className='about-container maximized'>
            <div className="about" style={{ opacity: props.visible ? 1 : 0 }}>
                <div className="move">
                    <h1>@gldanoob</h1>
                    <h3>Materializes random ideas</h3>
                </div>
                <div className="fade">
                    <div className='description'>
                        Full-stack web developer, mathematician, and musician.
                    </div>
                    <div className='description'>
                        {"{More stuff WIP}"}
                    </div>
                </div>
            </div>
        </div>
    );
}
import '../style/About.css';

interface Props {
}

export default function About(props: Props) {
    return (
        <div className="about">
            <div className="move">
                <h1>GLDANOOB</h1>
                <h3>Materializes random ideas</h3>
            </div>
            <div className="fade">
                <div className='description'>
                    Full-stack web developer, mathematician, and musician.
                </div>
            </div>
        </div>
    );
}
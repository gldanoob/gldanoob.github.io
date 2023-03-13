import '../style/Panel.css';

export default function Panel() {
    return (
        <div className='panel'>
            <svg viewBox="0 0 10 10" height="300" width="300">
                <path
                    stroke='#fff' strokeWidth={0.05} fill='#ffffff10'>
                    <animate id="first" attributeName="d" dur="3s"
                        repeatCount='indefinite'
                        calcMode="spline"
                        keySplines="0.3 0 0.7 1;0.3 0 0.7 1;0.3 0 0.7 1;0.3 0 0.7 1"
                        values='M 10 0 C 6 7 2 5 0 10 h10; 
                        M10 0C4 3 1 7 0 10 h10;
                        M 10 0 C 3 4 6 8 0 10 h10;
                        M10 0C7 6 2 8 0 10 h10;
                        M 10 0 C 6 7 2 5 0 10 h10'/>
                </path>
                <text x="5.5" y="8.5" fontSizeAdjust='0.8' fill="#fff" fontSize="0.5">PROJECTS</text>
            </svg>
        </div>
    );
}
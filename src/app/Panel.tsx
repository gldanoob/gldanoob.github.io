import '../style/Panel.css';

export default function Panel() {
    return (
        <div className='panel'>
            <svg viewBox="0 0 9 9" height="100%" width="100%">
                <path
                    stroke='#fffa' strokeWidth='0.005px' fill='#ffffff10'>
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
            </svg>
        </div>
    );
}
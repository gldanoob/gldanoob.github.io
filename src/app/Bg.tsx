import '../style/Bg.css';
import { Panel } from './App';

interface Props {
    panel: Panel;
}

export default function Bg(props: Props) {
    return (
        <div className={'bg center ' + {
            [Panel.About]: 'closed',
            [Panel.Projects]: 'right-open',
            [Panel.Contact]: 'left-open',
        }[props.panel]} >
            <div className='wave'>
                <svg viewBox="0 0 10 10" height="100%" width="100%">
                    <path
                        stroke='#aaa' strokeWidth='0.005px' fillRule='evenodd'>
                        <animate id="first" attributeName="d" dur="3s"
                            repeatCount='indefinite'
                            calcMode="spline"
                            keySplines="0.3 0 0.7 1;0.3 0 0.7 1;0.3 0 0.7 1;0.3 0 0.7 1"
                            values='M 10 0 C 6 7 2 5 0 10 V 20 H 20 V 0; 
                        M10 0C4 3 1 7 0 10 V 20 H 20 V 0;
                        M 10 0 C 3 4 6 8 0 10 V 20 H 20 V 0;
                        M10 0C7 6 2 8 0 10 V 20 H 20 V 0;
                        M 10 0 C 6 7 2 5 0 10 V 20 H 20 V 0'/>
                    </path>
                </svg>
                <div className='right-fill'></div>
                <div className='bottom-fill'></div>
            </div>
        </div>
    );
}
import '../style/App.css';
import About from './About';
import Panel from './Wave';

function App() {
  function mouseMove(e: MouseEvent) {
    let panels = document.querySelectorAll('.panel') as NodeListOf<HTMLDivElement>;
    panels.forEach(element => {
      let x = (window.innerWidth / 2 - e.pageX);
      element.style.transform = `translate(-50%, -50%) translateX(${x}px)`;
    });
  }

  document.body.addEventListener('mousemove', mouseMove);

  return (
    <div className='App'>
      <About />
      <Panel/>
    </div>
  );
}

export default App;
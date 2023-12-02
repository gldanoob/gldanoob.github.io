import { useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../style/App.css';
import About from './About';
import Bg from './Bg';
import Contact from './Contact';
import Projects from './Projects';

export enum Panel {
	About,
	Projects,
	Contact,
}

export function App() {
	window.addEventListener('load', () => {
		window.scrollTo(0, 1)
	});

	const timeoutId = useRef<NodeJS.Timeout | null>(null);

	// TODO: turn this to custom hook
	function temporarilyPauseBg() {
		if (timeoutId.current) clearTimeout(timeoutId.current);
		const svg = document.querySelector('svg');
		svg?.pauseAnimations();
		timeoutId.current = setTimeout(() => svg?.unpauseAnimations(), 500)
	}


	const home = (panel: Panel) => {
		console.log('Panel', panel)
		return (
			<div className='App'>
				<About visible={panel === Panel.About} />
				<Bg panel={panel} />
				<Contact click={temporarilyPauseBg} open={panel === Panel.Contact} hidden={panel === Panel.Projects}></Contact>
				<Projects click={temporarilyPauseBg} open={panel === Panel.Projects} hidden={panel === Panel.Contact} />
			</div>
		)
	}

	// return home(Panel.About);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={home(Panel.About)} />
				<Route path="projects" element={home(Panel.Projects)} />
				<Route path="contact" element={home(Panel.Contact)} />
			</Routes>
		</BrowserRouter>
	);

	// return (
	// 	<div className='App'>
	// 		<About visible={panel === Panel.About} />
	// 		<Bg panel={panel} />
	// 		<Contact click={() => toggleLeft()} open={panel === Panel.Contact} hidden={panel === Panel.Projects}></Contact>
	// 		<Projects click={() => toggleRight()} open={panel === Panel.Projects} hidden={panel === Panel.Contact} />
	// 	</div>
	// );


}
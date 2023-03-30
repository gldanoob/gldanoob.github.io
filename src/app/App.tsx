import { useState } from 'react';
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
	const [panel, setPanel] = useState(Panel.About);

	function toggleRight() {
		setPanel(panel == Panel.About ? Panel.Projects : Panel.About)
	}

	function toggleLeft() {
		setPanel(panel == Panel.About ? Panel.Contact : Panel.About)
	}

	return (
		<div className='App'>
			<About visible={panel == Panel.About} />
			<Bg panel={panel} />
			<Contact click={() => toggleLeft()} open={panel == Panel.Contact} hidden={panel == Panel.Projects}></Contact>
			<Projects click={() => toggleRight()} open={panel == Panel.Projects} hidden={panel == Panel.Contact} />
		</div>
	);
}
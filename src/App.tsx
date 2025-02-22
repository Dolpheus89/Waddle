import "./App.css";
import { useEffect, useState } from "react";
import { Button } from "./lib";

function App() {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return (
		<main>
			<button type="button" onClick={toggleTheme}>
				{theme === "light" ? "Mode Sombre" : "Mode Clair"}
			</button>
			<div style={{ display: "flex", alignItems: "end" }}>
				<Button size="sm" variant="text">
					Text
				</Button>
				<Button size="m" variant="text">
					Text
				</Button>
				<Button size="l" variant="text">
					Text
				</Button>
				<Button size="l" variant="text" disabled>
					Text
				</Button>
			</div>
			<div style={{ display: "flex", alignItems: "end" }}>
				<Button size="sm" variant="contained">
					Contained
				</Button>
				<Button size="m" variant="contained">
					Contained
				</Button>
				<Button size="l" variant="contained">
					Contained
				</Button>
				<Button size="l" variant="contained" disabled>
					Contained
				</Button>
			</div>
			<div
				style={{ display: "flex", alignItems: "end", justifyContent: "start" }}
			>
				<Button size="sm" variant="outlined">
					Outlined
				</Button>
				<Button size="m" variant="outlined">
					Outlined
				</Button>
				<Button size="l" variant="outlined">
					Outlined
				</Button>
				<Button size="l" variant="outlined" disabled>
					Oulined
				</Button>
			</div>
		</main>
	);
}

export default App;

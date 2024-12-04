import { useEffect, useState } from "react";
import { GalleryData } from "./GalleryData";
import "./index.css";

function App() {
	const [data, setData] = useState([]);
	const [collection, setCollection] = useState([]);

	useEffect(() => {
		setData(GalleryData);
		console.log(GalleryData);
	}, []);

	return (
		<div className="App">
			<div className="galleryWrapper">
				<div className="galleryContainer">
					{data.map((item) => (
						<div className="galleryItem">
							<img src={item.src} key={item.id} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;

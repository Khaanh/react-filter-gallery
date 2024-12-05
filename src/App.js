import { useEffect, useState } from "react";
import { GalleryData } from "./GalleryData";
import "./index.css";

function App() {
	const [data, setData] = useState([]);
	const [collection, setCollection] = useState([]);

	const handleFilter = (itemData) => {
		const filteredPic = GalleryData.filter((item) => item.title === itemData);
		setData(filteredPic);
	};

	useEffect(() => {
		setData(GalleryData);
		setCollection([...new Set(GalleryData.map((item) => item.title))]);
	}, []);

	console.log("collection: ", collection);

	return (
		<div className="App">
			<div className="galleryWrapper">
				<div className="filterItem">
					<ul>
						<li>
							<button onClick={() => setData(GalleryData)}>All</button>
						</li>

						{collection.map((item) => (
							<li>
								<button onClick={() => handleFilter(item)}>{item}</button>
							</li>
						))}
					</ul>
				</div>

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

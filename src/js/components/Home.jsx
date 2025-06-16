import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {


	const [greenLight, setGreenLight] = useState("bg-secondary")
	const [yellowLight, setYellowLight] = useState("bg-secondary")
	const [redLight, setRedLight] = useState("bg-secondary")

	
	function turnOnGreen() {
	
		if (greenLight === "bg-secondary") {
			setGreenLight("bg-success")
			setYellowLight("bg-secondary")
			setRedLight("bg-secondary")
		}
	}

	function turnOnYellow() {
	
		if (yellowLight === "bg-secondary") {
			setGreenLight("bg-secondary")
			setYellowLight("bg-warning")
			setRedLight("bg-secondary")
		}
	}

	function turnOnRed() {
	
		if (redLight === "bg-secondary") {
			setGreenLight("bg-secondary")
			setYellowLight("bg-secondary")
			setRedLight("bg-danger")
		}
	}


	return (
		<div className="text-center">

			<h1 className="text-center mt-5">Project: Traffic Light 🚥 🚦</h1>


			<div className="container bg-black p-4 d-flex align-items-center mt-5" style={{width: "650px"}}>

				<div className="bg-dark p-3 rounded-4 d-flex  align-items-center gap-3">

					{/* GREEN */}
					<div className={"rounded-circle " + greenLight} onClick={turnOnGreen} style={{width: "180px", height: "180px"}}></div>


					{/* YELLOW */}
					<div className={"rounded-circle " + yellowLight} onClick={turnOnYellow} style={{width: "180px", height: "180px"}}></div>


					{/* RED */}
					<div className={"rounded-circle " + redLight} onClick={turnOnRed} style={{width: "180px", height: "180px"}}></div>
				</div>

			</div>


		</div>
	);
};

export default Home;
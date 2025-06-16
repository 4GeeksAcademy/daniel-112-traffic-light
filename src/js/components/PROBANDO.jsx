import React, {useState} from "react";//1. importar useState de la React

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
   // [espacio de memoria, funcion que actualiza ese espacio de memoria]
	const [name,setName] = useState("Rigo")
	const [text,setText] = useState("Cambiar nombre")
	const [color,setColor] = useState("btn-success")

    

	
	function saludar() {
	
		if (name === "Rigo") {
			setName("Luis")
			setText("Nombre cambiado")
			setColor("btn-secondary")
		} else {
			setName("Rigo")
			setText("Cambiar nombre")
			setColor("btn-success")
		}
		
	}


	return (
		<div className="text-center">
            

			<h1 className="text-center mt-5">Hello {name}</h1>
			<p>
				<img src={rigoImage} />
			</p>
			                                 {/* onclick="saludar()" */}
			<a href="#" className={"btn "+color} onClick={saludar}>
				{text}
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
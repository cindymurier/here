"use strict";

import { User } from "./modules/User";

//récupérer des profils utilisateurs depuis une API
const renderPerson = async () => {
	try {
		const response = await fetch("https://randomuser.me/api/?results=20");
		const data = await response.json();
		console.log(data);

		//permet de générer et d'afficher chaquer personne
		data.results.forEach((e) => {
			console.log(e);

			//crée un user
			const user = new User(e);

			console.log(user);

			//génère le user
			user.generateUserElement();
			//affiche le user
			user.display();

			//appel la fonction click
			user.click();
		});
	} catch (e) {
		console.error(e.message);
	}
};

renderPerson();

//permet de trier la data
//ne fonctionne pas
// const parsePersonData = (rawData) => {
// 	const { personTab } = rawData;
// 	const people = personTab.map((el) => {
// 		return {
// 			title: el.name.title,
// 			firstName: el.name.first,
// 			lastName: el.name.last,
// 			city: el.location.city,
// 			country: el.location.country,
// 			age: el.dob.age,
// 			email: el.email,
// 			picture: el.picture.large,
// 		};
// 	});
// 	return {
// 		people,
// 	};
// };

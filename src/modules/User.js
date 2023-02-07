export class User {
	constructor(person) {
		this.title = person.name.title;
		this.firstName = person.name.first;
		this.lastName = person.name.last;
		this.city = person.location.city;
		this.country = person.location.country;
		this.age = person.dob.age;
		this.email = person.email;
		this.picture = person.picture.large;
		this.present = false;
		this.element = this.generateUserElement();
	}

	generateUserElement() {
		const user = document.createElement("div");
		user.classList.add("user");
		user.dataset.present = this.present;

		const completeName = `${this.title} ${this.firstName} ${this.lastName}`;

		const html = `<img src="${this.picture}">
		<div class="user--info">
				<h1>${completeName}</h1>
				<p>${this.age} years old</p>
				<p>${this.city}, ${this.country}</p>
		</div>
		<a href="${this.email}">
				<span class="mail">✉️</span>
		</a>`;

		user.insertAdjacentHTML("afterbegin", html);

		return user;
	}

	display() {
		document.querySelector("main").appendChild(this.element);

		return this;
	}

	click() {
		document.querySelector("main").addEventListener("click", (e) => {
			if (e.target.dataset.present === "false") {
				e.target.dataset.present = "true";
				this.present = "true";
			} else if (e.target.dataset.present === "true") {
				e.target.dataset.present = "false";
				this.present = "false";
			}
		});

		return this;
	}
}

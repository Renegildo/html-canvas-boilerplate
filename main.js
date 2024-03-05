const canvas = document.getElementById("c");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Circle {
	constructor(x, y, radius, color) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;

		this.update = () => {
			this.draw();
		};
		this.draw = () => {
			c.beginPath();
			c.fillStyle = this.color;
			c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
			c.fill();
			c.closePath();
		};
	}
}

const init = () => {
	animate();
};

const animate = () => {
	window.requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);
	const x = window.innerWidth / 2;
	const y = window.innerHeight / 2;
	const radius = 10;
	const color = "red";

	const circle = new Circle(x, y, radius, color);
	circle.update();
};

init();

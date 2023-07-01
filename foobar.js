"use strict";
const FooBar = (n) => {
	for (let i = 1; i <= n; i++) {
		let fb = (i % 3 === 0 ? "Foo" : "") + (i % 5 === 0 ? "Bar" : "");
		console.log(fb.length > 0 ? fb : i);
	}
};

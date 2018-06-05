// reverses a string.
String.prototype.reverse = function() {
	return Array.from(this).reverse().join("");
}


// define a phrase object.
function Phrase(content) {
	this.content = content;

	//returns content processed for palindrome test
	this.processedContent = function processedContent() {
		return this.content.toLowerCase();
	}


 	this.palindrome = function palindrome() {
 		let processedContent = this.content.toLowerCase();
		return this.processedContent() === reverse(this.processedContent());
 	};
}

function TranslatedPhrase(content, translation) {
	this.content = content;

	this.processedContent = function processedContent() {
		return this.translation.toLowerCase();
	}

	this.palindrome = function palindrome() {
		return this.processedContent() === this.processedContent().reverse();
	}
}





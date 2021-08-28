function reverseString(str) {
	let rev="";

    const len = string.length;
   for (let i = 0,j=len-1; i < len ; i++,j--) {
   			rev=rev+str[j];
    }
    console.log("reversed string :");
    console.log(rev);
 }

const string = prompt('Enter a string: ');
console.log("qriginal string :");
console.log(string);
reverseString(string);

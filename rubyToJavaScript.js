//variables +console
var apple = 14;;
console.log(apple);
console.log('I have '+ apple +' apples' );


console.log('================');
//Arrays and  Objects.

//ARRAY
console.log('display elements of array:');

var materials = ['wood', 'metal', 'stone'];
for (var index = 0; index < materials.length; index++){
console.log(materials[index]);
}
console.log('================');
//OBJECTS
console.log('display elements of objecy/hash:');

var words={elephant: "The world's largest land mammal.", school: "A place of learning.", ice_cream: "A delicious milk-based dessert."}
console.log(words);

//if -else statments
var num = 16;
if (num > 10){
    console.log(num + ' greater then 10.');

}else if (num === 10) {
    console.log(num + ' is exactly 10.');
}else {
console.log(num + ' must be less than 10.');
};
console.log('================');
//loops - while
var times = 10;
for (index = 1; index <= times; index++){
    console.log(index +') Doing the same thing over and over.');
};
console.log('================');
var base = 5;
var times = 20;
for (index = 1; index <= times; index++){
    console.log(index + base) ;
};
console.log('================');
var index = 0;
var sum = 0;
do {
  sum + index
  index += 1;
  console.log(index);
} while (index < 100);
console.log(sum);
console.log('================');
var index = 3;
do {
  if(index > 9){
    console.log('You can get on the rollercoaster!');
  }else{
    console.log('You are too short to ride this rollercoaster.');
  };
  index += 1;

} while (index < 15);
console.log('================');
var containers = ['purse', 'wallet', 'backpack']
for (var index = 0; index < containers.length; index++){
console.log(containers[index]);
}
console.log('================');

 function hello_world() {
  return console.log('Hello world!');
};

hello_world();

console.log('================');
var amount = 0;
function add(first_num, second_num){
return  amount = first_num + second_num
};
console.log(add(4, 5));

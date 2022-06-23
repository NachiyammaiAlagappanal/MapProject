/* eslint-disable no-console */
// import { map } from '@laufire/utils/collection';

const Data = [
	[{ name: 'apple', quantity: 10 },
		{ name: 'orange', quantity: 15 },
		{ name: 'grapes', quantity: 20 },
		{ name: 'Banana', quantity: 12 }],
	[{ name: 'apple', quantity: 10 },
		{ name: 'orange', quantity: 10 },
		{ name: 'Mango', quantity: 30 },
		{ name: 'Papaya', quantity: 40 }],
	[{ name: 'apple', quantity: 10 },
		{ name: 'Papaya', quantity: 40 }],
];

const GetLength = (data) => data.map((ele) => ele.length);

const MinValue = Math.min(...GetLength(Data));

const index = GetLength(Data).indexOf(MinValue);

const MinimumLengthArray = Data[index];
const Ele = MinimumLengthArray.map((ele) => ele.name);

console.log(Ele);

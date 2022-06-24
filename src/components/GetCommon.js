/* eslint-disable no-console */
// import { unique } from '@laufire/utils/predicates';
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
const GetCommon = () => {
	const GetLength = (data) => data.map((ele) => ele.length);

	const MinValue = Math.min(...GetLength(Data));

	const index = GetLength(Data).indexOf(MinValue);

	const MinimumLengthArray = Data[index];
	const Ele = MinimumLengthArray.map((ele) => ele.name);

	const Result = Data.map((element) => Ele.map((e) =>
		element.find((t) => t.name === e)));

	console.log(Result);

	return Result;
};

export default GetCommon;

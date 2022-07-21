const DUMMY_MESSAGES = [
	{
		_id: 1,
		content: "hello",
		sameAuthor: false,
		author: {
			username: 'Mark'
		},
		date: '22/01/2022',
		sameDay: false,
	},
	{
		_id: 2,
		content: "Hello once again",
		sameAuthor: true,
		author: {
			username: 'Mark'
		},
		date: '22/01/2022',
		sameDay: true,
	},
	{
		_id: 3,
		content: "hello again",
		sameAuthor: false,
		author: {
			username: 'John'
		},
		date: '24/01/2022',
		sameDay: false,
	},
	
]

export default DUMMY_MESSAGES;
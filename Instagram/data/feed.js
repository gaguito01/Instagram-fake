export const feed =  JSON.parse(localStorage.getItem('feed')) || [

  {

		ID: 1,

		profilePicture: 'Images/shadow-shaman.jpeg',

		userName: 'The_calculusguy',

		userComment: 'Things are heating up at the Trading Post in June!',

		publicationAge: '2w',

		isFollowing: false,

		publicationImage: 'Images/dota-creeps.webp',

		likes: 4512,

		comments: 220,

		yourComments: [],

		likeIcon: 'Icons/Notifications.png',

		isLiked: false,

	},

  {

		ID: 2,

		profilePicture: 'Images/Dendi.png',

		userName: 'Dendi',

		userComment: 'PLay Dota 2 instead',

		publicationAge: '1w',

		isFollowing: false,

		publicationImage: 'Images/lol.jpg',

		likes: 233,

		comments: 45,

		yourComments: [],

		likeIcon: 'Icons/Notifications.png',

		isLiked: false,

	},

  {

		ID: 3,

		profilePicture: 'Images/mars-profile.jpeg',

		userName: 'The_Mars',

		userComment: 'Blood!',

		publicationAge: '1d',

		isFollowing: false,

		publicationImage: 'Images/marsito.jpg',

		likes: 12,

		comments: 1,

		yourComments: [],

		likeIcon: 'Icons/Notifications.png',

		isLiked: false,

	},
	
  {

		ID: 4,

		profilePicture: 'Images/gothamchess.jpeg',

		userName: 'Gotham_Chess',

		userComment: 'New book out now!',

		publicationAge: '4d',

		isFollowing: false,

		publicationImage: 'Images/gothamchess-book.jpg',

		likes: 12000,

		comments: 420,

		yourComments: [],

		likeIcon: 'Icons/Notifications.png',

		isLiked: false,

	},
	
  {

		ID: 5,

		profilePicture: 'Images/jet.jpeg',

		userName: 'Jet',

		userComment: 'The best ones',

		publicationAge: '1h',

		isFollowing: false,

		publicationImage: 'Images/valorant-phoenix-jett.avif',

		likes: 3512,

		comments: 116,

		yourComments: [],

		likeIcon: 'Icons/Notifications.png',

		isLiked: false,

	}	

]

localStorage.setItem('feed', JSON.stringify(feed));


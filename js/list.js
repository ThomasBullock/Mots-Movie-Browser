//// Library of Helper Functions ////////

//Shorten string - used to shorten genre data from OMDB
function shortenStr(str) {
	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) === ',') {
			return str.substring(0, i);
		}
	}
	return str;
}

// remove spaces
function removeSp(str) {
	str = str.replace(/\s/g,'');  
	return str;
}

// generate random number
function randomNum(max) {
	return Math.floor(Math.random() * max) + 1;
}

/// unique number generator
function uniqueRandomNum(arr, tot, max) {
	while(arr.length < tot){
	  var r = randomNum(max)-1
	  var found = false;
	  for(var i=0;i<arr.length;i++) {
		if(arr[i]== r) {
			found=true;break
		}
	  }
	  if(!found)arr[arr.length] = r;
	}
}

//// Mots Movie Data Object //////

var motsFavs = {
		Animated: {
			pic: "img/animated.jpg",
			titles: ["grave of the fireflies", "fantastic planet", "animal farm", "fritz the cat", "The Lord of the Rings"],
			trailers: ["https://www.youtube.com/embed/_9WEyuMq0Yk?autoplay=true&showinfo=0", "https://www.youtube.com/embed/SgCxCZNkQ9E?autoplay=true&showinfo=0", "https://www.youtube.com/embed/2xzklsnBTzc?autoplay=true&showinfo=0", "https://www.youtube.com/embed/otZL-EfgrG4?autoplay=true&showinfo=0", "https://www.youtube.com/embed/wZpmZyTK2dI?autoplay=true&showinfo=0"]
		},
		Australian: {
			pic: "img/australian.jpg",
			titles: ["the year my voice broke", "bad boy bubby", "dead calm", "romper stomper", "death in brunswick", "idiot box", "flirting"],
			trailers: ["https://www.youtube.com/embed/q48hLGtazdw?autoplay=true&showinfo=0", "https://www.youtube.com/embed/V4kmC1TaDjM?autoplay=true&showinfo=0", "https://www.youtube.com/embed/jO6UmoEg9SI?autoplay=true&showinfo=0", "https://www.youtube.com/embed/bcHzd45kbx4?autoplay=true&showinfo=0", "https://www.youtube.com/embed/GMEsOfgo7gM?autoplay=true&showinfo=0", "https://www.youtube.com/embed/-IceJt9Ch6Y?autoplay=true&showinfo=0", "https://www.youtube.com/embed/fG-zYpioW6A?autoplay=true&showinfo=0"]
		},
		Biography: {
			pic: "img/biography.jpg",
			titles: ["in the name of the father", "the people vs larry flynt", "love & mercy", "downfall", "the pianist"],
			trailers: ["https://www.youtube.com/embed/04ZYTB2ZXVc?autoplay=true&showinfo=0", "https://www.youtube.com/embed/JqoH6dDyZmk?autoplay=true&showinfo=0", "https://www.youtube.com/embed/lioWzrpCtGQ?autoplay=true&showinfo=0", "https://www.youtube.com/embed/t7PmzdINGZk?autoplay=true&showinfo=0cc_load_policy=1iv_load_policy=1", "https://www.youtube.com/embed/CIRLLPa-j9o?autoplay=true&showinfo=0"]
		},
		Comedy: {
			pic: "img/comedy.jpg",
			titles: ["idiocracy", "walk hard", "life of brian", "Withnail & I", "Borat"],
			trailers: ["https://www.youtube.com/embed/clYwX8Z43zg?autoplay=true&showinfo=0", "https://www.youtube.com/embed/4yzjtnj8Y3U?autoplay=true&showinfo=0", "https://www.youtube.com/embed/NrDVsprWRCQ?autoplay=true&showinfo=0", "https://www.youtube.com/embed/rba1zgPTtOo?autoplay=true&showinfo=0", "https://www.youtube.com/embed/vlnUa_dNsRQ?autoplay=true&showinfo=0"]
		},
		Drama: {
			pic: "img/drama.jpg",
			titles: ["requiem for a dream", "There Will Be Blood", "Trainspotting"],
			trailers: ["https://www.youtube.com/embed/mkYNhZvlHv0?autoplay=true&showinfo=0", "https://www.youtube.com/embed/AHz-zZoBnbc?autoplay=true&showinfo=0", "https://www.youtube.com/embed/vPKhhne8mCs?autoplay=true&showinfo=0iv_load_policy=3"]
		},
		Dystopian: {
			pic: "img/dystopian.jpg",
			titles: ["children of men", "1984", "district 9", "mad max 2", "12 Monkeys"],
			trailers: ["https://www.youtube.com/embed/QfBSncUspBk?autoplay=true&showinfo=0", "https://www.youtube.com/embed/apTxPv-LJh8?autoplay=true&showinfo=0", "https://www.youtube.com/embed/gtMEDz7CvyY?autoplay=true&showinfo=0", "https://www.youtube.com/embed/i2gVXd7FzhQ?autoplay=true&showinfo=0", "https://www.youtube.com/embed/9l_U2xXb9VI?autoplay=true&showinfo=0"]
		},
		Music: {
			pic: "img/music.jpg",
			titles: ["straight outta compton", "Ray", "Whiplash", "The Filth and the Fury", "Pink Floyd The Wall"],
			trailers: ["https://www.youtube.com/embed/jPL4qEgoGuY?autoplay=true&showinfo=0", "https://www.youtube.com/embed/9nFrp7Z9wEU?autoplay=true&showinfo=0", "https://www.youtube.com/embed/xDAsABdkWSc?autoplay=true&showinfo=0", "https://www.youtube.com/embed/OXyf4jKtrSo?autoplay=true&showinfo=0", "https://www.youtube.com/embed/I7ijRW_k9r4?autoplay=true&showinfo=0"]
		},
		Thriller: {
			pic: "img/thriller.jpg",
			titles: ["prisoners", "end of watch", "nightcrawler", "drive", "The Silence of the Lambs"],
			trailers: ["https://www.youtube.com/embed/bpXfcTF6iVk?autoplay=true&showinfo=0", "https://www.youtube.com/embed/y_b4hRBadmc?autoplay=true&showinfo=0", "https://www.youtube.com/embed/X8kYDQan8bw?autoplay=true&showinfo=0", "https://www.youtube.com/embed/KBiOF3y1W0Y?autoplay=true&showinfo=0", "https://www.youtube.com/embed/V5dA92wqmME?autoplay=true&showinfo=0"]
		},
		War: {
			pic: "img/war.jpg",
			titles: ["full metal jacket", "platoon", "stalingrad", "Apocalypse Now", "Waterloo"],
			trailers: ["https://www.youtube.com/embed/iH5R4tgGdDk?autoplay=true&showinfo=0", "https://www.youtube.com/embed/4P21LKJeH4A?autoplay=true&showinfo=0", "https://www.youtube.com/embed/7QlK-l-vpZQ?autoplay=true&showinfo=0", "https://www.youtube.com/embed/Usq-rdnk3l0?autoplay=true&showinfo=0", "https://www.youtube.com/embed/JmRDwWiz6kw?autoplay=true&showinfo=0"],
		},
		"Sci-Fi": {
			pic: "img/sci-fi.jpg",
			titles: ["interstellar", "the martian ", "sunshine", "blade runner", "The Man From Earth"],
			trailers: ["https://www.youtube.com/embed/0vxOhd4qlnA?autoplay=true&showinfo=0", "https://www.youtube.com/embed/ej3ioOneTy8?autoplay=true&showinfo=0", "https://www.youtube.com/embed/r8BSlqHAhuY?autoplay=true&showinfo=0", "https://www.youtube.com/embed/4lj2ISTrfnE?autoplay=true&showinfo=0", "https://www.youtube.com/embed/9mOIxyRTY5I?autoplay=true&showinfo=0"]
		},
		Stinkers: {
			pic: "img/homer_stinkers.jpg",
			titles: ["the rover", "independence day", "the squid and the whale", "U-571", "face/off", "australia", "Coffee and Cigarettes", "Zack and Miri Make a Porno"],
			review: ["It should be good....Its post apocalyptic...its from the director of Animal Kingdom. But what a stinker! I had to look up plot summaries to understand what the fuck was going on and that was as big a waste of time as viewing the movie in the first place. He goes through a pointless turgid chase so he can bury his dead dog. Ooooo! so deep... so dark.... Fuuuuck Offf!",
					 "All those 'groundbreaking' special effects (they look pretty dated now...) cant save this movie from its own inherent stupidity. Bill Pullman from Spaceballs is cast as the President of the USA who saves the day by personally flying a jet-fighter against the aliens. That goes some way to demonstrating that Wendy Kurtzman (casting) should be shot along with the director and writers.",
					 "A yawn of a film about the divorce of a pair of well heeled inner city academics and the effect it has on their spoilt brat children. If you get off on dramas about first world problems you might like this.",	
					 "Did you know the Enigma Code was actually cracked by Americans and not the British? Also Genghis Kahn was the 2nd President of the United States and South America is one of the lesser known states next to Texas.",
					 "Has John Woo ever made a film that isn't an absolute crock of shit? This movie is about someone who has a complete face transplant with no visible side effects. How 'bout a brain transplant for 14 year old that must have written this rubbish?",
					 "I must admit I've never actually watched this. But the sheer fact that it's claimed Xavier Herberts 'Capricornia' (The great Australian novel equivalent to of 'The Grapes of Wrath') was an inpiration for it angers me enough to bypass it. It bares no resemblance to the novel other then being set in far north Australia. Also Luhrmann + Kidman + Jackman = river of puke...",
					 "This is the only movie I recall watching in the cinema and being desperate for it to end. I mean I didn't like sister act much as a 10 year old but it served as some sort of C-grade entertainment. On paper it looked good, but Tom Waits, Iggy Pop, Steve Buscemi Bill Murray and Steven Wright among many others couldn't save me from total and utter boredom. Absolute shit!.",	
					 "Friends fall in love whilst making a porno movie. If it didn't try to be a romance story and just wallowed in its own crass and nasty premise it might've worked, but no it tries and splat! Its just a mess."	]
		}
};

var covers = ["img/animate/covers_01.jpg", "img/animate/covers_02.jpg"]

var MovieList = function() {
	this.movies = [];
}

MovieList.prototype.add = function(movie) {
	this.movies.push(movie);
}

MovieList.prototype.render = function(list) {
	but =[];
	list.innerHTML = "";
	for (var i = 0; i < this.movies.length; i++) {
	this.movies[i].renderHTML(list);		
	}
}

var Favourites = function(genre) {
	this.name = genre;
	this.pic = motsFavs[genre].pic;
	this.favouritesList = motsFavs[genre].titles;
}

Favourites.prototype.toHTML = function() {
	htmlString = '<div class="wrapper">';
	htmlString += '<img src="' + this.pic + '">';
	htmlString += '<div class="cloak">';
	htmlString += '<h3>' + this.name + '</h3>';
	htmlString += '</div></div>';
	return htmlString;
}

Favourites.prototype.ajax = function(movieList, movie) {
var omdbAPI = "http://www.omdbapi.com/?";
	var omdbOptions = {
		t: movie,
		plot: "short",
		r: "json"
	};
	function addMovies(data) {
		var favMovie = new Movie(data.Poster, data.Title, data.Year, data.Director, data.Runtime, data.Genre, data.imdbRating, data.Plot);
		movieList.add(favMovie);
	}

	$.getJSON(omdbAPI, omdbOptions, addMovies);
	console.log(search);		
};

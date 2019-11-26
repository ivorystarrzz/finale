var numbers = [12, 77, 88, 20, -500, -20];
var multiply= numbers.map(function(num) {
    console.log(num *=2)
});



let netflix = {
    id: 9,
    name: "Super Store",
    season1: {
      seasonInfo: {
        episodeInfo: [
          { episode: 1, episodeName: "Pilot" },
          { episode: 2, episodeName: "Magazine Profile" },
          { episode: 3, episodeName: "Shots and Salsa" },
          { episode: 4, episodeName: "Mannequin" },
          { episode: 5, episodeName: "Shoplifter" },
          { episode: 6, episodeName: "Secret Shopper" },
          { episode: 7, episodeName: "Color Wars" },
          { episode: 8, episodeName: "Wedding Day Sale" },
          { episode: 9, episodeName: "All-Nighter" },
          { episode: 10, episodeName: "Demotion" },
          { episode: 11, episodeName: "Labor" }
        ]
      }
    },
   };
   

   console.log(netflix);
   console.log(netflix.season1.seasonInfo)
   console.log(netflix.season1.seasonInfo.episodeInfo[7].episodeName)

   console log all of the data, season information, and finally how would you display Wedding Day Sale (episode 8)
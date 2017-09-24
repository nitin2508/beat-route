System.register(["./movie.model"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var movie_model_1;
    var movies;
    return {
        setters:[
            function (movie_model_1_1) {
                movie_model_1 = movie_model_1_1;
            }],
        execute: function() {
            exports_1("movies", movies = [
                {
                    id: 1,
                    key: "deadpool",
                    name: "Deadpool",
                    description: "A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelerated healing powers, adopting the alter ego Deadpool.",
                    genres: [movie_model_1.genreType.action, movie_model_1.genreType.adventure, movie_model_1.genreType.comedy],
                    rate: "8.6",
                    length: "1hr 48mins",
                    img: "deadpool.jpg"
                },
                {
                    id: 2,
                    key: "we-are-the-millers",
                    name: "We're the Millers",
                    description: "A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.",
                    genres: [movie_model_1.genreType.adventure, movie_model_1.genreType.comedy, movie_model_1.genreType.crime],
                    rate: "7.0",
                    length: "1hr 50mins",
                    img: "we-are-the-millers.jpg"
                },
                {
                    id: 3,
                    key: "straight-outta-compton",
                    name: "Straight Outta Compton",
                    description: "The group NWA emerges from the mean streets of Compton in Los Angeles, California, in the mid-1980s and revolutionizes Hip Hop culture with their music and tales about life in the hood.",
                    genres: [movie_model_1.genreType.biography, movie_model_1.genreType.drama, movie_model_1.genreType.history],
                    rate: "8.0",
                    length: "2hr 27mins",
                    img: "straight-outta-compton.jpg"
                },
                {
                    id: 4,
                    key: "gridiron-gang",
                    name: "Gridiron Gang",
                    description: "Teenagers at a juvenile detention center, under the leadership of their counselor, gain self-esteem by playing football together.",
                    genres: [movie_model_1.genreType.crime, movie_model_1.genreType.drama, movie_model_1.genreType.sport],
                    rate: "6.9",
                    length: "2hr 5mins",
                    img: "gridiron-gang.jpg"
                },
                {
                    id: 5,
                    key: "american-gangster",
                    name: "American Gangster",
                    description: "In 1970s America, a detective works to bring down the drug empire of Frank Lucas, a heroin kingpin from Manhattan, who is smuggling the drug into the country from the Far East.",
                    genres: [movie_model_1.genreType.biography, movie_model_1.genreType.crime, movie_model_1.genreType.drama],
                    rate: "7.8",
                    length: "2hr 37mins",
                    img: "american-gangster.jpg"
                },
                {
                    id: 6,
                    key: "gangster-squad",
                    name: "Gangster Squad",
                    description: "It's 1949 Los Angeles, the city is run by gangsters and a malicious mobster, Mickey Cohen. Determined to end the corruption, John O'Mara assembles a team of cops, ready to take down the ruthless leader and restore peace to the city.",
                    genres: [movie_model_1.genreType.action, movie_model_1.genreType.crime, movie_model_1.genreType.drama],
                    rate: "6.8",
                    length: "1hr 53mins",
                    img: "gangster-squad.jpg"
                },
                {
                    id: 7,
                    key: "now-you-see-me",
                    name: "Now You See Me",
                    description: "An FBI agent and an Interpol detective track a team of illusionists who pull off bank heists during their performances and reward their audiences with the money.",
                    genres: [movie_model_1.genreType.crime, movie_model_1.genreType.mystery, movie_model_1.genreType.thriller],
                    rate: "7.3",
                    length: "1hr 55mins",
                    img: "now-you-see-me.jpg"
                },
                {
                    id: 8,
                    key: "jurassic-world",
                    name: "Jurassic World",
                    description: "A new theme park is built on the original site of Jurassic Park. Everything is going well until the park's newest attraction--a genetically modified giant stealth killing machine--escapes containment and goes on a killing spree.",
                    genres: [movie_model_1.genreType.action, movie_model_1.genreType.adventure, movie_model_1.genreType.scifi],
                    rate: "7.1",
                    length: "2hr 4mins",
                    img: "jurassic-world.jpg"
                },
                {
                    id: 9,
                    key: "mission-impossible-rogue-nation",
                    name: "Mission: Impossible: Rogue Nation",
                    description: "Ethan and team take on their most impossible mission yet, eradicating the Syndicate - an International rogue organization as highly skilled as they are, committed to destroying the IMF.",
                    genres: [movie_model_1.genreType.action, movie_model_1.genreType.adventure, movie_model_1.genreType.thriller],
                    rate: "7.5",
                    length: "2hr 11mins",
                    img: "mission-impossible-rogue-nation.jpg"
                },
                {
                    id: 10,
                    key: "the-man-from-uncle",
                    name: "The Man from U.N.C.L.E.",
                    description: "In the early 1960s, CIA agent Napoleon Solo and KGB operative Illya Kuryakin participate in a joint mission against a mysterious criminal organization, which is working to proliferate nuclear weapons.",
                    genres: [movie_model_1.genreType.action, movie_model_1.genreType.adventure, movie_model_1.genreType.thriller],
                    rate: "7.3",
                    length: "1hr 56mins",
                    img: "the-man-from-uncle.jpg"
                },
                {
                    id: 10,
                    key: "spectre",
                    name: "Spectre",
                    description: "A cryptic message from Bond's past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.",
                    genres: [movie_model_1.genreType.action, movie_model_1.genreType.adventure, movie_model_1.genreType.thriller],
                    rate: "6.9",
                    length: "2hr 28mins",
                    img: "spectre.jpg"
                },
                {
                    id: 11,
                    key: "legend",
                    name: "Legend",
                    description: "The film tells the story of the identical twin gangsters Reggie and Ronnie Kray, two of the most notorious criminals in British history, and their organised crime empire in the East End of London during the 1960s.",
                    genres: [movie_model_1.genreType.biography, movie_model_1.genreType.crime, movie_model_1.genreType.drama],
                    rate: "7.0",
                    length: "2hr 28mins",
                    img: "legend.jpg"
                },
                {
                    id: 12,
                    key: "southpaw",
                    name: "Southpaw",
                    description: "Boxer Billy Hope turns to trainer Tick Wills to help him get his life back on track after losing his wife in a tragic accident and his daughter to child protection services.",
                    genres: [movie_model_1.genreType.action, movie_model_1.genreType.drama, movie_model_1.genreType.sport],
                    rate: "7.5",
                    length: "2hr 4mins",
                    img: "southpaw.jpg"
                },
                {
                    id: 13,
                    key: "bridge-of-spies",
                    name: "Bridge of Spies",
                    description: "During the Cold War, an American lawyer is recruited to defend an arrested Soviet spy in court, and then help the CIA facilitate an exchange of the spy for the Soviet captured American U2 spy plane pilot, Francis Gary Powers.",
                    genres: [movie_model_1.genreType.biography, movie_model_1.genreType.drama, movie_model_1.genreType.thriller],
                    rate: "7.7",
                    length: "2hr 22mins",
                    img: "bridge-of-spies.jpg"
                },
                {
                    id: 14,
                    key: "ant-man",
                    name: "Ant-Man",
                    description: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
                    genres: [movie_model_1.genreType.action, movie_model_1.genreType.adventure, movie_model_1.genreType.scifi],
                    rate: "7.4",
                    length: "1hr 57mins",
                    img: "ant-man.jpg"
                },
                {
                    id: 15,
                    key: "fast-and-furious-7",
                    name: "Fast & Furious 7",
                    description: "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.",
                    genres: [movie_model_1.genreType.action, movie_model_1.genreType.crime, movie_model_1.genreType.thriller],
                    rate: "7.3",
                    length: "2hr 17mins",
                    img: "fast-and-furious-7.jpg"
                },
                {
                    id: 16,
                    key: "tracers",
                    name: "Tracers",
                    description: "Wanted by the Chinese mafia, a New York City bike messenger escapes into the world of parkour after meeting a beautiful stranger.",
                    genres: [movie_model_1.genreType.action, movie_model_1.genreType.crime, movie_model_1.genreType.drama],
                    rate: "5.6",
                    length: "1hr 34mins",
                    img: "tracers.jpg"
                },
                {
                    id: 17,
                    key: "running-scared",
                    name: "Running Scared",
                    description: "A low-ranking thug is entrusted by his crime boss to dispose of a gun that killed corrupt cops, but things get out of control when the gun ends up in wrong hands.",
                    genres: [movie_model_1.genreType.action, movie_model_1.genreType.crime, movie_model_1.genreType.drama],
                    rate: "7.4",
                    length: "2hr 2mins",
                    img: "running-scared.jpg"
                },
                {
                    id: 18,
                    key: "the-hangover",
                    name: "The Hangover",
                    description: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.",
                    genres: [movie_model_1.genreType.comedy],
                    rate: "7.8",
                    length: "1hr 40mins",
                    img: "the-hangover.jpg"
                },
                {
                    id: 19,
                    key: "project-x",
                    name: "Project X",
                    description: "3 high school seniors throw a birthday party to make a name for themselves. As the night progresses, things spiral out of control as word of the party spreads.",
                    genres: [movie_model_1.genreType.comedy, movie_model_1.genreType.crime],
                    rate: "6.7",
                    length: "1hr 28mins",
                    img: "project-x.jpg"
                },
                {
                    id: 20,
                    key: "the-dark-knight",
                    name: "The Dark Knight",
                    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
                    genres: [movie_model_1.genreType.action, movie_model_1.genreType.crime, movie_model_1.genreType.drama],
                    rate: "9.0",
                    length: "2hr 32mins",
                    img: "the-dark-knight.jpg"
                },
                {
                    id: 21,
                    key: "the-tournament",
                    name: "The Tournament",
                    description: "Every seven years in an unsuspecting town, The Tournament takes place. A battle royale between 30 of the world's deadliest assassins. The last man standing receiving the $10,000,000 cash prize and the title of Worlds No 1, which itself carries the legendary million dollar a bullet price tag.",
                    genres: [movie_model_1.genreType.action, movie_model_1.genreType.thriller],
                    rate: "6.1",
                    length: "1hr 35mins",
                    img: "the-tournament.jpg"
                },
                {
                    id: 22,
                    key: "the-matrix",
                    name: "The Matrix",
                    description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
                    genres: [movie_model_1.genreType.action, movie_model_1.genreType.scifi],
                    rate: "8.7",
                    length: "2hr 16mins",
                    img: "the-matrix.jpg"
                },
                {
                    id: 23,
                    key: "bad-boys",
                    name: "Bad Boys",
                    description: "Two hip detectives protect a murder witness while investigating a case of stolen heroin.",
                    genres: [movie_model_1.genreType.action, movie_model_1.genreType.comedy, movie_model_1.genreType.crime],
                    rate: "6.8",
                    length: "1hr 59mins",
                    img: "bad-boys.jpg"
                }
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL21vdmllLm1vY2stZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBRWEsTUFBTTs7Ozs7OztZQUFOLG9CQUFBLE1BQU0sR0FBVTtnQkFDNUI7b0JBQ0MsRUFBRSxFQUFFLENBQUM7b0JBQ0wsR0FBRyxFQUFFLFVBQVU7b0JBQ2YsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLFdBQVcsRUFBRSx5S0FBeUs7b0JBQ3RMLE1BQU0sRUFBRSxDQUFDLHVCQUFTLENBQUMsTUFBTSxFQUFFLHVCQUFTLENBQUMsU0FBUyxFQUFFLHVCQUFTLENBQUMsTUFBTSxDQUFDO29CQUNqRSxJQUFJLEVBQUUsS0FBSztvQkFDWCxNQUFNLEVBQUUsWUFBWTtvQkFDcEIsR0FBRyxFQUFFLGNBQWM7aUJBQ25CO2dCQUNEO29CQUNDLEVBQUUsRUFBRSxDQUFDO29CQUNMLEdBQUcsRUFBRSxvQkFBb0I7b0JBQ3pCLElBQUksRUFBRSxtQkFBbUI7b0JBQ3pCLFdBQVcsRUFBRSwySEFBMkg7b0JBQ3hJLE1BQU0sRUFBRSxDQUFDLHVCQUFTLENBQUMsU0FBUyxFQUFFLHVCQUFTLENBQUMsTUFBTSxFQUFFLHVCQUFTLENBQUMsS0FBSyxDQUFDO29CQUNoRSxJQUFJLEVBQUUsS0FBSztvQkFDWCxNQUFNLEVBQUUsWUFBWTtvQkFDcEIsR0FBRyxFQUFFLHdCQUF3QjtpQkFDN0I7Z0JBQ0Q7b0JBQ0MsRUFBRSxFQUFFLENBQUM7b0JBQ0wsR0FBRyxFQUFFLHdCQUF3QjtvQkFDN0IsSUFBSSxFQUFFLHdCQUF3QjtvQkFDOUIsV0FBVyxFQUFFLDJMQUEyTDtvQkFDeE0sTUFBTSxFQUFFLENBQUMsdUJBQVMsQ0FBQyxTQUFTLEVBQUUsdUJBQVMsQ0FBQyxLQUFLLEVBQUUsdUJBQVMsQ0FBQyxPQUFPLENBQUM7b0JBQ2pFLElBQUksRUFBRSxLQUFLO29CQUNYLE1BQU0sRUFBRSxZQUFZO29CQUNwQixHQUFHLEVBQUUsNEJBQTRCO2lCQUNqQztnQkFDRDtvQkFDQyxFQUFFLEVB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Q0MsRUFBRSxFQUFFLEVBQUU7b0JBQ04sR0FBRyxFQUFFLGdCQUFnQjtvQkFDckIsSUFBSSxFQUFFLGdCQUFnQjtvQkFDdEIsV0FBVyxFQUFFLHNTQUFzUztvQkFDblQsTUFBTSxFQUFFLENBQUMsdUJBQVMsQ0FBQyxNQUFNLEVBQUUsdUJBQVMsQ0FBQyxRQUFRLENBQUM7b0JBQzlDLElBQUksRUFBRSxLQUFLO29CQUNYLE1BQU0sRUFBRSxZQUFZO29CQUNwQixHQUFHLEVBQUUsb0JBQW9CO2lCQUN6QjtnQkFDRDtvQkFDQyxFQUFFLEVBQUUsRUFBRTtvQkFDTixHQUFHLEVBQUUsWUFBWTtvQkFDakIsSUFBSSxFQUFFLFlBQVk7b0JBQ2xCLFdBQVcsRUFBRSx1SUFBdUk7b0JBQ3BKLE1BQU0sRUFBRSxDQUFDLHVCQUFTLENBQUMsTUFBTSxFQUFFLHVCQUFTLENBQUMsS0FBSyxDQUFDO29CQUMzQyxJQUFJLEVBQUUsS0FBSztvQkFDWCxNQUFNLEVBQUUsWUFBWTtvQkFDcEIsR0FBRyxFQUFFLGdCQUFnQjtpQkFDckI7Z0JBQ0Q7b0JBQ0MsRUFBRSxFQUFFLEVBQUU7b0JBQ04sR0FBRyxFQUFFLFVBQVU7b0JBQ2YsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLFdBQVcsRUFBRSwwRkFBMEY7b0JBQ3ZHLE1BQU0sRUFBRSxDQUFDLHVCQUFTLENBQUMsTUFBTSxFQUFFLHVCQUFTLENBQUMsTUFBTSxFQUFFLHVCQUFTLENBQUMsS0FBSyxDQUFDO29CQUM3RCxJQUFJLEVBQUUsS0FBSztvQkFDWCxNQUFNLEVBQUUsWUFBWTtvQkFDcEIsR0FBRyxFQUFFLGNBQWM7aUJBQ25CO2FBQ0QsQ0FBQSxDQUFDIiwiZmlsZSI6Im1vZGVsL21vdmllLm1vY2stZGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdlbnJlVHlwZSB9IGZyb20gXCIuL21vdmllLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbW92aWVzOiBhbnlbXSA9IFtcclxuXHR7XHJcblx0XHRpZDogMSxcclxuXHRcdGtleTogXCJkZWFkcG9vbFwiLFxyXG5cdFx0bmFtZTogXCJEZWFkcG9vbFwiLFxyXG5cdFx0ZGVzY3JpcHRpb246IFwiQSBmb3JtZXIgU3BlY2lhbCBGb3JjZXMgb3BlcmF0aXZlIHR1cm5lZCBtZXJjZW5hcnkgaXMgc3ViamVjdGVkIHRvIGEgcm9ndWUgZXhwZXJpbWVudCB0aGF0IGxlYXZlcyBoaW0gd2l0aCBhY2NlbGVyYXRlZCBoZWFsaW5nIHBvd2VycywgYWRvcHRpbmcgdGhlIGFsdGVyIGVnbyBEZWFkcG9vbC5cIixcclxuXHRcdGdlbnJlczogW2dlbnJlVHlwZS5hY3Rpb24sIGdlbnJlVHlwZS5hZHZlbnR1cmUsIGdlbnJlVHlwZS5jb21lZHldLFxyXG5cdFx0cmF0ZTogXCI4LjZcIixcclxuXHRcdGxlbmd0aDogXCIxaHIgNDhtaW5zXCIsXHJcblx0XHRpbWc6IFwiZGVhZHBvb2wuanBnXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiAyLFxyXG5cdFx0a2V5OiBcIndlLWFyZS10aGUtbWlsbGVyc1wiLFxyXG5cdFx0bmFtZTogXCJXZSdyZSB0aGUgTWlsbGVyc1wiLFxyXG5cdFx0ZGVzY3JpcHRpb246IFwiQSB2ZXRlcmFuIHBvdCBkZWFsZXIgY3JlYXRlcyBhIGZha2UgZmFtaWx5IGFzIHBhcnQgb2YgaGlzIHBsYW4gdG8gbW92ZSBhIGh1Z2Ugc2hpcG1lbnQgb2Ygd2VlZCBpbnRvIHRoZSBVLlMuIGZyb20gTWV4aWNvLlwiLFxyXG5cdFx0Z2VucmVzOiBbZ2VucmVUeXBlLmFkdmVudHVyZSwgZ2VucmVUeXBlLmNvbWVkeSwgZ2VucmVUeXBlLmNyaW1lXSxcclxuXHRcdHJhdGU6IFwiNy4wXCIsXHJcblx0XHRsZW5ndGg6IFwiMWhyIDUwbWluc1wiLFxyXG5cdFx0aW1nOiBcIndlLWFyZS10aGUtbWlsbGVycy5qcGdcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6IDMsXHJcblx0XHRrZXk6IFwic3RyYWlnaHQtb3V0dGEtY29tcHRvblwiLFxyXG5cdFx0bmFtZTogXCJTdHJhaWdodCBPdXR0YSBDb21wdG9uXCIsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJUaGUgZ3JvdXAgTldBIGVtZXJnZXMgZnJvbSB0aGUgbWVhbiBzdHJlZXRzIG9mIENvbXB0b24gaW4gTG9zIEFuZ2VsZXMsIENhbGlmb3JuaWEsIGluIHRoZSBtaWQtMTk4MHMgYW5kIHJldm9sdXRpb25pemVzIEhpcCBIb3AgY3VsdHVyZSB3aXRoIHRoZWlyIG11c2ljIGFuZCB0YWxlcyBhYm91dCBsaWZlIGluIHRoZSBob29kLlwiLFxyXG5cdFx0Z2VucmVzOiBbZ2VucmVUeXBlLmJpb2dyYXBoeSwgZ2VucmVUeXBlLmRyYW1hLCBnZW5yZVR5cGUuaGlzdG9yeV0sXHJcblx0XHRyYXRlOiBcIjguMFwiLFxyXG5cdFx0bGVuZ3RoOiBcIjJociAyN21pbnNcIixcclxuXHRcdGltZzogXCJzdHJhaWdodC1vdXR0YS1jb21wdG9uLmpwZ1wiXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogNCxcclxuXHRcdGtleTogXCJncmlkaXJvbi1nYW5nXCIsXHJcblx0XHRuYW1lOiBcIkdyaWRpcm9uIEdhbmdcIixcclxuXHRcdGRlc2NyaXB0aW9uOiBcIlRlZW5hZ2VycyBhdCBhIGp1dmVuaWxlIGRldGVudGlvbiBjZW50ZXIsIHVuZGVyIHRoZSBsZWFkZXJzaGlwIG9mIHRoZWlyIGNvdW5zZWxvciwgZ2FpbiBzZWxmLWVzdGVlbSBieSBwbGF5aW5nIGZvb3RiYWxsIHRvZ2V0aGVyLlwiLFxyXG5cdFx0Z2VucmVzOiBbZ2VucmVUeXBlLmNyaW1lLCBnZW5yZVR5cGUuZHJhbWEsIGdlbnJlVHlwZS5zcG9ydF0sXHJcblx0XHRyYXRlOiBcIjYuOVwiLFxyXG5cdFx0bGVuZ3RoOiBcIjJociA1bWluc1wiLFxyXG5cdFx0aW1nOiBcImdyaWRpcm9uLWdhbmcuanBnXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiA1LFxyXG5cdFx0a2V5OiBcImFtZXJpY2FuLWdhbmdzdGVyXCIsXHJcblx0XHRuYW1lOiBcIkFtZXJpY2FuIEdhbmdzdGVyXCIsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJJbiAxOTcwcyBBbWVyaWNhLCBhIGRldGVjdGl2ZSB3b3JrcyB0byBicmluZyBkb3duIHRoZSBkcnVnIGVtcGlyZSBvZiBGcmFuayBMdWNhcywgYSBoZXJvaW4ga2luZ3BpbiBmcm9tIE1hbmhhdHRhbiwgd2hvIGlzIHNtdWdnbGluZyB0aGUgZHJ1ZyBpbnRvIHRoZSBjb3VudHJ5IGZyb20gdGhlIEZhciBFYXN0LlwiLFxyXG5cdFx0Z2VucmVzOiBbZ2VucmVUeXBlLmJpb2dyYXBoeSwgZ2VucmVUeXBlLmNyaW1lLCBnZW5yZVR5cGUuZHJhbWFdLFxyXG5cdFx0cmF0ZTogXCI3LjhcIixcclxuXHRcdGxlbmd0aDogXCIyaHIgMzdtaW5zXCIsXHJcblx0XHRpbWc6IFwiYW1lcmljYW4tZ2FuZ3N0ZXIuanBnXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiA2LFxyXG5cdFx0a2V5OiBcImdhbmdzdGVyLXNxdWFkXCIsXHJcblx0XHRuYW1lOiBcIkdhbmdzdGVyIFNxdWFkXCIsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJJdCdzIDE5NDkgTG9zIEFuZ2VsZXMsIHRoZSBjaXR5IGlzIHJ1biBieSBnYW5nc3RlcnMgYW5kIGEgbWFsaWNpb3VzIG1vYnN0ZXIsIE1pY2tleSBDb2hlbi4gRGV0ZXJtaW5lZCB0byBlbmQgdGhlIGNvcnJ1cHRpb24sIEpvaG4gTydNYXJhIGFzc2VtYmxlcyBhIHRlYW0gb2YgY29wcywgcmVhZHkgdG8gdGFrZSBkb3duIHRoZSBydXRobGVzcyBsZWFkZXIgYW5kIHJlc3RvcmUgcGVhY2UgdG8gdGhlIGNpdHkuXCIsXHJcblx0XHRnZW5yZXM6IFtnZW5yZVR5cGUuYWN0aW9uLCBnZW5yZVR5cGUuY3JpbWUsIGdlbnJlVHlwZS5kcmFtYV0sXHJcblx0XHRyYXRlOiBcIjYuOFwiLFxyXG5cdFx0bGVuZ3RoOiBcIjFociA1M21pbnNcIixcclxuXHRcdGltZzogXCJnYW5nc3Rlci1zcXVhZC5qcGdcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6IDcsXHJcblx0XHRrZXk6IFwibm93LXlvdS1zZWUtbWVcIixcclxuXHRcdG5hbWU6IFwiTm93IFlvdSBTZWUgTWVcIixcclxuXHRcdGRlc2NyaXB0aW9uOiBcIkFuIEZCSSBhZ2VudCBhbmQgYW4gSW50ZXJwb2wgZGV0ZWN0aXZlIHRyYWNrIGEgdGVhbSBvZiBpbGx1c2lvbmlzdHMgd2hvIHB1bGwgb2ZmIGJhbmsgaGVpc3RzIGR1cmluZyB0aGVpciBwZXJmb3JtYW5jZXMgYW5kIHJld2FyZCB0aGVpciBhdWRpZW5jZXMgd2l0aCB0aGUgbW9uZXkuXCIsXHJcblx0XHRnZW5yZXM6IFtnZW5yZVR5cGUuY3JpbWUsIGdlbnJlVHlwZS5teXN0ZXJ5LCBnZW5yZVR5cGUudGhyaWxsZXJdLFxyXG5cdFx0cmF0ZTogXCI3LjNcIixcclxuXHRcdGxlbmd0aDogXCIxaHIgNTVtaW5zXCIsXHJcblx0XHRpbWc6IFwibm93LXlvdS1zZWUtbWUuanBnXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiA4LFxyXG5cdFx0a2V5OiBcImp1cmFzc2ljLXdvcmxkXCIsXHJcblx0XHRuYW1lOiBcIkp1cmFzc2ljIFdvcmxkXCIsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJBIG5ldyB0aGVtZSBwYXJrIGlzIGJ1aWx0IG9uIHRoZSBvcmlnaW5hbCBzaXRlIG9mIEp1cmFzc2ljIFBhcmsuIEV2ZXJ5dGhpbmcgaXMgZ29pbmcgd2VsbCB1bnRpbCB0aGUgcGFyaydzIG5ld2VzdCBhdHRyYWN0aW9uLS1hIGdlbmV0aWNhbGx5IG1vZGlmaWVkIGdpYW50IHN0ZWFsdGgga2lsbGluZyBtYWNoaW5lLS1lc2NhcGVzIGNvbnRhaW5tZW50IGFuZCBnb2VzIG9uIGEga2lsbGluZyBzcHJlZS5cIixcclxuXHRcdGdlbnJlczogW2dlbnJlVHlwZS5hY3Rpb24sIGdlbnJlVHlwZS5hZHZlbnR1cmUsIGdlbnJlVHlwZS5zY2lmaV0sXHJcblx0XHRyYXRlOiBcIjcuMVwiLFxyXG5cdFx0bGVuZ3RoOiBcIjJociA0bWluc1wiLFxyXG5cdFx0aW1nOiBcImp1cmFzc2ljLXdvcmxkLmpwZ1wiXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogOSxcclxuXHRcdGtleTogXCJtaXNzaW9uLWltcG9zc2libGUtcm9ndWUtbmF0aW9uXCIsXHJcblx0XHRuYW1lOiBcIk1pc3Npb246IEltcG9zc2libGU6IFJvZ3VlIE5hdGlvblwiLFxyXG5cdFx0ZGVzY3JpcHRpb246IFwiRXRoYW4gYW5kIHRlYW0gdGFrZSBvbiB0aGVpciBtb3N0IGltcG9zc2libGUgbWlzc2lvbiB5ZXQsIGVyYWRpY2F0aW5nIHRoZSBTeW5kaWNhdGUgLSBhbiBJbnRlcm5hdGlvbmFsIHJvZ3VlIG9yZ2FuaXphdGlvbiBhcyBoaWdobHkgc2tpbGxlZCBhcyB0aGV5IGFyZSwgY29tbWl0dGVkIHRvIGRlc3Ryb3lpbmcgdGhlIElNRi5cIixcclxuXHRcdGdlbnJlczogW2dlbnJlVHlwZS5hY3Rpb24sIGdlbnJlVHlwZS5hZHZlbnR1cmUsIGdlbnJlVHlwZS50aHJpbGxlcl0sXHJcblx0XHRyYXRlOiBcIjcuNVwiLFxyXG5cdFx0bGVuZ3RoOiBcIjJociAxMW1pbnNcIixcclxuXHRcdGltZzogXCJtaXNzaW9uLWltcG9zc2libGUtcm9ndWUtbmF0aW9uLmpwZ1wiXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogMTAsXHJcblx0XHRrZXk6IFwidGhlLW1hbi1mcm9tLXVuY2xlXCIsXHJcblx0XHRuYW1lOiBcIlRoZSBNYW4gZnJvbSBVLk4uQy5MLkUuXCIsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJJbiB0aGUgZWFybHkgMTk2MHMsIENJQSBhZ2VudCBOYXBvbGVvbiBTb2xvIGFuZCBLR0Igb3BlcmF0aXZlIElsbHlhIEt1cnlha2luIHBhcnRpY2lwYXRlIGluIGEgam9pbnQgbWlzc2lvbiBhZ2FpbnN0IGEgbXlzdGVyaW91cyBjcmltaW5hbCBvcmdhbml6YXRpb24sIHdoaWNoIGlzIHdvcmtpbmcgdG8gcHJvbGlmZXJhdGUgbnVjbGVhciB3ZWFwb25zLlwiLFxyXG5cdFx0Z2VucmVzOiBbZ2VucmVUeXBlLmFjdGlvbiwgZ2VucmVUeXBlLmFkdmVudHVyZSwgZ2VucmVUeXBlLnRocmlsbGVyXSxcclxuXHRcdHJhdGU6IFwiNy4zXCIsXHJcblx0XHRsZW5ndGg6IFwiMWhyIDU2bWluc1wiLFxyXG5cdFx0aW1nOiBcInRoZS1tYW4tZnJvbS11bmNsZS5qcGdcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6IDEwLFxyXG5cdFx0a2V5OiBcInNwZWN0cmVcIixcclxuXHRcdG5hbWU6IFwiU3BlY3RyZVwiLFxyXG5cdFx0ZGVzY3JpcHRpb246IFwiQSBjcnlwdGljIG1lc3NhZ2UgZnJvbSBCb25kJ3MgcGFzdCBzZW5kcyBoaW0gb24gYSB0cmFpbCB0byB1bmNvdmVyIGEgc2luaXN0ZXIgb3JnYW5pemF0aW9uLiBXaGlsZSBNIGJhdHRsZXMgcG9saXRpY2FsIGZvcmNlcyB0byBrZWVwIHRoZSBzZWNyZXQgc2VydmljZSBhbGl2ZSwgQm9uZCBwZWVscyBiYWNrIHRoZSBsYXllcnMgb2YgZGVjZWl0IHRvIHJldmVhbCB0aGUgdGVycmlibGUgdHJ1dGggYmVoaW5kIFNQRUNUUkUuXCIsXHJcblx0XHRnZW5yZXM6IFtnZW5yZVR5cGUuYWN0aW9uLCBnZW5yZVR5cGUuYWR2ZW50dXJlLCBnZW5yZVR5cGUudGhyaWxsZXJdLFxyXG5cdFx0cmF0ZTogXCI2LjlcIixcclxuXHRcdGxlbmd0aDogXCIyaHIgMjhtaW5zXCIsXHJcblx0XHRpbWc6IFwic3BlY3RyZS5qcGdcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6IDExLFxyXG5cdFx0a2V5OiBcImxlZ2VuZFwiLFxyXG5cdFx0bmFtZTogXCJMZWdlbmRcIixcclxuXHRcdGRlc2NyaXB0aW9uOiBcIlRoZSBmaWxtIHRlbGxzIHRoZSBzdG9yeSBvZiB0aGUgaWRlbnRpY2FsIHR3aW4gZ2FuZ3N0ZXJzIFJlZ2dpZSBhbmQgUm9ubmllIEtyYXksIHR3byBvZiB0aGUgbW9zdCBub3RvcmlvdXMgY3JpbWluYWxzIGluIEJyaXRpc2ggaGlzdG9yeSwgYW5kIHRoZWlyIG9yZ2FuaXNlZCBjcmltZSBlbXBpcmUgaW4gdGhlIEVhc3QgRW5kIG9mIExvbmRvbiBkdXJpbmcgdGhlIDE5NjBzLlwiLFxyXG5cdFx0Z2VucmVzOiBbZ2VucmVUeXBlLmJpb2dyYXBoeSwgZ2VucmVUeXBlLmNyaW1lLCBnZW5yZVR5cGUuZHJhbWFdLFxyXG5cdFx0cmF0ZTogXCI3LjBcIixcclxuXHRcdGxlbmd0aDogXCIyaHIgMjhtaW5zXCIsXHJcblx0XHRpbWc6IFwibGVnZW5kLmpwZ1wiXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogMTIsXHJcblx0XHRrZXk6IFwic291dGhwYXdcIixcclxuXHRcdG5hbWU6IFwiU291dGhwYXdcIixcclxuXHRcdGRlc2NyaXB0aW9uOiBcIkJveGVyIEJpbGx5IEhvcGUgdHVybnMgdG8gdHJhaW5lciBUaWNrIFdpbGxzIHRvIGhlbHAgaGltIGdldCBoaXMgbGlmZSBiYWNrIG9uIHRyYWNrIGFmdGVyIGxvc2luZyBoaXMgd2lmZSBpbiBhIHRyYWdpYyBhY2NpZGVudCBhbmQgaGlzIGRhdWdodGVyIHRvIGNoaWxkIHByb3RlY3Rpb24gc2VydmljZXMuXCIsXHJcblx0XHRnZW5yZXM6IFtnZW5yZVR5cGUuYWN0aW9uLCBnZW5yZVR5cGUuZHJhbWEsIGdlbnJlVHlwZS5zcG9ydF0sXHJcblx0XHRyYXRlOiBcIjcuNVwiLFxyXG5cdFx0bGVuZ3RoOiBcIjJociA0bWluc1wiLFxyXG5cdFx0aW1nOiBcInNvdXRocGF3LmpwZ1wiXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogMTMsXHJcblx0XHRrZXk6IFwiYnJpZGdlLW9mLXNwaWVzXCIsXHJcblx0XHRuYW1lOiBcIkJyaWRnZSBvZiBTcGllc1wiLFxyXG5cdFx0ZGVzY3JpcHRpb246IFwiRHVyaW5nIHRoZSBDb2xkIFdhciwgYW4gQW1lcmljYW4gbGF3eWVyIGlzIHJlY3J1aXRlZCB0byBkZWZlbmQgYW4gYXJyZXN0ZWQgU292aWV0IHNweSBpbiBjb3VydCwgYW5kIHRoZW4gaGVscCB0aGUgQ0lBIGZhY2lsaXRhdGUgYW4gZXhjaGFuZ2Ugb2YgdGhlIHNweSBmb3IgdGhlIFNvdmlldCBjYXB0dXJlZCBBbWVyaWNhbiBVMiBzcHkgcGxhbmUgcGlsb3QsIEZyYW5jaXMgR2FyeSBQb3dlcnMuXCIsXHJcblx0XHRnZW5yZXM6IFtnZW5yZVR5cGUuYmlvZ3JhcGh5LCBnZW5yZVR5cGUuZHJhbWEsIGdlbnJlVHlwZS50aHJpbGxlcl0sXHJcblx0XHRyYXRlOiBcIjcuN1wiLFxyXG5cdFx0bGVuZ3RoOiBcIjJociAyMm1pbnNcIixcclxuXHRcdGltZzogXCJicmlkZ2Utb2Ytc3BpZXMuanBnXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiAxNCxcclxuXHRcdGtleTogXCJhbnQtbWFuXCIsXHJcblx0XHRuYW1lOiBcIkFudC1NYW5cIixcclxuXHRcdGRlc2NyaXB0aW9uOiBcIkFybWVkIHdpdGggYSBzdXBlci1zdWl0IHdpdGggdGhlIGFzdG9uaXNoaW5nIGFiaWxpdHkgdG8gc2hyaW5rIGluIHNjYWxlIGJ1dCBpbmNyZWFzZSBpbiBzdHJlbmd0aCwgY2F0IGJ1cmdsYXIgU2NvdHQgTGFuZyBtdXN0IGVtYnJhY2UgaGlzIGlubmVyIGhlcm8gYW5kIGhlbHAgaGlzIG1lbnRvciwgRHIuIEhhbmsgUHltLCBwbGFuIGFuZCBwdWxsIG9mZiBhIGhlaXN0IHRoYXQgd2lsbCBzYXZlIHRoZSB3b3JsZC5cIixcclxuXHRcdGdlbnJlczogW2dlbnJlVHlwZS5hY3Rpb24sIGdlbnJlVHlwZS5hZHZlbnR1cmUsIGdlbnJlVHlwZS5zY2lmaV0sXHJcblx0XHRyYXRlOiBcIjcuNFwiLFxyXG5cdFx0bGVuZ3RoOiBcIjFociA1N21pbnNcIixcclxuXHRcdGltZzogXCJhbnQtbWFuLmpwZ1wiXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogMTUsXHJcblx0XHRrZXk6IFwiZmFzdC1hbmQtZnVyaW91cy03XCIsXHJcblx0XHRuYW1lOiBcIkZhc3QgJiBGdXJpb3VzIDdcIixcclxuXHRcdGRlc2NyaXB0aW9uOiBcIkRlY2thcmQgU2hhdyBzZWVrcyByZXZlbmdlIGFnYWluc3QgRG9taW5pYyBUb3JldHRvIGFuZCBoaXMgZmFtaWx5IGZvciBoaXMgY29tYXRvc2UgYnJvdGhlci5cIixcclxuXHRcdGdlbnJlczogW2dlbnJlVHlwZS5hY3Rpb24sIGdlbnJlVHlwZS5jcmltZSwgZ2VucmVUeXBlLnRocmlsbGVyXSxcclxuXHRcdHJhdGU6IFwiNy4zXCIsXHJcblx0XHRsZW5ndGg6IFwiMmhyIDE3bWluc1wiLFxyXG5cdFx0aW1nOiBcImZhc3QtYW5kLWZ1cmlvdXMtNy5qcGdcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6IDE2LFxyXG5cdFx0a2V5OiBcInRyYWNlcnNcIixcclxuXHRcdG5hbWU6IFwiVHJhY2Vyc1wiLFxyXG5cdFx0ZGVzY3JpcHRpb246IFwiV2FudGVkIGJ5IHRoZSBDaGluZXNlIG1hZmlhLCBhIE5ldyBZb3JrIENpdHkgYmlrZSBtZXNzZW5nZXIgZXNjYXBlcyBpbnRvIHRoZSB3b3JsZCBvZiBwYXJrb3VyIGFmdGVyIG1lZXRpbmcgYSBiZWF1dGlmdWwgc3RyYW5nZXIuXCIsXHJcblx0XHRnZW5yZXM6IFtnZW5yZVR5cGUuYWN0aW9uLCBnZW5yZVR5cGUuY3JpbWUsIGdlbnJlVHlwZS5kcmFtYV0sXHJcblx0XHRyYXRlOiBcIjUuNlwiLFxyXG5cdFx0bGVuZ3RoOiBcIjFociAzNG1pbnNcIixcclxuXHRcdGltZzogXCJ0cmFjZXJzLmpwZ1wiXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogMTcsXHJcblx0XHRrZXk6IFwicnVubmluZy1zY2FyZWRcIixcclxuXHRcdG5hbWU6IFwiUnVubmluZyBTY2FyZWRcIixcclxuXHRcdGRlc2NyaXB0aW9uOiBcIkEgbG93LXJhbmtpbmcgdGh1ZyBpcyBlbnRydXN0ZWQgYnkgaGlzIGNyaW1lIGJvc3MgdG8gZGlzcG9zZSBvZiBhIGd1biB0aGF0IGtpbGxlZCBjb3JydXB0IGNvcHMsIGJ1dCB0aGluZ3MgZ2V0IG91dCBvZiBjb250cm9sIHdoZW4gdGhlIGd1biBlbmRzIHVwIGluIHdyb25nIGhhbmRzLlwiLFxyXG5cdFx0Z2VucmVzOiBbZ2VucmVUeXBlLmFjdGlvbiwgZ2VucmVUeXBlLmNyaW1lLCBnZW5yZVR5cGUuZHJhbWFdLFxyXG5cdFx0cmF0ZTogXCI3LjRcIixcclxuXHRcdGxlbmd0aDogXCIyaHIgMm1pbnNcIixcclxuXHRcdGltZzogXCJydW5uaW5nLXNjYXJlZC5qcGdcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6IDE4LFxyXG5cdFx0a2V5OiBcInRoZS1oYW5nb3ZlclwiLFxyXG5cdFx0bmFtZTogXCJUaGUgSGFuZ292ZXJcIixcclxuXHRcdGRlc2NyaXB0aW9uOiBcIlRocmVlIGJ1ZGRpZXMgd2FrZSB1cCBmcm9tIGEgYmFjaGVsb3IgcGFydHkgaW4gTGFzIFZlZ2FzLCB3aXRoIG5vIG1lbW9yeSBvZiB0aGUgcHJldmlvdXMgbmlnaHQgYW5kIHRoZSBiYWNoZWxvciBtaXNzaW5nLiBUaGV5IG1ha2UgdGhlaXIgd2F5IGFyb3VuZCB0aGUgY2l0eSBpbiBvcmRlciB0byBmaW5kIHRoZWlyIGZyaWVuZCBiZWZvcmUgaGlzIHdlZGRpbmcuXCIsXHJcblx0XHRnZW5yZXM6IFtnZW5yZVR5cGUuY29tZWR5XSxcclxuXHRcdHJhdGU6IFwiNy44XCIsXHJcblx0XHRsZW5ndGg6IFwiMWhyIDQwbWluc1wiLFxyXG5cdFx0aW1nOiBcInRoZS1oYW5nb3Zlci5qcGdcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6IDE5LFxyXG5cdFx0a2V5OiBcInByb2plY3QteFwiLFxyXG5cdFx0bmFtZTogXCJQcm9qZWN0IFhcIixcclxuXHRcdGRlc2NyaXB0aW9uOiBcIjMgaGlnaCBzY2hvb2wgc2VuaW9ycyB0aHJvdyBhIGJpcnRoZGF5IHBhcnR5IHRvIG1ha2UgYSBuYW1lIGZvciB0aGVtc2VsdmVzLiBBcyB0aGUgbmlnaHQgcHJvZ3Jlc3NlcywgdGhpbmdzIHNwaXJhbCBvdXQgb2YgY29udHJvbCBhcyB3b3JkIG9mIHRoZSBwYXJ0eSBzcHJlYWRzLlwiLFxyXG5cdFx0Z2VucmVzOiBbZ2VucmVUeXBlLmNvbWVkeSwgZ2VucmVUeXBlLmNyaW1lXSxcclxuXHRcdHJhdGU6IFwiNi43XCIsXHJcblx0XHRsZW5ndGg6IFwiMWhyIDI4bWluc1wiLFxyXG5cdFx0aW1nOiBcInByb2plY3QteC5qcGdcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6IDIwLFxyXG5cdFx0a2V5OiBcInRoZS1kYXJrLWtuaWdodFwiLFxyXG5cdFx0bmFtZTogXCJUaGUgRGFyayBLbmlnaHRcIixcclxuXHRcdGRlc2NyaXB0aW9uOiBcIldoZW4gdGhlIG1lbmFjZSBrbm93biBhcyB0aGUgSm9rZXIgd3JlYWtzIGhhdm9jIGFuZCBjaGFvcyBvbiB0aGUgcGVvcGxlIG9mIEdvdGhhbSwgdGhlIGNhcGVkIGNydXNhZGVyIG11c3QgY29tZSB0byB0ZXJtcyB3aXRoIG9uZSBvZiB0aGUgZ3JlYXRlc3QgcHN5Y2hvbG9naWNhbCB0ZXN0cyBvZiBoaXMgYWJpbGl0eSB0byBmaWdodCBpbmp1c3RpY2UuXCIsXHJcblx0XHRnZW5yZXM6IFtnZW5yZVR5cGUuYWN0aW9uLCBnZW5yZVR5cGUuY3JpbWUsIGdlbnJlVHlwZS5kcmFtYV0sXHJcblx0XHRyYXRlOiBcIjkuMFwiLFxyXG5cdFx0bGVuZ3RoOiBcIjJociAzMm1pbnNcIixcclxuXHRcdGltZzogXCJ0aGUtZGFyay1rbmlnaHQuanBnXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiAyMSxcclxuXHRcdGtleTogXCJ0aGUtdG91cm5hbWVudFwiLFxyXG5cdFx0bmFtZTogXCJUaGUgVG91cm5hbWVudFwiLFxyXG5cdFx0ZGVzY3JpcHRpb246IFwiRXZlcnkgc2V2ZW4geWVhcnMgaW4gYW4gdW5zdXNwZWN0aW5nIHRvd24sIFRoZSBUb3VybmFtZW50IHRha2VzIHBsYWNlLiBBIGJhdHRsZSByb3lhbGUgYmV0d2VlbiAzMCBvZiB0aGUgd29ybGQncyBkZWFkbGllc3QgYXNzYXNzaW5zLiBUaGUgbGFzdCBtYW4gc3RhbmRpbmcgcmVjZWl2aW5nIHRoZSAkMTAsMDAwLDAwMCBjYXNoIHByaXplIGFuZCB0aGUgdGl0bGUgb2YgV29ybGRzIE5vIDEsIHdoaWNoIGl0c2VsZiBjYXJyaWVzIHRoZSBsZWdlbmRhcnkgbWlsbGlvbiBkb2xsYXIgYSBidWxsZXQgcHJpY2UgdGFnLlwiLFxyXG5cdFx0Z2VucmVzOiBbZ2VucmVUeXBlLmFjdGlvbiwgZ2VucmVUeXBlLnRocmlsbGVyXSxcclxuXHRcdHJhdGU6IFwiNi4xXCIsXHJcblx0XHRsZW5ndGg6IFwiMWhyIDM1bWluc1wiLFxyXG5cdFx0aW1nOiBcInRoZS10b3VybmFtZW50LmpwZ1wiXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogMjIsXHJcblx0XHRrZXk6IFwidGhlLW1hdHJpeFwiLFxyXG5cdFx0bmFtZTogXCJUaGUgTWF0cml4XCIsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJBIGNvbXB1dGVyIGhhY2tlciBsZWFybnMgZnJvbSBteXN0ZXJpb3VzIHJlYmVscyBhYm91dCB0aGUgdHJ1ZSBuYXR1cmUgb2YgaGlzIHJlYWxpdHkgYW5kIGhpcyByb2xlIGluIHRoZSB3YXIgYWdhaW5zdCBpdHMgY29udHJvbGxlcnMuXCIsXHJcblx0XHRnZW5yZXM6IFtnZW5yZVR5cGUuYWN0aW9uLCBnZW5yZVR5cGUuc2NpZmldLFxyXG5cdFx0cmF0ZTogXCI4LjdcIixcclxuXHRcdGxlbmd0aDogXCIyaHIgMTZtaW5zXCIsXHJcblx0XHRpbWc6IFwidGhlLW1hdHJpeC5qcGdcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6IDIzLFxyXG5cdFx0a2V5OiBcImJhZC1ib3lzXCIsXHJcblx0XHRuYW1lOiBcIkJhZCBCb3lzXCIsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJUd28gaGlwIGRldGVjdGl2ZXMgcHJvdGVjdCBhIG11cmRlciB3aXRuZXNzIHdoaWxlIGludmVzdGlnYXRpbmcgYSBjYXNlIG9mIHN0b2xlbiBoZXJvaW4uXCIsXHJcblx0XHRnZW5yZXM6IFtnZW5yZVR5cGUuYWN0aW9uLCBnZW5yZVR5cGUuY29tZWR5LCBnZW5yZVR5cGUuY3JpbWVdLFxyXG5cdFx0cmF0ZTogXCI2LjhcIixcclxuXHRcdGxlbmd0aDogXCIxaHIgNTltaW5zXCIsXHJcblx0XHRpbWc6IFwiYmFkLWJveXMuanBnXCJcclxuXHR9XHJcbl07Il19

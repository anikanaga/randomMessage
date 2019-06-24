// var mcuquotes = [" I've been falling for 30 minutes! - Loki", "I am burdened with glorious purpose. - Loki", "I am Iron Man *snaps* - You should know who said this", "Doth mother know you weareth her drapes. - Tony Stark", "Genius, Billionare, Playboy, Philanthropist. - Tony Stark", "Language. - Steve Rogers/Captain America", "Before we get started, does anyone want to get out? - Steve Rogers/Captain America", "I can do this all day. - Steve Rogers/Captain America", "Scott, I get emails from a raccoon. So, nothing sounds crazy anymore. - Natasha Romanoff/Black Widow", "I'm always picking up after you boys. - Natasha Romanoff/Black Widow", "Hey, big guy. Sun's getting real low. - Natasha Romanoff/Black Widow" "Mr. Stark, I don't feel so good. I don't wanna go." - Peter Parker/Spiderman, "Dr. Banner, your work is unparalleled and I'm a huge fan of the way you lose control and turn into an enormous green rage monster - Tony Stark/ Iron Man", "As far as I'm concerned, that's America's ass - Scott Lang/ Ant Man", "We're in the endgame now - Dr. Strange", "Wakanda forever! - T'challa/ Black Panther", "I never freeze - T'challa/ Black Panther"]

var mcuquotes = ["I've been falling for 30 minutes! -Loki", "I am burdened with glorious purpose. - Loki", "I am Iron Man *snaps* - You should know who said this", "Doth mother know you weareth her drapes. - Tony Stark", "Genius, Billionare, Playboy, Philanthropist. - Tony Stark", "Language. - Steve Rogers/Captain America", "Before we get started, does anyone want to get out? - Steve Rogers/Captain America", "I can do this all day. - Steve Rogers/Captain America", "Scott, I get emails from a raccoon. So, nothing sounds crazy anymore. - Natasha Romanoff/Black Widow", "I'm always picking up after you boys. - Natasha Romanoff/Black Widow", "Hey, big guy. Sun's getting real low. - Natasha Romanoff/Black Widow", "Mr. Stark, I don't feel so good. I don't wanna go. - Peter Parker/Spiderman", "Dr. Banner, your work is unparalleled and I'm a huge fan of the way you lose control and turn into an enormous green rage monster - Tony Stark/ Iron Man", "As far as I'm concerned, that's America's ass - Scott Lang/ Ant Man", "We're in the endgame now - Dr. Strange", "Wakanda forever! - T'challa/ Black Panther"]
var button = $('button');
var quotehere = $('.quotehere')

button.on('click', randomizer);

function randomizer (){
  var random = Math.floor(Math.random()*(mcuquotes.length-1));
  var newquote = mcuquotes[random];
  quotehere.text(newquote);
}

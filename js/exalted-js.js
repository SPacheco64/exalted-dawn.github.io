// Exalted Dawn Characters Site - JavaScript

// Following JS Swaps Character Info Shown based on Hash in the URL, and prepares assets
$(document).ready(function () 
{
    // Current number of characters on the site
    var characterCount = 9;

    // Preloads the Character Profile Images for a smoother bio transition experience
	if (document.images) 
    {
        var img = [];
        for (let i=0; i < characterCount; i++)
        {
            img[i] = new Image();
        }

		img[0].src = "images/profiles/cyrus-profile.png"; // Cyrus Image
		img[1].src = "images/profiles/elias-profile.png"; // Elias Image
		img[2].src = "images/profiles/ferra-profile.png"; // Ferra Image
        img[3].src = "images/profiles/iris-profile.png"; // Iris Image
		img[4].src = "images/profiles/sethris-profile.png"; // Sethris Image
		img[5].src = "images/profiles/shaesa-profile.png"; // Shaesa Image
        img[6].src = "images/profiles/sunna-profile.png"; // Sunna Image
		img[7].src = "images/profiles/talenna-profile.png"; // Talenna Image
		img[8].src = "images/profiles/valere-profile.png"; // Valere Image
	}

    // Function that swaps all biography/art gallery content on character selection
    function characterChange()
    {
        // Variables for the Character Bio Elements
        const charImg = document.getElementById("charImg");
        const charName = document.getElementById("charName");
        const charAge = document.getElementById("charAge");
        const charHeight = document.getElementById("charHeight");
        const charFranchise = document.getElementById("charFranchise");
        const charRace = document.getElementById("charRace");
        const charLikes = document.getElementById("charLikes");
        const charDislikes = document.getElementById("charDislikes");
        const charPersonality = document.getElementById("charPersonality");
        const charColors = document.getElementById("charColors");
        const charBackstory = document.getElementById("charBackstory");
        const charGallery = document.getElementById("character-img-gallery");
        const bioBox = document.getElementById("bioBox");
        
        // Checks which character name is in the URL and changes content accordingly
        switch(window.location.hash)
        {
            // Cyrus' Character Bio
            case "#cyrus":
                // Where you insert Cyrus' Character Specific Bio Elements
                charImg.innerHTML = '<img class = "character-image" alt = "Cyrus Asayesh" src = "images/profiles/cyrus-profile.png">';
                charName.innerHTML = 'Cyrus Asayesh';
                charAge.innerHTML = '20';
                charHeight.innerHTML = '5\'11"';
                charFranchise.innerHTML = 'D&D';
                charRace.innerHTML = 'Aasimar';
                charLikes.innerHTML = 'Books, Nyxia, the Arts, Small Animals';
                charDislikes.innerHTML = 'Alcohol, Criminals, Undead, Discourtesy';
                charPersonality.innerHTML = 'Serious, Responsible, Chivalrous, Naive';
                charColors.innerHTML = '<span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br> <span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br>';
                charBackstory.innerHTML = 'Raised in a monastery since he was young, Cyrus knew little outside of the law of Aviorae. He knew not of his parents nor when the monastery had taken him in, because his earliest memories were of scriptures and the training yard. <br><br> The monastery was strict and unforgiving in their raising of him. At Lady Solaris\' behest, Cyrus began lessons under Zovea, a Bronze dragonborn and distinguished member of the monastery, as soon as he could talk. She taught him all the ways and words of Aviorae, and when the time came, she taught him to wield the weapons of Aviorae too. Zovea\'s lessons consumed his life, and were drilled into him from sunrise to sunset. <br><br> His only reprieve came in the form of a young tielfing by the name of Nyxia. He\'d been 9? No, 10, when they\'d first met. Cyrus could hardly believe his eyes as he watched the young girl break into the private pantry, evading the monastery\'s guard, from his bedroom window. He\'d never seen a kid his own age before, and his interest was immediately peaked by the odd, scruffy young girl. He began leaving food out for her outside his room, figuring that if it was offered, it wouldn\'t be stealing. It took a few repeated nights of this before Nyxia had finally caught wind of his actions and approached him. She was wild and new and everything opposite of what the monastery instilled in him, and yet the two became fast friends. Soon Nyxia\'s visits became less about food and more about friendship. Those nightly visits were some of the happiest nights of his life. However, those times soon came to a halt. A dark weapon sealed within the temple was stolen 3 years later, and Nyxia seemingly vanished along with it. She stopped coming to see him altogether, disappearing without a word. Fear and doubt lingered in him, scared that he might have been tricked by Nyxia in order to get to the blade. He continued to live his life in denial, hoping instead that Nyxia had simply gone away and was safe somewhere across the continent. <br><br> However, as he grew, the monks left him with hardly any time to think of anything but the monastery. Soon after the theft, Cyrus\' sessions increased twofold, until he hardly had time to eat or sleep. The monks drove him hard, testing his limits; beating him down only to raise him up again so they might begin the process over once more. They spent all their time honing him into a fine weapon. He trained and studied without question, as he was taught to, but he\'d always suspected that there was something being kept from him. He\'d heard whispers in the halls of some \'plan\' for him. Something big. But he was too scared to ask after another\'s whispers. And he\'d never get the chance. <br><br> Just shy of a year after he graduated into a fully realized monk, Nyxia would reenter his life in the most unexpected way. As a target. She\'d been found carrying the stolen blade, and the monastery needed someone to retrieve it. He had to go. He needed to know what happened all those years ago, and if Nyxia was truly a friend... or if she was foe. And so he began his hunt.';
                charGallery.innerHTML = '<!-- Main Full-Size Images - START --> <div class = "mySlides" style = "display: flex;"> <a href = "images/highres/cyrus/cyrus-15.png" target = "_blank"> <div class = "numbertext">1 / 18</div> <img src = "images/gallery/cyrus/cyrus-15.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/cyrus/cyrus-16.png" target = "_blank"> <div class = "numbertext">2 / 18</div> <img src = "images/gallery/cyrus/cyrus-16.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/crowva/">@crowva</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/cyrus/cyrus-1.png" target = "_blank"> <div class = "numbertext">3 / 18</div> <img src = "images/gallery/cyrus/cyrus-1.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/peachykeen_doodlememe/">@Peachykeen_doodlememe</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/cyrus/cyrus-2.png" target = "_blank"> <div class = "numbertext">4 / 18</div> <img src = "images/gallery/cyrus/cyrus-2.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/zucciini/">@zucciini</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/cyrus/cyrus-3.png" target = "_blank"> <div class = "numbertext">5 / 18</div> <img src = "images/gallery/cyrus/cyrus-3.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/strawbtea/">@strawbtea</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/cyrus/cyrus-4.jpg" target = "_blank"> <div class = "numbertext">6 / 18</div> <img src = "images/gallery/cyrus/cyrus-4.jpg"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/hiitsyart/">@hiitsyart</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/cyrus/cyrus-5.png" target = "_blank"> <div class = "numbertext">7 / 18</div> <img src = "images/gallery/cyrus/cyrus-5.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/alenadraws/">@alenadraws</a> </div> </div> <div class="mySlides"> <a href = "images/highres/cyrus/cyrus-6.png" target = "_blank"> <div class = "numbertext">8 / 18</div> <img src = "images/gallery/cyrus/cyrus-6.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/cyrus/cyrus-7.png" target = "_blank"> <div class = "numbertext">9 / 18</div> <img src = "images/gallery/cyrus/cyrus-7.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" target = "_blank" href = "https://www.instagram.com/crooomps/">@crooomps</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/cyrus/cyrus-8.png" target = "_blank"> <div class = "numbertext">10 / 18</div> <img src = "images/gallery/cyrus/cyrus-8.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/tkag69/">@tkag69</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/cyrus/cyrus-10.png" target = "_blank"> <div class = "numbertext">11 / 18</div> <img src = "images/gallery/cyrus/cyrus-10.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class="mySlides"> <a href = "images/highres/cyrus/cyrus-11.png" target = "_blank"> <div class = "numbertext">12 / 18</div> <img src = "images/gallery/cyrus/cyrus-11.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/naninnai/">@naninnai</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/cyrus/cyrus-12.jpg" target = "_blank"> <div class = "numbertext">13 / 18</div> <img src = "images/gallery/cyrus/cyrus-12.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/loutre_au_beurre/">@loutre_au_beurre</a> </div> </div> <div class="mySlides"> <a href = "images/highres/cyrus/cyrus-14.png" target = "_blank"> <div class = "numbertext">14 / 18</div> <img src = "images/gallery/cyrus/cyrus-14.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/dink_arts/">@dink_arts</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/cyrus/cyrus-17.png" target = "_blank"> <div class = "numbertext">15 / 18</div> <img src = "images/gallery/cyrus/cyrus-17.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/_strenta_/">@_strenta_</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/cyrus/cyrus-18.png" target = "_blank"> <div class = "numbertext">16 / 18</div> <img src = "images/gallery/cyrus/cyrus-18.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/mmthemayo/">@MMtheMayo</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/cyrus/cyrus-19.png" target = "_blank"> <div class = "numbertext">17 / 18</div> <img src = "images/gallery/cyrus/cyrus-19.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/enikaffeine/">@enikaffeine</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/cyrus/cyrus-20.jpg" target = "_blank"> <div class = "numbertext">18 / 18</div> <img src = "images/gallery/cyrus/cyrus-20.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/sapphibits/">@sapphibits</a> </div> </div> <!-- Main Full-Size Images - END --> <!-- Image Thumbnails - START --> <div class = "row"> <div class = "art-thumbnail col-md-2 d-flex active"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-15-thmb.png" onclick = "currentSlide(1)" alt = "Cyrus Reference Art #1"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-16-thmb.png" onclick = "currentSlide(2)" alt = "Cyrus Reference Art #2"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-1-thmb.png" onclick = "currentSlide(3)" alt = "Cyrus Reference Art #3"> </div> <span class = "responsive-divider">&nbsp;</span> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-2-thmb.png" onclick = "currentSlide(4)" alt = "Cyrus Reference Art #4"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-3-thmb.png" onclick = "currentSlide(5)" alt = "Cyrus Reference Art #5"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-4-thmb.png" onclick = "currentSlide(6)" alt = "Cyrus Reference Art #6"> </div> </div> <div class = "row"> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-5-thmb.png" onclick = "currentSlide(7)" alt = "Cyrus Reference Art #7"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-6-thmb.png" onclick = "currentSlide(8)" alt = "Cyrus Reference Art #8"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-7-thmb.png" onclick = "currentSlide(9)" alt = "Cyrus Reference Art #9"> </div> <span class = "responsive-divider">&nbsp;</span> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-8-thmb.png" onclick = "currentSlide(10)" alt = "Cyrus Reference Art #10"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-10-thmb.png" onclick = "currentSlide(11)" alt = "Cyrus Reference Art #12"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-11-thmb.png" onclick = "currentSlide(12)" alt = "Cyrus Reference Art #13"> </div> </div> <div class = "row"> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-12-thmb.png" onclick = "currentSlide(13)" alt = "Cyrus Reference Art #14"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-14-thmb.png" onclick = "currentSlide(14)" alt = "Cyrus Reference Art #16"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-17-thmb.png" onclick = "currentSlide(15)" alt = "Cyrus Reference Art #17"> </div> <span class = "responsive-divider">&nbsp;</span> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-18-thmb.png" onclick = "currentSlide(16)" alt = "Cyrus Reference Art #18"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-19-thmb.png" onclick = "currentSlide(17)" alt = "Cyrus Reference Art #19"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-20-thmb.png" onclick = "currentSlide(18)" alt = "Cyrus Reference Art #20"> </div> </div> <!-- Image Thumbnails - END -->'
                bioBox.style.display = "flex";
                collapseBackstory();

                // Window scroll for moving down to Bio Section on page
                window.scroll({
                    top: 300,
                    behavior: 'smooth'
                });
                break;
            // Elias' Character Bio
            case "#elias":
                // Where you insert Elias' Character Specific Bio Elements
                charImg.innerHTML = '<img class = "character-image" alt = "" src = "images/profiles/elias-profile.png">';
                charName.innerHTML = 'Elias Barnaby';
                charAge.innerHTML = '--';
                charHeight.innerHTML = '--';
                charFranchise.innerHTML = 'D&D';
                charRace.innerHTML = 'Human';
                charLikes.innerHTML = '--';
                charDislikes.innerHTML = '--';
                charPersonality.innerHTML = '--';
                charColors.innerHTML = '<span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br> <span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br>';
                charBackstory.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus urna neque viverra justo nec ultrices dui. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Fringilla ut morbi tincidunt augue interdum velit. Urna neque viverra justo nec ultrices dui sapien. Auctor augue mauris augue neque gravida in. Vitae semper quis lectus nulla at volutpat. Hac habitasse platea dictumst quisque sagittis purus sit. Pretium quam vulputate dignissim suspendisse in est. Semper risus in hendrerit gravida rutrum. Pharetra convallis posuere morbi leo urna molestie at elementum eu. <br><br> Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Nam at lectus urna duis convallis. Porttitor rhoncus dolor purus non enim praesent elementum facilisis. Congue nisi vitae suscipit tellus. Et ligula ullamcorper malesuada proin libero nunc. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Magna etiam tempor orci eu lobortis. Ultrices eros in cursus turpis. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Vitae turpis massa sed elementum tempus egestas sed sed risus. Semper quis lectus nulla at volutpat diam. Vulputate ut pharetra sit amet aliquam. Neque egestas congue quisque egestas diam in arcu. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Placerat in egestas erat imperdiet sed euismod. Massa eget egestas purus viverra accumsan. Rhoncus mattis rhoncus urna neque viverra justo. Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. <br><br> Lectus proin nibh nisl condimentum id venenatis. Diam sollicitudin tempor id eu nisl nunc mi. Quis vel eros donec ac odio. Rhoncus dolor purus non enim. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Auctor urna nunc id cursus metus aliquam eleifend mi. Vestibulum mattis ullamcorper velit sed ullamcorper morbi. Elit sed vulputate mi sit. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Iaculis nunc sed augue lacus viverra vitae. Ac placerat vestibulum lectus mauris ultrices eros in cursus turpis. Diam maecenas sed enim ut sem viverra aliquet eget. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed. Turpis egestas integer eget aliquet nibh praesent. Auctor urna nunc id cursus metus aliquam eleifend. Ullamcorper a lacus vestibulum sed arcu non odio. Nunc sed velit dignissim sodales ut eu sem integer. Feugiat vivamus at augue eget arcu dictum varius duis at. Velit sed ullamcorper morbi tincidunt. <br><br> Ultrices in iaculis nunc sed augue lacus. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Enim sed faucibus turpis in. Ullamcorper a lacus vestibulum sed. At imperdiet dui accumsan sit amet nulla facilisi. Vitae purus faucibus ornare suspendisse sed. Vestibulum lorem sed risus ultricies tristique. Commodo sed egestas egestas fringilla. Mauris nunc congue nisi vitae suscipit tellus mauris. Eget nunc lobortis mattis aliquam faucibus. Quis varius quam quisque id diam vel quam. Urna id volutpat lacus laoreet non. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Integer eget aliquet nibh praesent tristique magna sit amet purus. Malesuada fames ac turpis egestas integer eget. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Sed cras ornare arcu dui. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Sit amet cursus sit amet dictum sit. <br><br> Turpis massa tincidunt dui ut ornare lectus. Tellus orci ac auctor augue mauris augue neque gravida in. Fermentum odio eu feugiat pretium nibh ipsum. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Elit ullamcorper dignissim cras tincidunt. Enim ut sem viverra aliquet eget sit. Nunc lobortis mattis aliquam faucibus purus. Dictum sit amet justo donec enim. Cras semper auctor neque vitae tempus quam pellentesque nec. Suscipit tellus mauris a diam maecenas sed enim. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum.';
                charGallery.innerHTML = '<!-- Main Full-Size Images - START --> <div class = "mySlides" style = "display: flex;"> <a href = "images/highres/elias/elias-1.png" target = "_blank"> <div class = "numbertext">1 / 1</div> <img src = "images/gallery/elias/elias-1.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <!-- Main Full-Size Images - END --> <!-- Image Thumbnails - START --> <div class = "row"> <div class = "art-thumbnail col-md-2 d-flex active"> <img class = "thumb-img" src = "images/thumbnails/elias/elias-1-thmb.png" onclick = "currentSlide(1)" alt = "elias Reference Art #1"> </div> </div> <!-- Image Thumbnails - END -->';
                bioBox.style.display = "flex";
                collapseBackstory();

                // Window scroll for moving down to Bio Section on page
                window.scroll({
                    top: 300,
                    behavior: 'smooth'
                });
                break;
            // Ferra's Character Bio
            case "#ferra":
                // Where you insert Ferra's Character Specific Bio Elements
                charImg.innerHTML = '<img class = "character-image" alt = "" src = "images/profiles/ferra-profile.png">';
                charName.innerHTML = 'Ferra Loreborn';
                charAge.innerHTML = '--';
                charHeight.innerHTML = '--';
                charFranchise.innerHTML = 'D&D';
                charRace.innerHTML = 'Hill Dwarf';
                charLikes.innerHTML = '--';
                charDislikes.innerHTML = '--';
                charPersonality.innerHTML = '--';
                charColors.innerHTML = '<span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br> <span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br>';
                charBackstory.innerHTML = 'The Loreborns were built upon generation after generation of heroes. No matter the relative state of peace in the world, they always seemed to find themselves swept up in some random flight of chaos, beckoned away from their home city of resplendent  Daethrun by the promise of glory and fame. This was true for her father Judal before her, and her grandmother Zavia before him. And before her, and before them, and so on so forth until the beginning of time so it seemed. <br><br> And so Ferra could not say she was surprised when the invitation- embossed with her name, written in flowing script-  was dropped into her lap. <br><br> In fact, she would have said that this was long overdue! Finally it was her time to blow this joint- figuratively of course but only just barely. <br><br> It was with great fascination and excitement that she tore into the missive, absorbing the words on the page over and over again in her mind. <br><br> \‘You have been cordially invited to- blah blah blah- the Colosseum of Chaos. Yada yada yada- extra planar battle tournament designed to test the skills of selected champions throughout the realms. Should you choose to accept- blah blah blah - great fame and fortune shall be your reward.\’ <br><br> A wicked smile spread across her face as she strut towards her workshop with invite in hand. She couldn\’t stop herself from slamming the doors open- not that she ever paid particular mind to that before- startling all but one of the several assistants inside. The one who did not flinch stood a few heads taller than the rest, his body of enchanted metal gleaming in the forge’s glow. <br><br> “MR. MONOPOLY WE’VE GOT SOME PACKING TO DO!”';
                charGallery.innerHTML = '<!-- Main Full-Size Images - START --> <div class = "mySlides" style = "display: flex;"> <a href = "images/highres/ferra/ferra-1.png" target = "_blank"> <div class = "numbertext">1 / 2</div> <img src = "images/gallery/ferra/ferra-1.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/ferra/ferra-2.png" target = "_blank"> <div class = "numbertext">2 / 2</div> <img src = "images/gallery/ferra/ferra-2.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <!-- Main Full-Size Images - END --> <!-- Image Thumbnails - START --> <div class = "row"> <div class = "art-thumbnail col-md-2 d-flex active"> <img class = "thumb-img" src = "images/thumbnails/ferra/ferra-1-thmb.png" onclick = "currentSlide(1)" alt = "ferra Reference Art #1"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/ferra/ferra-2-thmb.png" onclick = "currentSlide(2)" alt = "ferra Reference Art #2"> </div> </div> <!-- Image Thumbnails - END -->';
                bioBox.style.display = "flex";
                collapseBackstory();

                // Window scroll for moving down to Bio Section on page
                window.scroll({
                    top: 300,
                    behavior: 'smooth'
                });
                break;
            // Iris' Character Bio
            case "#iris":
                // Where you insert Iris' Character Specific Bio Elements
                charImg.innerHTML = '<img class = "character-image" alt = "" src = "images/profiles/iris-profile.png">';
                charName.innerHTML = 'Iris Shepard';
                charAge.innerHTML = '33';
                charHeight.innerHTML = '5\'8"';
                charFranchise.innerHTML = 'Mass Effect';
                charRace.innerHTML = 'Human';
                charLikes.innerHTML = 'Boxing, Judo, Gambling, Junk Food';
                charDislikes.innerHTML = '--';
                charPersonality.innerHTML = '--';
                charColors.innerHTML = '<span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br> <span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br>';
                charBackstory.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus urna neque viverra justo nec ultrices dui. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Fringilla ut morbi tincidunt augue interdum velit. Urna neque viverra justo nec ultrices dui sapien. Auctor augue mauris augue neque gravida in. Vitae semper quis lectus nulla at volutpat. Hac habitasse platea dictumst quisque sagittis purus sit. Pretium quam vulputate dignissim suspendisse in est. Semper risus in hendrerit gravida rutrum. Pharetra convallis posuere morbi leo urna molestie at elementum eu. <br><br> Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Nam at lectus urna duis convallis. Porttitor rhoncus dolor purus non enim praesent elementum facilisis. Congue nisi vitae suscipit tellus. Et ligula ullamcorper malesuada proin libero nunc. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Magna etiam tempor orci eu lobortis. Ultrices eros in cursus turpis. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Vitae turpis massa sed elementum tempus egestas sed sed risus. Semper quis lectus nulla at volutpat diam. Vulputate ut pharetra sit amet aliquam. Neque egestas congue quisque egestas diam in arcu. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Placerat in egestas erat imperdiet sed euismod. Massa eget egestas purus viverra accumsan. Rhoncus mattis rhoncus urna neque viverra justo. Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. <br><br> Lectus proin nibh nisl condimentum id venenatis. Diam sollicitudin tempor id eu nisl nunc mi. Quis vel eros donec ac odio. Rhoncus dolor purus non enim. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Auctor urna nunc id cursus metus aliquam eleifend mi. Vestibulum mattis ullamcorper velit sed ullamcorper morbi. Elit sed vulputate mi sit. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Iaculis nunc sed augue lacus viverra vitae. Ac placerat vestibulum lectus mauris ultrices eros in cursus turpis. Diam maecenas sed enim ut sem viverra aliquet eget. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed. Turpis egestas integer eget aliquet nibh praesent. Auctor urna nunc id cursus metus aliquam eleifend. Ullamcorper a lacus vestibulum sed arcu non odio. Nunc sed velit dignissim sodales ut eu sem integer. Feugiat vivamus at augue eget arcu dictum varius duis at. Velit sed ullamcorper morbi tincidunt. <br><br> Ultrices in iaculis nunc sed augue lacus. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Enim sed faucibus turpis in. Ullamcorper a lacus vestibulum sed. At imperdiet dui accumsan sit amet nulla facilisi. Vitae purus faucibus ornare suspendisse sed. Vestibulum lorem sed risus ultricies tristique. Commodo sed egestas egestas fringilla. Mauris nunc congue nisi vitae suscipit tellus mauris. Eget nunc lobortis mattis aliquam faucibus. Quis varius quam quisque id diam vel quam. Urna id volutpat lacus laoreet non. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Integer eget aliquet nibh praesent tristique magna sit amet purus. Malesuada fames ac turpis egestas integer eget. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Sed cras ornare arcu dui. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Sit amet cursus sit amet dictum sit. <br><br> Turpis massa tincidunt dui ut ornare lectus. Tellus orci ac auctor augue mauris augue neque gravida in. Fermentum odio eu feugiat pretium nibh ipsum. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Elit ullamcorper dignissim cras tincidunt. Enim ut sem viverra aliquet eget sit. Nunc lobortis mattis aliquam faucibus purus. Dictum sit amet justo donec enim. Cras semper auctor neque vitae tempus quam pellentesque nec. Suscipit tellus mauris a diam maecenas sed enim. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum.';
                charGallery.innerHTML = '<!-- Main Full-Size Images - START --> <div class = "mySlides" style = "display: flex;"> <a href = "images/highres/iris/iris-1.png" target = "_blank"> <div class = "numbertext">1 / 1</div> <img src = "images/gallery/iris/iris-1.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <!-- Main Full-Size Images - END --> <!-- Image Thumbnails - START --> <div class = "row"> <div class = "art-thumbnail col-md-2 d-flex active"> <img class = "thumb-img" src = "images/thumbnails/iris/iris-1-thmb.png" onclick = "currentSlide(1)" alt = "iris Reference Art #1"> </div> </div> <!-- Image Thumbnails - END -->';
                bioBox.style.display = "flex";
                collapseBackstory();

                // Window scroll for moving down to Bio Section on page
                window.scroll({
                    top: 300,
                    behavior: 'smooth'
                });
                break;
            // Sethris' Character Bio
            case "#sethris":
                // Where you insert Sethris' Character Specific Bio Elements
                charImg.innerHTML = '<img class = "character-image" alt = "" src = "images/profiles/sethris-profile.png">';
                charName.innerHTML = 'Sethris';
                charAge.innerHTML = '--';
                charHeight.innerHTML = '--';
                charFranchise.innerHTML = 'D&D';
                charRace.innerHTML = 'Drow';
                charLikes.innerHTML = '--';
                charDislikes.innerHTML = '--';
                charPersonality.innerHTML = '--';
                charColors.innerHTML = '<span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br> <span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br>';
                charBackstory.innerHTML = 'From birth, her mother had always believed Sethris to be special. Small happenstances of luck and coincidence formed a string of eerily convincing evidence that Sethris had something more to her than initially met the eye. Despite being poor, she had a way of stumbling upon reading material as though pulling it from nowhere. And then there were the dreams. <br><br> She dreamt of friends she’d never met. Places she’d never been. Battles she’d never fought. <br><br> But all this meant little to young Sethris. Instead, she spent her childhood in a secluded bubble-- consuming any knowledge she could find in the comfort of her home. <br><br> At the age of 7 she acquired her first spellbook at a flea market, and began practicing in earnest. Soon she could summon puffs of cold air, and after a few years she could create ice and cast true spells. As her magical capabilities developed, so to did the vividness of her dreams. After a particularly startling nightmare, Sethris ends up accidentally destroying the spell book she’d fallen asleep with using a Ray of Frost. After this, Sethris spent the next year in a depressed haze. Forced to come to terms with the fact that she had little to no social skills and shunned by other kids her age, Sethris secluded herself in her room, with only the indecipherable whispers of her parents for company. <br><br> That came to a stop the day the UR Alliance guards showed up at her door to take her to the Magiciel Academy. Suspected for having latent powers of divination, Sethris was funded by the Alliance to hone her craft and become a true arcane practitioner. She enjoyed her time at school, with all the resources she could possibly want at her fingertips, but still she struggled to make friends. Despite her many years in the academy, Sethris managed to only befriend her roommate and a few of her professors. But still, she was happy. <br><br> By age 22, she was deemed proficient enough to take a leave of absence and return home. Despite feeling out of place when she arrived, Sethris was greeted warmly by her family and welcomed with open arms. This warmth was short-lived however, as the very next morning, her parents revealed themselves to be spies for the Drow Resistance, and had planned to use Sethris as a pawn in securing power all along. Betrayed and confused, Sethris ran from her family and home, fleeing into the night for fear of the Alliance discovering her involvement in her parent’s schemes. <br><br> Now she wanders the countryside, alone and on the run. The Alliance hunts her for the large tuition she owes them, while she herself seeks the answer behind her growing dreams in hopes of finding the truth behind the visions of her past life.';
                charGallery.innerHTML = '<!-- Main Full-Size Images - START --> <div class = "mySlides" style = "display: flex;"> <a href = "images/highres/sethris/sethris-1.png" target = "_blank"> <div class = "numbertext">1 / 11</div> <img src = "images/gallery/sethris/sethris-1.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/sethris/sethris-2.png" target = "_blank"> <div class = "numbertext">2 / 11</div> <img src = "images/gallery/sethris/sethris-2.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/sethris/sethris-3.jpg" target = "_blank"> <div class = "numbertext">3 / 11</div> <img src = "images/gallery/sethris/sethris-3.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/sethris/sethris-4.jpg" target = "_blank"> <div class = "numbertext">4 / 11</div> <img src = "images/gallery/sethris/sethris-4.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/ofcourse_leaves/">@ofcourse_leaves</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/sethris/sethris-5.jpg" target = "_blank"> <div class = "numbertext">5 / 11</div> <img src = "images/gallery/sethris/sethris-5.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/skyycha/">@skyycha</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/sethris/sethris-6.jpeg" target = "_blank"> <div class = "numbertext">6 / 11</div> <img src = "images/gallery/sethris/sethris-6.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/schwarky.art/">@schwarky.art</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/sethris/sethris-7.jpg" target = "_blank"> <div class = "numbertext">7 / 11</div> <img src = "images/gallery/sethris/sethris-7.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/justalittlebreezy/">@justalittlebreezy</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/sethris/sethris-8.png" target = "_blank"> <div class = "numbertext">8 / 11</div> <img src = "images/gallery/sethris/sethris-8.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/rayvonfalls/">@rayvonfalls</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/sethris/sethris-9.png" target = "_blank"> <div class = "numbertext">9 / 11</div> <img src = "images/gallery/sethris/sethris-9.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/erdschein_art/">@erdschein_art</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/sethris/sethris-10.png" target = "_blank"> <div class = "numbertext">10 / 11</div> <img src = "images/gallery/sethris/sethris-10.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/moka_creates/">@moka_creates</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/sethris/sethris-11.jpg" target = "_blank"> <div class = "numbertext">11 / 11</div> <img src = "images/gallery/sethris/sethris-11.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/cottinartz/">@cottinartz</a> </div> </div> <!-- Main Full-Size Images - END --> <!-- Image Thumbnails - START --> <div class = "row"> <div class = "art-thumbnail col-md-2 d-flex active"> <img class = "thumb-img" src = "images/thumbnails/sethris/sethris-1-thmb.png" onclick = "currentSlide(1)" alt = "sethris Reference Art #1"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/sethris/sethris-2-thmb.png" onclick = "currentSlide(2)" alt = "sethris Reference Art #2"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/sethris/sethris-3-thmb.png" onclick = "currentSlide(3)" alt = "sethris Reference Art #3"> </div> <span class = "responsive-divider">&nbsp;</span> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/sethris/sethris-4-thmb.png" onclick = "currentSlide(4)" alt = "sethris Reference Art #4"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/sethris/sethris-5-thmb.png" onclick = "currentSlide(5)" alt = "sethris Reference Art #5"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/sethris/sethris-6-thmb.png" onclick = "currentSlide(6)" alt = "sethris Reference Art #6"> </div> </div> <div class = "row"> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/sethris/sethris-7-thmb.png" onclick = "currentSlide(7)" alt = "sethris Reference Art #7"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/sethris/sethris-8-thmb.png" onclick = "currentSlide(8)" alt = "sethris Reference Art #8"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/sethris/sethris-9-thmb.png" onclick = "currentSlide(9)" alt = "sethris Reference Art #9"> </div> <span class = "responsive-divider">&nbsp;</span> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/sethris/sethris-10-thmb.png" onclick = "currentSlide(10)" alt = "sethris Reference Art #10"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/sethris/sethris-11-thmb.png" onclick = "currentSlide(11)" alt = "sethris Reference Art #11"> </div> </div> <!-- Image Thumbnails - END -->';
                bioBox.style.display = "flex";
                collapseBackstory();

                // Window scroll for moving down to Bio Section on page
                window.scroll({
                    top: 300,
                    behavior: 'smooth'
                });
                break;
            // Shaesa's Character Bio
            case "#shaesa":
                // Where you insert Shaesa's Character Specific Bio Elements
                charImg.innerHTML = '<img class = "character-image" alt = "" src = "images/profiles/shaesa-profile.png">';
                charName.innerHTML = 'Shaesa Tabris';
                charAge.innerHTML = '--';
                charHeight.innerHTML = '--';
                charFranchise.innerHTML = 'Dragon Age';
                charRace.innerHTML = 'Elf';
                charLikes.innerHTML = '--';
                charDislikes.innerHTML = '--';
                charPersonality.innerHTML = '--';
                charColors.innerHTML = '<span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br> <span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br>';
                charBackstory.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus urna neque viverra justo nec ultrices dui. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Fringilla ut morbi tincidunt augue interdum velit. Urna neque viverra justo nec ultrices dui sapien. Auctor augue mauris augue neque gravida in. Vitae semper quis lectus nulla at volutpat. Hac habitasse platea dictumst quisque sagittis purus sit. Pretium quam vulputate dignissim suspendisse in est. Semper risus in hendrerit gravida rutrum. Pharetra convallis posuere morbi leo urna molestie at elementum eu. <br><br> Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Nam at lectus urna duis convallis. Porttitor rhoncus dolor purus non enim praesent elementum facilisis. Congue nisi vitae suscipit tellus. Et ligula ullamcorper malesuada proin libero nunc. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Magna etiam tempor orci eu lobortis. Ultrices eros in cursus turpis. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Vitae turpis massa sed elementum tempus egestas sed sed risus. Semper quis lectus nulla at volutpat diam. Vulputate ut pharetra sit amet aliquam. Neque egestas congue quisque egestas diam in arcu. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Placerat in egestas erat imperdiet sed euismod. Massa eget egestas purus viverra accumsan. Rhoncus mattis rhoncus urna neque viverra justo. Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. <br><br> Lectus proin nibh nisl condimentum id venenatis. Diam sollicitudin tempor id eu nisl nunc mi. Quis vel eros donec ac odio. Rhoncus dolor purus non enim. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Auctor urna nunc id cursus metus aliquam eleifend mi. Vestibulum mattis ullamcorper velit sed ullamcorper morbi. Elit sed vulputate mi sit. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Iaculis nunc sed augue lacus viverra vitae. Ac placerat vestibulum lectus mauris ultrices eros in cursus turpis. Diam maecenas sed enim ut sem viverra aliquet eget. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed. Turpis egestas integer eget aliquet nibh praesent. Auctor urna nunc id cursus metus aliquam eleifend. Ullamcorper a lacus vestibulum sed arcu non odio. Nunc sed velit dignissim sodales ut eu sem integer. Feugiat vivamus at augue eget arcu dictum varius duis at. Velit sed ullamcorper morbi tincidunt. <br><br> Ultrices in iaculis nunc sed augue lacus. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Enim sed faucibus turpis in. Ullamcorper a lacus vestibulum sed. At imperdiet dui accumsan sit amet nulla facilisi. Vitae purus faucibus ornare suspendisse sed. Vestibulum lorem sed risus ultricies tristique. Commodo sed egestas egestas fringilla. Mauris nunc congue nisi vitae suscipit tellus mauris. Eget nunc lobortis mattis aliquam faucibus. Quis varius quam quisque id diam vel quam. Urna id volutpat lacus laoreet non. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Integer eget aliquet nibh praesent tristique magna sit amet purus. Malesuada fames ac turpis egestas integer eget. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Sed cras ornare arcu dui. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Sit amet cursus sit amet dictum sit. <br><br> Turpis massa tincidunt dui ut ornare lectus. Tellus orci ac auctor augue mauris augue neque gravida in. Fermentum odio eu feugiat pretium nibh ipsum. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Elit ullamcorper dignissim cras tincidunt. Enim ut sem viverra aliquet eget sit. Nunc lobortis mattis aliquam faucibus purus. Dictum sit amet justo donec enim. Cras semper auctor neque vitae tempus quam pellentesque nec. Suscipit tellus mauris a diam maecenas sed enim. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum.';
                charGallery.innerHTML = '<!-- Main Full-Size Images - START --> <div class = "mySlides" style = "display: flex;"> <a href = "images/highres/shaesa/shaesa-1.png" target = "_blank"> <div class = "numbertext">1 / 3</div> <img src = "images/gallery/shaesa/shaesa-1.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/shaesa/shaesa-2.jpg" target = "_blank"> <div class = "numbertext">2 / 3</div> <img src = "images/gallery/shaesa/shaesa-2.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.twitter.com/tythonwxnderer/">@tythonwxnderer</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/shaesa/shaesa-3.png" target = "_blank"> <div class = "numbertext">3 / 3</div> <img src = "images/gallery/shaesa/shaesa-3.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <!-- Main Full-Size Images - END --> <!-- Image Thumbnails - START --> <div class = "row"> <div class = "art-thumbnail col-md-2 d-flex active"> <img class = "thumb-img" src = "images/thumbnails/shaesa/shaesa-1-thmb.png" onclick = "currentSlide(1)" alt = "shaesa Reference Art #1"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/shaesa/shaesa-2-thmb.png" onclick = "currentSlide(2)" alt = "shaesa Reference Art #2"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/shaesa/shaesa-3-thmb.png" onclick = "currentSlide(3)" alt = "shaesa Reference Art #3"> </div> </div> <!-- Image Thumbnails - END -->';
                bioBox.style.display = "flex";
                collapseBackstory();

                // Window scroll for moving down to Bio Section on page
                window.scroll({
                    top: 300,
                    behavior: 'smooth'
                });
                break;
            // Sunna's Character Bio
            case "#sunna":
                // Where you insert Sunna's Character Specific Bio Elements
                charImg.innerHTML = '<img class = "character-image" alt = "" src = "images/profiles/sunna-profile.png">';
                charName.innerHTML = 'Sunna Lindesdotten';
                charAge.innerHTML = '30';
                charHeight.innerHTML = '6\'2"';
                charFranchise.innerHTML = 'Dragon Age';
                charRace.innerHTML = 'Avvar';
                charLikes.innerHTML = '--';
                charDislikes.innerHTML = '--';
                charPersonality.innerHTML = '--';
                charColors.innerHTML = '<span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br> <span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br>';
                charBackstory.innerHTML = 'First daughter and child of Linde and Orrin, a baby conceived besides Rilla’s fires, Sunna grew up a celebrated member of Lion Wing Hold. She lived a good life as the daughter of the Master of the Hunt and a well respected Arena trainer. Due to her blessed conception, her Hold’s Thane, Hanolf Stone-Splitter,  had great expectations for her future within the hold, perhaps believing that she may follow the footsteps of her Father and become the next Master of the Hunt. Sunna herself worked hard to meet those expectations. She and her younger brother, Eirik, were quick studies of the blade and bow, and spent much of their days training and running about the hold causing chaos, playing at becoming honored warriors, fighting alongside Solving the hold beast, and saving their home from raids. They got into trouble often, but never so much that a well meaning apology or day of reparations couldn’t resolve them of blame. Life in the hold, up in the Frostbacks and well isolated from the rest of Thedas, was peaceful. Sunna had loved her life with her people and family, not wanting for adventure or wanderlust as she found plenty of curiosities to occupy her on her hunts and raids. Even what luxuries the traders brought back usually failed to capture her interest for long. She was content with her life, and wished for nothing else than the happiness of her hold and her people. <br><br> It was on the eve of a dark winter night when disaster struck. Sunna had been preparing to lead a hunt that was to take place in three days time; away from the hold hunting lemmings and fennic to salt for the upcoming journey. This was to be her final trial before taking on the role of Hunt Master from her father, who was now beginning to grow stiff and slow with age. She was to venture out in the heart of winter and bring back a mature Fade-touched Druffalo, which would be used to help feed and clothe the hold. With luck, she would have succeeded, bringing honor to her family and maybe even earning herself a legend-mark in the process. <br><br> But after that night, the trial no longer mattered. Nothing mattered. Because that was the day the Lady of the Sky bled, and everything fell to ruin. <br><br> When the sky tore open, Sunna was sure she must have been given a vision, some horrible message from a spirit that she couldn’t quite comprehend. She rode home as fast as she could, traveling for hours without pause in hopes of speaking with Augur Svala about what she saw. But by the time she returned, all she was greeted with was despair. <br><br> She could hear the screaming far before she’d reached the Hold, but even so, she couldn’t have been prepared for what she saw. Her home burned with green fire; the smell of lightning, ash, and blood filling her nose as she rode through the gates. And above it all, a strange glowing tear in the sky, pouring rock and monsters from it’s gaping mouth. <br><br> Everything was pure chaos. The Hold’s gods had twisted and gone sour, tearing apart those they’d spent generations protecting. Adult and child alike were not spared their wrath. Sunna dared not look at the dead’s faces as she charged through the streets, slicing down demons as she went. She knew each member of the hold by name, and any loss would be one too much, but more than anything she feared to look down and see the dead eyes of her family staring back at her. <br><br> She followed the sounds of battle, quickly making her way towards the heart of the hold, where the Lady’s wound bled a violent green. It seemed like a majority of the Hold’s warriors were gathered there. Her mother included. <br><br> Launching into the fray, she fought without reserve. She was desperate to reach the middle of the battlefield, intent on confirming the safety of her father and brother. Blood and ichor covered every inch of her, making it hard to tell what wounds were her own. But she found that mattered little. She couldn’t feel much past the strain of her muscles, and she was too determined to reach the center of battle to slow down enough to check for wounds. <br><br> So of course, when she was suddenly pulled away from the fight, Sunna nearly ended up cutting down her Augur in her haste. Augur Svala was covered in blood; her eyes wide and frantic. In her arms was clutched a singular, large egg. <br><br> The last surviving of Solving’s clutch as told by the Augur. <br><br> Svala urged Sunna to take the egg and make her escape while she was still able. Before the gods twisted, they told the Augur of a great wound dealt to the Lady. Sunna, who was favored by Hakkon and the leading candidate for Huntmaster, was the only one fit to make the journey in the dead of winter. <br><br> It would be her duty to make reparations to the gods. To heal the Lady. Or else no one, dead or alive, would know peace. <br><br> Conflict raged in her at the thought of abandoning her hold to this chaos. To leave now would mark her as a coward and a failure to her people; a fate which she considered worse than death. But neither could Sunna disobey her Augur. If she couldn’t trust Svala, it was as good as saying she’d lost faith in Korth. <br><br> She had no choice. <br><br> With a final, lingering glance towards her mother’s back, she retreated. Dodging through the streets, Sunna made for the horse she’d left by the hold gate and didn\'t look back. If this was to be her duty to her people, then she would do it without question.';
                charGallery.innerHTML = '<!-- Main Full-Size Images - START --> <div class = "mySlides" style = "display: flex;"> <a href = "images/highres/sunna/sunna-1.png" target = "_blank"> <div class = "numbertext">1 / 1</div> <img src = "images/gallery/sunna/sunna-1.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <!-- Main Full-Size Images - END --> <!-- Image Thumbnails - START --> <div class = "row"> <div class = "art-thumbnail col-md-2 d-flex active"> <img class = "thumb-img" src = "images/thumbnails/sunna/sunna-1-thmb.png" onclick = "currentSlide(1)" alt = "sunna Reference Art #1"> </div> </div> <!-- Image Thumbnails - END -->';
                bioBox.style.display = "flex";
                collapseBackstory();

                // Window scroll for moving down to Bio Section on page
                window.scroll({
                    top: 300,
                    behavior: 'smooth'
                });
                break;
            // Talenna's Character Bio
            case "#talenna":
                // Where you insert Talenna's Character Specific Bio Elements
                charImg.innerHTML = '<img class = "character-image" alt = "" src = "images/profiles/talenna-profile.png">';
                charName.innerHTML = 'Talenna Lavellan/Ethera';
                charAge.innerHTML = '31';
                charHeight.innerHTML = '5\'4"';
                charFranchise.innerHTML = 'Dragon Age';
                charRace.innerHTML = 'Elf';
                charLikes.innerHTML = 'Reading, Whittling, Astronomy, Storytelling';
                charDislikes.innerHTML = '--';
                charPersonality.innerHTML = '--';
                charColors.innerHTML = '<span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br> <span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br>';
                charBackstory.innerHTML = 'Gifted with the skill for the arcane from an early age, Talenna was practically raised into the role of First by the clan’s Keeper. She showed an aptitude for learning and a quiet but insatiable curiosity that only burned hotter as she grew into her role. However, her plans in life changed when it was revealed that a pair of twins born into the clan some years ago both possessed magic as she did. Rather than split the siblings up, Talenna volunteered to help the Keeper teach the young mages in her place. In the meantime, she’d masquerade as a hunter until they were fully trained, after which she could depart for a separate clan in need of a mage. She hid her magic and trained in stealth and daggers. Even without her magic at hand, she became a force not to be reckoned with. <br><br> The time soon came when the twins were well on their way in training, and Talenna felt secure enough in her clan’s safety that she could depart. For a while, she traveled Thedas in search of a clan to call her own, earning coin through hunting and storytelling as she went. However, after the events at Haven, she was drawn to Skyhold by stories of a Dalish Inquisitor and the waves they had made across the continent. She now offers her services to the Inquisition as a storyteller, fighter, and spy in the hope of catching a glimpse of history as it’s written.';
                charGallery.innerHTML = '<!-- Main Full-Size Images - START --> <div class = "mySlides" style = "display: flex;"> <a href = "images/highres/talenna/talenna-1.png" target = "_blank"> <div class = "numbertext">1 / 4</div> <img src = "images/gallery/talenna/talenna-1.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/talenna/talenna-2.png" target = "_blank"> <div class = "numbertext">2 / 4</div> <img src = "images/gallery/talenna/talenna-2.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.twitter.com/solaestial/">@solaestial</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/talenna/talenna-3.JPG" target = "_blank"> <div class = "numbertext">3 / 4</div> <img src = "images/gallery/talenna/talenna-3.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/TeatimeViolence/">@TeatimeViolence</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/talenna/talenna-4.png" target = "_blank"> <div class = "numbertext">4 / 4</div> <img src = "images/gallery/talenna/talenna-4.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/MMtheMayo/">@MMtheMayo</a> </div> </div> <!-- Main Full-Size Images - END --> <!-- Image Thumbnails - START --> <div class = "row"> <div class = "art-thumbnail col-md-2 d-flex active"> <img class = "thumb-img" src = "images/thumbnails/talenna/talenna-1-thmb.png" onclick = "currentSlide(1)" alt = "talenna Reference Art #1"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/talenna/talenna-2-thmb.png" onclick = "currentSlide(2)" alt = "talenna Reference Art #2"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/talenna/talenna-3-thmb.png" onclick = "currentSlide(3)" alt = "talenna Reference Art #3"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/talenna/talenna-4-thmb.png" onclick = "currentSlide(4)" alt = "talenna Reference Art #4"> </div> </div> <!-- Image Thumbnails - END -->';
                bioBox.style.display = "flex";
                collapseBackstory();

                // Window scroll for moving down to Bio Section on page
                window.scroll({
                    top: 300,
                    behavior: 'smooth'
                });
                break;
            // Valere's Character Bio
            case "#valere":
                // Where you insert Valere's Character Specific Bio Elements
                charImg.innerHTML = '<img class = "character-image" alt = "" src = "images/profiles/valere-profile.png">';
                charName.innerHTML = 'Valere';
                charAge.innerHTML = '--';
                charHeight.innerHTML = '--';
                charFranchise.innerHTML = 'D&D';
                charRace.innerHTML = 'Human';
                charLikes.innerHTML = '--';
                charDislikes.innerHTML = '--';
                charPersonality.innerHTML = '--';
                charColors.innerHTML = '<span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br> <span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br>';
                charBackstory.innerHTML = 'A dancer born in the small village of Timberfall. Valere’s talents for the arts were noticed from an early age, and as soon as she was of age, she was quick to join a small traveling troupe to help support her family. She traveled with this troupe for a short number of years, and was quite happy, but her life soon changed for the worse when she was taken captive by a roving band of brigands at the age of 16. <br><br> In an act of cruelty, the bandits decided to force the entire troupe to fight each other in a test of skill, and Valere was the only one deemed worthy enough to keep her life. Soon after, she was thrown into the art of fighting and killing; a skill that she relied on as a token of her worth. Once she was deemed ready, the bandits utilized her skills in countless plots. Her love for dance was twisted into the perfect disguise. Her performances allowed her access to high class parties and drew often curious foot travelers to her campfire; all of them too distracted by her dancing to see the blade she hid behind her back. <br><br> During her time at the camp, Valere learned obedience offered the path to lesser pain. She did her job unquestioningly, never daring to escape, already believing herself to be irredeemable in the eyes of Naga and in her family. She quickly became an effective weapon, and a profitable one at that. However, no matter how many lives she took or jewels she stole, she was never treated kindly. Simen, the leader of the brigands, insisted on keeping Valere caged during her time at camp, where she was constantly beaten and abused by the other bandits; only bothering to let her out when she was needed for a job. And so it was like this that Valere was forced to survive for 4 years. That was, of course, until the day of the raid. <br><br> It had been in the beginning of the cold months when the West Khan and his men saw her freed. After hearing about a series of brutal murders and ransackings, Khan Kurindal took it into his own hands to drive the brigands from Ferox. Valere had been taken prisoner originally, but after hearing out her case, a deal was struck between her and the Khan. As repentance for her actions, she would work under the employ of the Khan as a dancer and escort guard at Northfort. She was often charged with accompanying important diplomats to events and parties as a more… subtle form of protection. It was here that she learned how to navigate the intricacies of court. <br><br> Though she kept her skills sharp, Valere doesn’t delight in the ease with which she can take a life. No. It will always unsettle her. However, she developed a propensity to hide this disgust behind a facade of cheer and naivety. Instead of dwelling on the innocent lives lost at her hand, she would much prefer to ignore her past all together. As such, few outside of the raid party that rescued her knows of her history. Not even her family- especially not her family, know about the 4 years she was kept hostage by the bandits. And for that, Valere is most relieved. <br><br> To people she just met, Valere appears a passionate and kind performer, dedicated to her craft, if not a bit airheaded and oblivious. However, when people question her past, she defaults to deflecting questions with a smile, and if persistent, becomes closed off and cold about it. She is deeply guilty about what she has done and is also extremely grateful and loyal to the Khan because of this. While she doesn’t like using her sword, she will do what she must to prevent the loss of more innocent lives in order to make right what she has wronged.';
                charGallery.innerHTML = '<!-- Main Full-Size Images - START --> <div class = "mySlides" style = "display: flex;"> <a href = "images/highres/valere/valere-1.png" target = "_blank"> <div class = "numbertext">1 / 14</div> <img src = "images/gallery/valere/valere-1.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/valere/valere-2.png" target = "_blank"> <div class = "numbertext">2 / 14</div> <img src = "images/gallery/valere/valere-2.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/valere/valere-3.png" target = "_blank"> <div class = "numbertext">3 / 14</div> <img src = "images/gallery/valere/valere-3.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/arabird_art/">@arabird_art</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/valere/valere-4.png" target = "_blank"> <div class = "numbertext">4 / 14</div> <img src = "images/gallery/valere/valere-4.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/_the_little_bee_/">@_the_little_bee_</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/valere/valere-5.png" target = "_blank"> <div class = "numbertext">5 / 14</div> <img src = "images/gallery/valere/valere-5.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/sapphibits/">@sapphibits</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/valere/valere-7.png" target = "_blank"> <div class = "numbertext">6 / 14</div> <img src = "images/gallery/valere/valere-7.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/ikuchana/">@ikuchana</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/valere/valere-8.png" target = "_blank"> <div class = "numbertext">7 / 14</div> <img src = "images/gallery/valere/valere-8.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/valere/valere-9.png" target = "_blank"> <div class = "numbertext">8 / 14</div> <img src = "images/gallery/valere/valere-9.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/naninnai/">@naninnai</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/valere/valere-10.png" target = "_blank"> <div class = "numbertext">9 / 14</div> <img src = "images/gallery/valere/valere-10.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/linvaniin/">@linvaniin</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/valere/valere-11.jpg" target = "_blank"> <div class = "numbertext">10 / 14</div> <img src = "images/gallery/valere/valere-11.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/schwarky.art/">@schwarky.art</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/valere/valere-12.png" target = "_blank"> <div class = "numbertext">11 / 14</div> <img src = "images/gallery/valere/valere-12.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.twitter.com/rubindraws/">@rubindraws</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/valere/valere-13.png" target = "_blank"> <div class = "numbertext">12 / 14</div> <img src = "images/gallery/valere/valere-13.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/so_much_moxie/">@so_much_moxie</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/valere/valere-14.png" target = "_blank"> <div class = "numbertext">13 / 14</div> <img src = "images/gallery/valere/valere-14.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/sylvelure/">@sylvelure</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/valere/valere-15.jpg" target = "_blank"> <div class = "numbertext">14 / 14</div> <img src = "images/gallery/valere/valere-15.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/dooskets/">@dooskets</a> </div> </div> <!-- Main Full-Size Images - END --> <!-- Image Thumbnails - START --> <div class = "row"> <div class = "art-thumbnail col-md-2 d-flex active"> <img class = "thumb-img" src = "images/thumbnails/valere/valere-1-thmb.png" onclick = "currentSlide(1)" alt = "valere Reference Art #1"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/valere/valere-2-thmb.png" onclick = "currentSlide(2)" alt = "valere Reference Art #2"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/valere/valere-3-thmb.png" onclick = "currentSlide(3)" alt = "valere Reference Art #3"> </div> <span class = "responsive-divider">&nbsp;</span> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/valere/valere-4-thmb.png" onclick = "currentSlide(4)" alt = "valere Reference Art #4"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/valere/valere-5-thmb.png" onclick = "currentSlide(5)" alt = "valere Reference Art #5"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/valere/valere-7-thmb.png" onclick = "currentSlide(6)" alt = "valere Reference Art #6"> </div> </div> <div class = "row"> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/valere/valere-8-thmb.png" onclick = "currentSlide(7)" alt = "valere Reference Art #7"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/valere/valere-9-thmb.png" onclick = "currentSlide(8)" alt = "valere Reference Art #8"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/valere/valere-10-thmb.png" onclick = "currentSlide(9)" alt = "valere Reference Art #9"> </div> <span class = "responsive-divider">&nbsp;</span> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/valere/valere-11-thmb.png" onclick = "currentSlide(10)" alt = "valere Reference Art #10"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/valere/valere-12-thmb.png" onclick = "currentSlide(11)" alt = "valere Reference Art #11"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/valere/valere-13-thmb.png" onclick = "currentSlide(12)" alt = "valere Reference Art #12"> </div> </div> <div class = "row"> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/valere/valere-14-thmb.png" onclick = "currentSlide(13)" alt = "valere Reference Art #13"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/valere/valere-15-thmb.png" onclick = "currentSlide(14)" alt = "valere Reference Art #14"> </div> </div> <!-- Image Thumbnails - END -->';
                bioBox.style.display = "flex";
                collapseBackstory();

                // Window scroll for moving down to Bio Section on page
                window.scroll({
                    top: 300,
                    behavior: 'smooth'
                });
                break;
            // Default Empty Bio
            default:
                document.getElementById('bioBox').style.display = "none";
        }
    }

    // Sets initial character on page load, if a Hash exists in the URL
    characterChange();

    // Changes character shown when the Hash in the URL changes
    window.onhashchange = characterChange;
});


// Initialization for the AOS CSS Animations
AOS.init
({
    duration: 800
});


// Initialization for the SwiperJS Sliders
const swiper1 = new Swiper('.swiper1', 
{
    // Number of slides + slide spacing
    slidesPerView: 2,

    // Functional parameters
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    paginationClickable: true,
    effect: 'slide',
    preloadImages: true,
    longSwipes: false,
    followFinger: false,
    
    // Swipe Functionality Removal for Desktop
    breakpoints:
    {
        992: 
        {
            allowTouchMove: false
        }
    },

    // Pagination activation
    pagination: 
    {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation Arrows Activation
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev',},
});


// Back To Top Button JS
scrollBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function() 
{
    scrollFunction()
};
// Function brings in Scroll to Top Button when the user is at least 100px down on the page
function scrollFunction() 
{
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) 
    {
        scrollBtn.style.display = "block";
    } 
    else 
    {
        scrollBtn.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() 
{
    document.body.scrollTop = 0; // Safari Compatibility
    document.documentElement.scrollTop = 0; // Chrome, Firefox, & IE Compatibility
}


// Function to expand/collapse the Backstory Section
backstoryTop = document.getElementById("backstoryTop");
bottomPreview = document.getElementById("continuePreview");
function expandBackstory()
{
    document.getElementsByClassName("backstory-section")[0].style.height = "auto";
    $("#expandBackBtn").attr("onClick", "collapseBackstory()");
    backstoryTop.scrollIntoView();
    bottomPreview.style.display = "none";
}
function collapseBackstory()
{
    document.getElementsByClassName("backstory-section")[0].style.height = "14rem";
    $("#expandBackBtn").attr ("onClick", "expandBackstory()");
    bottomPreview.style.display = "block";
}


// Basic Slider JS for the Character Art Gallery
var slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) 
{
    showSlides(slideIndex = n);
    document.getElementById("character-img-gallery").scrollIntoView();
}
function showSlides(n) 
{
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("art-thumbnail");
    var j;

    if (n > slides.length) 
    {
        slideIndex = 1
    }
    if (n < 1) 
    {
        slideIndex = slides.length
    }
    for (j = 0; j < slides.length; j++) 
    {
        slides[j].style.display = "none";
    }
    for (j = 0; j < dots.length; j++) 
    {
        dots[j].className = dots[j].className.replace(" active", "");
    }
    
    if (document.getElementsByClassName("mySlides").length != 0)
    {
        slides[slideIndex-1].style.display = "flex";
        dots[slideIndex-1].className += " active";
    }
}

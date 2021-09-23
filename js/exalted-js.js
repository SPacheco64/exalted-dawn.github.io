// Exalted Dawn Characters Site - JavaScript

// Function Swaps Character Info Shown based on Hash in the URL
$(document).ready(function () 
{
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
        

        switch(window.location.hash)
        {
            // Cyrus' Character Bio
            case "#cyrus":
                // Where you insert Cyrus' Character Specific Bio Elements
                charImg.innerHTML = '<img class = "character-image" alt = "" src = "images/profiles/cyrus-profile.png">';
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
                charGallery.innerHTML = '<!-- Main Full-Size Images - START --> <div class = "mySlides" style = "display: flex;"> <a href = "images/highres/cyrus/cyrus-15.png" target = "_blank"> <div class = "numbertext">1 / 20</div> <img src = "images/gallery/cyrus/cyrus-15.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/cyrus/cyrus-16.png" target = "_blank"> <div class = "numbertext">2 / 20</div> <img src = "images/gallery/cyrus/cyrus-16.png"> </a> <div class = "artist-name"> Artist: @Great_Artist </div> </div> <div class = "mySlides"> <a href = "images/highres/cyrus/cyrus-1.png" target = "_blank"> <div class = "numbertext">3 / 20</div> <img src = "images/gallery/cyrus/cyrus-1.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/peachykeen_doodlememe/">@Peachykeen_doodlememe</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/cyrus/cyrus-2.png" target = "_blank"> <div class = "numbertext">4 / 20</div> <img src = "images/gallery/cyrus/cyrus-2.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/zucciini/">@zucciini</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/cyrus/cyrus-3.png" target = "_blank"> <div class = "numbertext">5 / 20</div> <img src = "images/gallery/cyrus/cyrus-3.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/strawbtea/">@strawbtea</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/cyrus/cyrus-4.jpg" target = "_blank"> <div class = "numbertext">6 / 20</div> <img src = "images/gallery/cyrus/cyrus-4.jpg"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/hiitsyart/">@hiitsyart</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/cyrus/cyrus-5.png" target = "_blank"> <div class = "numbertext">7 / 20</div> <img src = "images/gallery/cyrus/cyrus-5.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/alenadraws/">@alenadraws</a> </div> </div> <div class="mySlides"> <a href = "images/highres/cyrus/cyrus-6.png" target = "_blank"> <div class = "numbertext">8 / 20</div> <img src = "images/gallery/cyrus/cyrus-6.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/cyrus/cyrus-7.png" target = "_blank"> <div class = "numbertext">9 / 20</div> <img src = "images/gallery/cyrus/cyrus-7.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" target = "_blank" href = "https://www.instagram.com/crooomps/">@crooomps</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/cyrus/cyrus-8.png" target = "_blank"> <div class = "numbertext">10 / 20</div> <img src = "images/gallery/cyrus/cyrus-8.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/tkag69/">@tkag69</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/cyrus/cyrus-9.png" target = "_blank"> <div class = "numbertext">11 / 20</div> <img src = "images/gallery/cyrus/cyrus-9.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "">@UNKNOWN ARTIST</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/cyrus/cyrus-10.png" target = "_blank"> <div class = "numbertext">12 / 20</div> <img src = "images/gallery/cyrus/cyrus-10.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class="mySlides"> <a href = "images/highres/cyrus/cyrus-11.png" target = "_blank"> <div class = "numbertext">13 / 20</div> <img src = "images/gallery/cyrus/cyrus-11.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/naninnai/">@naninnai</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/cyrus/cyrus-12.jpg" target = "_blank"> <div class = "numbertext">14 / 20</div> <img src = "images/gallery/cyrus/cyrus-12.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/loutre_au_beurre/">@loutre_au_beurre</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/cyrus/cyrus-13.jpg" target = "_blank"> <div class = "numbertext">15 / 20</div> <img src = "images/gallery/cyrus/cyrus-13.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "">@UNKNOWN ARTIST</a> </div> </div> <div class="mySlides"> <a href = "images/highres/cyrus/cyrus-14.png" target = "_blank"> <div class = "numbertext">16 / 20</div> <img src = "images/gallery/cyrus/cyrus-14.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/dink_arts/">@dink_arts</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/cyrus/cyrus-17.png" target = "_blank"> <div class = "numbertext">17 / 20</div> <img src = "images/gallery/cyrus/cyrus-17.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/_strenta_/">@_strenta_</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/cyrus/cyrus-18.png" target = "_blank"> <div class = "numbertext">18 / 20</div> <img src = "images/gallery/cyrus/cyrus-18.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "">@UNKNOWN ARTIST</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/cyrus/cyrus-19.png" target = "_blank"> <div class = "numbertext">19 / 20</div> <img src = "images/gallery/cyrus/cyrus-19.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/enikaffeine/">@enikaffeine</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/cyrus/cyrus-20.jpg" target = "_blank"> <div class = "numbertext">20 / 20</div> <img src = "images/gallery/cyrus/cyrus-20.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/sapphibits/">@sapphibits</a> </div> </div> <!-- Main Full-Size Images - END --> <!-- Image Thumbnails - START --> <div class = "row"> <div class = "art-thumbnail col-md-2 d-flex active"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-15-thmb.png" onclick = "currentSlide(1)" alt = "Cyrus Reference Art #1"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-16-thmb.png" onclick = "currentSlide(2)" alt = "Cyrus Reference Art #2"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-1-thmb.png" onclick = "currentSlide(3)" alt = "Cyrus Reference Art #3"> </div> <span class = "responsive-divider">&nbsp;</span> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-2-thmb.png" onclick = "currentSlide(4)" alt = "Cyrus Reference Art #4"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-3-thmb.png" onclick = "currentSlide(5)" alt = "Cyrus Reference Art #5"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-4-thmb.png" onclick = "currentSlide(6)" alt = "Cyrus Reference Art #6"> </div> </div> <div class = "row"> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-5-thmb.png" onclick = "currentSlide(7)" alt = "Cyrus Reference Art #7"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-6-thmb.png" onclick = "currentSlide(8)" alt = "Cyrus Reference Art #8"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-7-thmb.png" onclick = "currentSlide(9)" alt = "Cyrus Reference Art #9"> </div> <span class = "responsive-divider">&nbsp;</span> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-8-thmb.png" onclick = "currentSlide(10)" alt = "Cyrus Reference Art #10"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-9-thmb.png" onclick = "currentSlide(11)" alt = "Cyrus Reference Art #11"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-10-thmb.png" onclick = "currentSlide(12)" alt = "Cyrus Reference Art #12"> </div> </div> <div class = "row"> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-11-thmb.png" onclick = "currentSlide(13)" alt = "Cyrus Reference Art #13"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-12-thmb.png" onclick = "currentSlide(14)" alt = "Cyrus Reference Art #14"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-13-thmb.png" onclick = "currentSlide(15)" alt = "Cyrus Reference Art #15"> </div> <span class = "responsive-divider">&nbsp;</span> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-14-thmb.png" onclick = "currentSlide(16)" alt = "Cyrus Reference Art #16"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-17-thmb.png" onclick = "currentSlide(17)" alt = "Cyrus Reference Art #17"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-18-thmb.png" onclick = "currentSlide(18)" alt = "Cyrus Reference Art #18"> </div> </div> <div class = "row"> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-19-thmb.png" onclick = "currentSlide(19)" alt = "Cyrus Reference Art #19"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/cyrus/cyrus-20-thmb.png" onclick = "currentSlide(20)" alt = "Cyrus Reference Art #20"> </div> </div> <!-- Image Thumbnails - END -->'
                bioBox.style.display = "flex";
                collapseBackstory();

                // Window scroll for moving down to Bio Section on page
                window.scroll({
                    top: 500,
                    behavior: 'smooth'
                });
                break;
            // Elias' Character Bio
            case "#elias":
                // Where you insert Elias' Character Specific Bio Elements
                charImg.innerHTML = '<img class = "character-image" alt = "" src = "images/profiles/cyrus-profile.png">';
                charName.innerHTML = 'Elias Barnaby';
                charAge.innerHTML = '--';
                charHeight.innerHTML = '--';
                charFranchise.innerHTML = 'D&D';
                charRace.innerHTML = 'Human';
                charLikes.innerHTML = '--';
                charDislikes.innerHTML = '--';
                charPersonality.innerHTML = '--';
                charColors.innerHTML = '<span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br> <span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br>';
                charBackstory.innerHTML = '--';
                charGallery.innerHTML = '<!-- Main Full-Size Images - START --> <div class = "mySlides" style = "display: flex;"> <a href = "images/highres/elias/elias-1.png" target = "_blank"> <div class = "numbertext">1 / 1</div> <img src = "images/gallery/elias/elias-1.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <!-- Main Full-Size Images - END --> <!-- Image Thumbnails - START --> <div class = "row"> <div class = "art-thumbnail col-md-2 d-flex active"> <img class = "thumb-img" src = "images/thumbnails/elias/elias-1-thmb.png" onclick = "currentSlide(1)" alt = "elias Reference Art #1"> </div> </div> <!-- Image Thumbnails - END -->';
                bioBox.style.display = "flex";
                collapseBackstory();

                // Window scroll for moving down to Bio Section on page
                window.scroll({
                    top: 500,
                    behavior: 'smooth'
                });
                break;
            // Ferra's Character Bio
            case "#ferra":
                // Where you insert Ferra's Character Specific Bio Elements
                charImg.innerHTML = '<img class = "character-image" alt = "" src = "images/profiles/cyrus-profile.png">';
                charName.innerHTML = 'Ferra Loreborn';
                charAge.innerHTML = '--';
                charHeight.innerHTML = '--';
                charFranchise.innerHTML = 'D&D';
                charRace.innerHTML = 'Hill Dwarf';
                charLikes.innerHTML = '--';
                charDislikes.innerHTML = '--';
                charPersonality.innerHTML = '--';
                charColors.innerHTML = '<span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br> <span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br>';
                charBackstory.innerHTML = '--';
                charGallery.innerHTML = '<!-- Main Full-Size Images - START --> <div class = "mySlides" style = "display: flex;"> <a href = "images/highres/ferra/ferra-1.png" target = "_blank"> <div class = "numbertext">1 / 2</div> <img src = "images/gallery/ferra/ferra-1.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/ferra/ferra-2.png" target = "_blank"> <div class = "numbertext">2 / 2</div> <img src = "images/gallery/ferra/ferra-2.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <!-- Main Full-Size Images - END --> <!-- Image Thumbnails - START --> <div class = "row"> <div class = "art-thumbnail col-md-2 d-flex active"> <img class = "thumb-img" src = "images/thumbnails/ferra/ferra-1-thmb.png" onclick = "currentSlide(1)" alt = "ferra Reference Art #1"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/ferra/ferra-2-thmb.png" onclick = "currentSlide(2)" alt = "ferra Reference Art #2"> </div> </div> <!-- Image Thumbnails - END -->';
                bioBox.style.display = "flex";
                collapseBackstory();

                // Window scroll for moving down to Bio Section on page
                window.scroll({
                    top: 500,
                    behavior: 'smooth'
                });
                break;
            // Iris' Character Bio
            case "#iris":
                // Where you insert Iris' Character Specific Bio Elements
                charImg.innerHTML = '<img class = "character-image" alt = "" src = "images/profiles/cyrus-profile.png">';
                charName.innerHTML = 'Iris Shepard';
                charAge.innerHTML = '--';
                charHeight.innerHTML = '--';
                charFranchise.innerHTML = 'Mass Effect';
                charRace.innerHTML = 'Human';
                charLikes.innerHTML = '--';
                charDislikes.innerHTML = '--';
                charPersonality.innerHTML = '--';
                charColors.innerHTML = '<span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br> <span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br>';
                charBackstory.innerHTML = '--';
                charGallery.innerHTML = '<!-- Main Full-Size Images - START --> <div class = "mySlides" style = "display: flex;"> <a href = "images/highres/iris/iris-1.png" target = "_blank"> <div class = "numbertext">1 / 1</div> <img src = "images/gallery/iris/iris-1.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <!-- Main Full-Size Images - END --> <!-- Image Thumbnails - START --> <div class = "row"> <div class = "art-thumbnail col-md-2 d-flex active"> <img class = "thumb-img" src = "images/thumbnails/iris/iris-1-thmb.png" onclick = "currentSlide(1)" alt = "iris Reference Art #1"> </div> </div> <!-- Image Thumbnails - END -->';
                bioBox.style.display = "flex";
                collapseBackstory();

                // Window scroll for moving down to Bio Section on page
                window.scroll({
                    top: 500,
                    behavior: 'smooth'
                });
                break;
            // Sethris' Character Bio
            case "#sethris":
                // Where you insert Sethris' Character Specific Bio Elements
                charImg.innerHTML = '<img class = "character-image" alt = "" src = "images/profiles/cyrus-profile.png">';
                charName.innerHTML = 'Sethris';
                charAge.innerHTML = '--';
                charHeight.innerHTML = '--';
                charFranchise.innerHTML = 'D&D';
                charRace.innerHTML = 'Drow';
                charLikes.innerHTML = '--';
                charDislikes.innerHTML = '--';
                charPersonality.innerHTML = '--';
                charColors.innerHTML = '<span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br> <span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br>';
                charBackstory.innerHTML = '--';
                charGallery.innerHTML = '<!-- Main Full-Size Images - START --> <div class = "mySlides" style = "display: flex;"> <a href = "images/highres/sethris/sethris-1.png" target = "_blank"> <div class = "numbertext">1 / 11</div> <img src = "images/gallery/sethris/sethris-1.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/sethris/sethris-2.png" target = "_blank"> <div class = "numbertext">2 / 11</div> <img src = "images/gallery/sethris/sethris-2.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/sethris/sethris-3.jpg" target = "_blank"> <div class = "numbertext">3 / 11</div> <img src = "images/gallery/sethris/sethris-3.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/sethris/sethris-4.jpg" target = "_blank"> <div class = "numbertext">4 / 11</div> <img src = "images/gallery/sethris/sethris-4.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/sethris/sethris-5.jpg" target = "_blank"> <div class = "numbertext">5 / 11</div> <img src = "images/gallery/sethris/sethris-5.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/sethris/sethris-6.jpg" target = "_blank"> <div class = "numbertext">6 / 11</div> <img src = "images/gallery/sethris/sethris-6.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/sethris/sethris-7.jpg" target = "_blank"> <div class = "numbertext">7 / 11</div> <img src = "images/gallery/sethris/sethris-7.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/sethris/sethris-8.png" target = "_blank"> <div class = "numbertext">8 / 11</div> <img src = "images/gallery/sethris/sethris-8.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/sethris/sethris-9.png" target = "_blank"> <div class = "numbertext">9 / 11</div> <img src = "images/gallery/sethris/sethris-9.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/sethris/sethris-10.png" target = "_blank"> <div class = "numbertext">10 / 11</div> <img src = "images/gallery/sethris/sethris-10.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/sethris/sethris-11.jpg" target = "_blank"> <div class = "numbertext">11 / 11</div> <img src = "images/gallery/sethris/sethris-11.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <!-- Main Full-Size Images - END --> <!-- Image Thumbnails - START --> <div class = "row"> <div class = "art-thumbnail col-md-2 d-flex active"> <img class = "thumb-img" src = "images/thumbnails/sethris/sethris-1-thmb.png" onclick = "currentSlide(1)" alt = "sethris Reference Art #1"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/sethris/sethris-2-thmb.png" onclick = "currentSlide(2)" alt = "sethris Reference Art #2"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/sethris/sethris-3-thmb.png" onclick = "currentSlide(3)" alt = "sethris Reference Art #3"> </div> <span class = "responsive-divider">&nbsp;</span> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/sethris/sethris-4-thmb.png" onclick = "currentSlide(4)" alt = "sethris Reference Art #4"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/sethris/sethris-5-thmb.png" onclick = "currentSlide(5)" alt = "sethris Reference Art #5"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/sethris/sethris-6-thmb.png" onclick = "currentSlide(6)" alt = "sethris Reference Art #6"> </div> </div> <div class = "row"> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/sethris/sethris-7-thmb.png" onclick = "currentSlide(7)" alt = "sethris Reference Art #7"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/sethris/sethris-8-thmb.png" onclick = "currentSlide(8)" alt = "sethris Reference Art #8"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/sethris/sethris-9-thmb.png" onclick = "currentSlide(9)" alt = "sethris Reference Art #9"> </div> <span class = "responsive-divider">&nbsp;</span> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/sethris/sethris-10-thmb.png" onclick = "currentSlide(10)" alt = "sethris Reference Art #10"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/sethris/sethris-11-thmb.png" onclick = "currentSlide(11)" alt = "sethris Reference Art #11"> </div> </div> <!-- Image Thumbnails - END -->';
                bioBox.style.display = "flex";
                collapseBackstory();

                // Window scroll for moving down to Bio Section on page
                window.scroll({
                    top: 500,
                    behavior: 'smooth'
                });
                break;
            // Shaesa's Character Bio
            case "#shaesa":
                // Where you insert Shaesa's Character Specific Bio Elements
                charImg.innerHTML = '<img class = "character-image" alt = "" src = "images/profiles/cyrus-profile.png">';
                charName.innerHTML = 'Shaesa Tabris';
                charAge.innerHTML = '--';
                charHeight.innerHTML = '--';
                charFranchise.innerHTML = 'Dragon Age';
                charRace.innerHTML = 'Elf';
                charLikes.innerHTML = '--';
                charDislikes.innerHTML = '--';
                charPersonality.innerHTML = '--';
                charColors.innerHTML = '<span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br> <span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br>';
                charBackstory.innerHTML = '--';
                charGallery.innerHTML = '<!-- Main Full-Size Images - START --> <div class = "mySlides" style = "display: flex;"> <a href = "images/highres/shaesa/shaesa-1.png" target = "_blank"> <div class = "numbertext">1 / 3</div> <img src = "images/gallery/shaesa/shaesa-1.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/shaesa/shaesa-2.jpg" target = "_blank"> <div class = "numbertext">2 / 3</div> <img src = "images/gallery/shaesa/shaesa-2.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/shaesa/shaesa-3.png" target = "_blank"> <div class = "numbertext">3 / 3</div> <img src = "images/gallery/shaesa/shaesa-3.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <!-- Main Full-Size Images - END --> <!-- Image Thumbnails - START --> <div class = "row"> <div class = "art-thumbnail col-md-2 d-flex active"> <img class = "thumb-img" src = "images/thumbnails/shaesa/shaesa-1-thmb.png" onclick = "currentSlide(1)" alt = "shaesa Reference Art #1"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/shaesa/shaesa-2-thmb.png" onclick = "currentSlide(2)" alt = "shaesa Reference Art #2"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/shaesa/shaesa-3-thmb.png" onclick = "currentSlide(3)" alt = "shaesa Reference Art #3"> </div> </div> <!-- Image Thumbnails - END -->';
                bioBox.style.display = "flex";
                collapseBackstory();

                // Window scroll for moving down to Bio Section on page
                window.scroll({
                    top: 500,
                    behavior: 'smooth'
                });
                break;
            // Sunna's Character Bio
            case "#sunna":
                // Where you insert Sunna's Character Specific Bio Elements
                charImg.innerHTML = '<img class = "character-image" alt = "" src = "images/profiles/cyrus-profile.png">';
                charName.innerHTML = 'Sunna Lindesdotten';
                charAge.innerHTML = '30';
                charHeight.innerHTML = '6\'2"';
                charFranchise.innerHTML = 'Dragon Age';
                charRace.innerHTML = 'Avvar';
                charLikes.innerHTML = '--';
                charDislikes.innerHTML = '--';
                charPersonality.innerHTML = '--';
                charColors.innerHTML = '<span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br> <span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br>';
                charBackstory.innerHTML = '--';
                charGallery.innerHTML = '<!-- Main Full-Size Images - START --> <div class = "mySlides" style = "display: flex;"> <a href = "images/highres/sunna/sunna-1.png" target = "_blank"> <div class = "numbertext">1 / 1</div> <img src = "images/gallery/sunna/sunna-1.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <!-- Main Full-Size Images - END --> <!-- Image Thumbnails - START --> <div class = "row"> <div class = "art-thumbnail col-md-2 d-flex active"> <img class = "thumb-img" src = "images/thumbnails/sunna/sunna-1-thmb.png" onclick = "currentSlide(1)" alt = "sunna Reference Art #1"> </div> </div> <!-- Image Thumbnails - END -->';
                bioBox.style.display = "flex";
                collapseBackstory();

                // Window scroll for moving down to Bio Section on page
                window.scroll({
                    top: 500,
                    behavior: 'smooth'
                });
                break;
            // Talenna's Character Bio
            case "#talenna":
                // Where you insert Talenna's Character Specific Bio Elements
                charImg.innerHTML = '<img class = "character-image" alt = "" src = "images/profiles/cyrus-profile.png">';
                charName.innerHTML = 'Talenna Lavellan/Ethera';
                charAge.innerHTML = '31';
                charHeight.innerHTML = '5\'4"';
                charFranchise.innerHTML = 'Dragon Age';
                charRace.innerHTML = 'Elf';
                charLikes.innerHTML = '--';
                charDislikes.innerHTML = '--';
                charPersonality.innerHTML = '--';
                charColors.innerHTML = '<span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br> <span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br>';
                charBackstory.innerHTML = '--';
                charGallery.innerHTML = '<!-- Main Full-Size Images - START --> <div class = "mySlides" style = "display: flex;"> <a href = "images/highres/talenna/talenna-1.png" target = "_blank"> <div class = "numbertext">1 / 4</div> <img src = "images/gallery/talenna/talenna-1.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/talenna/talenna-2.png" target = "_blank"> <div class = "numbertext">2 / 4</div> <img src = "images/gallery/talenna/talenna-2.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/talenna/talenna-3.jpg" target = "_blank"> <div class = "numbertext">3 / 4</div> <img src = "images/gallery/talenna/talenna-3.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/talenna/talenna-4.png" target = "_blank"> <div class = "numbertext">4 / 4</div> <img src = "images/gallery/talenna/talenna-4.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <!-- Main Full-Size Images - END --> <!-- Image Thumbnails - START --> <div class = "row"> <div class = "art-thumbnail col-md-2 d-flex active"> <img class = "thumb-img" src = "images/thumbnails/talenna/talenna-1-thmb.png" onclick = "currentSlide(1)" alt = "talenna Reference Art #1"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/talenna/talenna-2-thmb.png" onclick = "currentSlide(2)" alt = "talenna Reference Art #2"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/talenna/talenna-3-thmb.png" onclick = "currentSlide(3)" alt = "talenna Reference Art #3"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/talenna/talenna-4-thmb.png" onclick = "currentSlide(4)" alt = "talenna Reference Art #4"> </div> </div> <!-- Image Thumbnails - END -->';
                bioBox.style.display = "flex";
                collapseBackstory();

                // Window scroll for moving down to Bio Section on page
                window.scroll({
                    top: 500,
                    behavior: 'smooth'
                });
                break;
            // Valere's Character Bio
            case "#valere":
                // Where you insert Valere's Character Specific Bio Elements
                charImg.innerHTML = '<img class = "character-image" alt = "" src = "images/profiles/cyrus-profile.png">';
                charName.innerHTML = 'Valere';
                charAge.innerHTML = '--';
                charHeight.innerHTML = '--';
                charFranchise.innerHTML = 'D&D';
                charRace.innerHTML = 'Human';
                charLikes.innerHTML = '--';
                charDislikes.innerHTML = '--';
                charPersonality.innerHTML = '--';
                charColors.innerHTML = '<span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br> <span class = "color-box" style = "background-color: tomato;">#FFFFFF</span> <span class = "color-box" style = "background-color: purple;">#FFFFFF</span> <span class = "color-box" style = "background-color: green;">#FFFFFF</span><br>';
                charBackstory.innerHTML = '--';
                charGallery.innerHTML = '<!-- Main Full-Size Images - START --> <div class = "mySlides" style = "display: flex;"> <a href = "images/highres/valere/valere-1.png" target = "_blank"> <div class = "numbertext">1 / 14</div> <img src = "images/gallery/valere/valere-1.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/valere/valere-2.png" target = "_blank"> <div class = "numbertext">2 / 14</div> <img src = "images/gallery/valere/valere-2.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/valere/valere-3.png" target = "_blank"> <div class = "numbertext">3 / 14</div> <img src = "images/gallery/valere/valere-3.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/valere/valere-4.png" target = "_blank"> <div class = "numbertext">4 / 14</div> <img src = "images/gallery/valere/valere-4.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/valere/valere-5.png" target = "_blank"> <div class = "numbertext">5 / 14</div> <img src = "images/gallery/valere/valere-5.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/valere/valere-7.png" target = "_blank"> <div class = "numbertext">6 / 14</div> <img src = "images/gallery/valere/valere-7.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/valere/valere-8.png" target = "_blank"> <div class = "numbertext">7 / 14</div> <img src = "images/gallery/valere/valere-8.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/valere/valere-9.png" target = "_blank"> <div class = "numbertext">8 / 14</div> <img src = "images/gallery/valere/valere-9.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/valere/valere-10.png" target = "_blank"> <div class = "numbertext">9 / 14</div> <img src = "images/gallery/valere/valere-10.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/valere/valere-11.jpg" target = "_blank"> <div class = "numbertext">10 / 14</div> <img src = "images/gallery/valere/valere-11.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/valere/valere-12.png" target = "_blank"> <div class = "numbertext">11 / 14</div> <img src = "images/gallery/valere/valere-12.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/valere/valere-13.png" target = "_blank"> <div class = "numbertext">12 / 14</div> <img src = "images/gallery/valere/valere-13.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/valere/valere-14.png" target = "_blank"> <div class = "numbertext">13 / 14</div> <img src = "images/gallery/valere/valere-14.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <div class = "mySlides"> <a href = "images/highres/valere/valere-15.jpg" target = "_blank"> <div class = "numbertext">14 / 14</div> <img src = "images/gallery/valere/valere-15.png"> </a> <div class = "artist-name"> Artist: <a target = "_blank" href = "https://www.instagram.com/exalted_dawn/">@exalted_dawn</a> </div> </div> <!-- Main Full-Size Images - END --> <!-- Image Thumbnails - START --> <div class = "row"> <div class = "art-thumbnail col-md-2 d-flex active"> <img class = "thumb-img" src = "images/thumbnails/valere/valere-1-thmb.png" onclick = "currentSlide(1)" alt = "valere Reference Art #1"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/valere/valere-2-thmb.png" onclick = "currentSlide(2)" alt = "valere Reference Art #2"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/valere/valere-3-thmb.png" onclick = "currentSlide(3)" alt = "valere Reference Art #3"> </div> <span class = "responsive-divider">&nbsp;</span> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/valere/valere-4-thmb.png" onclick = "currentSlide(4)" alt = "valere Reference Art #4"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/valere/valere-5-thmb.png" onclick = "currentSlide(5)" alt = "valere Reference Art #5"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/valere/valere-7-thmb.png" onclick = "currentSlide(6)" alt = "valere Reference Art #7"> </div> </div> <div class = "row"> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/valere/valere-8-thmb.png" onclick = "currentSlide(7)" alt = "valere Reference Art #8"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/valere/valere-9-thmb.png" onclick = "currentSlide(8)" alt = "valere Reference Art #9"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/valere/valere-10-thmb.png" onclick = "currentSlide(9)" alt = "valere Reference Art #10"> </div> <span class = "responsive-divider">&nbsp;</span> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/valere/valere-11-thmb.png" onclick = "currentSlide(10)" alt = "valere Reference Art #11"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/valere/valere-12-thmb.png" onclick = "currentSlide(11)" alt = "valere Reference Art #12"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/valere/valere-13-thmb.png" onclick = "currentSlide(12)" alt = "valere Reference Art #13"> </div> </div> <div class = "row"> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/valere/valere-14-thmb.png" onclick = "currentSlide(13)" alt = "valere Reference Art #14"> </div> <div class = "art-thumbnail col-md-2 d-flex"> <img class = "thumb-img" src = "images/thumbnails/valere/valere-15-thmb.png" onclick = "currentSlide(14)" alt = "valere Reference Art #15"> </div> </div> <!-- Image Thumbnails - END -->';
                bioBox.style.display = "flex";
                collapseBackstory();

                // Window scroll for moving down to Bio Section on page
                window.scroll({
                    top: 500,
                    behavior: 'smooth'
                });
                break;
            // Default Empty Bio
            default:
                document.getElementById('bioBox').style.display = "none";
        }
    }

    // Sets initial character, if a Hash exists in the URL
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
    allowTouchMove: false,
    paginationClickable: true,
    effect: 'slide',
    preloadImages: true,

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

// Function to expand/collapse Backstory Section
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

// Basic JS for Character Art Gallery
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
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("art-thumbnail");

    if (n > slides.length) 
    {
        slideIndex = 1
    }
    if (n < 1) 
    {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) 
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
}

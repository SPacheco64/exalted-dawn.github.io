# exalted-dawn.github.io
A Charcter Bio & Reference webpage commissioned by and built for the digital artist Exalted_Dawn.

Overview:
This is a website that showcases the original characters of the digital artist Exalted_Dawn, containing bio information and reference image galleries for use in other art projects.

Tech Used: 
- HTML5
- SCSS 
- Bootstrap 4 
- JavaScript 
- jQuery
- Animations

Project Requirements:
- The style of the site was made to match her pre-existing carrd.co commissions website, but in a cleaner fashion.
- Needed the functionality of providing people with specific links that would automatically populate the page with content related to a specific character. It was this requirement
that led to the use of anchor tags within the URL to change content on the fly.
- Needed a bio section giving basic information about each character.
- Needed an expandable/collapsible Backstory Section.
- Needed a Reference Image Gallery that would showcase art of each character, and would allow artists to pull high quality versions of said images for reference.

Site Breakdown:
- Character Carousel: A carousel containing images of each character included on the site. Upon click/tap, an anchor tag is added to the site URL which, through JS, displays
content relevant to that character.
- Character Bio Section: Information displayed about each character, which is swapped out on the fly depending on the anchor tag. JS checks the character name following the # in the URL
and populates each section with information stored about each specific character.
- Character Backstory Section: An expandable/collapsible section containing more detailed backstories for each character. The contents of this section are also changed through JS
based on the character name following the # in the URL.
- Reference Image Gallery: A section where art pieces of each character are displayed, with image thumbnails serving as the means in which users can cycle through the artwork.

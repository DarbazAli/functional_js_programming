

/* 
    Apply Functional Programming to Convert Strings to URL Slugs
*/

var globalTitle = " Winter Is Coming";


function urlSlug(title) {
    return title.trim().split(/\s+/).join("-").toLowerCase();
}

console.log(urlSlug(globalTitle))


globalTitle.toLowerCase()
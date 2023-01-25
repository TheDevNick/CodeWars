/* 
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet

-- taking in a string -- never empty -- always a string
-- returning a string -- only domain name

*/

function domainName(url) {
    // replace http://, https://, www. with a empty string
    // split the string by . 
    // return the first thing in the arr (should be the domain)
    url = url.replace("http://", "")
    url = url.replace("https://", "")
    url = url.replace("www.", "")
    return url.split('.')[0]

}

console.log(domainName("http://github.com/carbonfive/raygun"), 'github');
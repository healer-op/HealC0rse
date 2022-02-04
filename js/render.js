const params = new URLSearchParams(document.location.search);
var link = params.get("link");
link = encodeURIComponent(link.trim());
var key= "aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3R1dGVkdWRlNjk0";
var ls = `${atob(key)}/${link}`
var player = new Playerjs({id:"player", autoplay:"1", file:ls});
var temp = link;
temp=temp.replace(".mp4", "");
document.title = `HealCourse | ${temp}`;


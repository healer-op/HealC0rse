const params = new URLSearchParams(document.location.search);
var link = params.get("link");
link = encodeURIComponent(link.trim());
var ls = `https://storage.googleapis.com/tutedude694/${link}`
var player = new Playerjs({id:"player", autoplay:"1", file:ls});

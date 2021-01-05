var torrentid = `magnet:?xt=urn:btih:ACD885336B04E022E411364E03BDF3EF04EF3A14"&"dn=Soul`

function prepare(){
    var filename = "Test.ps1"
    var text = "peerflix " + torrentid + " --vlc"
    download(filename,text)
}
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }
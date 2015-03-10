// ui.js
// by Horse M.D.
//
// This file servers as a demonstration for using converter.js.

var search = document.querySelector("#converter");

var convertIds = function() {
    if(!search.value) {
        return;
    }    
    var text = search.value;
    
    if(SteamIDConverter.isSteamID64(text)) {
        updateFields(text, SteamIDConverter.toSteamID(text), SteamIDConverter.toSteamID3(text));
    }
    else if(SteamIDConverter.isSteamID(text)) {
        updateFields(SteamIDConverter.toSteamID64(text), text, SteamIDConverter.toSteamID3(text));
    }
    else if(SteamIDConverter.isSteamID3(text)) {
        updateFields(SteamIDConverter.toSteamID64(text), SteamIDConverter.toSteamID(text), text);
    }
    else {
        updateFields("?", "?", "?");
    }
};

var updateFields = function(id64, id, id3) {
    document.querySelector("#id64").innerHTML = "SteamID64: <span class=\"steamid\">" + id64 + "</span>";
    document.querySelector("#id2").innerHTML  = "SteamID: <span class=\"steamid\">"   + id   + "</span>";
    document.querySelector("#id3").innerHTML  = "SteamID3: <span class=\"steamid\">"  + id3  + "</span>";
    
    if(id === "?") {
        // <a href="#">?</a>
        document.querySelector("#profile_url").innerHTML = "Profile: <a class=\"steamid\" href=\"#\">?</a>";
    } else {
        // link to profile (with link visible)
        var url = SteamIDConverter.profileURL(id64);        
        document.querySelector("#profile_url").innerHTML = "Profile: <a class=\"steamid\" href=\"" + url + "\">" + url + "</a>";
    }
};

search.addEventListener("input", function(event) {
    convertIds();
});
window.addEventListener("load", function(event) {
    convertIds();
});

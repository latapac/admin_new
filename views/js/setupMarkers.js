var markers = [];
var selectedItem = "";

function locationObject(marker, id) {
    this.marker = marker;
    this.id = id;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function addMarker(locationObj, id_) {
    if(locationObj.Time.isOpen) {
        var iconName = locationObj.Category
    }
    else {
        var iconName = "closed" + locationObj.Category;
    }
    console.log(iconName);
    var marker = new google.maps.Marker({
        position: {
            lat: Number(locationObj.Location.lat),
            lng: Number(locationObj.Location.lng)
        },
        icon: 'images/markerIcons/' + iconName + '.png',
        map: map,
        id: id_,
        dataObj: locationObj
    });
    marker.addListener('click', function() {
        map.panTo(this.getPosition());
        console.log(markers);
        openDescWindowM(markers[this.id].dataObj._id);
    });
    return marker;
}

function clearMarkers(markerData) {
    for (var i = 0; i < markerData.length; i++) {
        markerData[i].setMap(null);
    }
}

function setCategories() {
    $.get("/getCategories/").done(function(data) {
        console.log(data);
        $("#categoryPickBarUL").html("");
        if(selectedItem != "") {
        var link = window.location.href;
        link = link.substring(link.lastIndexOf("/")+1, link.length);
        selectedItem = link;
        }
        var categoryItems = "";
        
        for(var i = 0; i < data.length; i++) {
            if(data[i] == selectedItem) {
                categoryItems += "<li onclick='selectCategory(this)' class='selectedCategory'>" + capitalizeFirstLetter(data[i]) + "</li>";
            }
            else {
                categoryItems += "<li onclick='selectCategory(this)'>" + capitalizeFirstLetter(data[i]) + "</li>";
            }
        }
        $("#categoryPickBarUL").html(categoryItems);
    });
}

function selectCategory(elem) {
    $('#categoryPickBarUL li').each(function(i, obj) {
        $(obj).removeClass("selectedCategory");
    });
    
    if(selectedItem != elem.innerHTML) {
        $(elem).addClass("selectedCategory");
        selectedItem = elem.innerHTML;
        
    }
    else {
        selectedItem = "";
    }
    setUpMarkers();
}

function updateMarkers(data) {
    $("#locationListing").html("");
        $("#resultCount").html(data.length.toString() + " Results");

        oldMarkers = markers;
        markers = [];
        var match;
        var locationsClosed = [];
        var locationsOpen = [];
        for (var i = 0; i < data.length; i++) {
            var locationObj = data[i];
            console.log(locationObj);
            match = false;
            for (var j = 0; j < oldMarkers.length; j++) {
                if (locationObj._id == oldMarkers[j].dataObj._id) {
                    oldMarkers[j].id = i; // Update ID in old markers to reflect that markers new ID, so it can be transferred to new marker array
                    markers.push(oldMarkers[j]);
                    oldMarkers.splice(j, 1);
                    match = true;
                    break;
                }
            }
            if (!match) {
                markers.push(addMarker(locationObj, i));
            }
            if(locationObj.Time.isOpen) locationsOpen.push(new locationObject(locationObj, i));
            else locationsClosed.push(new locationObject(locationObj, i));
        }
        for(var i = 0; i < locationsOpen.length; i++)
        {
            addToLocationList(locationsOpen[i].marker, locationsOpen[i].id);
        }
        for(var i = 0; i < locationsClosed.length; i++)
        {
            addToLocationList(locationsClosed[i].marker, locationsClosed[i].id);
        }
        clearMarkers(oldMarkers);
        setUpSliders('.swipeList');
}

function setUpMarkers() {
    var lat0 = map.getBounds().getSouthWest().lat();
    var lat1 = map.getBounds().getNorthEast().lat();
    var lng0 = map.getBounds().getSouthWest().lng();
    var lng1 = map.getBounds().getNorthEast().lng();

    if(selectCategory == "")
    {
        $.get("/fetchMarkers/" + lat0 + "/" + lat1 + "/" + lng0 + "/" + lng1).done(function(data) {
            updateMarkers(data);
        });
    }
    else {
        $.get("/fetchMarkers/" + lat0 + "/" + lat1 + "/" + lng0 + "/" + lng1  + "/" + selectedItem).done(function(data) {
            updateMarkers(data);
        });
    }
}
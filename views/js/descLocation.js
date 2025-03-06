function openDescWindowB(blockElement) {
    openDescWindowM(markers[blockElement.getAttribute('id')].id);
}

function openDescWindowM(locationID) {
    $.get("/fetchMarkerData/" + locationID).done(function(data) {
        console.log(data);
        $("#locationDescription").html(data);
        $("#locationDescription").css("display", "block");
        setUpSliders('.swipeDesc');
    });
}

function closeDescWindow() {
    $("#locationDescription").css("display", "none");
}
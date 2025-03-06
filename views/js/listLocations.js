/*
<div class="locationBlocks">
   <p class="blockID"></p>
   <div class="imgSlider">
      <div class="swiper-container" id="12903">
         <div class="swiper-wrapper" id="12903">
            <div class="swiper-slide"><img src="Image Link"></div>
            ..
            ..
         </div>
         <!-- Add Pagination -->
         <!--<div class="swiper-pagination"></div>
         <!-- Add Arrows -->
         <div class="swiper-button-next"></div>
         <div class="swiper-button-prev"></div>
      </div>
   </div>
   <div class="locationHeading">
      Name
   </div>       
</div>
*/
function addToLocationList(locationObj, id_) {
    var newLocationItem = '<div class="locationBlocks';
    if (locationObj.Time.isOpen == false) {
        newLocationItem += ' closedBlock';
    }
    newLocationItem += '"> \
                                    <p class="blockID"></p> \
                                    <div class="imgSlider"> \
                                        <div class="swiper-container swipeList"> \
                                            <div class="swiper-wrapper">';
    for (var j = 0; j < locationObj.Images.length; j++) {
        newLocationItem += '<div class="swiper-slide"><img src="' + locationObj.Images[j] + '"></div>';
    }
    newLocationItem += '</div> \
                                <div class="swiper-pagination"></div> \
                                <div class="swiper-button-next"></div> \
                                <div class="swiper-button-prev"></div> \
                             </div> \
                         </div> \
                         <div class="locationHeading" id="' + id_ + '"onclick="openDescWindowB(this)">' + locationObj.Name;
    if (locationObj.Time.isOpen == false) {
        newLocationItem += " - <span style='color: red'>Closed</span>";
    }

    newLocationItem += '</div>';
    //}
    $("#locationListing").append(newLocationItem);
}
var args = arguments[0] || {};

function getPhoto(e) {
	Ti.Media.openPhotoGallery({
		success : function(event) {
			if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				$.image_view_photo_game.setImage(event.media);
			}
		},
		cancel : function() {
			//While cancellation of the process
		},
		error : function(error) {
		 	// If any error occurs during the process
		},
		mediaTypes:[ Ti.Media.MEDIA_TYPE_PHOTO ]
	});
};

function closeScreen() {
	if (OS_IOS && Alloy.isTablet) {
    	$.popover.hide();
    } else{
    	$.container.close();
	}
}

function save(e) {
	var gameModel;
	
	if (args.data) {
		gameModel = args.data;
	} else {
		gameModel = Alloy.createModel("game");
	}
	
	var game = {
        name : $.text_field_name.value,
        image :$.image_view_photo_game.image,
        year_release : parseInt($.text_field_year_of_release.value)
    };
    
    var options =  {
		error: function (model, error) {
		    alert(error);
		},
		success: function () {
			Alloy.Collections.game.fetch();
			closeScreen();
		}
	};
	
	gameModel.save(game, options);
};

if (args.data) {
	populate();
}

function populate() {
	if (args.data) {
		$.image_view_photo_game.setImage(args.data.attributes.image);
		$.text_field_name.setValue(args.data.attributes.name);
		$.text_field_year_of_release.setValue(args.data.attributes.year_release);
		
		if (OS_IOS && Alloy.isTablet) {
			$.popover.setTitle(L("win_edit_title"));
		} else {
			$.container.setTitle(L("win_edit_title"));
		}
	}
}
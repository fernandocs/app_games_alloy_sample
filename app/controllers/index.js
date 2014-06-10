function add() {
	if (OS_IOS) {
		if (Alloy.isTablet) {
			var controller = Alloy.createController('add');
			controller.getView().show({view: $.add, animated: true});
		} else {
			var addWindow = Alloy.createController('add').getView();
			$.navGroup.openWindow(addWindow);
		}
	} else {
		Alloy.createController('add').getView().open();
	}
};
var rightNavButton = null;
if (OS_IOS) {
	if (Alloy.isTablet) {
		$.split_window.open({transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT});
		rightNavButton = $.navGroupSecond.getWindow().rightNavButton;
		$.navGroupSecond.getWindow().rightNavButton = null;
	} else {
		Alloy.Globals.navGroup = $.navGroup;
		Alloy.Globals.navGroup.open({transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT});	
	}
} else {
	$.win_index.open();
}

Alloy.Collections.game.fetch();
    
function transform (model) {
    var transform = model.toJSON();
    transform.name = transform.name;
    transform.image = transform.image;
    transform.year_release = transform.year_release;
    
    return transform;
};

function gameDetails(e) {
	var data = Alloy.Collections.game.get(e.itemId);
	var detailsController = Alloy.createController("details", {
		data: data
	});
	if (OS_IOS) {
		if (Alloy.isTablet) {
			$.details.label_select_game.hide();
			$.details.view_details.show();
			Alloy.Globals.currentGame = data;
			$.navGroupSecond.getWindow().rightNavButton = rightNavButton;
			$.details.image_view_photo_game.setImage(data.attributes.image);
			$.details.label_field_name.setText(L("name") + ": " + data.attributes.name);
			$.details.label_year_of_release.setText(L("year") + ": " +  data.attributes.year_release.toString());
		} else {
			$.navGroup.openWindow(detailsController.getView());
		}
	} else {
		detailsController.getView().open();
	}
};

function gameDelete(e) {
	var data = Alloy.Collections.game.get(e.itemId);
	data.destroy();
	Alloy.Collections.game.fetch();
};
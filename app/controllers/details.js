var args = arguments[0] || {};

function focus(e) {
	if (args.data) {
		args.data = Alloy.Collections.game.get(args.data.id);
		$.label_select_game.visible = false;
		$.view_details.visible = true;
		$.image_view_photo_game.setImage(args.data.attributes.image);
		$.label_field_name.setText(L("name") + ": " + args.data.attributes.name);
		$.label_year_of_release.setText(L("year") + ": " + args.data.attributes.year_release);
	} else {
		$.label_select_game.visible = true;
		$.view_details.visible = false;
	}
};

function clearScreen() {
	$.label_select_game.visible = true;
	$.view_details.visible = false;
	$.image_view_photo_game.setImage(null);
	$.label_field_name.setText("");
	$.label_year_of_release.setText("");
}

function deleteGame(e) {
	if (OS_IOS && Alloy.isTablet) {
		args.data = Alloy.Globals.currentGame;
	}
	if (args.data) {
		args.data.destroy();
		Alloy.Collections.game.fetch();
		if (OS_IOS && Alloy.isTablet) {
			clearScreen();
		} else {
			$.details.close();
		}
	}
};

function editGame(e) {
	if (OS_IOS) {
		if (Alloy.isTablet) {
			args.data = Alloy.Globals.currentGame;
			var controller = Alloy.createController('add', {data: args.data}); 
			var popover = controller.getView();
			popover.addEventListener("hide", focus);
			popover.show({view: $.edit_game, animated: true});
		} else {
			var addWindow = Alloy.createController('add', {data: args.data}).getView();
			Alloy.Globals.navGroup.openWindow(addWindow);
		}
	} else {
		Alloy.createController('add', {data: args.data}).getView().open();
	}
};

if (args.data) {
	$.label_select_game.visible = false;
	$.view_details.visible = true;
	$.image_view_photo_game.setImage(args.data.attributes.image);
	$.label_field_name.setText(L("name") + ": " + args.data.attributes.name);
	$.label_year_of_release.setText(L("year") + ": " + args.data.attributes.year_release);
} else {
	clearScreen();
}
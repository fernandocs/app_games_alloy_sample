function Controller() {
    function focus() {
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
    }
    function clearScreen() {
        $.label_select_game.visible = true;
        $.view_details.visible = false;
        $.image_view_photo_game.setImage(null);
        $.label_field_name.setText("");
        $.label_year_of_release.setText("");
    }
    function deleteGame() {
        true && Alloy.isTablet && (args.data = Alloy.Globals.currentGame);
        if (args.data) {
            args.data.destroy();
            Alloy.Collections.game.fetch();
            true && Alloy.isTablet ? clearScreen() : $.details.close();
        }
    }
    function editGame() {
        if (Alloy.isTablet) {
            args.data = Alloy.Globals.currentGame;
            var controller = Alloy.createController("add", {
                data: args.data
            });
            var popover = controller.getView();
            popover.addEventListener("hide", focus);
            popover.show({
                view: $.edit_game,
                animated: true
            });
        } else {
            var addWindow = Alloy.createController("add", {
                data: args.data
            }).getView();
            Alloy.Globals.navGroup.openWindow(addWindow);
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "details";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.details = Ti.UI.createWindow({
        backgroundColor: "white",
        titleid: "win_details",
        backButtonTitle: "",
        id: "details"
    });
    $.__views.details && $.addTopLevelView($.__views.details);
    focus ? $.__views.details.addEventListener("focus", focus) : __defers["$.__views.details!focus!focus"] = true;
    $.__views.rightNavBar = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        backgroundColor: "transparent",
        id: "rightNavBar"
    });
    $.__views.delete_game = Ti.UI.createButton({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        backgroundImage: "/images/trash.png",
        id: "delete_game"
    });
    $.__views.rightNavBar.add($.__views.delete_game);
    deleteGame ? $.__views.delete_game.addEventListener("click", deleteGame) : __defers["$.__views.delete_game!click!deleteGame"] = true;
    $.__views.edit_game = Ti.UI.createButton({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: 16,
        backgroundImage: "/images/edit.png",
        id: "edit_game"
    });
    $.__views.rightNavBar.add($.__views.edit_game);
    editGame ? $.__views.edit_game.addEventListener("click", editGame) : __defers["$.__views.edit_game!click!editGame"] = true;
    $.__views.details.rightNavButton = $.__views.rightNavBar;
    $.__views.label_select_game = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        top: "10dp",
        text: L("details_select_game"),
        id: "label_select_game"
    });
    $.__views.details.add($.__views.label_select_game);
    $.__views.view_details = Ti.UI.createView({
        top: "70dp",
        id: "view_details",
        layout: "vertical"
    });
    $.__views.details.add($.__views.view_details);
    $.__views.image_view_photo_game = Ti.UI.createImageView({
        image: "/images/img_default.png",
        width: "200dp",
        height: "200dp",
        borderRadius: "100dp",
        id: "image_view_photo_game"
    });
    $.__views.view_details.add($.__views.image_view_photo_game);
    $.__views.label_field_name = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        top: "10dp",
        id: "label_field_name"
    });
    $.__views.view_details.add($.__views.label_field_name);
    $.__views.label_year_of_release = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        top: "10dp",
        id: "label_year_of_release"
    });
    $.__views.view_details.add($.__views.label_year_of_release);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    if (args.data) {
        $.label_select_game.visible = false;
        $.view_details.visible = true;
        $.image_view_photo_game.setImage(args.data.attributes.image);
        $.label_field_name.setText(L("name") + ": " + args.data.attributes.name);
        $.label_year_of_release.setText(L("year") + ": " + args.data.attributes.year_release);
    } else clearScreen();
    __defers["$.__views.details!focus!focus"] && $.__views.details.addEventListener("focus", focus);
    __defers["$.__views.delete_game!click!deleteGame"] && $.__views.delete_game.addEventListener("click", deleteGame);
    __defers["$.__views.edit_game!click!editGame"] && $.__views.edit_game.addEventListener("click", editGame);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
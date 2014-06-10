function Controller() {
    function __alloyId10() {
        $.__views.details.removeEventListener("open", __alloyId10);
        if ($.__views.details.activity) $.__views.details.activity.onCreateOptionsMenu = function(e) {
            var __alloyId8 = {
                icon: "/images/ic_action_discard.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                id: "menu_item_delete"
            };
            $.__views.menu_item_delete = e.menu.add(_.pick(__alloyId8, Alloy.Android.menuItemCreateArgs));
            $.__views.menu_item_delete.applyProperties(_.omit(__alloyId8, Alloy.Android.menuItemCreateArgs));
            deleteGame ? $.__views.menu_item_delete.addEventListener("click", deleteGame) : __defers["$.__views.menu_item_delete!click!deleteGame"] = true;
            var __alloyId9 = {
                icon: "/images/ic_action_edit.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                id: "menu_item_edit"
            };
            $.__views.menu_item_edit = e.menu.add(_.pick(__alloyId9, Alloy.Android.menuItemCreateArgs));
            $.__views.menu_item_edit.applyProperties(_.omit(__alloyId9, Alloy.Android.menuItemCreateArgs));
            editGame ? $.__views.menu_item_edit.addEventListener("click", editGame) : __defers["$.__views.menu_item_edit!click!editGame"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
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
        if (args.data) {
            args.data.destroy();
            Alloy.Collections.game.fetch();
            $.details.close();
        }
    }
    function editGame() {
        Alloy.createController("add", {
            data: args.data
        }).getView().open();
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
    $.__views.details.addEventListener("open", __alloyId10);
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
    __defers["$.__views.menu_item_delete!click!deleteGame"] && $.__views.menu_item_delete.addEventListener("click", deleteGame);
    __defers["$.__views.menu_item_edit!click!editGame"] && $.__views.menu_item_edit.addEventListener("click", editGame);
    __defers["$.__views.delete_game!click!deleteGame"] && $.__views.delete_game.addEventListener("click", deleteGame);
    __defers["$.__views.edit_game!click!editGame"] && $.__views.edit_game.addEventListener("click", editGame);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
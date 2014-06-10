function Controller() {
    function __alloyId4() {
        $.__views.container.removeEventListener("open", __alloyId4);
        if ($.__views.container.activity) $.__views.container.activity.onCreateOptionsMenu = function(e) {
            var __alloyId3 = {
                icon: "/images/ic_action_save.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                id: "menu_item_save"
            };
            $.__views.menu_item_save = e.menu.add(_.pick(__alloyId3, Alloy.Android.menuItemCreateArgs));
            $.__views.menu_item_save.applyProperties(_.omit(__alloyId3, Alloy.Android.menuItemCreateArgs));
            save ? $.__views.menu_item_save.addEventListener("click", save) : __defers["$.__views.menu_item_save!click!save"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function getPhoto() {
        Ti.Media.openPhotoGallery({
            success: function(event) {
                event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO && $.image_view_photo_game.setImage(event.media);
            },
            cancel: function() {},
            error: function() {},
            mediaTypes: [ Ti.Media.MEDIA_TYPE_PHOTO ]
        });
    }
    function closeScreen() {
        $.container.close();
    }
    function save() {
        var gameModel;
        gameModel = args.data ? args.data : Alloy.createModel("game");
        var game = {
            name: $.text_field_name.value,
            image: $.image_view_photo_game.image,
            year_release: parseInt($.text_field_year_of_release.value)
        };
        var options = {
            error: function(model, error) {
                alert(error);
            },
            success: function() {
                Alloy.Collections.game.fetch();
                closeScreen();
            }
        };
        gameModel.save(game, options);
    }
    function populate() {
        if (args.data) {
            $.image_view_photo_game.setImage(args.data.attributes.image);
            $.text_field_name.setValue(args.data.attributes.name);
            $.text_field_year_of_release.setValue(args.data.attributes.year_release);
            $.container.setTitle(L("win_edit_title"));
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "add";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.container = Ti.UI.createWindow({
        backgroundColor: "white",
        title: L("win_add_title"),
        backButtonTitle: "",
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.container.addEventListener("open", __alloyId4);
    $.__views.__alloyId5 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId5"
    });
    $.__views.container.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: "composite",
        top: "16dp",
        left: "16dp",
        right: "16dp",
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.image_view_photo_game = Ti.UI.createImageView({
        backgroundImage: "/images/img_default.png",
        width: "200dp",
        height: "200dp",
        autorotate: true,
        id: "image_view_photo_game"
    });
    $.__views.__alloyId6.add($.__views.image_view_photo_game);
    getPhoto ? $.__views.image_view_photo_game.addEventListener("click", getPhoto) : __defers["$.__views.image_view_photo_game!click!getPhoto"] = true;
    $.__views.text_field_name = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: "16dp",
        left: "16dp",
        right: "16dp",
        color: "black",
        hintText: L("text_field_name"),
        id: "text_field_name"
    });
    $.__views.__alloyId5.add($.__views.text_field_name);
    $.__views.text_field_year_of_release = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: "16dp",
        left: "16dp",
        right: "16dp",
        color: "black",
        hintText: L("text_field_year_of_release"),
        keyboardType: Titanium.UI.KEYBOARD_NUMBER_PAD,
        id: "text_field_year_of_release"
    });
    $.__views.__alloyId5.add($.__views.text_field_year_of_release);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    args.data && populate();
    __defers["$.__views.save!click!save"] && $.__views.save.addEventListener("click", save);
    __defers["$.__views.image_view_photo_game!click!getPhoto"] && $.__views.image_view_photo_game.addEventListener("click", getPhoto);
    __defers["$.__views.menu_item_save!click!save"] && $.__views.menu_item_save.addEventListener("click", save);
    __defers["$.__views.image_view_photo_game!click!getPhoto"] && $.__views.image_view_photo_game.addEventListener("click", getPhoto);
    __defers["$.__views.image_view_photo_game!click!getPhoto"] && $.__views.image_view_photo_game.addEventListener("click", getPhoto);
    __defers["$.__views.save!click!save"] && $.__views.save.addEventListener("click", save);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
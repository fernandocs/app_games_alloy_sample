function Controller() {
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
        true && Alloy.isTablet ? $.popover.hide() : $.container.close();
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
            true && Alloy.isTablet ? $.popover.setTitle(L("win_edit_title")) : $.container.setTitle(L("win_edit_title"));
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
    if (true && !Alloy.isTablet) {
        $.__views.container = Ti.UI.createWindow({
            backgroundColor: "white",
            title: L("win_add_title"),
            backButtonTitle: "",
            id: "container"
        });
        $.__views.container && $.addTopLevelView($.__views.container);
        $.__views.save = Ti.UI.createButton(function() {
            var o = {};
            _.extend(o, {});
            Alloy.isHandheld && _.extend(o, {
                systemButton: Ti.UI.iPhone.SystemButton.SAVE
            });
            _.extend(o, {});
            Alloy.isTablet && _.extend(o, {
                top: "16dp",
                title: L("button_save")
            });
            _.extend(o, {
                id: "save"
            });
            return o;
        }());
        save ? $.__views.save.addEventListener("click", save) : __defers["$.__views.save!click!save"] = true;
        $.__views.container.rightNavButton = $.__views.save;
        $.__views.__alloyId1 = Ti.UI.createScrollView({
            layout: "vertical",
            id: "__alloyId1"
        });
        $.__views.container.add($.__views.__alloyId1);
        $.__views.__alloyId2 = Ti.UI.createView({
            width: Ti.UI.FILL,
            height: Ti.UI.SIZE,
            layout: "composite",
            top: "16dp",
            left: "16dp",
            right: "16dp",
            id: "__alloyId2"
        });
        $.__views.__alloyId1.add($.__views.__alloyId2);
        $.__views.image_view_photo_game = Ti.UI.createImageView(function() {
            var o = {};
            _.extend(o, {
                backgroundImage: "/images/img_default.png",
                width: "200dp",
                height: "200dp",
                autorotate: true,
                borderRadius: "100dp"
            });
            Alloy.isTablet && _.extend(o, {
                top: "16dp",
                left: "16dp"
            });
            _.extend(o, {
                id: "image_view_photo_game"
            });
            return o;
        }());
        $.__views.__alloyId2.add($.__views.image_view_photo_game);
        getPhoto ? $.__views.image_view_photo_game.addEventListener("click", getPhoto) : __defers["$.__views.image_view_photo_game!click!getPhoto"] = true;
        $.__views.text_field_name = Ti.UI.createTextField(function() {
            var o = {};
            _.extend(o, {
                borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                top: "16dp",
                left: "16dp",
                right: "16dp",
                color: "black"
            });
            Alloy.isTablet && _.extend(o, {
                width: 200,
                height: Ti.UI.SIZE
            });
            _.extend(o, {
                hintText: L("text_field_name"),
                id: "text_field_name"
            });
            return o;
        }());
        $.__views.__alloyId1.add($.__views.text_field_name);
        $.__views.text_field_year_of_release = Ti.UI.createTextField(function() {
            var o = {};
            _.extend(o, {
                borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                top: "16dp",
                left: "16dp",
                right: "16dp",
                color: "black"
            });
            Alloy.isTablet && _.extend(o, {
                width: 200,
                height: Ti.UI.SIZE
            });
            _.extend(o, {
                hintText: L("text_field_year_of_release"),
                keyboardType: Titanium.UI.KEYBOARD_NUMBER_PAD,
                id: "text_field_year_of_release"
            });
            return o;
        }());
        $.__views.__alloyId1.add($.__views.text_field_year_of_release);
    }
    if (true && Alloy.isTablet) {
        $.__views.popover = Ti.UI.iPad.createPopover({
            title: L("win_add_title"),
            width: "480dp",
            height: "300dp",
            id: "popover"
        });
        $.__views.popover && $.addTopLevelView($.__views.popover);
        if (true && Alloy.isTablet) {
            $.__views.view_popover_container = Ti.UI.createView({
                width: Ti.UI.FILL,
                height: Ti.UI.FILL,
                layout: "horizontal",
                top: 0,
                left: 0,
                right: 0,
                id: "view_popover_container"
            });
            $.__views.popover.add($.__views.view_popover_container);
            $.__views.image_view_photo_game = Ti.UI.createImageView(function() {
                var o = {};
                _.extend(o, {
                    backgroundImage: "/images/img_default.png",
                    width: "200dp",
                    height: "200dp",
                    autorotate: true,
                    borderRadius: "100dp"
                });
                Alloy.isTablet && _.extend(o, {
                    top: "16dp",
                    left: "16dp"
                });
                _.extend(o, {
                    id: "image_view_photo_game"
                });
                return o;
            }());
            $.__views.view_popover_container.add($.__views.image_view_photo_game);
            getPhoto ? $.__views.image_view_photo_game.addEventListener("click", getPhoto) : __defers["$.__views.image_view_photo_game!click!getPhoto"] = true;
            $.__views.__alloyId5 = Ti.UI.createView({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                layout: "vertical",
                top: "16dp",
                left: "16dp",
                right: "16dp",
                id: "__alloyId5"
            });
            $.__views.view_popover_container.add($.__views.__alloyId5);
            $.__views.text_field_name = Ti.UI.createTextField(function() {
                var o = {};
                _.extend(o, {
                    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
                    width: Ti.UI.FILL,
                    height: Ti.UI.SIZE,
                    top: "16dp",
                    left: "16dp",
                    right: "16dp",
                    color: "black"
                });
                Alloy.isTablet && _.extend(o, {
                    width: 200,
                    height: Ti.UI.SIZE
                });
                _.extend(o, {
                    hintText: L("text_field_name"),
                    id: "text_field_name"
                });
                return o;
            }());
            $.__views.__alloyId5.add($.__views.text_field_name);
            $.__views.text_field_year_of_release = Ti.UI.createTextField(function() {
                var o = {};
                _.extend(o, {
                    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
                    width: Ti.UI.FILL,
                    height: Ti.UI.SIZE,
                    top: "16dp",
                    left: "16dp",
                    right: "16dp",
                    color: "black"
                });
                Alloy.isTablet && _.extend(o, {
                    width: 200,
                    height: Ti.UI.SIZE
                });
                _.extend(o, {
                    hintText: L("text_field_year_of_release"),
                    keyboardType: Titanium.UI.KEYBOARD_NUMBER_PAD,
                    id: "text_field_year_of_release"
                });
                return o;
            }());
            $.__views.__alloyId5.add($.__views.text_field_year_of_release);
            $.__views.save = Ti.UI.createButton(function() {
                var o = {};
                _.extend(o, {});
                Alloy.isHandheld && _.extend(o, {
                    systemButton: Ti.UI.iPhone.SystemButton.SAVE
                });
                _.extend(o, {});
                Alloy.isTablet && _.extend(o, {
                    top: "16dp",
                    title: L("button_save")
                });
                _.extend(o, {
                    id: "save"
                });
                return o;
            }());
            $.__views.__alloyId5.add($.__views.save);
            save ? $.__views.save.addEventListener("click", save) : __defers["$.__views.save!click!save"] = true;
        }
    }
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    args.data && populate();
    __defers["$.__views.save!click!save"] && $.__views.save.addEventListener("click", save);
    __defers["$.__views.image_view_photo_game!click!getPhoto"] && $.__views.image_view_photo_game.addEventListener("click", getPhoto);
    __defers["$.__views.image_view_photo_game!click!getPhoto"] && $.__views.image_view_photo_game.addEventListener("click", getPhoto);
    __defers["$.__views.image_view_photo_game!click!getPhoto"] && $.__views.image_view_photo_game.addEventListener("click", getPhoto);
    __defers["$.__views.save!click!save"] && $.__views.save.addEventListener("click", save);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
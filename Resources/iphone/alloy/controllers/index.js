function Controller() {
    function __alloyId27(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId27.opts || {};
        var models = __alloyId26.models;
        var len = models.length;
        var __alloyId22 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId23 = models[i];
            __alloyId23.__transform = transform(__alloyId23);
            var __alloyId25 = {
                properties: {
                    width: Ti.UI.FILL,
                    height: Ti.UI.SIZE,
                    canEdit: true,
                    itemId: "undefined" != typeof __alloyId23.__transform["alloy_id"] ? __alloyId23.__transform["alloy_id"] : __alloyId23.get("alloy_id")
                },
                image: {
                    image: "undefined" != typeof __alloyId23.__transform["image"] ? __alloyId23.__transform["image"] : __alloyId23.get("image")
                },
                name: {
                    text: "undefined" != typeof __alloyId23.__transform["name"] ? __alloyId23.__transform["name"] : __alloyId23.get("name")
                },
                year: {
                    text: "undefined" != typeof __alloyId23.__transform["year_release"] ? __alloyId23.__transform["year_release"] : __alloyId23.get("year_release")
                }
            };
            __alloyId22.push(__alloyId25);
        }
        opts.animation ? $.__views.section.setItems(__alloyId22, opts.animation) : $.__views.section.setItems(__alloyId22);
    }
    function __alloyId48(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId48.opts || {};
        var models = __alloyId47.models;
        var len = models.length;
        var __alloyId43 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId44 = models[i];
            __alloyId44.__transform = transform(__alloyId44);
            var __alloyId46 = {
                properties: {
                    width: Ti.UI.FILL,
                    height: Ti.UI.SIZE,
                    canEdit: true,
                    itemId: "undefined" != typeof __alloyId44.__transform["alloy_id"] ? __alloyId44.__transform["alloy_id"] : __alloyId44.get("alloy_id")
                },
                image: {
                    image: "undefined" != typeof __alloyId44.__transform["image"] ? __alloyId44.__transform["image"] : __alloyId44.get("image")
                },
                name: {
                    text: "undefined" != typeof __alloyId44.__transform["name"] ? __alloyId44.__transform["name"] : __alloyId44.get("name")
                },
                year: {
                    text: "undefined" != typeof __alloyId44.__transform["year_release"] ? __alloyId44.__transform["year_release"] : __alloyId44.get("year_release")
                }
            };
            __alloyId43.push(__alloyId46);
        }
        opts.animation ? $.__views.section.setItems(__alloyId43, opts.animation) : $.__views.section.setItems(__alloyId43);
    }
    function __alloyId67(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId67.opts || {};
        var models = __alloyId66.models;
        var len = models.length;
        var __alloyId62 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId63 = models[i];
            __alloyId63.__transform = transform(__alloyId63);
            var __alloyId65 = {
                properties: {
                    width: Ti.UI.FILL,
                    height: Ti.UI.SIZE,
                    canEdit: true,
                    itemId: "undefined" != typeof __alloyId63.__transform["alloy_id"] ? __alloyId63.__transform["alloy_id"] : __alloyId63.get("alloy_id")
                },
                image: {
                    image: "undefined" != typeof __alloyId63.__transform["image"] ? __alloyId63.__transform["image"] : __alloyId63.get("image")
                },
                name: {
                    text: "undefined" != typeof __alloyId63.__transform["name"] ? __alloyId63.__transform["name"] : __alloyId63.get("name")
                },
                year: {
                    text: "undefined" != typeof __alloyId63.__transform["year_release"] ? __alloyId63.__transform["year_release"] : __alloyId63.get("year_release")
                }
            };
            __alloyId62.push(__alloyId65);
        }
        opts.animation ? $.__views.section.setItems(__alloyId62, opts.animation) : $.__views.section.setItems(__alloyId62);
    }
    function add() {
        if (Alloy.isTablet) {
            var controller = Alloy.createController("add");
            controller.getView().show({
                view: $.add,
                animated: true
            });
        } else {
            var addWindow = Alloy.createController("add").getView();
            $.navGroup.openWindow(addWindow);
        }
    }
    function transform(model) {
        var transform = model.toJSON();
        transform.name = transform.name;
        transform.image = transform.image;
        transform.year_release = transform.year_release;
        return transform;
    }
    function gameDetails(e) {
        var data = Alloy.Collections.game.get(e.itemId);
        var detailsController = Alloy.createController("details", {
            data: data
        });
        if (Alloy.isTablet) {
            $.details.label_select_game.hide();
            $.details.view_details.show();
            Alloy.Globals.currentGame = data;
            $.navGroupSecond.getWindow().rightNavButton = rightNavButton;
            $.details.image_view_photo_game.setImage(data.attributes.image);
            $.details.label_field_name.setText(L("name") + ": " + data.attributes.name);
            $.details.label_year_of_release.setText(L("year") + ": " + data.attributes.year_release.toString());
        } else $.navGroup.openWindow(detailsController.getView());
    }
    function gameDelete(e) {
        var data = Alloy.Collections.game.get(e.itemId);
        data.destroy();
        Alloy.Collections.game.fetch();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("game");
    if (true && Alloy.isTablet) {
        if (true && Alloy.isTablet) {
            $.__views.win_index = Ti.UI.createWindow({
                backgroundColor: "white",
                titleid: "win_heroes_title",
                exitOnClose: true,
                id: "win_index"
            });
            $.__views.add = Ti.UI.createButton({
                systemButton: Ti.UI.iPhone.SystemButton.ADD,
                id: "add"
            });
            add ? $.__views.add.addEventListener("click", add) : __defers["$.__views.add!click!add"] = true;
            $.__views.win_index.rightNavButton = $.__views.add;
            var __alloyId10 = {};
            var __alloyId12 = [];
            var __alloyId13 = {
                type: "Ti.UI.View",
                childTemplates: function() {
                    var __alloyId14 = [];
                    var __alloyId15 = {
                        type: "Ti.UI.ImageView",
                        bindId: "image",
                        properties: {
                            width: "40dp",
                            height: "40dp",
                            borderRadius: "20dp",
                            bindId: "image"
                        }
                    };
                    __alloyId14.push(__alloyId15);
                    var __alloyId17 = {
                        type: "Ti.UI.View",
                        childTemplates: function() {
                            var __alloyId18 = [];
                            var __alloyId19 = {
                                type: "Ti.UI.Label",
                                bindId: "name",
                                properties: {
                                    width: Ti.UI.SIZE,
                                    height: Ti.UI.SIZE,
                                    color: "black",
                                    text: L("label_title"),
                                    top: "2dp",
                                    left: "5dp",
                                    right: "5dp",
                                    font: {
                                        fontSize: "24dp"
                                    },
                                    bindId: "name"
                                }
                            };
                            __alloyId18.push(__alloyId19);
                            var __alloyId20 = {
                                type: "Ti.UI.Label",
                                bindId: "year",
                                properties: {
                                    width: Ti.UI.SIZE,
                                    height: Ti.UI.SIZE,
                                    color: "black",
                                    text: L("label_title"),
                                    font: {
                                        fontSize: "14dp"
                                    },
                                    left: "5dp",
                                    bindId: "year"
                                }
                            };
                            __alloyId18.push(__alloyId20);
                            return __alloyId18;
                        }(),
                        properties: {
                            layout: "vertical",
                            width: Ti.UI.SIZE,
                            height: Ti.UI.SIZE
                        }
                    };
                    __alloyId14.push(__alloyId17);
                    return __alloyId14;
                }(),
                properties: {
                    layout: "horizontal",
                    width: "95%",
                    height: Ti.UI.SIZE,
                    top: "10dp",
                    bottom: "10dp"
                }
            };
            __alloyId12.push(__alloyId13);
            var __alloyId21 = {
                type: "Ti.UI.ImageView",
                properties: {
                    width: Ti.UI.SIZE,
                    height: Ti.UI.SIZE,
                    image: "/images/ic_action_next_item.png",
                    right: "1dp"
                }
            };
            __alloyId12.push(__alloyId21);
            var __alloyId11 = {
                properties: {
                    name: "template"
                },
                childTemplates: __alloyId12
            };
            __alloyId10["template"] = __alloyId11;
            $.__views.section = Ti.UI.createListSection({
                id: "section"
            });
            var __alloyId26 = Alloy.Collections["game"] || game;
            __alloyId26.on("fetch destroy change add remove reset", __alloyId27);
            var __alloyId28 = [];
            __alloyId28.push($.__views.section);
            $.__views.list_view_games = Ti.UI.createListView({
                width: Ti.UI.FILL,
                height: Ti.UI.FILL,
                separatorInsets: {
                    left: 10,
                    right: 10
                },
                sections: __alloyId28,
                templates: __alloyId10,
                id: "list_view_games",
                defaultItemTemplate: "template"
            });
            $.__views.win_index.add($.__views.list_view_games);
            gameDetails ? $.__views.list_view_games.addEventListener("itemclick", gameDetails) : __defers["$.__views.list_view_games!itemclick!gameDetails"] = true;
            gameDelete ? $.__views.list_view_games.addEventListener("delete", gameDelete) : __defers["$.__views.list_view_games!delete!gameDelete"] = true;
            $.__views.navGroup = Ti.UI.iOS.createNavigationWindow({
                window: $.__views.win_index,
                id: "navGroup"
            });
        }
        if (true && Alloy.isTablet) {
            $.__views.details = Alloy.createController("details", {
                id: "details"
            });
            $.__views.navGroupSecond = Ti.UI.iOS.createNavigationWindow({
                window: $.__views.details.getViewEx({
                    recurse: true
                }),
                id: "navGroupSecond"
            });
        }
        $.__views.split_window = Ti.UI.iPad.createSplitWindow({
            backgroundColor: "white",
            showMasterInPortrait: true,
            masterView: $.__views.navGroup,
            detailView: $.__views.navGroupSecond,
            id: "split_window"
        });
        $.__views.split_window && $.addTopLevelView($.__views.split_window);
    }
    if (true && !Alloy.isTablet) {
        $.__views.win_index = Ti.UI.createWindow({
            backgroundColor: "white",
            titleid: "win_heroes_title",
            exitOnClose: true,
            id: "win_index"
        });
        $.__views.add = Ti.UI.createButton({
            systemButton: Ti.UI.iPhone.SystemButton.ADD,
            id: "add"
        });
        add ? $.__views.add.addEventListener("click", add) : __defers["$.__views.add!click!add"] = true;
        $.__views.win_index.rightNavButton = $.__views.add;
        var __alloyId31 = {};
        var __alloyId33 = [];
        var __alloyId34 = {
            type: "Ti.UI.View",
            childTemplates: function() {
                var __alloyId35 = [];
                var __alloyId36 = {
                    type: "Ti.UI.ImageView",
                    bindId: "image",
                    properties: {
                        width: "40dp",
                        height: "40dp",
                        borderRadius: "20dp",
                        bindId: "image"
                    }
                };
                __alloyId35.push(__alloyId36);
                var __alloyId38 = {
                    type: "Ti.UI.View",
                    childTemplates: function() {
                        var __alloyId39 = [];
                        var __alloyId40 = {
                            type: "Ti.UI.Label",
                            bindId: "name",
                            properties: {
                                width: Ti.UI.SIZE,
                                height: Ti.UI.SIZE,
                                color: "black",
                                text: L("label_title"),
                                top: "2dp",
                                left: "5dp",
                                right: "5dp",
                                font: {
                                    fontSize: "24dp"
                                },
                                bindId: "name"
                            }
                        };
                        __alloyId39.push(__alloyId40);
                        var __alloyId41 = {
                            type: "Ti.UI.Label",
                            bindId: "year",
                            properties: {
                                width: Ti.UI.SIZE,
                                height: Ti.UI.SIZE,
                                color: "black",
                                text: L("label_title"),
                                font: {
                                    fontSize: "14dp"
                                },
                                left: "5dp",
                                bindId: "year"
                            }
                        };
                        __alloyId39.push(__alloyId41);
                        return __alloyId39;
                    }(),
                    properties: {
                        layout: "vertical",
                        width: Ti.UI.SIZE,
                        height: Ti.UI.SIZE
                    }
                };
                __alloyId35.push(__alloyId38);
                return __alloyId35;
            }(),
            properties: {
                layout: "horizontal",
                width: "95%",
                height: Ti.UI.SIZE,
                top: "10dp",
                bottom: "10dp"
            }
        };
        __alloyId33.push(__alloyId34);
        var __alloyId42 = {
            type: "Ti.UI.ImageView",
            properties: {
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                image: "/images/ic_action_next_item.png",
                right: "1dp"
            }
        };
        __alloyId33.push(__alloyId42);
        var __alloyId32 = {
            properties: {
                name: "template"
            },
            childTemplates: __alloyId33
        };
        __alloyId31["template"] = __alloyId32;
        $.__views.section = Ti.UI.createListSection({
            id: "section"
        });
        var __alloyId47 = Alloy.Collections["game"] || game;
        __alloyId47.on("fetch destroy change add remove reset", __alloyId48);
        var __alloyId49 = [];
        __alloyId49.push($.__views.section);
        $.__views.list_view_games = Ti.UI.createListView({
            width: Ti.UI.FILL,
            height: Ti.UI.FILL,
            separatorInsets: {
                left: 10,
                right: 10
            },
            sections: __alloyId49,
            templates: __alloyId31,
            id: "list_view_games",
            defaultItemTemplate: "template"
        });
        $.__views.win_index.add($.__views.list_view_games);
        gameDetails ? $.__views.list_view_games.addEventListener("itemclick", gameDetails) : __defers["$.__views.list_view_games!itemclick!gameDetails"] = true;
        gameDelete ? $.__views.list_view_games.addEventListener("delete", gameDelete) : __defers["$.__views.list_view_games!delete!gameDelete"] = true;
        $.__views.navGroup = Ti.UI.iOS.createNavigationWindow({
            window: $.__views.win_index,
            id: "navGroup"
        });
        $.__views.navGroup && $.addTopLevelView($.__views.navGroup);
    }
    var __alloyId66;
    exports.destroy = function() {
        __alloyId26.off("fetch destroy change add remove reset", __alloyId27);
        __alloyId47.off("fetch destroy change add remove reset", __alloyId48);
        __alloyId66.off("fetch destroy change add remove reset", __alloyId67);
    };
    _.extend($, $.__views);
    var rightNavButton = null;
    if (Alloy.isTablet) {
        $.split_window.open({
            transition: Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT
        });
        rightNavButton = $.navGroupSecond.getWindow().rightNavButton;
        $.navGroupSecond.getWindow().rightNavButton = null;
    } else {
        Alloy.Globals.navGroup = $.navGroup;
        Alloy.Globals.navGroup.open({
            transition: Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT
        });
    }
    Alloy.Collections.game.fetch();
    __defers["$.__views.add!click!add"] && $.__views.add.addEventListener("click", add);
    __defers["$.__views.list_view_games!itemclick!gameDetails"] && $.__views.list_view_games.addEventListener("itemclick", gameDetails);
    __defers["$.__views.list_view_games!delete!gameDelete"] && $.__views.list_view_games.addEventListener("delete", gameDelete);
    __defers["$.__views.add!click!add"] && $.__views.add.addEventListener("click", add);
    __defers["$.__views.list_view_games!itemclick!gameDetails"] && $.__views.list_view_games.addEventListener("itemclick", gameDetails);
    __defers["$.__views.list_view_games!delete!gameDelete"] && $.__views.list_view_games.addEventListener("delete", gameDelete);
    __defers["$.__views.list_view_games!itemclick!gameDetails"] && $.__views.list_view_games.addEventListener("itemclick", gameDetails);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
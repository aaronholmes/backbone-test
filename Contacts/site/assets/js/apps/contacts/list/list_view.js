ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _){
	List.Contact = Marionette.ItemView.extend({
		tagName: "tr",
		template: "#contact-list-item",

		events: {
			"click": "hightlightName",
			"click button.js-delete": "deleteClicked"
		},

		hightlightName: function(e){
			e.preventDefault();
			this.$el.toggleClass("warning");
		},

		deleteClicked: function(e){
			e.stopPropagation();
			this.trigger("contact:delete", this.model);
		},

		remove: function(){
			this.$el.fadeOut();
		}
	});

	List.Contacts = Marionette.CompositeView.extend({
		tagName: "table",
		className: "table table-hover",
		template: "#contact-list",
		itemView: List.Contact,
		itemViewContainer: "tbody"
	});
});
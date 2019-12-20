$('document').ready(function(){
		
        var Software  = Backbone.Model.extend({
                defaults: {
                        serial_no : 0,
                       db_id: null,
                       icon : "http://localhost/laravel/laravel/public/client/images/icon.png",
                       name: "Sample App Name ",
                       version: "12.3",
                       platform: "1",
                       platform_name: "Android",
                       description: "This is description.This is description.This is description.This is description.This is description.This is description. This is description.",
                       download_link: "http://localhost/laravel/laravel/public/client/upload/upload.pdf",
                       categories: [1,2,3],
                       categories_name: ['social','media','sport'],
                       created_date: '10-10-2019',
                       modified_date: '12-12-2019'
                },
                update_mc_type: function(value){
                       console.log("update_mc_type "+value);
                       this.set({mc_type:value});
                 }
        });
        var SoftwareThumbView = Backbone.View.extend({
          className : "col-lg-4 col-md-6 my_card",
           events: {
             'click .edit':'edit',
             'click .delete':'delete'
           },
           template: _.template( $('#software_thumbnail_view').html() ),
           initialize: function() {
             this.listenTo(this.model, 'destroy', this.remove),
             this.listenTo(this.model, 'change', this.render)
           },
           render: function() {
             var modelData = this.model.toJSON();
             this.$el.html( this.template(modelData) );
             return this;
           },
           delete: function() {
             this.model.destroy();
             save();
           },
           edit: function() {
                   
           }
        });
        var SoftwareList = Backbone.Collection.extend({
                url: '#',
                model: Software
        });
        var Softwares = new SoftwareList();  
        var software = new Software();
        var view = new SoftwareThumbView({ model: software });
        // $('#render_row').empty().append( view.render().el );
        // $('#render_row').append( view.render().el );
         $('#render_row').append( view.render().el );

         
        var software_data = new Software({"db_id":2,"mc_type":2,"mc":12,"rank":3,"name":"hello","unit":"ခလရ (၇၃) ဇရပ္ၾကီး","academy":"2","intake":"17"});
        var software_view = new SoftwareThumbView({ model: software_data });
        $('#render_row').prepend( software_view.render().el );
        
});
	
       
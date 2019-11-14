(function() {
  App.cable = ActionCable.createConsumer("/cable");

  App.web_notifications = App.cable.subscriptions.create("WebNotificationsChannel", {
    connected: function() {},
    disconnected: function() {},
    received: function(data) {
      return Notificar2(data);
    }
  });

}).call(this);

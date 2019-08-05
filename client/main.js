import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { MyCollection } from "/imports/MyCollection";
import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);

  Meteor.subscribe("irrelevantfields");
  Meteor.subscribe("mycollection", "mycol1");
});

Template.hello.helpers({
  mycol() {
    return JSON.stringify(MyCollection.findOne({ _id: "mycol1" }), null, 2);
  },
});

Template.hello.events({
  'click #new'(event, instance) {
    // increment the counter when button is clicked
    Meteor.call("addfield", "mycol1", "greeting", "hello");
  },
  'click #existing'(event, instance) {
    // increment the counter when button is clicked
    Meteor.call("addfield", "mycol1", "name", "hello" + Math.floor(Math.random() * 100000));
  },
});

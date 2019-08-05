import { Meteor } from 'meteor/meteor';
import { MyCollection } from "/imports/MyCollection";

Meteor.publish("mycollection", function (_id) {
  return MyCollection.find({ _id });
});

Meteor.publish("irrelevantfields", function () {
  return MyCollection.find({}, {
    fields: {
      irrelevant1: 1,
      irrelevant2: 1,
      irrelevant3: 1,
    }
  });
});



Meteor.methods({
  "addfield" (_id, key, value) {
    console.log(_id, key, value);
    const doc = MyCollection.findOne(_id);
    doc[key] = value;
    doc.save();
  }
})

Meteor.startup(() => {
  MyCollection.remove({});
  MyCollection.insert({
    _id: "mycol1",
    name: "col1",
    irrelevant1: "wowowow1",
    irrelevant2: "wowowow2",
    irrelevant3: "wowowow3",
  });
  
  const doc = MyCollection.findOne({ _id: "mycol1" });
  doc.irrelevant1 = "wow1";
  doc.save();
});

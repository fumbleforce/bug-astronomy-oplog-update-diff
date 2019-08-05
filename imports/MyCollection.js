import { Mongo } from "meteor/mongo";
import { Class } from "meteor/jagi:astronomy";

export const MyCollection = Class.create({
  name: "MyCollection",
  collection: new Mongo.Collection("MyCollection"),

  fields: {
    name: {
      type: String,
    },

    greeting: {
      type: String,
      optional: true,
    },

    irrelevant1: {
      type: String,
      optional: true,
    },

    irrelevant2: {
      type: String,
      optional: true,
    },

    irrelevant3: {
      type: String,
      optional: true,
    },
  },

  behaviors: ["timestamp"]
});


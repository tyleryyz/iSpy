import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

SimpleSchema.debug = true

export const Camera = new Mongo.Collection('camera')

Camera.allow({
  insert: () => true,
  update: () => true,
  remove: () => true,
})

Camera.schema = new SimpleSchema({
  url: {
    type: String,
    optional: false,
  },
  title: {
    type: String,
    optional: false,
  },
  home: {
    type: Boolean,
    optional: false,
    defaultValue: false,
  },
  misc: {
    type: Boolean,
    optional: false,
    defaultValue: false,
  },
  weather: {
    type: Boolean,
    optional: false,
    defaultValue: false,
  },
  favorite: {
    type: Boolean,
    optional: false,
    defaultValue: false,
  },
  userID: {
    type: String,
    optional: false,
    autoValue: function() {
      return this.userId
    }
  }
})

Camera.attachSchema(Camera.schema)

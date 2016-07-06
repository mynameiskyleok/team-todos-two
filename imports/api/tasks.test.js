
import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';

import { Tasks } from './tasks.js';

if (Meteor.isServer) {
  describe('Tasks', () => {
    describe('methods', () => {
      const userId = Random.id();
      let taskId;

      beforeEach(() => {
        Tasks.remove({});
        taskId = Tasks.insert({
          text: 'test',
          createdAt: new Date(),
          owner: userId,
          username: 'cowfipps'
        });
      });

      it('can delete owned task', () =>{
        // Isolated task method find
        const deleteTask = Meteor.server.method_handlers['tasks.remove'];

        // Isolated method invocation setup
        const invocation = {
          userId
        };

        // Run isolated task with.
        deleteTask.apply(invocation, [taskId]);

        assert.equal(Tasks.find().count(), 0);

      });
    });
  });
}

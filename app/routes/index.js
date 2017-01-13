import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findALL('question');
  },

  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },

    destroyRental(question) {
      question.destroyRecord();
      this.transitionTo('index');
    }
  }
});

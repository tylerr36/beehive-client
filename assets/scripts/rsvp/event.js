'use strict'

const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onCreateRsvp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createRsvp(formData)
    .then(ui.onCreateRsvpSuccess)
    .catch(ui.onCreateRsvpFailure)
}

const onIndexRsvp = function (event) {
  event.preventDefault()
  api.indexRsvp()
    .then(ui.onIndexRsvpSuccess)
    .catch(ui.onIndexRsvpFailure)
}

const onDeleteRsvp = function (event) {
  event.preventDefault()
  const id = $('#destroy-rsvp').val()
  store.rsvp_id = id
  api.deleteRsvp(id)
    .then(ui.onDeleteRsvpSuccess)
    .catch(ui.onDeleteRsvpFailure)
}

module.exports = {
  onCreateRsvp,
  onIndexRsvp,
  onDeleteRsvp
}

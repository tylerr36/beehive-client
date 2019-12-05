'use strict'

const config = require('../config')
const store = require('../store')

const createRsvp = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/rsvps',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const indexRsvp = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/rsvps/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteRsvp = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + `/rsvps/${id}`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createRsvp,
  indexRsvp,
  deleteRsvp
}

var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
  it ('should exist', () => {
    expect(Clock).toExist();
  });

  describe('format seconds', () => {
    it ('it should format seconds', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 650;
      var expected = '10:50';
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it ('it should format seconds when min/sec are < 10', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 61;
      var expected = '01:01';
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
  });
});

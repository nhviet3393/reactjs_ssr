/**
 * Created by BUOfPeThui on 12/11/2017.
 */
// document.write('Hello I am ReactJS SSR');
// var hello = require('./components/hello');
//
// hello();

var React = require('react');
var ReactDom = require('react-dom');

var List = require('./components/List.jsx');

ReactDom.render(
    <List/>,
    document.getElementById('root')
);
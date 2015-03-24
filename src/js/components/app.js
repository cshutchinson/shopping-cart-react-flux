/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router-component');

var Locations = Router.Locations;
var Location = Router.Location;

var APP =
    React.createClass({
        render:function(){
            return (
                <Template>
                    <Locations>
                        /*
                        <Location path="/" handler={Catalog} />
                        <Location path="/cart" handler={Cart} />
                        <Location path="/item/:item" handler={CatalogDetail} />
                        */
                    </Locations>
                </Template>
            )
        }
    });

module.exports = APP;
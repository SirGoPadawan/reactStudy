import React from "react";
import ReactDOM from "react-dom"; 
import createReactClass from 'create-react-class';
import './css/style.css';

let ImageCount = function(props) {
    return (
        <div className="img-box">
            <p className="count">{props.count}</p>
            <img src={props.imgUrl} className="box-item" onClick={props.onCount}/>
        </div>
    );
}

let Block = createReactClass({
    getInitialState() {
        return {
            count: 0
        }
    },
    clickUpCount() {
        this.setState({ count: this.state.count + 1})
       },
    render() {
        return (<div className='item'>
        <ImageCount imgUrl={this.props.imgUrl} count={this.state.count} onCount={this.clickUpCount}/>
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
    </div>)
    }
})

let App = createReactClass({
    render() {
        return (
            <div className="block">
                {this.props.datas.map(function (data) {
                 return <Block key={data.id} imgUrl={data.imgUrl} title={data.title} subtitle={data.subtitle}/>
                })}               
            </div>
        );
    }
})

let data = [
    {
        id: 1,
        imgUrl: "./static/react.svg",
        title: 'React',
        subtitle: "React - библиотека JS для создания пользовательских элементов"
    }
    ,
    {
        id: 2,
        imgUrl: "./static/angular.svg",
        title: 'Angular',
        subtitle: " JavaScript-фреймворк с открытым исходным кодом."
    }

]

ReactDOM.render(<App datas={data}/>, document.getElementById("root"))  
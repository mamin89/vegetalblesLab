const React = require('react');

class Index extends React.Component {
    render() {
        const { fruits } = this.props;
        return (
            <div>
                <h1>Fruits Index Page</h1>
                <ul>
                    {fruits.map((fruit, i) => {
                        return (
                            <li key={i}>
                                The{' '}
                                <a style={{ color: "red" }} href={`/fruits/${i}`}>
                                    {fruit.name}
                                </a>{' '}
                                is {fruit.color} <br></br>
                                {fruit.readyToEat
                                    ? `It is ready to eat`
                                    : `It is not ready to eat`}
                                <br />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }

    render() {
        const { vegetables } = this.props;
        return (
            <div>
                <h1>Vegetables Index Page</h1>
                <ul>
                    {vegetables.map((vegetables, i) => {
                        return (
                            <li key={i}>
                                The{' '}
                                <a style={{ color: "blue" }} href={`/vegetables/${i}`}>
                                    {vegetables.name}
                                </a>{' '}
                                is {vegetables.color} <br></br>
                                {vegetables.readyToEat
                                    ? `It is ready to eat`
                                    : `It is not ready to eat`}
                                <br />
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}

module.exports = Index;
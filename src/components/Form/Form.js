import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userSurname: '',
            userAge: 0,
            isSubscribe: false,
            textMSg: '',
            submitForm: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value, checked } = event.target;
        const currentValue = name === 'isSubscribe' ? checked : value;
        this.setState({ [name]: currentValue, submitForm: false });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            submitForm: true
        })
    }

    render() {
        const send= JSON.stringify(this.state);

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> User name <br/>
                        <input name="userName" type="text" value={this.state.userName} onChange={this.handleChange} />
                    </label>
                    <label> User surname <br/>
                        <input name="userSurname" type="text"  value={this.state.userSurname} onChange={this.handleChange} />
                    </label>
                    <label> User age <br/>
                        <input name="userAge" type="number"  value={this.state.userAge} onChange={this.handleChange} />
                    </label>
                    <label> Checkbox <br/>
                        <input name="isSubscribe" type="checkbox" value={this.state.isSubscribe} onChange={this.handleChange}/>
                    </label>
                    <textarea name="textMSg" value={this.state.textMSg} onChange={this.handleChange} />
                    <button>Submit form</button>
                </form>
                {this.state.submitForm && 
                    <div>
                        {send}
                    </div>
                }
            </div>
        )
    }
}
export default Form;
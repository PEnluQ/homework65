import React, {Component, Fragment} from 'react';
import axiosP from '../../axios';
import {Button, Form, FormGroup, Input} from "reactstrap";

class MainPage extends Component {
    state = {
        name: '',
        title: '',
        content: '',
    };

    componentDidMount = async () => {
        const response = await axiosP.get('pages.json');
        this.setState({pages: Object.keys(response.data)});
    };

    getContent = async (id) => {
        const info = await axiosP.get('content/' + id + '.json');
        const response = info.data;
        this.setState({title: response.title, content: response.content});
    };

    submitContent = async (event) => {
        event.preventDefault();

        if(this.state.name){
            let content = {
                title: this.state.title,
                content: this.state.content,
            };

            await axiosP.put('pages/' + this.state.name + '.json', content);
        }
    };

    changeContent = event => (this.setState({[event.target.name]: event.target.value}));

    render() {
        return (
            <Fragment>
                <Form onSubmit={this.submitContent}>
                    <FormGroup>
                        <Input type="text"
                               name="title"
                               id="title"
                               value={this.state.title}
                               onChange={this.changeContent}/>
                    </FormGroup>
                    <FormGroup>
                            <Input type="select"
                                   name='name'
                                   onChange={this.changeContent}>
                            </Input>description
                    </FormGroup>
                    <FormGroup>
                        <Input type="textarea"
                               name="content"
                               id="text"
                               value={this.state.content}
                               onChange={this.changeContent}/>
                    </FormGroup>
                    <Button>Save</Button>
                </Form>
            </Fragment>
        );
    }
}

export default MainPage;
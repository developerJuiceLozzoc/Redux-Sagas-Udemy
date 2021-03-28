import React,{Component} from "react"
import {Button, Form,FormGroup,Label,Input} from "reactstrap"

class NewUserForm extends Component {
  state = {
    firstName: "",
    lastName: "",
  }

  handleSubmit(e){
    e.preventDefault()

    this.props.onSubmit({
      firstName: this.state.firstName,
      lastName: this.state.lastName
    })
    this.setState({
      firstName: "",
      lastName: ""
    })
  }
  handleFirstNameChange(e){
    this.setState({
      firstName: e.target.value
    })
  }
  handleLastNameChange(e){
    this.setState({
      lastName: e.target.value
    })
  }
  render(){
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <FormGroup>
          <Label>
            First Name
          </Label>
          <Input value={this.state.firstName}
            required placeholder="first name"
            onChange={this.handleFirstNameChange.bind(this)} />
        </FormGroup>
        <FormGroup>
          <Label>
            Last Name
          </Label>
          <Input value={this.state.lastName}
            required placeholder="last name"
            onChange={this.handleLastNameChange.bind(this)} />
        </FormGroup>
        <FormGroup>
        <Button block outline
          type="submit" color="primary"> Create </Button>
        </FormGroup>
      </Form>
    )
  }
}


export default NewUserForm

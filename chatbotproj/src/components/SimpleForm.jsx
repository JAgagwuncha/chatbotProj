import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      gender: "",
      age: "",
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, gender, age } = steps;

    this.setState({ name, gender, age });
  }

  render() {
    const { name, gender, age } = this.state;
    return (
      <div style={{ width: "100%" }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{gender.value}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{age.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class SimpleForm extends Component {
  render() {
    return (
      <ChatBot
        steps={[
          {
            id: "first",
            message: "Do you consent to taking this questionnaire?",
            trigger: "consent",
          },
          {
            id: "consent",
            options: [
              { value: "yes", label: "Yes", trigger: "1" },
              { value: "no", label: "No", trigger: "end-message" },
            ],
          },
          {
            id: "1",
            message: "Please enter a random username",
            trigger: "name",
          },
          {
            id: "name",
            user: true,
            trigger: "3",
          },
          {
            id: "3",
            message: "Hi {previousValue}! What is your gender?",
            trigger: "gender",
          },
          {
            id: "gender",
            options: [
              { value: "male", label: "Male", trigger: "5" },
              { value: "female", label: "Female", trigger: "5" },
              { value: "nonbinary", label: "Non-Binary", trigger: "5" },
              { value: "other", label: "Other", trigger: "5" },
            ],
          },
          {
            id: "5",
            message: "How old are you?",
            trigger: "age",
          },
          {
            id: "age",
            user: true,
            trigger: "7",
            validator: (value) => {
              if (isNaN(value)) {
                return "value must be a number";
              } else if (value < 0) {
                return "value must be positive";
              } else if (value > 120) {
                return `${value}? Come on!`;
              }

              return true;
            },
          },
          {
            id: "7",
            message: "What is your nationality?",
            trigger: "nationality",
          },
          {
            id: "nationality",
            user: true,
            trigger: "8",
          },
          {
            id: "8",
            message: "What is your occupation/course of study?",
            trigger: "current",
          },
          {
            id: "current",
            user: true,
            trigger: "current2",
          },
          {
            id: "current2",
            message: "Do you enjoy your job/studies?",
            trigger: "enjoy",
          },
          {
            id: "enjoy",
            options: [
              { value: "yes", label: "Yes", trigger: "current3" },
              { value: "no", label: "No", trigger: "current3" },
            ],
          },
          {
            id: "current3",
            message: "Please explain your answer",
            trigger: "current4",
          },
          {
            id: "current4",
            user: true,
            trigger: "9",
          },
          {
            id: "9",
            message: "What is your home postcode?",
            trigger: "postcode",
          },
          {
            id: "postcode",
            user: true,
            trigger: "home2",
          },
          {
            id: "home2",
            message: "Do you enjoy living there",
            trigger: "home3",
          },
          {
            id: "home3",
            options: [
              { value: "yes", label: "Yes", trigger: "home4" },
              { value: "no", label: "No", trigger: "home4" },
            ],
          },
          {
            id: "home4",
            message: "Please explain your answer",
            trigger: "home5",
          },
          {
            id: "home5",
            user: true,
            trigger: "home6",
          },
          {
            id: "home6",
            message: "Are you thinking of moving?",
            trigger: "home7",
          },
          {
            id: "home7",
            options: [
              { value: "yes", label: "Yes", trigger: "home8" },
              { value: "no", label: "No", trigger: "home8" },
            ],
          },
          {
            id: "home8",
            message: "Please explain your answer",
            trigger: "home9",
          },
          {
            id: "home9",
            user: true,
            trigger: "10",
          },
          {
            id: "10",
            message:
              "Are you comfortable entering your National Insurance number?",
            trigger: "10options",
          },
          {
            id: "10options",
            options: [
              { value: "yes", label: "Yes", trigger: "10b" },
              { value: "no", label: "No", trigger: "11" },
            ],
          },
          {
            id: "10b",
            message: "Please enter your national insurance number",
            trigger: "10c",
          },
          {
            id: "10c",
            user: true,
            trigger: "11",
          },
          {
            id: "11",
            message: "Thank you for doing this",
            trigger: "end-message",
          },

          //   {
          //     id: "7",
          //     message: "Great! Check out your summary",
          //     trigger: "review",
          //   },
          //   {
          //     id: "review",
          //     component: <Review />,
          //     asMessage: true,
          //     trigger: "update",
          //   },
          //   {
          //     id: "update",
          //     message: "Would you like to update some field?",
          //     trigger: "update-question",
          //   },
          //   {
          //     id: "update-question",
          //     options: [
          //       { value: "yes", label: "Yes", trigger: "update-yes" },
          //       { value: "no", label: "No", trigger: "end-message" },
          //     ],
          //   },
          //   {
          //     id: "update-yes",
          //     message: "What field would you like to update?",
          //     trigger: "update-fields",
          //   },
          //   {
          //     id: "update-fields",
          //     options: [
          //       { value: "name", label: "Name", trigger: "update-name" },
          //       { value: "gender", label: "Gender", trigger: "update-gender" },
          //       { value: "age", label: "Age", trigger: "update-age" },
          //     ],
          //   },
          //   {
          //     id: "update-name",
          //     update: "name",
          //     trigger: "7",
          //   },
          //   {
          //     id: "update-gender",
          //     update: "gender",
          //     trigger: "7",
          //   },
          //   {
          //     id: "update-age",
          //     update: "age",
          //     trigger: "7",
          //   },
          {
            id: "end-message",
            message: "Thanks! Your data was submitted successfully!",
            end: true,
          },
        ]}
      />
    );
  }
}

export default SimpleForm;

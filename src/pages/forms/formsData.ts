// @ts-ignore
const CREATE_EVENT_INPUT: any = {
  first: [
    {
      id: 1,
      label: "Event Name",
      placeholder: "Your Event Name",
      textarea: false,
    },
    {
      id: 2,
      label: "Event Alias",
      placeholder: "Abbreviated Event Name",
      textarea: false,
    },
  ],
  second: [
    {
      id: 3,
      label: "Event Description",
      placeholder: "Description of your event",
      textarea: true,
    },
    {
      id: 4,
      label: "Event Summary",
      placeholder: "Try summarize your event in few lines",
      textarea: false,
    },
  ],
  third: [
    {
      id: 4,
      label: "Event Brand Page",
      placeholder: "A Website address for your event",
      type: "input",
    },
    {
      id: 5,
      label: "Event Support Email",
      placeholder: "Event Support Email Address",
      type: "input",
    },
  ],
}

const CreateAccountFields = [
  {
    id: 1,
    label: "Name",
    type: "text",
    placeholder: "Your Name",
  },
  {
    id: 2,
    label: "Email Address",
    type: "email",
    placeholder: "Your Email Addess",
  },
  {
    id: 3,
    label: "Password",
    type: "password",
    placeholder: "Your Preferred Password",
  },
  {
    id: 4,
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm Your Password",
  },
]

const TrackInputs = [
  {
    id: 1,
    label: "Track Name",
    type: "text",
    placeholder: "Track Name",
  },
  {
    id: 2,
    label: "Track Summary",
    type: "text",
    placeholder: "One line Summary of tracks",
  },
  {
    id: 3,
    label: "Track Duration",
    type: "text",
    placeholder: "Track Duration",
  },
]

const AuthInput = {
  Login: [
    {
      id: 1,
      label: "Email Address",
      type: "email",
      placeholder: "Your Email Address",
    },
    {
      id: 2,
      label: "Password",
      type: "password",
      placeholder: "Your Password",
    },
  ],
  CreateAccountStage1: [
    {
      id: 1,
      label: "Name",
      type: "text",
      placeholder: "Your Desired Username",
    },
    {
      id: 2,
      label: "Email Address",
      type: "text",
      placeholder: "Your Email Address",
    },
  ],
  CreateAccountStage2: [
    {
      id: 3,
      label: "Password",
      type: "password",
      placeholder: "Your Password",
    },
    {
      id: 4,
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm Your Password",
    },
  ],
}

export { TrackInputs, CREATE_EVENT_INPUT, CreateAccountFields, AuthInput }

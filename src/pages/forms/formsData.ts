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
      limit: 1500,
    },
    {
      id: 4,
      label: "Event Summary",
      placeholder: "Try summarize your event in few lines",
      textarea: false,
      limit: 150,
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
    placeholder: "* * * * * * * * * * * * * * * *",
  },
  {
    id: 4,
    label: "Confirm Password",
    type: "password",
    placeholder: "* * * * * * * * * * * * * * *",
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
      placeholder: "Firstname and Lastname",
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
  ChangePassword : [
    {
      id: 1,
      label: "Account Password",
      type: "password",
      textarea : false,
      placeholder: "New Account Password",
    },
    {
      id: 2,
      label: "Confirm  Password",
      type: "password",
      textarea : false,
      placeholder: "Confirm Account Password",
    },
  ]
}

const TeamInput = [
  {
    id: 1,
    label: "Team Name",
    type: "text",
    placeholder: "Team Name",
  },
  {
    id: 2,
    label: "Team Goal",
    type: "text",
    placeholder: "Description and Target goal of created team",
  },
]

const ADD_CART_INPUT = [
  {
    id: 1,
    label: "Item Name",
    type: "text",
    placeholder: "Product Item Name",
  },
  {
    id: 2,
    label: "Item Description",
    type: "text",
    placeholder: "One line description about this item",
  },
]

const CREATE_TASK = [
  {
    id: 1,
    label: "Task",
    type: "text",
    placeholder: "Description of the intended task",
  },
  {
    id: 2,
    label: "Task Category",
    type: "text",
    placeholder: "Task category. E.g Design for design related tasks",
  },
   {
    id: 3,
    label: "Task Priority",
    type: "text",
    placeholder: "Task Priority",
  },
]

const CREATE_TALK_DRAFT: any = [
  {
    id: 1,
    label: "Draft Title",
    placeholder: "This can be the title of a planned talk",
    type: "text",
    textarea: false,
  },
  {
    id: 3,
    label: "Draft Summary",
    placeholder: "A short summary of your entire draft.",
    textarea: true,
    type: "text",
  },
]

const CREATE_MEETUP_GROUP: any = [
  {
    id: 1,
    label: "Meetup Group Name",
    placeholder: "Meetup Group Name",
    type: "text",
    textarea: false,
  },
  {
    id: 2,
    label: "Meetup Group Alias",
    placeholder: "Meetup Group Alias",
    type: "text",
    textarea: false,
  },
  {
    id: 3,
    label: "Meetup Group Region",
    placeholder: "Meetup Region",
    type: "text",
    textarea: false,
  },
]

const TALK_GUIDELINE = [
  {
    id: 1,
    label: "Speakers Code of Conduct",
    placeholder:
      "Event Code of Conduct to be abided to by speakes during the event.",
    type: "text",
    textarea: true,
    limit: 1500,
  },
]

export const SPONSOR_INPUT: any = [
  {
    id: 1,
    label: "Sponsor Name",
    placeholder: "Sponsor Name",
    type: "text",
    textarea: false,
  },
  {
    id: 2,
    label: "Sponsor Email Address",
    placeholder: "Email Address",
    type: "text",
    textarea: false,
  },
]

export {
  TALK_GUIDELINE,
  CREATE_MEETUP_GROUP,
  CREATE_TALK_DRAFT,
  CREATE_TASK,
  TrackInputs,
  CREATE_EVENT_INPUT,
  CreateAccountFields,
  AuthInput,
  TeamInput,
  ADD_CART_INPUT,
}

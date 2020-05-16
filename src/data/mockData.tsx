// @ts-ignore
const Forms: any = {
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

export { Forms }

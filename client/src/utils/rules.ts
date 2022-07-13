export const general_rules = { required: "can't be empty" };

export const email_rules = {
  required: "can't be empty",
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'please enter a valid email address',
  },
};

export const number_rules = {
  required: "can't be empty",
  pattern: {
    value: /^[0-9]*$/,
    message: 'Wrong format',
  },
};

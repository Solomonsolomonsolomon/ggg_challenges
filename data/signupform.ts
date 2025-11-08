interface FormField {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  options?: string[]; 
  validate?: (value: string) => true | string;
}

interface SignupForm {
  title: string;
  subtitle: string;
  fields: FormField[];
}

const NIGERIAN_STATES = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
  "FCT",
];

const signupForms: Record<string, SignupForm> = {
  default: {
    title: "Sign Up for a Challenge",
    subtitle: "Choose a challenge above and fill in your details.",
    fields: [
      { name: "fullName", label: "Full Name", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phone", label: "Phone Number", type: "tel", required: true },
      {
        name: "state",
        label: "State of Registration",
        required: true,
        options: NIGERIAN_STATES,
      },
      {
        name: "twitterHandle",
        label: "Twitter/X Handle",
        placeholder: "@username",
        required: true,
      },
      {
        name: "twitterLink",
        label: "Twitter/X Repost Link",
        placeholder: "https://twitter.com/username/status/123",
        required: true,
        validate: (value) =>
          /^https?:\/\/(www\.)?(twitter|x)\.com\/.+\/status\/\d+$/.test(value)
            ? true
            : "Must be a valid Twitter/X status link",
      },
    ],
  },
  planks: {
    title: "Sign Up for the Planks Challenge",
    subtitle: "Prove your strength and repost the challenge tweet.",
    fields: [
      { name: "fullName", label: "Full Name", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phone", label: "Phone Number", type: "tel", required: true },
      {
        name: "state",
        label: "State of Registration",
        required: true,
        options: NIGERIAN_STATES,
      },
      {
        name: "twitterHandle",
        label: "Twitter/X Handle",
        placeholder: "@username",
        required: true,
      },
      {
        name: "twitterLink",
        label: "Twitter/X Repost Link",
        placeholder: "https://twitter.com/username/status/123",
        required: true,
        validate: (value) =>
          /^https?:\/\/(www\.)?(twitter|x)\.com\/.+\/status\/\d+(\?.*)?$/.test(
            value
          )
            ? true
            : "Must be a valid Twitter/X status link",
      },
    ],
  },
};

export default signupForms;

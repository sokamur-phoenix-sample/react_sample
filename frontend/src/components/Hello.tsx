interface HelloProps {
  name: string;
}

const Hello = ({ name }: HelloProps) => <h1>Hello, {name}!</h1>;

export default Hello;

interface HelloProps {
  name: string;
}

const Hello = ({ name }: HelloProps) => <h1 class="text-blue-600 dark:text-sky-400 underline">Hello, {name}!</h1>;

export default Hello;

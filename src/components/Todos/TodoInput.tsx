import * as React from 'react';
import { Todo } from './types';

interface Props {
  addTodo: (todo: Todo) => void
}

interface State {
  text: string
}

let id = 0;

export default class TodoInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  public render() {
    const { text } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button type="submit">添加</button>
      </form>
    );
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: e.target.value });
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = this.state.text.trim();

    if (!text) {
      return;
    }

    this.props.addTodo({ id: id++, text });

    this.setState({ text: '' });
  }
}

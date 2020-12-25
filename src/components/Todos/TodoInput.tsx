import * as React from 'react';
import { Todo } from '@/models';
import {withDefaultInputProps,DefaultProps } from '@/utils';
interface OwnProps {
  addTodo:(todo:Todo)=>void
}
type Props = OwnProps & DefaultProps;
interface State {
  text:string
}
let id=0;
class TodoInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  public render() {
    const { text } = this.state;
    const { setting } = this.props as (Props & Required<DefaultProps>);
    const { handleChange, handleSubmit } = this;
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" maxLength={setting.maxLength} placeholder={setting.placeholder}
               value={text} onChange={handleChange} />
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
    this.props.addTodo({id:id++,text});
    this.setState({ text: '' });
  }
}
export default withDefaultInputProps<Props>(TodoInput);

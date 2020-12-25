import * as React from 'react';
import { connect } from 'react-redux';
import { CombinedState, CounterState } from '@/store/reducers';
import * as actions from '@/store/actions/counter';
import { RouteComponentProps } from 'react-router-dom';
import { StaticContext } from 'react-router';

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof actions;
interface Params { name: string }
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LocationState { }
type Props = StateProps & DispatchProps & RouteComponentProps<Params, StaticContext, LocationState>;

class Counter extends React.Component<Props> {
  render() {
    const { name } = this.props.match.params;
    const { number } = this.props;

    return (
      <div>
        <p>名称:{name}</p>
        <p>{number}</p>
        <button onClick={()=>this.props.add()}>+</button>
        <button onClick={() => this.props.history.push({ pathname: '/todos', state: { todoName: 'todoName' } })}>/todos</button>
      </div>
    );
  }
}

const mapStateToProps = function (state: CombinedState): CounterState {
  return state.counter;
};

export default connect(mapStateToProps, actions)(Counter);

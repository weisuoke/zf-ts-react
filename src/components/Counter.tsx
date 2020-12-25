import * as React from 'react';
import { connect } from 'react-redux';
import { CombinedState, CounterState } from '@/store/reducers';
import * as actions from '@/store/actions/counter';

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof actions;
type Props = StateProps & DispatchProps;

class Counter extends React.Component<Props> {
  render() {
    const { number } = this.props;

    return (
      <div>
        <p>{number}</p>
        <button onClick={()=>this.props.add()}>+</button>
      </div>
    );
  }
}

const mapStateToProps = function (state: CombinedState): CounterState {
  return state.counter;
};

export default connect(mapStateToProps, actions)(Counter);
